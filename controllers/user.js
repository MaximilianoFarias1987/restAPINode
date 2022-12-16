const {response, request} = require('express')

const userGet = (req = request, res = response) => {
    //extraer queryparams
    const query = req.query;


    res.json({
        status: 200,
        msg: 'get API - controlador',
        query
    })
  }

  const userPut = (req, res) => {

    const id = req.params.id;

    res.json({
        status: 200,
        msg: 'put API - controlador',
        id
    })
  }

  const userPost = (req, res) => {
    const body = req.body;

    res.status(201).json({
        status: 201,
        msg: 'post API - controlador',
        body
    })
  }

  const userDelete = (req, res) => {
    res.json({
        status: 200,
        msg: 'delete API - controlador'
    })
  }


  module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
  }