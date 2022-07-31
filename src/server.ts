import 'dotenv/config'
import 'reflect-metadata'
import express from 'express'
// import swaggerUI from "swagger-ui-express"

// import swaggerFile from "./swagger.json"
import databaseInitialize from './data-source'
import routes from './routes'
// import startRoutes from './src/routers'

export const app: express.Application = express()

const PORT = process.env.PORT || 3000

databaseInitialize()

app.use(express.json())
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})