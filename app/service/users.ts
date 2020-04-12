import BaseService from './base';
import { Context } from 'egg';
export default class UsersService extends BaseService {
  constructor(app: Context) {
    super('User', app);
  }
}
