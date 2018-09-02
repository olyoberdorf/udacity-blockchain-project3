const express = require('express');
var bodyParser = require('body-parser');

var simplechain = require('./simplechain.js');

var blockchain = simplechain.blockchain;
const app = express();

function handle_err(err, res) {
  if (err.type === "NotFoundError") {
    res.status(404).send('Block not found');
  } else {
    console.log(err)
    res.status(501).send('Unknown error reading block');
  }
}

async function get_block(req, res) {
  let blockheight = req.params.blockheight;
  await blockchain.getBlock(blockheight).then((block) => res.send(block))
    .catch((err) => handle_err(err, res));
}

async function post_block(req, res) {
  console.log(req.body);
  let block = req.body;
  console.log(block);
  block = await blockchain.addBlock(block)
    .then(data => res.send(data))
    .catch((err) => res.status(501).send('Unknown error saving block'))
}

app.use(bodyParser.json());
app.use('/', express.static('static/'))
app.get('/block/:blockheight', get_block);
app.post('/block/', post_block);

app.listen(8000, () => console.log('listening on port 8000'));
