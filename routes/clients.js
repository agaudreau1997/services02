const express = require("express");
const router = express.Router();
const Clients = require("../modeles/clients");
router.use(express.json());

router.get("/", (requete, reponse) => {
    //requete a mongodb pour chercher les clients
    Clients.getClients((err, clients) => {
        if (err) throw err;
        reponse.json(clients);
    }, 25);
});

router.get("/:idClient", (requete, reponse) => {
    //requete a mongodb pour chercher un seul client
    Clients.getClientById(requete.params.idClient, (err, clients) => {
        if (err) throw err;
        reponse.json(clients);
    });
});

router.post("/", (requete, reponse) => {
    //requete pour ajouter un client
    console.log(requete.body);
    let client = requete.body;
    Clients.ajouterClient(client, (err, client) => {
        if (err) throw err;
        reponse.json(client);
    })
});

router.delete("/:idClient", (requete, reponse) => {
    console.log("sup");
    //requete a mongodb pour supprimer un seul client
    Clients.deleteClient(requete.params.idClient, (err, clients) => {
        if (err) throw err;
        reponse.json(clients);
    });
});

router.put("/:idClient", (requete, reponse) => {
    //console.log("sup")
    //requete a mongodb pour modifier un client
    let client = requete.body;
    Clients.updateClient(requete.params.idClient, client, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

router.patch("/:idClient", (requete, reponse) => {
    //console.log("sup")
    //requete a mongodb pour modifier un client
    let client = requete.body;
    Clients.updateClient(requete.params.idClient, client, (err, msg) => {
        if (err) throw err;
        reponse.json(msg);
    });
});

module.exports = router;