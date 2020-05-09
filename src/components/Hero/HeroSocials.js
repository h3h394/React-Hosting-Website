/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const HeroSocials = () => (
  <div css={styles} className="socials">
    <div className="icons">
      <i className="fab fa-instagram fa-sm"></i>
      <i className="fas fa-globe fa-sm"></i>
      <i className="fab fa-twitter fa-sm"></i>
      <i className="fab fa-facebook-f fa-sm"></i>
    </div>
    <div className="iconLines">
      <div className="iconLine"></div>
      <div className="iconLine"></div>
      <div className="iconLine"></div>
    </div>
  </div>
);

const styles = css`
  width: 60px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    i {
      transform: rotate(-90deg);
      margin: 10px 0;
      cursor: pointer;
      color: #45455f;
      transition: color 300ms ease-in-out;
      &:hover {
        color: #f27420;
      }
    }
  }
  .iconLines {
    .iconLine {
      background: #162e78;
      width: 3px;
      height: 34px;
      margin-bottom: 8px;
      cursor: pointer;
      &:nth-child(1) {
        background: #03a7d2;
      }
      &:nth-child(2),
      &:nth-child(3) {
        height: 24px;
      }
    }
  }
`;

export default HeroSocials;
