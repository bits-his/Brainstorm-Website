import React from 'react'
import './details.css'
import blogimg from "../../assets/img/blog1-5-510x400.jpg"

export default function BlogDetails() {
  return (
    <>
       <div className='blog-details-nav-img'></div>
       <div className='container-fluid mt-5 mb-4'>
        <div className='row mx-5'>
          <div className='col-lg-8 col-md-12 left-body'>
            <img src={blogimg} className='w-100 main-blog-img' />
          </div>
          <div className='col-lg-4 col-md-12 right-body'>
            <div classname="side-content"><input type='search' /><button type='submit' className='btn'></button></div>
            <div classname="side-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore repudiandae quas perferendis quasi inventore vero magnam nemo fugit, ut id, delectus, ad harum doloribus distinctio. Sint incidunt dolore saepe distinctio!</div>
            <div classname="side-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laborum libero reprehenderit culpa dolorem. Libero numquam excepturi eaque dolores provident facilis ducimus quibusdam soluta. Ipsam esse vero voluptate dolores sunt?</div>
          </div>
        </div>
       </div>
    </>
  )
}
