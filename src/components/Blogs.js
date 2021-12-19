import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInput, setBlogData } from "../features/userSlice";

const Blogs = () => {
  const searchInput = useSelector(selectUserInput);
  const url = `https://gnews.io/api/v4/search?q=${searchInput}&token=ecef4a696af2e3226f0edc881fb7deae`;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        dispatch(setBlogData(res.data));
        setBlogs(res.data);
        setLoading(false);
        console.log(blogs);
      })
      .catch((err) => console.log(err + "error occured"));
  }, [searchInput]);
  return (
    <div className="blog__page">
      <h1 className="blog__page__header">Blogs</h1>
      {loading ? <h1 className="loading">Loading...</h1> : ""}
      <div className="blog__container">
        {blogs?.articles?.map((blog) => (
          <a className="blog" target="_blank" href={blog.url}>
            <div className="blog__img__container">
              <img src={blog.image} />
            </div>
            <div className="blog__content">
              <h3 className="sourceName">
                <span>{blog.source.name}</span>
                <p>{blog.publishedAt}</p>
              </h3>
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          </a>
        ))}

        {blogs?.totalArticles == 0 && (
          <h1 className="no__blogs">
            No blogs available 😞. Search something else to read blogs on the
            greatest platform.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Blogs;
