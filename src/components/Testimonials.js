import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'
import styled from 'styled-components'

const TestimonialsContainer = styled.div`

  margin: 80px auto;

  article {
    background-color: #354463;
    color: white;
    width: 544px;
    margin: 0 200px;

    &.inactive {
      display: none;
    }

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
  }

`

const TestimonialImage = styled.div`

`

const Testimonials = ({ testimonials }) => (
  <TestimonialsContainer>
    {testimonials.map((testimonial, key) => {
      const firstItem = key === 0 ? 'active' : 'inactive'
      return (
        <>
        <article key={key} className={`message ${firstItem}`}>
          <div className="message-body">
            &#8220;{testimonial.quote}&#8221;
            <br />
            <cite>{testimonial.author}</cite>
          </div>
        </article>
        <>
        {testimonial.image &&
          <TestimonialImage>

          </TestimonialImage>
        }
        </>
        </>
      )
      }
    )}
  </TestimonialsContainer>
)

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default Testimonials
