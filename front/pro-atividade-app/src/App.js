import Atividade from "./pages/atividades/Atividade";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cliente from './pages/clientes/Cliente';
import Dashboard from './pages/Dashboard/Dashboard';
import ClienteForm from './pages/clientes/ClienteForm';
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/Atividades/*" element={<Atividade/>} />
      <Route path="/Clientes/*" element={<Cliente/>} />
      <Route path="/Clientes/Detalhe/" element={<ClienteForm/>} />
      <Route path="/Clientes/Detalhe/:id?" element={<ClienteForm/>} />
      <Route element={<PageNotFound/>} />
    </Routes>
  );
}

