import React from "react";
import { Main, Content } from "./styles";
import logo from "../../assets/images/logo.svg";
import camera from "../../assets/images/camera.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <Main>
    <Content>
      <Link to="/">
        <img src={logo} alt="InstaRocket" />
      </Link>
      <Link to="/new">
        <img src={camera} alt="Enviar publicação" />
      </Link>
    </Content>
  </Main>
);

export default Header;
