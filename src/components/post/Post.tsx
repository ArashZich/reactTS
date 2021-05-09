import React from "react";
// import classNames from "./Post.module.css";
import styled from "styled-components";

export interface PostProps {
  title: string;
  description: string;
  author: string;
  isPublished: boolean;
}
const Title = styled.p`
  color: red;
`;

const Description = styled.p`
  color: purple;
`;
const Author = styled.p`
  color: orange;
`;
const IsPublished = styled.p`
  color: blue;
`;

const Post: React.FC<PostProps> = ({
  title,
  description,
  author,
  isPublished,
}) => {
  return (
    <div>
      <Title>title: {title}</Title>
      <Description>description: {description}</Description>
      <Author>author: {author}</Author>
      <IsPublished>isPublished: {isPublished ? "True" : "False"}</IsPublished>
      <hr />
    </div>
  );
};

export default Post;
