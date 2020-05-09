/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const NavLink = ({ text, link }) => (
  <a css={styles} href={link}>
    {text}
  </a>
);

const styles = css`
  text-decoration: none;
  display: inline-block;
  color: #fff;
  margin-right: 28px;
  transition: color 300ms ease-in-out;
  &:hover {
    color: #eb566c;
  }
  @media (max-width: 940px) {
    width: 100%;
    margin-bottom: 26px;
  }
`;

export default NavLink;
