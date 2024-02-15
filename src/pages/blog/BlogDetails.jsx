import React from 'react'
import './details.css'
import blogimg from "../../assets/img/blog1-5-510x400.jpg"
import { Link } from 'react-router-dom'

export default function BlogDetails() {
  return (
    <>
       <div className='blog-details-nav-img'>
        <ul>
          <li>
           <Link to='../Blog'>Blog</Link>
          </li>/
          <li>
           <Link to=''>Blog Details</Link>
          </li>
        </ul>
       </div>
   
       <div className='news-article mb-4 pt-5'>

        <div className='row mx-5'>
          <div className='col-lg-8 col-md-12 left-body'>
            <img src={blogimg} alt='news' className='w-100 main-blog-img' />
            <h2>Heading of the news</h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit odio quos ipsa! Esse excepturi est molestias optio, officia sunt assumenda ducimus quisquam neque reiciendis quam, perspiciatis ad quis, unde quidem!
            Pariatur qui deleniti minima veniam incidunt doloremque labore? Atque, ut sint! Nisi odio dicta similique perferendis impedit veniam architecto quia voluptatem voluptas, inventore ducimus eaque obcaecati. Sapiente error asperiores fugit.
            Asperiores enim dolorum facilis quae aspernatur distinctio consequuntur, fuga impedit minima, esse rem minus quos natus? Aut, porro at dolores non a assumenda quos nobis voluptas, ex enim, impedit fugit!
            Illum hic modi veniam omnis provident, ullam consequuntur nobis possimus, dolores, nisi reprehenderit at minima ab ratione vel quidem. Odio exercitationem inventore aut laborum a natus delectus ratione, quod dolores!
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, veniam sunt cum atque odio qui unde deserunt neque sed reprehenderit voluptatum recusandae, repudiandae repellat magni vero beatae in mollitia commodi.
            Voluptatum animi tenetur natus quia aliquam excepturi cumque sequi cum magni itaque voluptatibus ducimus, delectus, vero quibusdam, hic illo quis ab vitae eligendi? Voluptate, pariatur aspernatur recusandae nam dignissimos vero.
            Facilis suscipit odit deserunt consequuntur accusamus molestias ducimus sit in odio est libero voluptatibus quod dolore laboriosam distinctio, qui quaerat soluta quisquam vel? Unde consequuntur nisi dignissimos, iusto magnam perferendis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita quia earum libero dolore saepe, officiis obcaecati mollitia atque inventore eveniet, natus sequi quas id, quos non aperiam laboriosam beatae.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora excepturi delectus soluta consectetur numquam similique, at suscipit, libero architecto sed impedit explicabo? Quod suscipit nobis quasi maxime eveniet perspiciatis expedita.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt excepturi ad, maiores nihil dignissimos incidunt possimus sed nobis amet cum saepe neque et necessitatibus veritatis nostrum sint error aliquid.
            Unde facere accusamus culpa placeat quasi repellendus tempore blanditiis quod saepe. Nihil, sed, eaque officia excepturi deserunt odit natus totam ad voluptates perferendis accusamus magnam. Dolorum ratione alias eius voluptatum!
            Necessitatibus cum ratione veniam nobis est reiciendis vero nihil modi ut asperiores in vitae quae nisi eveniet corrupti temporibus optio aut, qui numquam saepe ab voluptates consequuntur praesentium! Ab, et.
            Necessitatibus magnam libero voluptatibus error. Soluta amet libero aperiam autem, tempore ut vitae ab accusamus non maxime, quis esse. Fugiat dolorum rem ea voluptate. Neque reprehenderit consequatur aliquid blanditiis atque?
            Amet eum eius error doloremque saepe magni hic, excepturi quod, esse eveniet ex doloribus in corrupti ea similique blanditiis tenetur? Reprehenderit quasi laboriosam quod eum. Sint aliquid perferendis iusto quod.
            Minima non facilis voluptatem aliquam, fuga similique saepe eos, beatae obcaecati dolore omnis ut rem maxime labore aut iusto vero repellendus excepturi ad, assumenda expedita animi. Temporibus sapiente aperiam suscipit.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi tenetur unde accusamus delectus quam recusandae ratione praesentium, quidem alias? Minima iste animi possimus sunt fuga, ea laboriosam earum nihil.
            Assumenda, expedita! Sed obcaecati ipsa quibusdam ipsam eum officiis tempore repellat dolore! Accusantium harum, placeat pariatur quae velit dolores, eligendi quod molestias officia dolor sit exercitationem. Ad quibusdam totam reprehenderit!
            Ipsam a quibusdam optio natus magnam. Adipisci repellat quibusdam magnam possimus ipsum rem reprehenderit fuga nam voluptatibus fugit odit unde doloremque est sint quod vitae, magni a fugiat eum ipsam.
            Molestiae, consectetur nihil cupiditate autem delectus deserunt facilis quibusdam deleniti sint. Veritatis amet nihil, ab vero veniam facere dolorem neque eum consequuntur sunt qui? Modi blanditiis rerum iusto illum quo?
            Consequuntur iste nobis magni fugit voluptate laborum aperiam recusandae velit, illo consectetur blanditiis maxime neque doloremque dolore dolores officiis qui commodi, aspernatur esse cupiditate quibusdam autem nulla nostrum. Vitae, quidem.
            Quas, quibusdam at minima iusto numquam dicta odit quae cupiditate enim sint sapiente optio ipsam ullam maxime. Eos laborum unde, repudiandae, maiores sequi quidem quod iste natus aut, ut molestias!
  
          </div>
          <div className='col-lg-4 col-md-12 right-body'>
            <form className="search-box" onSubmit={e=>e.preventDefault()}><input type='search' /><button type='submit' >search</button></form>
            <BlogDetails />
            </div>
        </div>
       </div>
    </>
  )
}
