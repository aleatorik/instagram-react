import React, { Component } from "react";
import "../../../Common.scss";
import "./Sidebar.scss";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <aside className="main__right">
          <ul>
            <li>
              <div className="author">
                <img
                  alt="author-image"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/101538364_247245499886357_4704375428469489664_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=TvkBhD3pui0AX-b8VzK&oh=bc3c7672b23a7c36756721487d15677d&oe=5F94CA0B"
                />
                <div className="account">
                  <span className="account__id">daseulsongme</span>
                  <span className="account__name">Daseul</span>
                </div>
              </div>
            </li>
            <li>
              <div className="story">
                <div className="story__title">
                  <span className="story__title--grey">스토리</span>
                  <span className="seeAll">모두 보기</span>
                </div>
                <ul className="account__list">
                  <li className="account">
                    <img
                      alt="user-story"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/11419221_858578517511132_1577845996_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=W5erf030qP8AX9bD4gx&oh=12536a5e278fd98c145538f58c044a89&oe=5FB9D143"
                    />
                    <div className="account__info">
                      <span className="account__id">fishror23</span>
                      <span className="account__time">2시간 전</span>
                    </div>
                  </li>
                  <li className="account">
                    <img
                      alt="user-story"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/119508948_183057929954641_5754571820843548903_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=GwFy-x0whlsAX9YvAn4&oh=758f2481e4a653a5922ed76cf9d5d131&oe=5F992E6E"
                    />
                    <div className="account__info">
                      <span className="account__id">junghyunjoo</span>
                      <span className="account__time">1시간 전</span>
                    </div>
                  </li>
                  <li className="account">
                    <img
                      alt="user-story"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/11821071_499109723578526_1220531836_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=pguSl3-KCaIAX_HKtVB&oh=c3ce0e07ddcb8243dbd9d9b768cc308e&oe=5F9BA4F3"
                    />
                    <div className="account__info">
                      <span className="account__id">khut0814</span>
                      <span className="account__time">13분 전</span>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="recommend">
                <div className="recommend__title">
                  <span className="recommend__title--grey">
                    회원님을 위한 추천
                  </span>
                  <span className="seeAll">모두 보기</span>
                </div>
                <ul className="account__list">
                  <li className="account">
                    <img
                      alt="user-recommendation"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/11363992_887595237989646_1937144594_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=DLifg-1824gAX-C1yUZ&oh=e9836605f0d233c0b21f494706ba2c1d&oe=5F9E1E21"
                    />

                    <div className="account__info">
                      <span className="account__id">tjskdiw32</span>
                      <span className="account__follow">
                        회원님을 팔로우합니다
                      </span>
                    </div>
                    <span className="followBtn">팔로우</span>
                  </li>
                  <li className="account">
                    <img
                      alt="user-recommendation"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/118693063_788750781928822_101056928110582343_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=D7Of0DYcuvwAX_5Y1wQ&oh=5a39535ff120c36c33365abc62d38c3b&oe=5F9DB42D"
                    />
                    <div className="account__info">
                      <span className="account__id">trueman89</span>
                      <span className="account__follow">
                        회원님을 팔로우합니다
                      </span>
                    </div>
                    <span className="followBtn">팔로우</span>
                  </li>
                  <li className="account">
                    <img
                      alt="user-recommendation"
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/117540968_639796126659117_2386048633153348643_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=PrKHuz-IvHEAX-UCa22&oh=1049bd45564ce55c99d42ce6443f80b1&oe=5FA05B53"
                    />

                    <div className="account__info">
                      <span className="account__id">smileday.wj</span>
                      <span className="account__follow">
                        회원님을 팔로우합니다
                      </span>
                    </div>
                    <span className="followBtn">팔로우</span>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div className="description">
                <ul className="tag1">
                  <li>
                    <a href="#">소개</a>
                    <span>&middot;</span>
                    <a href="#">도움말</a>
                    <span>&middot;</span>
                    <a href="#">홍보 센터</a>
                    <span>&middot;</span>
                    <a href="#">API</a>
                    <span>&middot;</span>
                    <a href="#">채용 정보</a>
                  </li>
                </ul>
                <ul className="tag2">
                  <li>
                    <a href="#">개인정보처리방침</a>
                    <span>&middot;</span>
                    <a href="#">약관</a>
                    <span>&middot;</span>
                    <a href="#">위치</a>
                    <span>&middot;</span>
                    <a href="#">인기 계정</a>
                    <span>&middot;</span>
                    <a href="#">해시태그</a>
                    <span>&middot;</span>
                    <a href="#">언어</a>
                  </li>
                </ul>
                <div className="rights">© 2020 INSTAGRAM FROM FACEBOOK</div>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Sidebar;
