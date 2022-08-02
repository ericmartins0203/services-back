import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1659461039448 implements MigrationInterface {
    name = 'createTable1659461039448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "createDate" TIMESTAMP NOT NULL DEFAULT now(), "updateDate" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "cpf" character varying NOT NULL, "alias" character varying, "gender" character varying, "phone" character varying, "address" character varying, "comments" character varying, "profilePicture" character varying, CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE ("cpf"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
