import React from 'react'

import './Features.css'
import { FEATURES } from '../../constants/data'

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="card__container">
      <img src={icon} alt={title + 'icon'} />
      <h3 className='card__container-title'>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

const Features = () => {
  return (
    <section className="app__features section__padding">
      <div className="app__features-intro">
        <h2 className='app__features-intro_heading'>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub.</p>
        <p>Control your finances like never before.</p>
      </div>
      <div className="app__features-list stack-x">
        {FEATURES.map(feature => (
          <FeatureCard 
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            text={feature.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Features