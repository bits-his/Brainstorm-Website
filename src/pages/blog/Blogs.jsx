import BlogsCard from "./BlogsCard"
import blog1 from "../../assets/img/blog1-5-510x400.jpg";
import "./blogs.css"

export default function Blogs() {
  return (
    <>
        <div className="blog-head-img">
            <div className="container">
                <div>Blog</div>
            </div>
            <div className="strip blue"></div>
            <div className="strip red"></div>
        </div>
        <div className="container">
            <BlogsCard img={blog1}/>


        </div>
    </>
  )
}
