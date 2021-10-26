const express = require("express");
const router = express.Router();
const Livres = require("../modeles/livres");
router.use(express.json());

router.get("/", (requete, reponse) => {
    Livres.getLivres((err, livres) => {
        if (err) throw err;
        reponse.json(livres);
    }, 25)
})

router.get("/titre/:titre", (requete, reponse) => {
    //cherche un livre par titre
    Livres.getLivreByTitre(requete.params.titre, (err, livres) => {
        if (err) throw err;
        reponse.json(livres);
    });
});

router.get("/:idLivre", (requete, reponse) => {
    //requete a mongodb pour chercher un seul livre
    Livres.getLivreById(requete.params.idLivre, (err, livres) => {
        if (err) throw err;
        reponse.json(livres);
    });
});

router.post("/", (requete, reponse) => {
    //requete pour ajouter un livre
    let livre = requete.body;
    Livres.ajouterLivre(livre, (err, livre) => {
        if (err) throw err;
        reponse.json(livre);
    })
});

router.delete("/:idLivre", (requete, reponse) => {
    //requete a mongodb pour supprimer un seul livre
    Livres.deleteLivre(requete.params.idLivre, (err, livres) => {
        if (err) throw err;
        reponse.json(livres);
    });
});

router.put("/:idLivre", (requete, reponse) => {
    //requete a mongodb pour modifier un livre
    let livre = requete.body;
    Livres.updateLivre(requete.params.idLivre, livre, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

router.patch("/:idLivre", (requete, reponse) => {
    //requete a mongodb pour modifier un livre
    let livre = requete.body;
    Livres.updateLivre(requete.params.idLivre, livre, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

module.exports = router;