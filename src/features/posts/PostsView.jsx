import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";
const PostsView = () => {
  //   const post = useSelector((state) => console.log(state));
  const { isLoading, posts, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <h1>posts</h1>
      {isLoading && <h4>loading...</h4>}
      {error && <h4>{error?.message}</h4>}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,auto)",
          gridGap: "2rem",
        }}
      >
        {posts &&
          posts.map((post, i) => {
            return (
              <article
                style={{ background: "#000", color: "#fff", padding: "2rem" }}
                key={i}
              >
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostsView;
