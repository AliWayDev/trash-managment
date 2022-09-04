import { boards } from "../mock/Boards";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const logOut = () => {
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  let dashboardBorads = boards.map((board) => (
    <div
      style={{ display: "flex", borderBottom: "2px solid black" }}
      key={board._id}
    >
      <h1>{board._id}</h1>
      <h1>{board.title}</h1>
    </div>
  ));

  return (
    <div>
      <button onClick={logOut}>LogOut</button>
      {dashboardBorads}
    </div>
  );
};
