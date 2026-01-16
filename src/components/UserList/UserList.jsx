import Card from "../Card/Card";
import { users } from "../../datas";
function UserList() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 px-[50px]">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
export default UserList;
