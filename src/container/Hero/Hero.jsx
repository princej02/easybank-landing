import React from 'react'

import './Hero.css'
import images from '../../constants/images'
import { Button } from '../../components/index'

const Hero = () => {
  return (
    <div className="app__hero flex__center">

      <div className="app__hero-content">
        <div className="app_hero-content-image_small-screen">
          <div className="small-image-bg">
            <img src={images.BgIntroMobile} alt="background" />
          </div>
          <div className="small-image-mockups">
            <img src={images.mockups} alt="mockups" />
          </div>
        </div>
        <div className="app__hero-content_intro">
          <h1 className="app__hero-content_intro-title">Next generation digital banking</h1>
          <p className="app__hero-content_intro-description">
            Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
          </p>
          <div className="app__hero-content_intro-btn">
            <Button />
          </div>
        </div>

        <div className="app_hero-content-image">
          <div className="hero__background">
            <img src={images.BgIntroDesktop} alt="background" />
          </div>
          <div className="hero-mockups">
            <img src={images.mockups} alt="mockups" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero