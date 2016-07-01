const log = console.log
const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const reactQuicklyPath = path.join('node_modules', 'react-quickly')
const serveIndex = require('serve-index')

app.use(express.static(reactQuicklyPath))
app.use(serveIndex(reactQuicklyPath, {icons: true, filter: (fileName, index, files, dir)=>{
  // if (fileName == 'package.json') return false
  return true
}}))

app.listen(3000)