// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportProduct from '../../../app/model/product';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Product: ReturnType<typeof ExportProduct>;
    User: ReturnType<typeof ExportUser>;
  }
}
