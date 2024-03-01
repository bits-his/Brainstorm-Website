import React from "react";
import "./details.css";
import blogimg from "../../assets/img/blog1-5-510x400.jpg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  const [blog,setBlog] = useState([])
  const [loading, setLoading] = useState(true);

  const {id} = useParams()
  useEffect(()=>{
    fetch(`https://bits-blog-faef777253aa.herokuapp.com/api/get_blog?query_type=view&id=${id}`)
    // fetch(`https://bits-blog-faef777253aa.herokuapp.com/api/get_blog?query_type=view&id=${id}`)
    .then(res =>res.json())
    .then(data => (setBlog(data.data)))
    .catch(e=>console.log(e))
  },[])

  

  return (
    <>
      <div className="blog-details-nav-img">
        <ul>
          <li>
            <Link to="../Blog">Blog</Link>
          </li>
          /
          <li>
            <Link to="">Blog Details</Link>
          </li>
        </ul>
      </div>

      
      <div className="news-article mb-4 pt-5">
        <div className="row mx-5">
          <div className="col-lg-8 col-md-12 left-body">
            <img src={blog[0]?.attechment} alt="news" className="w-100 main-blog-img" />
            <h2>{blog[0]?.title}</h2>
            <p>
              {/* {JSON.stringify(blog)} */}
              {blog[0]?.content}
            </p>
          </div>
          {/* <div className="col-lg-4 col-md-12 right-body">
            <form className="search-box" onSubmit={(e) => e.preventDefault()}>
              {" "}
              <input type="search" />
              <button type="submit">search</button>
            </form>
          </div> */}
            {/* <BlogDetails /> */}
        </div>
      </div>
    </>
  );
}
