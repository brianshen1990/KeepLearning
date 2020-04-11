import express from 'express'
import path from 'path'
import template from './src/template.js'
import server from './src/server.js'

import { 
  JobTypeFilter 
} from './src/syncStore/actions.js' 
const { SHOW_ALL } = JobTypeFilter 


const app = express()

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.listen(process.env.PORT || 3000);

let initialState = {
  jobFilter: SHOW_ALL,
  jobTypes: [{ name: "serverInit", type: "SSR" }]
}

// server rendered home page
app.get('/', (req, res) => {
  const { preloadedState, content}  = server(initialState)
  const response = template("Server Rendered Page", preloadedState, content)
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response);
});

// Pure client side rendered page
app.get('/client', (req, res) => {
  let response = template('Client Side Rendered page')
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response)
});
