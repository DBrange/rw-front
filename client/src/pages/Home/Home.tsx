import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex justify-center items-center">
      <Link to={"/complaint"}>
        <button className="p-5">Denunciar</button>
      </Link>
      <Link to={"/inspection"}>
        <button className="p-5">Inspeccionar</button>
      </Link>
    </div>
  );
}
export default Home;
