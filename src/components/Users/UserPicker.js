import { users } from "../../static.json";

export default function UserPicker() {
  return (
    <select>
      {users.map((u, i) => (
        <option value={u.id}>{u.name}</option>
      ))}
    </select>
  );
}
