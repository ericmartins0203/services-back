import { MigrationInterface, QueryRunner } from "typeorm"

export class initialMigration1659288360530 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE IF NOT EXISTS "user" (
            "id" BIGSERIAL PRIMARY KEY NOT NULL,
            "createDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updateDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "name" VARCHAR(255) NOT NULL,
            "cpf" VARCHAR(255) NOT NULL UNIQUE,
            "alias" VARCHAR(255),
            "gender" VARCHAR(255),
            "phone" VARCHAR(255),
            "address" VARCHAR(255),
            "comments" VARCHAR(255),
            "profilePicture" VARCHAR(255)
            )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
