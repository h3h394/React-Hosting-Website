/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import ServerBg from "../../img/serverBg.webp";

const AboutImg = () => <div css={styles} className="aboutImg"></div>;

const styles = css`
  width: 100%;
  max-width: 560px;
  height: 500px;
  background: url('${ServerBg}') no-repeat center/cover;
  @media(max-width: 880px) {
    max-width: 600px;
    height: 450px;
  }
  @media (min-width: 881px) and (max-width: 1215px) {
    max-width: 43%;
    height: 350px;
  }
`;

export default AboutImg;
