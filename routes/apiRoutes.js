const fs = require('fs');
let notes = require("../db/db.json")
const shortid = require('shortid');

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    return res.json(notes)
  })

  app.post("/api/notes", function (req, res) {
    const newNote = {
      id: shortid.generate(),
      title: req.body.title,
      text: req.body.text
    }


    notes.push(newNote)
    fs.writeFile("./db/db.json", JSON.stringify(notes), function (err, data) {
      if (err) throw err;

      console.log("Note added")
      res.send(notes);
    });
  })


  app.delete("/api/notes/:id", function (req, res) {
    const paramsId = req.params.id;
    console.log(paramsId);
    notes = notes.filter(note => note.id !== paramsId);
    console.log(notes);
    fs.writeFile("./db/db.json", JSON.stringify(notes), function (err, data) {
      if (err) throw err;

      console.log("Note deleted")
      res.sendStatus(200)
    });


  });
}