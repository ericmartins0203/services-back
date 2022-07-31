import "reflect-metadata"
import { DataSource } from "typeorm"

require('dotenv').config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "abcbanana",
    database: "services",
    synchronize: false,
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
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