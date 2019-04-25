import { MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey } from 'typeorm'

export class User1556173121620 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true
        },
        {
          name: 'userHandle',
          type: 'varchar',
        },
        {
          name: 'username',
          type: 'varchar',
        },
        {
          name: 'firstName',
          type: 'varchar',
        },
        {
          name: 'lastName',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'isActive',
          type: 'bool',
        },
        {
          name: 'photoUrl',
          type: 'varchar',
        },
        {
          name: 'dateCreated',
          type: 'date',
        },
        {
          name: 'dateModified',
          type: 'date',
        },
        {
          name: 'dateClosed',
          type: 'date',
        }
      ]
    }), true)
    await queryRunner.createIndex('users', new TableIndex({
      name: 'IDX_USER_HANDLE',
      columnNames: ['userHandle']
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex('users', 'IDX_USER_HANDLE')
    await queryRunner.dropTable('users')
  }

}
