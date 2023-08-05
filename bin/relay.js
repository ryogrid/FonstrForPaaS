import { createServer } from '../index.js'

const useHttps = false

console.log(argv)

const port = process.env.PORT || 3000;

createServer({ port, useHttps })
