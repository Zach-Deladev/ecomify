import React from 'react';
import './Reviews.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Flag from "../assets/uk-flag.png"

function Reviews() {
  return (
    <div className="reviews mt-4">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="reviews-head-left-side">
              <p>
                <span className="reviews-head-main-rating">4.7</span>
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    style={{ marginTop: '-18px' }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="35"
                    viewBox="0 -860 860 800"
                    width="26"
                  >
                    <path
                      d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                      fill="gold"
                    ></path>
                  </svg>
                ))}
              </p>
              <p>
                Based on <em style={{ textDecoration: 'underline' }}>2</em> Reviews
              </p>
            </div>
          </Col>

          <Col lg={5} md={6} sm={12} xs={12} className="review-summary">
            <Row>
              {[...Array(5)].map((_, index) => (
                <Col key={index} xs={12} style={{ position: 'relative' }}>
                  {[...Array(index + 1)].map((_, i) => (
                    <svg
                      key={i}
                      style={{ marginTop: '-6px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      height="15"
                      viewBox="100 -860 800 800"
                      width="15"
                    >
                      <path
                        d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                        fill="gold"
                      ></path>
                    </svg>
                  ))}
                  {[...Array(5 - index - 1)].map((_, i) => (
                    <svg
                      key={i}
                      style={{ marginTop: '-6px' }}
                      xmlns="http://www.w3.org/2000/svg"
                      height="15"
                      viewBox="100 -860 800 800"
                      width="15"
                    >
                      <path
                        d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"
                        fill="#787878"
                      ></path>
                    </svg>
                  ))}
                  <div className="progress-bar-custom" style={{ display: 'inline-block' }}>
                    <div className="progress-custom" style={{ width: `${(index + 1) * 20}%` }}></div>
                  </div>
                  <div className="progress-bar-text-div">
                    <p className="progress-bar-text" style={{ display: 'inline-block' }}>
                      ({(index + 1) * 20})
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <div className="reviews-body mt-4">
        <Container>
          <Row>
            {/* Review Boxes */}
            {/* Replace the following code block with your actual review data */}
            <Col xs={12} className="review-box ms-2 me-2">
              <Row>
                <Col lg={1} md={1} xs={12}>
                  <div className="review-box-avatar">
                    <h1>D</h1>
                  </div>
                </Col>
                <Col lg={11} md={11} xs={12} className="review-box-name">
                  <div className="inline-container">
                    <h3 className="inline-element">David</h3>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="13" viewBox="0 -870 960 960" width="13">
                        <path
                          d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"
                          fill="white"
                        ></path>
                      </svg>{' '}
                      Verified Buyer
                    </span>
                  </div>
                  <div className="review-box-country">
                    <p>
                      <img src={Flag} alt="UK Flag" width="15px"/> United Kingdom
                    </p>
                  </div>
                  <div className='review-box-review-stars mt-2'>
                    <p>
                    {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          style={{ marginTop: '-18px' }}
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          viewBox="0 -860 860 800"
                          width="16"
                        >
                          <path
                            d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            fill="gold"
                          ></path>
                        </svg>
                      ))}
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p className="review-box-text">
                  Wow! These t-shirts are a game-changer! The fabric is incredibly soft, and the fit is perfect. I'm impressed with the quality and comfort they offer. Definitely my new go-to for everyday wear!
                  </p>
                </Col>
              </Row>
            </Col>

            <Col xs={12} className="review-box ms-2 me-2">
              <Row>
                <Col lg={1} md={1} xs={12}>
                  <div className="review-box-avatar">
                    <h1>A</h1>
                  </div>
                </Col>
                <Col lg={11} md={11} xs={12} className="review-box-name">
                  <div className="inline-container">
                    <h3 className="inline-element">Adam</h3>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="13" viewBox="0 -870 960 960" width="13">
                        <path
                          d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"
                          fill="white"
                        ></path>
                      </svg>{' '}
                      Verified Buyer
                    </span>
                  </div>
                  <div className="review-box-country">
                    <p>
                      <img src={Flag} alt="UK Flag" width="15px"/> United Kingdom
                    </p>
                  </div>
                  <div className='review-box-review-stars mt-2'>
                    <p>
                    {[...Array(4)].map((_, index) => (
                        <svg
                          key={index}
                          style={{ marginTop: '-18px' }}
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          viewBox="0 -860 860 800"
                          width="16"
                        >
                          <path
                            d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                            fill="gold"
                          ></path>
                        </svg>
                      ))}
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p className="review-box-text">
                  These t-shirts are fantastic! The material is top-notch, and they fit great. I've been wearing them for a while now, and they've held up really well. The only reason I'm giving them 4 stars instead of 5 is because I wish there were more color options available. Otherwise, highly recommended!
                  </p>
                </Col>
              </Row>
            </Col>
            
            {/* End Review Boxes */}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Reviews;
