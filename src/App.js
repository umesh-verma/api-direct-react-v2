import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<Wrapper/>} >
        <Route path="/" element={<Home/>} />
      </Route>
    </Routes>
  );
}

function Wrapper () {
  return <Layout>
    <Outlet/>
  </Layout>
}

