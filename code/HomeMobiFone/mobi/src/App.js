import { BrowserRouter, Route, Switch} from "react-router-dom";
import TrangChu from "./components/TrangChu";
import GioiThieu from "./components/GioiThieu";
import ThietBi from "./components/ThietBi";
import TinTuc from "./components/TinTuc";
import TuyenDung from "./components/TuyenDung";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Switch>
       <Route component={TrangChu} path='trangchu' />
        <Route component={GioiThieu} path='gioithieu' />
        <Route component={ThietBi} path='thietbi' />
        <Route component={TinTuc} path='tintuc' />
        <Route component={TuyenDung} path='tuyendung' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
