import { useEffect, useState } from "react";
import "./users.css";
import { User } from "../../../../api-types/user";


/* PRIMA E TERZA TASK */
export const Users: React.FC = () => {
  const [users, setUsers] = useState([]);


  return (
    <div className="users-container">
            <button onClick={() => window.location.href = "/registrazione"}>Registrazione</button>
            <h3>Elenco Utenti</h3>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User, index: number) => (
                        <tr key={index}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => elimina(/*???*/)}>Elimina utente</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
};
