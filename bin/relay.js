import { createServer } from '../index.js'

const useHttps = false

const port = process.env.PORT || 3000;

createServer({ port, useHttps })
