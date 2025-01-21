import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Registrazione } from "./routes/registrazione/Registrazione";
import { Users } from "./routes/users/Users";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index element={<Users />} />
        <Route path="registrazione" element={<Registrazione />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
