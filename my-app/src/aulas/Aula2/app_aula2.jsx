import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App_2.css";
import Eventos from "./componentes/cards";
import FormularioEventos from "./componentes/formulario";
import Menu from "./componentes/menu";
import PaginaInicial from "./componentes/paginaInicial"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<PaginaInicial />}></Route>
          <Route path="/cadastrar" element={<FormularioEventos />}></Route>
          <Route path="/eventos" element={<Eventos />}></Route>
          <Route path="/comprar" ></Route>
        </Route>
      </Routes>
    </BrowserRouter> 


  );
}

export default App;
