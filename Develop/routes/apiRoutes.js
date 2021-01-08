const fs = require('fs');
const notes = require("./db/db.json")

module.exports = function(app) {
  app.get("/api/notes", function (req, res) {
    return res.json(notes)
  })

  app.post("/api/notes", function (req, res) {
    const newNote = req.body;

    console.log(newNote);

  })

  app.delete("api/notes/:id", function (req, res) {

  });
}

