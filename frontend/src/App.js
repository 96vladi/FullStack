import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clienteAxios from './config/axios';

//Components
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  // State the app
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true);

  useEffect( () => {
    if (consultar) {
      const consultarAPI = () => {
        clienteAxios.get('/pacientes')
          .then(respuesta => {
            // put the result in state
            guardarCitas(respuesta.data);
            // disable query
            guardarConsultar(false);
          })
          .catch(error => {
            console.log(error);
          })
      };
      consultarAPI();
    }
  },  [consultar]);

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
          component={ () => <NuevaCita guardarConsultar={guardarConsultar}/>}
        />
        <Route 
          exact 
          path="/cita/:id"
          // component={Cita}
          // render is to be able to pass props
          render={(props) => {
            const cita = citas.filter(cita => cita._id === props.match.params.id)
            return(
              <Cita 
                cita = {cita[0]}
                guardarConsultar = {guardarConsultar}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
