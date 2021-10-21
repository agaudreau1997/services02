const express = require("express");
const router = express.Router();
const Genres = require("../modeles/genres");
router.use(express.json());

router.get("/", (requete, reponse) => {
    //requete a mongodb pour chercher les genres
    Genres.getGenres((err, genres) => {
        if (err) throw err;
        reponse.json(genres);
    }, 25);
});

router.get("/:idGenre", (requete, reponse) => {
    //requete a mongodb pour chercher un seul genre
    Genres.getGenreById(requete.params.idGenre, (err, genres) => {
        if (err) throw err;
        reponse.json(genres);
    });
});

router.post("/", (requete, reponse) => {
    //requete pour ajouter un genre
    let genre = requete.body;
    Genres.ajouterGenre(genre, (err, genre) => {
        if (err) throw err;
        reponse.json(genre);
    })
});

router.delete("/:idGenre", (requete, reponse) => {
    console.log("sup");
    //requete a mongodb pour supprimer un seul genre
    Genres.deleteGenre(requete.params.idGenre, (err, genres) => {
        if (err) throw err;
        reponse.json(genres);
    });
});

router.put("/:idGenre", (requete, reponse) => {
    //console.log("sup")
    //requete a mongodb pour modifier un genre
    let genre = requete.body;
    Genres.updateGenre(requete.params.idGenre, genre, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

router.patch("/:idGenre", (requete, reponse) => {
    //console.log("sup")
    //requete a mongodb pour modifier un genre
    let genre = requete.body;
    Genres.updateGenre(requete.params.idGenre, genre, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

module.exports = router;