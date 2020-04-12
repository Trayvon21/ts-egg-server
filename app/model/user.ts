import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
      },
      github_id: {
        type: String,
        default: '',
      },
      email: {
        type: String,
        required: true,
      },
      nickname: {
        type: String,
        default: '',
      },
      phone: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: '1',
      },
      location: {
        type: String,
        default: '',
      },
      inroduce: {
        type: String,
        default: '',
      },
      avatar: {
        type: String,
        default: '',
      },
      img_url: {
        type: String,
        default: '',
      },
      last_login_time: {
        type: Date,
      },
      comments: {
        type: Object,
      },
    },
    {
      timestamps: true,
    },
  );
  return mongoose.model('User', userSchema);
};
