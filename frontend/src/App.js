import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clienteAxios from './config/axios';

//Components
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './Cita';

function App() {

  // State the app
  const [citas, guardarCitas] = useState([]);

  useEffect( () => {
    const consultarAPI = () => {
      clienteAxios.get('/pacientes')
        .then(respuesta => {
          // put the result in state
          guardarCitas(respuesta.data);
        })
        .catch(error => {
          console.log(error);
        })
    };
    consultarAPI();
  },  []);

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <Router>
      <Switch>
        <Route 
          exact 
          path="/"
          //Para poder pasar estados se debe usar esta sintaxis 
          component={() => <Pacientes citas={citas} />}
        />
        <Route 
          exact 
          path="/nueva"
          component={NuevaCita}
        />
        <Route 
          exact 
          path="/cita/:id"
          component={Cita}
        />
      </Switch>
    </Router>
  );
}

export default App;
