import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ModalLogin from "./Components/Login/Login";
import ModalRegister from "./Components/Register/Register";
import Header from "./Components/Header/Header";
import "./App.css";
import Detail from "./Components/Detail/Detail";
import PaymentDetail from "./Components/Payment/Payment";

function App() {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

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

  return (
    <div className="App">
      <Router>
        <Header
          showModalLogin={showModalLogin}
          showModalRegister={showModalRegister}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/payment/:id" component={PaymentDetail} />
        </Switch>
        {modalLogin && (
          <ModalLogin
            showModalLogin={showModalLogin}
            closeModalLogin={closeModalLogin}
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
