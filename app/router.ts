import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.resources(
    'admin_products',
    '/api/v1/product',
    controller.api.v1.product,
  );
  router.resources('admin_users', '/api/v1/users', controller.api.v1.users);
};
