// const models = require('./models/models');
import { models } from '../models/models';

export const controllers = {
  get: (req: string, res: any) => {
    models.get((err: unknown, data: any) => {
      if (err) {
        console.log('error in controllers GET', err)
        res.status(400).send();
      } else {
        console.log('success in controllers GET')
        res.status(200).send(data);
      }
    })
  },
}
