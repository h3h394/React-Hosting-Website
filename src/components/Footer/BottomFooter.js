/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const BottomFooter = () => (
  <div css={styles} className="bottomFooter">
    <p>
      Copyright &copy;2020 All rights reserved | This template is made with{" "}
      <i className="fas fa-heart"></i> by{" "}
      <a href="https://colorlib.com/" target="_blank" rel="noopener noreferrer">
        Colorlib
      </a>
    </p>
    <div className="social">
      <div className="icon">
        <i className="fab fa-facebook-f"></i>
      </div>
      <div className="icon">
        <i className="fab fa-twitter"></i>
      </div>
      <div className="icon">
        <i className="fas fa-globe"></i>
      </div>
      <div className="icon">
        <i className="fab fa-instagram"></i>
      </div>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  border-top: 1px solid #1c2e4c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8ba4b1;
  p {
    font-size: 15px;
    a {
      text-decoration: none;
    }
    a,
    i {
      color: #eb566c;
    }
  }
  .social {
    display: flex;
    .icon {
      width: 40px;
      height: 40px;
      border: 1px solid #8ba4b1;
      border-radius: 50%;
      display: flex;
      cursor: pointer;
      transition: background 400ms ease-in-out, border 400ms ease-in-out;
      &:not(:last-of-type) {
        margin-right: 10px;
      }
      &:hover {
        background: #eb566c;
        border: 1px solid #eb566c;
        i {
          color: #fff;
        }
      }
      i {
        margin: auto;
        transition: color 400ms ease-in-out;
      }
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    .social {
      padding: 20px 0 0 0;
    }
  }
  @media (min-width: 641px) and (max-width: 930px) {
    p {
      width: 60%;
    }
  }
  @media (max-width: 1288px) {
    max-width: 90%;
  }
`;

export default BottomFooter;
