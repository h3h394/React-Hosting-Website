/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const BlogCard = ({ blogImg }) => (
  <div css={styles} className="blogCard">
    <img src={blogImg} alt="blog" />
    <div className="blogDesc">
      <p>23 DEC, 2020</p>
      <h4>Addiction When Gambling Becomes</h4>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 360px;
  position: relative;
  border-radius: 12px;
  img {
    width: 100%;
    height: 376px;
    display: block;
  }
  .blogDesc {
    background: #fff9f9;
    padding: 30px;
    width: 100%;
    max-width: 340px;
    position: absolute;
    bottom: -70px;
    right: 0;
    border-radius: 7px;
    p {
      color: #57667e;
      font-size: 15px;
      font-weight: 500;
    }
    h4 {
      margin: 20px 0 0 0;
      color: #28395a;
      font-size: 18px;
      cursor: pointer;
      transition: color 300ms ease-in-out;
      &:hover {
        color: #eb566c;
      }
    }
  }
  @media (max-width: 755px) {
    max-width: 600px;
    &:not(:last-of-type) {
      margin-bottom: 100px;
    }
  }
  @media (min-width: 756px) and (max-width: 1288px) {
    max-width: 48%;
    &:not(:last-of-type) {
      margin-bottom: 100px;
    }
  }
`;

export default BlogCard;
