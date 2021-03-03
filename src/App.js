import './App.css';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import Home from './pages/Home'
import Clientes from './pages/Clientes'
import Vehiculos from './pages/Vehiculos'
import Remisiones from './pages/Remisiones'
import Facturas from './pages/Facturas'
import Historiales from './pages/Historiales'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Clientes" component={Clientes}/>
          <Route path="/Vehiculos" component={Vehiculos}/>
          <Route path="/Remisiones" component={Remisiones}/>
          <Route path="/Facturas" component={Facturas}/>
          <Route path="/Historiales" component={Historiales}/>
        </Switch>
    </Router>
    </>
  );
}

export default App;
