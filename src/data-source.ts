import "reflect-metadata"
import { DataSource } from "typeorm"
import config from "./config"

export const AppDataSource = new DataSource({
    type: "postgres",
    url: config.url,
    ssl: process.env.NODE_ENV === "production" ?
    { rejectUnauthorized: false}
    : false,
    synchronize: false,
    logging: true,
    entities: process.env.NODE_ENV === "production"
        ? ["dist/src/entities/*.js"]
        : ["src/entities/*.ts"],
    migrations: process.env.NODE_ENV === "production"
        ? ["dist/src/migrations/*.js"]
        : ["src/migrations/*.ts"],
  })

async function databaseInitialize () {
    try {
      await AppDataSource.initialize()
  
      console.log('Database connected')
    } catch (e: unknown) {
      console.error(e)
    }
  }
  
  export default databaseInitialize