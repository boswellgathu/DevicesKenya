import {MigrationInterface, QueryRunner} from 'typeorm'

export class User1557434587724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "users" (
          "id" SERIAL NOT NULL,
          "userHandle" uuid NOT NULL DEFAULT uuid_generate_v4(),
          "username" character varying NOT NULL,
          "firstName" character varying NOT NULL,
          "lastName" character varying NOT NULL,
          "email" character varying NOT NULL,
          "password" character varying NOT NULL,
          "isActive" boolean NOT NULL,
          "photoUrl" character varying NOT NULL,
          "dateCreated" date NOT NULL,
          "dateModified" date NOT NULL,
          "dateClosed" date NOT NULL,
          CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
