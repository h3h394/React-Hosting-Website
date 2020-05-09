/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = ({ btnIcon, btnText }) => (
  <button css={styles}>
    <i className={(btnIcon ? 'icon ' : 'iconMargin ') + btnIcon}></i>
    {btnText}
  </button>
);

const styles = css`
  padding: 14px 24px;
  border: none;
  outline: none;
  background: #eb566c;
  cursor: pointer;
  transition: background 300ms ease-in-out;
  color: #fff;
  border-radius: 50px;
  &:hover {
    background: #a53041;
  }
  .icon {
    margin-right: 10px;
  }
  .iconMargin{
    margin-right: 0;
  }
`;

export default Button;
