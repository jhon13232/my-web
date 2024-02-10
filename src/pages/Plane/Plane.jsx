import Header from '../../components/Header'
import HeaderImagen from '../../imagenes/header_bg_4.jpg'
import Card from '../../Card'
import { plans } from '../../data'
import './plane.css'

const Plane  = ()=>{
  return(
    <>
      <Header title='La Membresia Plan'  image={HeaderImagen}> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt ducimus,
        ea earum consequuntur reprehenderit fugiat molestiae dolore minima neque voluptatem suscipit tenetur 
      </Header>

      <section className='plans'>
        <div className='container plans_container'>
          {
            plans.map(({id,name,desc,price,feature})=>{
              return <Card key={id} className='plan'>
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`${price}`}</h1><h2>/Mo</h2>
                <h4>Features</h4>
                {
                   feature?.map(({feature,available},index)=>{
                    return <p key={index} className={!available ? 'disabled': '' }>{feature}</p>
                  })
                }
                <button className='btn lg'>Chose Plan</button>
              </Card>
            })
          }

        </div>

      </section>
    </>
    
  )

}
export default Plane