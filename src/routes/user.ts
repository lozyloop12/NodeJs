import { getManager, getMongoRepository, getMongoManager } from "typeorm";
import { User } from "../entity/User";
const ObjectId = require('mongodb').ObjectId;

const routes = (app) => {
  app.get('/user', async function (req, res) {
    const manager = getManager()
    const users = await manager.find(User);
    console.log(users)
    res.send(users);
  })

  app.get(`/user/:id`, async function (req, res) {
    const id = req.params.id;
    const manager = getMongoRepository(User)
    const user = await manager.findOne({ _id: ObjectId(id) });
    console.log(user, id)
    res.send(user);
  })

  app.post('/user', async function (req, res) {
    const manager = getMongoManager();
    const newUser = await manager.save(User, req.body)
    res.send(newUser);
  })

  app.put('/user/:id', async function (req, res) {
    const id = req.params.id
    const body = req.body
    const manager = getMongoManager()
    const updateUser = await manager.findOneAndUpdate(User, { _id: ObjectId(id) }, { $set: body }, { returnOriginal: false })
    res.send(updateUser);
  })
}

export default routes;