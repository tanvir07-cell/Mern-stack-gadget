import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import Order from "./components/Order/Order";
import Products from "./components/Products/Products";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import UploadProducts from "./components/UploadProducts/UploadProducts";

function App() {
  return (
    <div className="App light">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route
          path="/upload-products"
          element={
            <RequireAuth>
              <UploadProducts></UploadProducts>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/order"
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
