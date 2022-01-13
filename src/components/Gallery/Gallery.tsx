import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image"
import * as React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import styled from "styled-components"

const StyledImg = styled(GatsbyImage)`
  height: ${props => props.theme.galleryImages.height};
  width: ${props => props.theme.galleryImages.width};
  object-fit: cover;
  border-radius: 10px !important;
  margin: 10px;

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: ${props => props.theme.galleryImages.minHeight};
    width: ${props => props.theme.galleryImages.minWidth};
  }
`

const StyledContainer = styled(Container)`
  padding-top: 30vh;
`

const GalleryImage = props => {
  const image = getImage(props.imageData)
  return <StyledImg image={image} alt="image"/>
}

const Gallery = props => {
  return (
    <>
      <StyledContainer>
        <Row className="justify-content-center text-center">
          {props.data.allFile.edges.map((edge, index) => {
            return (
              <Col md={"auto"} sm={"auto"} xs={"auto"} key={index}>
                <GalleryImage
                  imageData={edge.node}
                  key={index}
                />
              </Col>
            )
          })}
        </Row>
      </StyledContainer>
    </>
  )
}

export default Gallery
