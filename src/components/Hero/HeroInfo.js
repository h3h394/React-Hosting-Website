/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const HeroInfo = () => (
  <div css={styles} className="heroInfo">
    <h2>Hosting digital technology web solution!</h2>
    <p>
      Automated Control Panel with Up to 50% Off Hosting <br /> Starting from
      $2.50/Month
    </p>
    <Button btnText="get started" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 500px;
  color: #fff;
  h2 {
    font-size: 60px;
    font-weight: 700;
    line-height: 1.3;
  }
  p {
    margin: 30px 0;
    line-height: 1.9;
  }
  button {
    text-transform: uppercase;
    font-weight: 600;
  }
  @media (max-width: 940px) {
    h2 {
      font-size: 40px;
    }
  }
  @media (min-width: 941px) and (max-width: 1245px) {
    max-width: 400px;
    h2 {
      font-size: 44px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export default HeroInfo;
