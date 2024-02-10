import Header from '../../components/Header'
import HeaderImagen from '../../imagenes/header_bg_3.jpg'
import './gallery.css'

const Gallery  = ()=>{
  const galleryLength=15;
  const images=[]
  
  for (let i =1;i<galleryLength;i++){
    images.push(require(`../../imagenes/gallery${i}.jpg`))
  }
  return(
    
    <>
      <Header title='Our Galleria' image={HeaderImagen}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt ducimus,
        ea earum consequuntur reprehenderit fugiat molestiae dolore minima neque voluptatem suscipit tenetur ad amet excepturi repellendus.
        Repellendus, voluptatem itaque. 
      </Header> 
      <section className='gallery'>
        <div className="container gallery_container">
          {
            images.map((image,index)=>{
              return <article key={index}>
                <img  src={image} alt={`Gallery image ${index+ 1}`}/>

              </article>
            })
          }
        </div> 

      </section>
    </>
  )

}
export default Gallery