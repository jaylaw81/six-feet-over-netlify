import React, { useState } from "react"
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import styled from 'styled-components'
import { aboutPageQuery } from '../templates/about-page';

const TestimonialsContainer = styled.div`

  margin: 80px auto;
  position: relative;
  width: 1200px;

`

const ArticleContainer = styled.div`
  &.inactive {
    display: none;
  }

  article {
  background-color: #354463;
  color: white;
  width: 544px;
  top: 50px;

  z-index: 2;
  position: relative;

  .message-body {
    padding: 40px;
    font-family: ${props => props.theme.fontHeadingBold};
    font-size: 25px;
    line-height: 40px;
    cite {
      font-family: ${props => props.theme.fontBase};
      font-style: normal;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

`

const TestimonialImage = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 800px;
  width: 720px;
  overflow: hidden;
  right: 0;
  display: flex;
  justify-content: flex-end;

  div {
    position: relative;
  }

  img {

    width: 100%;
  }
`

const DotContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    z-index: 3;
    position: relative;
`

const Dot = styled.a`
    position: relative;
    display: inline-block;
    margin-right: 21px;
    cursor: pointer;

    &.active {
      &:before {
        position: absolute;
        content: '';
        border-radius: 100%;
        width: 15px;
        height: 15px;
        background-color: #354463;
        top: 0;
        left: 0;
      }
    }

    &.inactive {
      &:before {
        position: absolute;
        content: '';
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        border: 1px solid #354463;
        top: 0;
        left: 0;
      }
    }

`


const Testimonials = ({ testimonials }) => {

  const [activePanel, setPanel] = useState(0)

  return (
    <TestimonialsContainer>
    <DotContainer>
      {testimonials.map((item, key) => {
        const active = activePanel === key ? 'active' : 'inactive'
        return (
            <Dot
              role="presentation"
              className={`${active}`}
              onClick={(e) => {
                e.preventDefault()
                setPanel(key)
              }}
            />
        )
      })}
      </DotContainer>
      {testimonials.map((testimonial, key) => {
        const firstItem = key === activePanel ? 'active' : 'inactive'
        return (
          <ArticleContainer key={key} className={`message ${firstItem}`}>
            <article>
              <div className="message-body">
                &#8220;{testimonial.quote}&#8221;
                <br />
                <cite>{testimonial.author}</cite>
              </div>
            </article>
            {testimonial.image &&
              <TestimonialImage>
                <div>
                  <img src={testimonial.image} />
                </div>
              </TestimonialImage>
            }
          </ArticleContainer>
        )
        }
      )}
    </TestimonialsContainer>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
      image: PropTypes.string,
    })
  ),
}

export default Testimonials
