const express = require('express')
const app = express()
const port = 3000
const path = require('path');

let serverPath = undefined;
if (process.argv[0].indexOf('node') > -1) {
  serverPath         = process.cwd();
} else {
  serverPath         = path.dirname(process.execPath);
}

app.use('/source', express.static(path.join(serverPath, '/src/client/source')))

app.get('/', (req, res) => {
  res.sendFile(path.join(serverPath, '/src/client/player.html'))
})

app.listen(port, () => {
  console.log(`vic-vac-voe - http://127.0.0.1:${port}`)
})