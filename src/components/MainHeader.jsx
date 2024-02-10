import { Link } from "react-router-dom"
import Image from '../imagenes/main_header.png'

const  Main_Header = ()=>{
  return(
    <div>
      <header className="main_header">
        <div className="container main_header-container">
          <div className="main_header-left">
            <h4>#100DaysOfWorkOut</h4>
            <h1>Join the Legend  of the Fiftness  world</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione esse modi voluptas
              consectetur sit itaque, ipsum tempore repudiandae, similique reprehenderit quis repellendus!
            </p>
            <Link to='plans' className="btn lg">Get Started</Link>
          </div>       
          <div className="main_header-right">
            <div className="main_header-circle"></div>
            <div className="main_header-image">
              <img src={Image} alt="Main Header Image" />

            </div>
          </div>

        </div>

      </header>

    </div>
  )

}
export default Main_Header