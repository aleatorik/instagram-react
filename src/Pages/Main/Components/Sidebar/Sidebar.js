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
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/116707923_600433354237679_1157841837966323231_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=tJYLLYM2AiIAX-nVazE&oh=ff840f24d0bb3544a94b991b6bbfaa4f&oe=5F98A92E"
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
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/80319706_631139287713292_159190102378020864_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=m0iyU1DREJQAX9TYmri&oh=d52ec427e622493193e52ca79d9c4bac&oe=5F4C926D"
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
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/79372017_982952902089876_2421393426365808640_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=RgJSMmqD5FQAX_NwDEA&oh=6430af1753e8525e229eeadfee642cf8&oe=5F4B5AD2"
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
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/73407386_436742847280516_7688568694854647808_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=IZYaDgxMbOEAX-2BfiZ&oh=658e71a12ed01bf35d46a16fa2e2b217&oe=5F4C592C"
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
                      src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/106037679_2848193468745887_5705878449882075021_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=ktJOHlgSWskAX-Y01ju&oh=1a28a1defdd31b8fa07b7a77affe3023&oe=5F4AF2FA"
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
