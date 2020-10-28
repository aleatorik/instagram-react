import React, { Component } from "react";
import "../../../Common.scss";
import "../Feed/Feed.scss";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "daseulsongme",
      comment: "",
      commentList: [],
    };
  }

  handleChangeInput = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = () => {
    this.setState({
      commentList: this.state.commentList.concat([
        { id: this.state.id, comment: this.state.comment },
      ]),
    });
    //[{ id: daseulsongme, comment: 커맨트내용 }]
  };

  render() {
    console.log("commentList : ", this.state.commentList);
    console.log("comment input :", this.state.comment);
    return (
      <div>
        <div className="feeds">
          <div className="account__container">
            <div className="account">
              <img
                alt="author-image"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/101538364_247245499886357_4704375428469489664_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=TvkBhD3pui0AX-b8VzK&oh=bc3c7672b23a7c36756721487d15677d&oe=5F94CA0B"
              />
              <div className="account__info">
                <span className="account__id">daseulsongme</span>
                <span className="account__location">Meißen, Germany</span>
              </div>
            </div>
            <div className="moreBtn">
              <img
                alt="more-btn"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              />
            </div>
          </div>
          <div className="mainImg-container">
            <div className="mainImg-container__img">
              <img
                alt="main-img"
                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/24126641_312049249282777_4540700581370527744_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=5p2UNQRYja8AX9z-6Au&_nc_tp=18&oh=3202fdf48df920fe1539e984161a06f2&oe=5F9427F3"
                className="mainImage"
              />
            </div>
          </div>
          <div className="info">
            <div className="info__content">
              <ul className="icons">
                <div className="icon-list__left">
                  <li className="icon__list">
                    <span className="icon__list--red">
                      <FontAwesomeIcon icon={faHeart} />
                    </span>
                  </li>
                  <li className="icon__list">
                    <FontAwesomeIcon icon={faComment} />
                  </li>
                  <li className="icon__list">
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </li>
                </div>
                <li className="icon__list--right">
                  <FontAwesomeIcon icon={faBookmark} />
                </li>
              </ul>
              <div className="info__like">
                <img
                  alt="user-like"
                  src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/102638893_2477296745828548_255469383460355571_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=ejTZ_QiiUMgAX92jg9K&oh=de3b057113253453bb1a0dc6f03cbe32&oe=5FC132B6"
                />
                <span>caomei101님 외 7명이 좋아합니다</span>
              </div>
              <ul className="metadata">
                <li>
                  <span className="metadata__userName">daseulsongme</span>
                </li>
                <li>
                  <span className="metadata__content--selected">
                    "Liebeskummer..."
                  </span>
                </li>
                <li>
                  <span className="seeMore">더 보기</span>
                </li>
              </ul>
            </div>
            <div className="comment__container">
              <div className="infoComment">
                <div className="contentLeft">
                  <span className="contentId">natalie.zikmundova</span>
                  <span className="contentText">
                    Ich werde auf dich als reifere und verbesserte Person
                    warten.
                  </span>
                </div>
                <span className="contentHeart">
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              </div>
            </div>
            <ul>
              {this.state.commentList.map((commentTxt) => {
                return (
                  <li className="commentLi">
                    <span className="userName">{this.state.id}</span>
                    {commentTxt.comment}
                  </li>
                );
              })}
            </ul>
            <span className="uploadTime">54분 전</span>
            <section className="comment">
              <textarea
                placeholder="댓글 달기..."
                className="comment-box"
                onChange={this.handleChangeInput}
              ></textarea>
              <Link
                className="postBtn"
                to="/main-daseul"
                onClick={
                  !this.state.comment
                    ? (e) => {
                        e.preventDefault();
                      }
                    : this.handleSubmit
                }
              >
                게시
              </Link>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
