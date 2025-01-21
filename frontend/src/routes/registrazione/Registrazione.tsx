import { useState } from "react";
import "./registrazione.css";
import { useNavigate } from "react-router";

export const Registrazione: React.FC = () => {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const formData = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
  };

  const submitform = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      fetch("http://localhost:3000/registrazione", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    
  };
  return (
    <div>
      <div className="form-register">
      <h1>Registrazione</h1>
        <form onSubmit={submitform}>
          <label htmlFor="first_name">
            Nome
            <input
              type="text"
              name="first_name"
              placeholder="Inserisci il tuo nome"
              value={first_name}
              onChange={(event) => setFirst_name(event.target.value)}
            >
            </input>
          </label>

          <label htmlFor="last_name">
            Cognome
            <input
              type="text"
              name="last_name"
              placeholder="Inserisci il tuo cognome"
              value={last_name}
              onChange={(event) => setLast_name(event.target.value)}
            >
            </input>
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              placeholder="Inserisci la tua email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            >
            </input>
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              placeholder="Inserisci la tua password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            >
            </input>
          </label>
          <button type="submit">Registrati</button>
        </form>
      </div>
    </div>
  );
};
