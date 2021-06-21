import { useState, Fragment } from "react";
import UserDetails from "./UserDetails";
import UsersList from "./UsersList";

export default function UsersView() {
  const [user, setUser] = useState();

  return (
    <Fragment>
      <UsersList user={user} setUser={setUser} />
      <UserDetails user={user} />
    </Fragment>
  );
}
