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
            ? ["dist/entities/*.js"]
            : ["src/entities/*.ts"],
        migrations: process.env.NODE_ENV === "production"
            ? ["dist/migrations/*.js"]
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