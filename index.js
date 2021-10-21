const express = require("express");
const mongoose = require("mongoose");
const app = express();

const livresRouter = require("./routes/livres");
app.use("/api/livres", livresRouter);
const clientsRouter = require("./routes/clients");
app.use("/api/clients", clientsRouter);
const genresRouter = require("./routes/genres");
app.use("/api/genres", genresRouter);

app.use(express.json());

mongoose.connect("mongodb://localhost/labo01");

let db = mongoose.connection;
db.on("error", ()=>console.log("Erreur de bd: "+err));
db.once("open", () =>console.log("connection avec la bd réussi"));

app.get("/", (requete, reponse) =>{
    reponse.send("utilisez api/livres pour acceder a l'api livres <br>utilisez api/clients pour acceder a l'api clients <br>utilisez api/genres pour acceder a l'api genres <br>");
})
app.listen(8000, ()=> console.log("serveur démarré sur le port 8000"));

