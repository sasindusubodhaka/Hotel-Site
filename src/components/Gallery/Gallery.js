import React from "react"
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import Cards from "./Card"
import "./Gallery.css"
import GalleryData from "./GalleryData"


const Gallery = () => {
  return (
    <>
      <HeadTitle/>

      <section className='gallery top '>
        <div className='container grid'>
          {GalleryData.map((value) => {
            return <Cards imgaes={value.img} title={value.title} />
          })}
        </div>
      </section>
    </>
  )
}

export default Gallery