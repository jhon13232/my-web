import Header from '../../components/Header'
import HeaderImage from '../../imagenes/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = ()=>{
  return(
    <>
      <Header title='Get In Tounch' image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt ducimus,
        ea earum consequuntur reprehenderit fugiat molestiae dolore minima neque voluptatem suscipit tenetur ad amet excepturi repellendus.
        Repellendus, voluptatem itaque. 
      </Header>
      <section className="contact">
        <div className='container contact_container'>
          <div className='contact_wrapper'>
            <a href="mailto:support@egattor.com" target='_blank' rel='noreferrer noopener'> <MdEmail/></a>
            <a href="http://m.me/ernest_archive" target='_blank' rel='noreferrer noopener'> <BsMessenger/></a>  
            <a href="https://wa.me/+573187647748" target='_blank' rel='noreferrer noopener'> <IoLogoWhatsapp/></a> 
            
          </div>

        </div>
      </section>
    
    
      
    
    </>
    
  )

}
export default Contact