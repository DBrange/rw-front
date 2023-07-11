import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to={"/complaint"}>
        <button>Denunciar</button>
      </Link>
      <Link to={"/inspection"}>
        <button>Inspeccionar</button>
      </Link>
    </div>
  );
}
export default Home;
