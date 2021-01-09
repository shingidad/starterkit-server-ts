import express from 'express'
import { calc } from '~/common'
import path from 'path'
const app = express()

const PORT = parseInt(process.env.PORT || '3000', 10)

app.use(express.static(path.join(__dirname, 'public')))

console.log('calc', calc(2, 2))

app.get('/', (req, res) => {
  console.log('asdasd')
  res.json({ code: 200 })
})
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
