import { Switch, Route, BrowserRouter } from "react-router-dom";
import Inicio from "./pages/Home/Home";
import Header from "./components/Header/Header";
import TodoCheck from "./pages/TodoCheck/TodoCheck";
import TodoAdd from "./pages/TodoAdd/TodoAdd";
import TodoEdit from "./pages/TodoEdit/TodoEdit";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
        <Route path="/" component={Inicio} exact={true} />
        <Route path="/add" component={TodoAdd} />
        <Route path="/view/:id" component={TodoCheck} exact={true} />
        <Route path="/edit/:id" component={TodoEdit} exact={true} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;