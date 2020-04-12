import { Context } from 'egg';
import BaseController from './base';

export default class UsersController extends BaseController {
  constructor(app: Context) {
    super('users', app);
  }
}
