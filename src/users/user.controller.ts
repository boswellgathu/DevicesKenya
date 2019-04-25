import { getConnection } from 'typeorm'
import { User } from '../../db/entities/user.entity'

async function createUser(req: Request, res: Response) {
    await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([{
        username: 'banger_hanrder', firstName: 'banger', lastName: 'harder',
        email: 'harder@info.com', password: 'Mathogothogo'
    }
    ])
    .execute();
}
