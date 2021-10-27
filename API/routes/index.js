const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function(){
  // Add new patients via Post
  router.post('/pacientes',
    pacienteController.nuevoCliente
  )

  // get all patient records from DB
  router.get('/pacientes',
    pacienteController.obtenerPacientes
  );

  // Get a specific patient
  router.get('/pacientes/:id',
    pacienteController.obtenerPaciente
  );

  // update a record with a specific ID
  router.put('/pacientes/:id',
    pacienteController.actualizarPaciente
  );

  // Remove a patient by ID
  router.delete('/pacientes/:id',
    pacienteController.eliminarPaciente
  );

  return router;
};

