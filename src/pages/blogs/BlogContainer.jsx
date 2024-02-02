import "./blogs.css"
import Blog from "./BlogCard"

const BlogsContainer = () => {
    return(
        <div className="container">
            <div className="row">
             <Blog />
             <Blog />
             <Blog />
            </div>
        </div>
    )
}

export default BlogsContainer;