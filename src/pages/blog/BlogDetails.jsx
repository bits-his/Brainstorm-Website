import React from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function BlogDetails() {
  const [blog,setBlog] = useState([])
  const [loading, setLoading] = useState(true);

  const {id} = useParams()
  useEffect(()=>{
    fetch(`https://galaxybis.ebudgetkano.ng/bits-blog-api/get_blog?query_type=view&id=${id}`)
    .then(res =>res.json())
    .then(data => (setBlog(data.data)) (setLoading(false)))
    .catch(e=>console.log(e))
  },[id])

  

  return (
    <>
      <div className="blog-details-nav-img">
        {/* <ul>
          <li>
            <Link to="../Blog">Blog</Link>
          </li>
          /
          <li>
            <Link to="">Blog Details</Link>
          </li>
        </ul> */}
      </div>

      
      <div className="news-article mb-4 pt-5">
        <div className="row mx-5">
          <div className="col-12 left-body">
            <h2 className="mb-lg-5 mb-md-3 text-center">{blog[0]?.title || <Skeleton />}</h2>
            <div className="content-body">
            {loading ? (
                <Skeleton className="blog-img-skeleton"/>
              ) : (
                <img src={blog[0]?.attechment || <Skeleton />} alt="news" className="main-blog-img" />
              )
            }
            {/* {JSON.stringify(blog)} */}
            {blog[0]?.content || <Skeleton count={17} className="content-skeleton"/>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
