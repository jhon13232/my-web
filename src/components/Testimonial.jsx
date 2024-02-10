import { useState } from "react"
import SectionHeader from "./SectionHeader"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../Card"
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from 'react-icons/io'
import { testimonials } from "../data"

const Testimonial = () => {
  const [index,setIndex]= useState(0)
  const {name,quote,job,avatar} = testimonials[index];
  

  const prevTestimonialHander = ()=>{
    setIndex(prev => prev -1);

    if( index <= 0){
      setIndex(testimonials.length -1);
    }


  }
  const nextTestimonialHander = ()=>{
    setIndex(prev => prev +1);

    if(index >=testimonials.length - 1){
      setIndex(0);
    }

  }
 
 
  return (
    <section className="testimonials">
      <div className="container testimonials_container">
        <SectionHeader icon={<ImQuotesLeft/>} title='Testimonials' className="testimonials_head"/>
        <Card className='testimonial'>
          <div className="testimonial_avatar">
            <img src={avatar} alt={name}/>
          </div>
          <p className="testimonial_quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial_title">{job}</small>
        </Card>
      </div> 
      <div className="testimonials_btn-container">
        <button className="testimonials_btn" onClick={prevTestimonialHander}><IoIosArrowDropleftCircle/></button>
        <button className="testimonials_btn" onClick={nextTestimonialHander}><IoIosArrowDroprightCircle/></button>

      </div>

    </section>
   
  )
}

export default Testimonial