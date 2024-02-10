import Header from '../../components/Header'
import HeaderImagen from "../../imagenes/header_bg_5.jpg"
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF} from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import './trainer.css'
import Trainer from '../../components/Trainer'


const Trainers  = ()=>{
  return(
    <>
      <Header title='Our Trainers' image={HeaderImagen}> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt ducimus,
        ea earum consequuntur reprehenderit fugiat molestiae dolore minima neque voluptatem suscipit tenetur 
      </Header>
      <section className='trainers'>
        <div className='container trainers_container'>
          {
            trainers.map(({id,image,name,job,socials})=>{
              return <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/> , link:socials[0]},
                  {icon: <AiOutlineTwitter/> , link:socials[1]},
                  {icon: <FaFacebookF/> , link:socials[2]},
                  {icon: <FaLinkedin/> , link:socials[3]}

                ]

              }/>

             
            })
          }

        </div>

      </section>

    </>
  )

}
export default Trainers