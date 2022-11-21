import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
// import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListExpensesComponent from "./components/ListExpensesComponent";
import AddExpenseComponent from "./components/AddExpenseComponent";
import UpdateExpenseComponent from "./components/UpdateExpenseComponent";
import ViewExpenseComponent from "./components/ViewExpenseComponent";
import Register from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
//import GenerateReportComponent from "./components/GenerateReportComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/register" component ={Register}></Route>
            <Route path="/login" component ={Login}></Route>
            <Route path="/" exact component ={Home}></Route>
            <Route path="/expenses" component ={ListExpensesComponent}></Route>
            <Route path="/add-expenses/" component ={AddExpenseComponent}></Route>
            <Route path="/update-expenses/:id" component ={UpdateExpenseComponent}></Route>
            <Route path="/view-expenses/:id" component ={ViewExpenseComponent}></Route>
            {/* <Route path="/generate-report/" component ={GenerateReportComponent}></Route> */}
          </Switch>
        </div>
        {/* <FooterComponent /> */}
      </Router>
    </div>
  );
}

export default App;
