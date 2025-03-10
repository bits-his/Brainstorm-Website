import { HiArrowNarrowRight } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";

export default function BlogCard({ card }) {
  return (
    <>
      <div className="home-blog-main">
        <div className="home-blog-img mb-3">
          <img src={card.attechment} alt="blog1" />
          <div className="home-blog-img-click">
            <FaPlus size={20} fontWeight={600} color="white" />
          </div>
        </div>
        <div className="home-blog-content mb-4">
          <h3 className="min-height">{card.title}</h3>
          {/* <p className="blog-clamp">{card.content}</p> */}
          <p
            className="blog-clamp"
            dangerouslySetInnerHTML={{ __html: card.content }}
          />
          <span className="read-more">
            Read more{" "}
            <span className="animated-arrow">
              <HiArrowNarrowRight size={20} fontWeight={600} />
            </span>
          </span>
        </div>
      </div>
    </>
  );
}