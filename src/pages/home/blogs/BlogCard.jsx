import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";

export default function BlogCard({ attechment, title, created_at, content }) {
  return (
    <>
      <div className="home-blog col-lg-4 col-md-6 col-sm-12 p-3 mb-4 position-relative">
        <div className="home-blog-main">
          <div className="home-blog-img mb-3">
            <img src={attechment} alt="blog1" />
            <div className="home-blog-img-click">
              <FaPlus size={20} fontWeight={600} color="white" />
            </div>
          </div>
          <div className="home-blog-content mb-4">
            <h3>{title}</h3>
            <p className="blog-clamp">{content}</p>
            <span className="read-more">
              Read more{" "}
              <span className="animated-arrow">
                <HiArrowNarrowRight size={20} fontWeight={600} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
// attachment, title, created_at, content
