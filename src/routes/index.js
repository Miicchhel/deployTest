import express from "express";
import livrosRoutes from "./livrosRoutes.js"

const routes = (app) => {
  app.route('/').get((_req, res) => res.status(200).send({ titulo: "Curso de Node" }));

  app.use(
    express.json(),
    livrosRoutes,
  )
}

export default routes;