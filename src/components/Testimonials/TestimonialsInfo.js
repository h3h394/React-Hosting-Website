/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import TestimonialUserImg from "../../img/testimonialUser.webp";

const TestimonialInfo = () => (
  <div css={styles} className="testimonialInfo">
    <div className="user">
      <img src={TestimonialUserImg} alt="user" />
      <div className="userDesc">
        <h2>Jahon Ann</h2>
        <span>CEO, Colorlib</span>
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
      ultrice.
    </p>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 500px;
  .user {
    width: 100%;
    display: flex;
    img {
      margin-right: 30px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .userDesc {
      padding: 12px 0 0 0;
      h2 {
        color: #eb566c;
        font-size: 30px;
        font-weight: 500;
        line-height: 1;
      }
      span {
        display: block;
        margin: 7px 0 0 0;
        font-size: 16px;
        font-weight: 600;
        color: #57667e;
      }
    }
  }
  p {
    line-height: 1.8;
    margin: 24px 0 0 0;
    color: #10285d;
    font-weight: 500;
  }
  @media (min-width: 791px) and (max-width: 1010px) {
    max-width: 50%;
  }
`;

export default TestimonialInfo;
