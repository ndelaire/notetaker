const fs = require('fs');
const saveNote = require("./db/db.json")

module.exports = function(app) {
  app.get("/api/notes", function (req, res) {
    return res.json(saveNote)
  })

  app.post("/api/notes", function (req, res) {
    const newNote = req.body;

  })

  app.delete("api/notes/:id", function (req, res) {
    
  });
}

