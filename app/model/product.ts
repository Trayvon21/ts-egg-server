import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const productSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  );
  return mongoose.model('Product', productSchema);
};
