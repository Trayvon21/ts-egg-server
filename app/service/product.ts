import BaseService from './base';
import { Context } from 'egg';
export default class ProductService extends BaseService {
  constructor(app: Context) {
    super('Product', app);
  }
}
