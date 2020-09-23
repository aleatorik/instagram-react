import React from "react";
import "../../Pages/Common.scss";
import "./Login.scss";

class Login extends React.Component {
  goToMain = () => {
    /*
    if(response.message === "valid user") {
      this.props.history.push('/signup');
    } else {
      alert("너 우리 회원 아님. 가입 먼저 해주세요")
    }
  }
    */
    this.props.history.push("/main");
  };

  render() {
    return (
      <section className="login">
        {/* <div class="btn signup-btn" onClick={this.goToMain}> */}
        <div className="login__image">
          <img
            alt="logo"
            className="logo-img"
            src={require("../../images/logo_text.png")}
          />
        </div>
        <div className="login__main">
          <div className="login__main__idPw">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="login__idPw--id"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="login__idPw--pw"
            />
          </div>
          <button type="button" className="login__btn--blue">
            로그인
          </button>
        </div>
        <div className="login__footer">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
        {/* </div> */}
      </section>
    );
  }
}

export default Login;

/*
<Link 태그 활용>
import { Routes } from 'react-router-dom';

import React from 'react';
import { Link } from 'react-router-dom';
import '../Common.sass';
import './Login.sass';

class Login extends React.Component {
  render() {
    return (
      <section className="login">
        <Link to="/Main">로그인</Link>
        <div className="login__image">
          <img
            alt="logo"
            className="logo-img"
            src={require(../../../public/images/logo_text.png')}
          />
        </div>
        <div className="login__main">
          <div className="login__main__idPw">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="login__idPw--id"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="login__idPw--pw"
            />
          </div>
          <button type="button" className="login__btn--blue">
            로그인
          </button>
        </div>
        <div className="login__footer">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </section>
    );
  }
}

export default Login;

*/
