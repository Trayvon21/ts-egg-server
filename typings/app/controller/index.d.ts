// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportApiV1Base from '../../../app/controller/api/v1/base';
import ExportApiV1Product from '../../../app/controller/api/v1/product';
import ExportApiV1Users from '../../../app/controller/api/v1/users';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    api: {
      v1: {
        base: ExportApiV1Base;
        product: ExportApiV1Product;
        users: ExportApiV1Users;
      }
    }
  }
}
