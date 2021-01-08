const fs = require('fs');
const notes = require("./db/db.json")

module.exports = function(app) {
  app.get("/api/notes", function (req, res) {
    return res.json(notes)
  })

  app.post("/api/notes", function (req, res) {
    const newNote = req.body;

// Missing something -- does this need a push? An if statement? I think something else is still missing. And does the below fs work? 

fs.writeFile(__dirname + "./db/db.json", function(err, data) {
  if (err) throw err;

 console.log("Note added")
 res.send();
});
})

  app.delete("api/notes/:id", function (req, res) {

  });
}

