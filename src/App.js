import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import AddReview from "./Components/DasahBoard/AddReview";
import Dashboard from "./Components/DasahBoard/Dashboard";
import MakeUser from "./Components/DasahBoard/MakeUser";
import MyOrder from "./Components/DasahBoard/MyOrder";
import MyProfile from "./Components/DasahBoard/MyProfile";
import Users from "./Components/DasahBoard/Users";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NoteFound from "./Components/NotFound/NotFound";

import Part from "./Components/Part/Part";
import PortPolio from "./Components/Portfolio/PortPolio";
import Purchase from "./Components/Purchase/Purchase";
import Register from "./Components/Register/Register";
import RequireAuth from "./Components/RequiredAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/part" element={<Part></Part>} />
        <Route
          path="/product/:partID"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
         
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/portfolio" element={<PortPolio></PortPolio>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NoteFound></NoteFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
