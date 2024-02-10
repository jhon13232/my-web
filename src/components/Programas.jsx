import {FaCrown} from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import { programs } from '../data'
import Card from '../Card'
import { Link } from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'


const  Programas = () => {
  return (
    <section className='programs'>
      <div className='container programs_container'>
        <div className='programs_head'>

          <SectionHeader icon={<FaCrown/>} title="Programs" />
        </div> 
        <div className='programs_wrapper'>
          {
            programs.map(({id,icon,title,info,path})=>{
              return(
                <Card className='programs_program' key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className='btn sm'>Learn More<AiFillCaretRight/> </Link>
                </Card>
              )
            })
          }

        </div>

      </div>

    </section>
  )
}

export default Programas