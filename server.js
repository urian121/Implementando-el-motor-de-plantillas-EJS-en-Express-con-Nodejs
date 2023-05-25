const express = require("express");
const app = express();
/**
 * Eel módulo "path" de Node.js, que proporciona utilidades para trabajar con rutas de archivos y directorios.
 */
const path = require("path");

const PORT = process.env.PORT || 3001;

/**
 * Middleware para servir archivos estáticos desde la carpeta "public"
 * public-resource funciona como un alias a la carpeta public
 */
app.use("/public-resource", express.static(path.join(__dirname, "public")));

// Establece EJS como el motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
/**
 * La función app.set() se utiliza para establecer la configuración de la aplicación, y en este caso,
 * se establece la opción "views" con la ruta completa a la carpeta de vistas.
 *  __dirname es una variable global de Node.js que representa la ruta del directorio actual del archivo en el que se encuentra.
 * path.join() combina las partes de la ruta (en este caso, __dirname y "views") para obtener la ruta completa a la carpeta de vistas.
 */

app.get("/", (req, res) => {
  res.render("index", {
    rutaActual: "/",
  });
});

const infoUsuario = {
  nombre: "urian",
  apellido: "Viera",
  profesion: "Developer",
  admin: true,
};

app.get("/informacion", (req, res) => {
  res.render("pages/informacion", {
    infoUsuario,
    rutaActual: "/informacion",
  });
});

let variable_lenguaje = "NodeJS";
app.get("/perfil", (req, res) => {
  res.render("pages/perfil", {
    rutaActual: "/perfil",
    variable_lenguaje,
  });
});

/**
 * Arrancando nuestro servidor con Express
 */
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
