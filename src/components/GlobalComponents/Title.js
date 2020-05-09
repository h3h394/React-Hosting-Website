/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Title = ({ text }) => (
  <div css={styles} className="title">
    <div className="line"></div>
    <h4>{text}</h4>
  </div>
);

const styles = css`
  display: flex;
  align-items: center;
  .line {
    background: #eb566c;
    width: 60px;
    border: 1px solid red;
    margin: 3px 18px 0 0;
  }
  h4 {
    font-size: 18px;
    font-weight: 500;
    line-height: 1;
    color: #eb566c;
  }
`;

export default Title;
