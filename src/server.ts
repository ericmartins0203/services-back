import 'dotenv/config'
import 'reflect-metadata'
import express from 'express'

import databaseInitialize from './data-source'
import routes from './routes'
import cors from 'cors'

export const app: express.Application = express()

const PORT = process.env.PORT || 3000

databaseInitialize()

app.use(express.json())
app.use(routes);
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
