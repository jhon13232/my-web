

const Card = ({className,children}) => {
  return (
    <div>
      <article  className={`card ${className}`}>
        {children}

      </article>
    </div>
  )
}

export default Card