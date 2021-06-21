import { useState, useEffect } from "react";
import Spinner from "../UI/Spinner";
import getData from "../../utils/api";

export default function UsersList({ user, setUser }) {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getData("http://localhost:3001/users").then((data) => {
      setUsers(data);
      setUser(data[0]);
    });
  }, [setUser]);

  if (users === null) {
    return (
      <p>
        <Spinner /> Loading bookables...
      </p>
    );
  }

  return (
    <div>
      <ul className='users items-list-nav'>
        {users.map((u, i) => (
          <li key={u.id} className={u === user ? "selected" : ""}>
            <button className='btn' onClick={() => setUser(users[i])}>
              {u.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
