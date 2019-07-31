import { getConnection, getManager } from 'typeorm'
import { User } from '../../db/entities/user.entity'
import express, { Request, Response } from 'express'

// async function createUser(req: Request, res: Response) {
//     return await getConnection()
//     .createQueryBuilder()
//     .insert()
//     .into(User)
//     .values([{
//         username: 'banger_hanrder', firstName: 'banger', lastName: 'harder',
//         email: 'harder@info.com', password: 'Mathogothogo', isActive: true,
//         photoUrl: 'rea-lly.com', dateCreated: '2019-04-28 20:31:07.13319', dateModified: '2019-05-05 20:31:07.13319',
//         dateClosed: '2019-05-05 20:31:07.13319'
//     }])
//     .execute()
// }
async function createUser(req: Request, res: Response) {
  const userRepo = getManager().getRepository(User)
  const user = userRepo.create({
    username: 'banger_hanrder', firstName: 'banger', lastName: 'harder',
    email: 'harder@info.com', password: 'Mathogothogo', isActive: true,
    photoUrl: 'rea-lly.com'
  })
  await userRepo.save(user)
  res.send(user)
}

export default createUser
