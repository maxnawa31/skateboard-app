const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const db = require('./db');

app.use(bodyParser.json());

app.post('/people', async function(req, res, next) {
  try {
    const result = await db.query(
      "INSERT INTO people(name,stance,image_url,sponsors,videos,description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [req.body.name, req.body.stance, req.body.image_url, req.body.sponsors, req.body.videos, req.body.description]
    )
  } catch(e) {

  }
})