import { Link, Route, Routes } from "react-router-dom";
import { Home, Inspect, Report } from "./pages";



function App() {
  return (
    <>
      <div className="z-10 w-full fixed top-0 h-12 text-center  shadow-md bg-white">
        <Link to={'/'}>
        <h2 className="text-lg leading-[3rem] font-semibold text-violet-500">
          ReclamoWeb
        </h2>
        </Link>
      </div>
      <div className="mt-12 bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inspection" element={<Inspect />} />
          <Route path="/complaint" element={<Report />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
