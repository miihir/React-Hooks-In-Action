import { users } from "../../static.json";

export default function UserPicker() {
  return (
    <select>
      {users.map((u, i) => (
        <option key={i} value={u.id}>
          {u.name}
        </option>
      ))}
    </select>
  );
}
