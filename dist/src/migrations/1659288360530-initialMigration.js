"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialMigration1659288360530 = void 0;
class initialMigration1659288360530 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE IF NOT EXISTS "user" (
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
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "user"`);
        });
    }
}
exports.initialMigration1659288360530 = initialMigration1659288360530;
