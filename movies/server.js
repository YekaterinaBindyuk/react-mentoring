const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()
    
  server.get('*', (req, res) => {
    return handle(req, res, '/index')
  })
  server.get('/index', (req, res) => {
    const actualPage = '/index'
    const queryParams = { id: req.params.id } 
    app.render(req, res, actualPage)
})   
  server.listen(8081, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:8081')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})