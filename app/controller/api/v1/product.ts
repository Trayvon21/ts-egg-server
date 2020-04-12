import { Context } from 'egg';
import BaseController from './base';

export default class ProductsController extends BaseController {
  constructor(app: Context) {
    super('product', app);
  }
}
