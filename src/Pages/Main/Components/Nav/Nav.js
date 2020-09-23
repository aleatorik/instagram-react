import React, { Component } from "react";
import "../../../Common.scss";
import "./Nav.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <div class="nav__container">
            <ul class="logo">
              <li>
                <img alt="logo" src={require("../../../../images/logo.png")} />
              </li>
            </ul>
            <div class="search">
              <input type="text" placeholder="검색" class="search__bar" />
              <span class="search__glass">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
            <ul class="icons">
              <div class="icons__list">
                <li>
                  <img
                    alt="icon-home"
                    src="https://www.pinclipart.com/picdir/big/381-3811668_png-file-svg-instagram-home-icon-vector-clipart.png"
                  />
                </li>
                <li>
                  <button class="icons__list selected">
                    <img
                      alt="icon-message"
                      src="https://static.thenounproject.com/png/3084968-200.png"
                    />
                    <span class="icons__count">7</span>
                  </button>
                </li>
                <li>
                  <img
                    alt="icon-explore"
                    src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/32/519779-90_Compass-512.png"
                  />
                </li>
                <li>
                  <img
                    alt="icon-follow"
                    src={require("../../../../images/heart.png")}
                  />
                </li>
                <li class="icon__list--account">
                  <img
                    alt="author-image"
                    width="30px"
                    height="30px"
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/101538364_247245499886357_4704375428469489664_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=TvkBhD3pui0AX-b8VzK&oh=bc3c7672b23a7c36756721487d15677d&oe=5F94CA0B"
                  />
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
