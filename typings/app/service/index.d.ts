// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportBase from '../../../app/service/base';
import ExportProduct from '../../../app/service/product';
import ExportUsers from '../../../app/service/users';

declare module 'egg' {
  interface IService {
    base: AutoInstanceType<typeof ExportBase>;
    product: AutoInstanceType<typeof ExportProduct>;
    users: AutoInstanceType<typeof ExportUsers>;
  }
}
