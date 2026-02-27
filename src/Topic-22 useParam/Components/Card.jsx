import React from 'react'

const Card = ({card, profile, image, info, login, avatar_url}) => {

  return (
    <div className={card}>
        <div className={profile}>
        <img src={avatar_url} alt="" className={image} />
        </div>
        <div className={profile}>
            <h2 style={{textTransform:"uppercase", fontsize:"18px", color:"black"}}>{login}</h2>
        </div>
      
    </div>
  )
}

export default Card
