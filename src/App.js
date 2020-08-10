import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ModalLogin from "./Components/Login/Login";
import ModalRegister from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import "./App.css";
import Detail from "./Components/Detail/Detail";
import PaymentDetail from "./Components/Payment/Payment";
import Profile from "./Components/Profile/Profile";
import AddTrip from "./Pages/AddTrip";
import Transaction from "./Pages/Transaction";
import IncomeTrip from "./Pages/IncomeTrip";
import ScrollToTop from "./Components/utils/ScrollToTop";

function App() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const showModalLogin = () => {
    setModalLogin(true);
  };

  const closeModalLogin = () => {
    setModalLogin(false);
  };

  const showModalRegister = () => {
    setModalRegister(true);
  };

  const closeModalRegister = () => {
    setModalRegister(false);
  };

  const handleLogin = () => {
    setLogin(true);
    setModalLogin(false);
  };

  return (
    <div className="App">
      <Router>
        <Header
          isLogin={isLogin}
          showModalLogin={showModalLogin}
          showModalRegister={showModalRegister}
        />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/payment/:id" component={PaymentDetail} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/transaction" component={Transaction} />
            <Route exact path="/addtrip" component={AddTrip} />
            <Route exact path="/incometrip" component={IncomeTrip} />
          </Switch>
        </ScrollToTop>
        {modalLogin && (
          <ModalLogin
            showModalLogin={showModalLogin}
            closeModalLogin={closeModalLogin}
            handleLogin={handleLogin}
          />
        )}
        {modalRegister && (
          <ModalRegister
            showModalRegister={showModalRegister}
            closeModalRegister={closeModalRegister}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
