import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
import { generateUserId } from './app/modules/users/user.utils'
const app: Application = express()

app.use(cors())
// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// all routes of this application
app.use('/api/v1', router)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

const testId = async () => {
  const testId = await generateUserId()
  console.log(testId)
}
testId()

export default app
