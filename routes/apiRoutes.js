const router = require('express').Router();
const {createNewNote, updateDb} = require("../lib/notes");
const { v4: uuidv4 } = require('uuid');
const {notes} =require("../db/db.json");

//get notes in the data

router.get("/notes", (req, res) => {
    let results = notes;
    res.join(results);
});

router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, res);
    res.json(newNote);
});

router.delete("/notes/:id", (req, res) => {
    const params = req.params.id
    updateDb(params, notes);
    res.redirect('');
});

module.exports = router;