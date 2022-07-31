import dotenv from 'dotenv'

dotenv.config()

const config = {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    url: process.env.DATABASE_URL,
}


export default config