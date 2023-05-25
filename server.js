const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

/**
 * Middleware para servir archivos estáticos desde la carpeta "public"
 * public-resource funciona como un alias a la carpeta public
 */
app.use("/public-resource", express.static(path.join(__dirname, "public")));

// Establece EJS como el motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", {
    user,
    sexo,
    rutaActual: "/",
  });
});

const user = {
  firstName: "Tim",
  lastName: "Cook",
  admin: true,
};

sexo = "Masculino";
app.get("/informacion", (req, res) => {
  res.render("pages/informacion", {
    user,
    rutaActual: "/informacion",
  });
});

app.get("/perfil", (req, res) => {
  res.render("pages/perfil", {
    user,
    rutaActual: "/perfil",
  });
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
