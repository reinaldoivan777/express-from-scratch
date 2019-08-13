import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/', (request, response) => {
    response.send('Hello Dunia')
})

app.get('/test', (request, response, next) => {
    response.send({msg: 'this is cors enabled for all origins'})
})

app.listen(process.env.PORT, () => {
    console.log(`This app is running on port ${process.env.PORT}`)
})