import { Service, Context } from 'egg';

export default class BaseService extends Service {
  private model: string;
  constructor(model: string, app: Context) {
    super(app);
    this.model = model;
  }

  /**
   * 分页方式获取数据
   * @param query   查询条件
   * @param page    页码
   * @param size    一页的数量
   */
  async list(query = {}, page = 1, size = 10) {
    const result = await this.app.model[this.model]
      .find(query)
      .limit(size)
      .skip((page - 1) * size)
      .sort({ _id: -1 });
    const totlaCount = await this.app.model[this.model].count(query);
    return {
      totlaCount,
      pages: Math.ceil(totlaCount / size),
      date: result,
    };
  }

  /**
   * 根据id查找
   * @param id 商品id
   */
  async one(id: string) {
    const data = await this.app.model[this.model].findById(id);
    return data;
  }
  /**
   * 根据id修改数据
   * @param id 商品id
   * @param data 商品数据
   */
  async update(id: string, data: any) {
    const result = await this.app.model[this.model].findByIdAndUpdate(
      id,
      data,
      {
        upsert: true,
      },
    );
    return result;
  }

  /**
   *保存单条数据
   * @param data 数据
   */
  async save(data: any) {
    const result = new this.app.model[this.model](data);
    await result.save();
    return result;
  }

  /**
   * 保存多条数据
   * @param models 多条数据
   */
  async saveMany(models: any[]) {
    const result = await this.app.model[this.model].insertMany(models);
    return result;
  }

  /**
   * 删除单条
   * @param id 商品id
   */
  async delOne(id: string) {
    const result = await this.app.model[this.model].findByIdAndRemove(id);
    return result;
  }

  /**
   * 删除多条数据
   * @param ids id数组
   */
  async delMany(ids: string[]) {
    const result = await this.app.model[this.model].remove({ $id: ids });
    return result;
  }
}
