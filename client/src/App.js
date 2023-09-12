import {Routes, Route} from "react-router-dom";
import Todos from "./componentes/Todos";
import Nuevo from "./componentes/Nuevo";

const App = () => {
  return(
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Todos />} />
        <Route path="/nuevo" element={<Nuevo />} />
      </Routes>
    </div>
  )
}

export default App;
