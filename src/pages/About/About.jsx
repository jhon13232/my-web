import HeaderImage from '../../imagenes/header_bg_1.jpg'  
import Header from '../../components/Header'
import StoryImagen from '../../imagenes/about1.jpg'
import VisionImagen from '../../imagenes/about2.jpg'
import MissionImagen from '../../imagenes/about3.jpg'
import './about.css'

const About = ()=>{
  return(
    <>
      <Header title='About Us' image={HeaderImage}  >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Harum blanditiis atque magni id tenetur assumenda commodi fugit,
        quos debitis pariatur labore eligendi, in doloremque ab mollitia molestias repellat animi neque?
      </Header>
      <section className='about-story'>
        <div className='container about_story-container'>
            <div className='about_section-image'>
              <img src={StoryImagen} alt='Our Story Image'/>
            </div>
            <div className='about_section-content'>
              <h1>Ourt Story</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum blanditiis atque magni id tenetur assumenda commodi fugit,
               quos debitis pariatur labore eligendi, in doloremque ab mollitia molestias repellat animi neque?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum blanditiis atque magni id tenetur assumenda commodi fugit,
                 quos debitis pariatur labore eligendi, in doloremque ab mollitia molestias repellat animi neque?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum blanditiis atque magni id tenetur assumenda commodi fugit
              </p>
            </div>
        </div>
      </section>

      <section className='about-vision'>
        <div className='container about_vision-container'>
           
          <div className='about_section-content'>
              <h1>Ourt Story</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum blanditiis atque magni id tenetur assumenda commodi fugit,
               quos debitis pariatur labore eligendi, in doloremque ab mollitia molestias repellat animi neque?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum blanditiis atque magni id tenetur assumenda commodi fugit,
                 quos debitis pariatur labore eligendi, in doloremque ab mollitia molestias repellat animi neque?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum blanditiis atque magni id tenetur assumenda commodi fugit
              </p>
          </div>
          <div className='about_section-image'>
              <img src={VisionImagen} alt='Our Story Image'/>
          </div>

        </div>
      </section>


   

     <section className='about-mission'>
        <div className='container about_mission-container'>
            <div className='about_section-image'>
              <img src={MissionImagen} alt='Our Story Image'/>
            </div>
            <div className='about_section-content'>
              <h1>Ourt Mision</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum blanditiis atque magni id tenetur assumenda commodi fugit,
               quos debitis pariatur labore eligendi, in doloremque ab mollitia molestias repellat animi neque?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum blanditiis atque magni id tenetur assumenda commodi fugit,
                 quos debitis pariatur labore eligendi, in doloremque ab mollitia molestias repellat animi neque?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Harum blanditiis atque magni id tenetur assumenda commodi fugit
              </p>
            </div>
        </div>
      </section>
      
  
    </>
  )

}
export default About