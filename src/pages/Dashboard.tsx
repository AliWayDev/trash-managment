import { boards } from "../mock/Boards";

export const Dashboard = () => {
  let dashboardBorads = boards.map((board) => (
    <div
      style={{ display: "flex", borderBottom: "2px solid black" }}
      key={board._id}
    >
      <h1>{board._id}</h1>
      <h1>{board.title}</h1>
    </div>
  ));

  return <div>{dashboardBorads}</div>;
};
