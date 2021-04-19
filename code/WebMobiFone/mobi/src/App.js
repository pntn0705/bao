import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import TrangChu from "./components/TrangChu";
import GioiThieu from "./components/GioiThieu";
import ThietBi from "./components/ThietBi";
import TinTuc from "./components/TinTuc";
import TuyenDung from "./components/TuyenDung";
import Project from "./components/Project";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={TrangChu} path='/' exact />
        <Route component={GioiThieu} path='/gioithieu' />
        <Route component={ThietBi} path='/thietbi' />
        <Route component={TinTuc} path='/tintuc' />
        <Route component={TuyenDung} path='/tuyendung' />
        <Route component={Project} path='/project' />
        <Route component={Post} path='/post' />
        <Route component={SinglePost} path='/post/:slug' />
        
      </Switch>
    </BrowserRouter>
  )
}

export default App;
