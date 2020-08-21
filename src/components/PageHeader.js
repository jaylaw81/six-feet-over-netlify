import React from 'react'
import styled from 'styled-components'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Featured from '../components/Featured'

const Hero = styled.div`
  background-size: cover;
  justify-content: center;
  display: flex;
  padding-bottom: 26px;
  height: max-content;


  &.hero .undefined  {
    position: relative;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      width: 100%;
      height: 76%;
      background-color: #354463;
      opacity: 0.5;
      top: 0;
      left: 0;
      z-index: 1;
      height: 100%;
    }

  }

  &.is-featured {
    justify-content: initial;
  }

  &.blog-post {
    overflow: hidden;
    position: relative;
    height: 300px;

    .is-featured {
      height: 800px;
      overflow: hidden;
      top: 0;
    }

    .hero-tagline {
      margin: 65px auto;
    }

    .hero-box {
      display: none;
    }
  }

  picture {
    top: 0;
    left: 0;
    width: 100%;
    img {
      position: absolute
    }
  }
`

const HeroBox = styled.div`
  background-color: white;
  position: relative;
  display: flex;
  margin-top: 100px;
  margin-right: 100px;
  width: 544px;
  z-index: 9999;
  height: 100%;

  &.is-featured {
    justify-content: center;
    background-color: transparent;
    width: initial;
    margin: 0 auto;
  }

  h1 {
    padding: 10px 20px;
    background-color: #354463;
    font-family: ${props => props.theme.fontBase};
    font-size: 14px;
    color: #fff;
    position: absolute;
    top: -28px;
    left: 64px;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 2px;
  }

  p {
    font-family: ${props => props.theme.fontHeading};
    font-size: 28px;
    line-height: 36px;
    padding: 40px;
  }
`

const HeroTagLine = styled.div`
  font-family: ${props => props.theme.fontAccent};
  font-size: 72px;
  width: 401px;
  color: #fff;
  margin: 100px 100px 0 0;
  z-index: 1;
`

const PageHeader = (props) => {

  const { hero, featured, blogPost, extraClass } = props

  const isFeatured = featured ? 'is-featured' : ''

  return (
    <Hero className={`hero ${isFeatured} ${extraClass}`}>

      {blogPost &&
        <PreviewCompatibleImage
          imageInfo={{
            image: hero,
            alt: ``,
          }}
        />
      }

      {!blogPost &&
        <PreviewCompatibleImage
          imageInfo={{
            image: hero.image,
            alt: ``,
          }}
        />
      }

      {!featured &&
        <HeroTagLine className={`hero-tagline`}>
          #Help PREVENT SUICIDE
        </HeroTagLine>
      }

      <HeroBox className={`${isFeatured} hero-box`}>
        {!featured &&
          <>
            <h1>{hero.heading}</h1>
            <p>{hero.intro}</p>
          </>
        }
        {featured &&
          <Featured />
        }
      </HeroBox>

    </Hero>
  )
}

export default PageHeader
