import React from 'react'
import styled from 'styled-components'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const Hero = styled.div`
  background-size: cover;
  justify-content: center;
  display: flex;
  padding-bottom: 50px;
  height: max-content;

  .gatsby-image-wrapper {
    width: 100%;
    position: absolute;
  }

  img, picture {
    top: 0;
    left: 0;
    width: 100%;
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

  const { hero } = props

  return (
    <Hero className={`hero`}>
      <PreviewCompatibleImage
          imageInfo={{
            image: hero.image,
            alt: ``,
          }}
        />
      <HeroTagLine>
        #Help PREVENT SUICIDE
      </HeroTagLine>
      <HeroBox>
        <h1>{hero.heading}</h1>
        <p>{hero.intro}</p>
      </HeroBox>

    </Hero>
  )
}

export default PageHeader
