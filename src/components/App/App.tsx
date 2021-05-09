import React from "react";
import Post, { PostProps } from "../post/Post";
import classNames from "./App.module.css";

const post: PostProps[] = [
  {
    title: "example post",
    description: "some text",
    author: "arash",
    isPublished: true,
  },
  {
    title: "example post 2",
    description: "some text 2",
    author: "arash",
    isPublished: false,
  },
  {
    title: "example post 3",
    description: "some text 3",
    author: "arash",
    isPublished: true,
  },
];

const App: React.FC = () => {
  return (
    <div className={classNames.wrapper}>
      <h1 className={classNames.title}>Hello Arash!</h1>
      <div className={classNames.postWrapper}>
        {post.map((post) => (
          <Post key={post.title} {...post} />
        ))}
      </div>
    </div>
  );
};

export default App;
