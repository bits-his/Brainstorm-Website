import blogTestImg from "../../assets/img/apple.jpg"
const BlogCard = () => {
  return (
    <div className="col-lg-4 col-md-12 mb-md-3 mb-sm-2">
      <div className="bg-secondary blog-card">
        <img src={blogTestImg} alt="Blog image" className="blog-img" />
      </div>
    </div>
  )
}

export default BlogCard;
