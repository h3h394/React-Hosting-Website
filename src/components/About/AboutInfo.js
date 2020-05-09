/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Button from "../GlobalComponents/Button";

const AboutInfo = () => (
  <div css={styles} className="aboutInfo">
    <Title text="Get your domain" />
    <h2>We are with you every step of the way</h2>
    <p>
      Cnsectetur adipisicing cvbelit, sxced dbeo eiucdsmod tempor incididunt ut
      labore egsfgt dolore magna aliqua. Ut encim ad minim veniam, quis nostrud
      exercitation ulclamco laboris nisi ufgut aliquip edgx ebrha.
    </p>
    <p>
      Cnsectetur adipisicing cvbelit, sxced dbeo eiucdsmod tempor incididunt ut
      labore egsfgt folorem.
    </p>
    <Button btnText="GET STARTED" />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 480px;
  color: #28395a;
  h2 {
    font-size: 40px;
    margin: 30px 0 40px 0;
  }
  p {
    margin-bottom: 14px;
    line-height: 2.3;
    font-size: 15px;
  }
  button {
    margin: 30px 0 0 0;
    padding: 18px 32px;
    font-weight: 600;
  }
  @media (min-width: 881px) and (max-width: 1215px) {
    max-width: 50%;
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export default AboutInfo;
