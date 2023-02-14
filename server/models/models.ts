const db = require('./db/db');

export const models = {
  get: (callback: any) => {
    db.getData()
      .then((res: any) => {
        console.log('sucess inside models GET')
        callback(null, res)
      })
      .catch((err: unknown) => {
        console.log('error inside models GET')
        callback(err)
      })
  },
}