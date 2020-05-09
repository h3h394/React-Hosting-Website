/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import BlogCard from "./BlogCard";
import CardOneImg from "../../img/cardOne.webp";
import CardTwoImg from "../../img/cardTwo.webp";
import CardThreeImg from "../../img/cardThree.webp";

const Blog = () => (
  <section css={styles} className="blog" id="blog">
    <div className="blogTitle">
      <Title text="Our Blog" />
      <h2>Our latest news</h2>
    </div>
    <Container>
      <BlogCard blogImg={CardOneImg} />
      <BlogCard blogImg={CardTwoImg} />
      <BlogCard blogImg={CardThreeImg} />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 140px 0;
  .blogTitle {
    width: 340px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      padding-right: 14px;
    }
    h2 {
      font-size: 36px;
      line-height: 1;
      color: #28395a;
      margin: 30px 0 0 0;
    }
  }
  .container {
    padding: 80px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 755px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 756px) and (max-width: 1288px) {
    .container {
      flex-wrap: wrap;
    }
  }
`;

export default Blog;
