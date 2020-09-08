import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ModalLogin from "./Components/Login/Login";
import ModalRegister from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import "./App.css";
import Detail from "./Components/Detail/Detail";
import PaymentDetail from "./Components/Payment/Payment";
import ListPayment from "./Components/Payment/ListPayment";
import Profile from "./Components/Profile/Profile";
import AddTrip from "./Pages/AddTrip";
import Transaction from "./Pages/Transaction";
import IncomeTrip from "./Pages/IncomeTrip";
import ScrollToTop from "./Components/utils/ScrollToTop";
import { setAuthToken } from "./Components/Config/api";
import PrivateRouteAdmin from "./Components/PrivateRoute/PrivateRouteAdmin";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

  const showModalLogin = () => {
    setModalLogin(!modalLogin);
    setModalRegister(false);
  };

  const showModalRegister = () => {
    setModalRegister(!modalRegister);
    setModalLogin(false);
  };

  return (
    <div className="App">
      <Router>
        <Header
          showModalLogin={showModalLogin}
          showModalRegister={showModalRegister}
        />{" "}
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />{" "}
            <Route
              showModalLogin={showModalLogin}
              exact
              path="/detail/:id"
              component={Detail}
            />{" "}
            <Route exact path="/payment/:id" component={PaymentDetail} />{" "}
            <Route exact path="/list-payment" component={ListPayment} />{" "}
            <Route exact path="/profile" component={Profile} />{" "}
            <PrivateRouteAdmin
              exact
              path="/transaction"
              component={Transaction}
            />{" "}
            <PrivateRouteAdmin exact path="/addtrip" component={AddTrip} />{" "}
            <PrivateRouteAdmin
              exact
              path="/incometrip"
              component={IncomeTrip}
            />{" "}
          </Switch>{" "}
        </ScrollToTop>{" "}
        {modalLogin && (
          <ModalLogin
            showModalLogin={showModalLogin}
            showModalRegister={showModalRegister}
            modalLogin={modalLogin}
          />
        )}{" "}
        {modalRegister && (
          <ModalRegister
            showModalLogin={showModalLogin}
            showModalRegister={showModalRegister}
            modalRegister={modalRegister}
          />
        )}{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
