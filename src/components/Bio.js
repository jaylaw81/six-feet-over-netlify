import React from 'react'
import styled from 'styled-components'

const Heading = styled.div`
  padding: 10px 20px;
  position: absolute;
  background-color: #3c4557;
  font-family: ${props => props.theme.fontBase};
  font-size: 14px;
  color: #fff;
  left: 45%;
  top: -22px;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;

  &.rel {
    position: relative;
    top: inherit;
    left: inherit;
    display: inline-block;


    &.light {
      background-color: white;
      color: #3c4557;
    }
  }

  &.center {
    display: flex;
    justify-content: center;
    width: max-content;
    margin: 0 auto;
  }
`

const BioContainer = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 80px auto;
  width: 800px;

  &.direction-1 {
    flex-direction: row;

    .bio-image {
      margin-right: 50px;
    }

  }

  &.direction-0 {
    flex-direction: row-reverse;

    .bio-content {
      margin-right: 50px;
    }
  }

`


const BioImage = styled.div`

  img {
    width: 300px;
  }
`

const BioContent = styled.div`

  p {
    color: #fff;
    line-height: 32px;
    font-size: 20px;
  }


`

const Bio = ({ bio, dir }) => {
  console.log(dir)
  const bio_name = bio.name.replace(/\s/g, '-').replace(/[.,]/g, '').toLowerCase()
  return (
    <BioContainer id={bio_name} className={`direction-${dir}`}>

      <BioImage className="bio-image">
        <img src={bio.photo.publicURL} alt="" />
      </BioImage>

      <BioContent className="bio-content">
        <Heading className={`rel light`}>
          <strong>{bio.name}</strong> - {bio.title}
        </Heading>
        <p>
          {bio.bio}
        </p>
      </BioContent>

    </BioContainer>
  )
}

export default Bio
