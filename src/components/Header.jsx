

const Header = ({title,image,children}) => {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className='header-container-bg'>
          <img src={image} alt='Header Background Image'/>
        </div>
        <div className='header-content'>
          <h2>{title}</h2>
          <p>{children}</p> 

        </div>

      </div>

    </header>
  )
}

export default Header