import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import GioiThieu from "./components/GioiThieu";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Doanh from "./components/Doanh";
import NavBar from "./components/NavBar";
import GiaiPhap from "./components/GiaiPhap";
import Giai from "./components/Giai";
import ThietBi from "./components/ThietBi";
import TuyenDung from "./components/TuyenDung";
import Footer from "./components/footer";
import DoanhNghiep from "./components/DoanhNghiep";
import 'react-slideshow-image/dist/styles.css'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={GioiThieu} path='/gioithieu' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={GiaiPhap} path='/giai/:slug' />
        <Route component={Giai} path='/giai' />
        <Route component={ThietBi} path='/thietbi' />
        <Route component={TuyenDung} path='/tuyendung' />
        <Route component={DoanhNghiep} path='/doanh/:slug' />
        <Route component={Doanh} path='/doanh' />
      </Switch>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
