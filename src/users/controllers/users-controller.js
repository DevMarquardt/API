const express = require('express');
const routes = express.Router();
const Usuario = require('../models/user');
const User = require('../models/user');

function createRoute() {
    routes.post('/users', async (req, res) => {
        res.json(await Usuario.create(req.body))
    })
}

function findAllRoute() {
    routes.get('/users',async (req, res) => {
        res.json(await Usuario.findAll())
    })
}

function findByIdRoute() {
    routes.get('/users/:id',async (req, res) => {

        res.json([await Usuario.findOne({
            where:{
                id: req.params.id
            }
        })])
    })
}

function updateeRoute() {
    routes.put('/users/:id', async (req, res) => {
        await Usuario.update(req.body, {
            where:{
                id : req.params.id
            }
        })
        res.json(([req.body]))
        
    })
}

function removeRoute() {
    routes.delete('/users/:id', async (req, res) => {
        console.log(req.params)
        await Usuario.destroy({
            where: {
              id: req.params.id
            }
          });
          res.json([])
    })
}


function registerUserRoutes() {
    findAllRoute()
    createRoute()
    removeRoute()
    updateeRoute()
    findByIdRoute()
    return routes
}

module.exports = registerUserRoutes