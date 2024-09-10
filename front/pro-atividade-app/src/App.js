import Atividade from "./pages/atividades/Atividade";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Cliente from './pages/clientes/Cliente';
import Dashboard from './pages/Dashboard/Dashboard';
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/Atividades/Lista" component={Atividade} />
      <Route path="/Clientes/Lista" component={Cliente} />
      <Route path="/Clientes/Detalhe/:id?" component={ClienteForm} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

