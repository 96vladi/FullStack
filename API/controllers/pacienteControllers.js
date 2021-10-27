const Paciente = require('../models/Paciente');
// when a new customer created
exports.nuevoCliente = async (req, res, next) => {
  // All: insert to database
  // create
  const paciente = new Paciente(req.body) 
  try {
    await paciente.save();
    res.json({ mensaje : 'El cliente se agrego correctamente' });
  } catch (error) {
    console.log(error);
    next();
  }
};

// get all patient
exports.obtenerPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Get a specific patient by ID
exports.obtenerPaciente = async (req,res,next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Update a record by its ID
exports.actualizarPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findOneAndUpdate({_id : req.params.id},
      req.body, {
        new : true
      });
      res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

//Remove a patient by ID
exports.eliminarPaciente = async (req, res, next) => {
  try {
    await Paciente.findOneAndRemove({_id : req.params.id});
    res.json("El paciente fue eliminado");
  } catch (error) {
    console.log(error);
    next();
  }
};
