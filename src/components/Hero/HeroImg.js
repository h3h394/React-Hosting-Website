/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import HeroBg from "../../img/heroBg.webp";

const HeroImg = () => <div css={styles} className="heroImg"></div>;

const styles = css`
  width: 100%;
  max-width: 500px;
  height: 600px;
  background: url('${HeroBg}') no-repeat center/cover;
  @media (max-width: 940px) {
    display: none;
  }
  @media (min-width: 941px) and (max-width: 1245px){
    max-width: 400px;
    height: 400px;
  }
`;

export default HeroImg;
