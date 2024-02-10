import { Link } from "react-router-dom"
import Logo from '../imagenes/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
 
const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <article>
          <Link to="/" className="logo">
            <img  src={Logo} alt="Footer Logo"/> 
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quidem aspernatur.
            Voluptates consequuntur assumenda nemo enim est a mollitia iste dolor suscipit laborum facilis placeat ex
          </p>
          <div className="footer_socials">
            <a href="https://linkedln.com/" target="_blank" rel="noreferrer noopener"> <FaLinkedin/></a> 
            <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"> <FaFacebookF/></a> 
            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"> <AiOutlineTwitter/></a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"> <AiFillInstagram/></a>             
          </div>
        </article>
        <article>
          <h4>Permalink</h4>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>

        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communities</Link>
          <Link to="/contact">FAQs</Link>
        </article>

        <article>
          <h4>Get In Touncher</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        
        </article>

      </div>
    </footer>
  
  )
}

export default Footer