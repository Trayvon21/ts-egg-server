import { Controller, Context } from 'egg';

export default class BaseController extends Controller {
  private serviceName: string;
  constructor(serviceName: string, app: Context) {
    super(app);
    this.serviceName = serviceName;
  }
  async index() {
    const { ctx } = this;
    const result = await ctx.service[this.serviceName].list({});
    ctx.body = result;
  }
  async show() {
    const { ctx } = this;
    const result = await ctx.service[this.serviceName].one(ctx.params.id);
    ctx.body = {
      code: 1,
      msg: '获取单条数据成功',
      data: result,
    };
  }
  async create() {
    const { ctx } = this;
    const result = await ctx.service[this.serviceName].save(ctx.request.body);
    ctx.body = {
      code: 1,
      msg: '新增成功',
      data: result,
    };
  }
  async update() {
    const { ctx } = this;
    const result = await ctx.service[this.serviceName].update(
      ctx.params.id,
      ctx.request.body,
    );
    ctx.body = {
      code: 1,
      msg: '修改成功',
      id: ctx.params.id,
      data: result,
    };
  }
  async destroy() {
    const { ctx } = this;
    const result = await ctx.service[this.serviceName].delOne(ctx.params.id);
    ctx.body = {
      code: 1,
      msg: '删除成功',
      data: result,
    };
  }
}
