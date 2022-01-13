import { graphql } from "gatsby"
import * as React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { I18nextProvider, useTranslation, withTranslation } from "react-i18next"
import styled, { ThemeProvider } from "styled-components"
import "../../static/styles/bootstrap.css"
import AngledStrip from "../components/AngledStrip"
import Caption from "../components/Caption"
import FixedBackground from "../components/FixedBackground"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PictureLink from "../components/PictureLink"
import i18n from "../i18n"
import theme, { GlobalStyle } from "../theme"

const StyledContainer = styled(Container)`
  padding-top: ${props => props.theme.pictureLinks.paddingTop};
  width: 80vw;
`

const StyledCol = styled(Col)`
  float: none;
  margin: 0 auto;
`

const Index = ({ data }) => {
  const { t } = useTranslation()
  console.log(data);
  return (
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Header
              title="Chocologo"
              description={t("headerDescription")}
              img={data.headerBackground.childImageSharp.gatsbyImageData.images.fallback.src}
          />
          <AngledStrip
              title={t("first.title")}
              description={t("first.description")}
          />

          <FixedBackground
              img={data.firstFixedBackground.childImageSharp.gatsbyImageData.images.fallback.src}
          >
            <Caption caption={t("first.floating.badge")} />
          </FixedBackground>

          <AngledStrip
              title={t("second.title")}
              description={t("second.description")}
          />

          <FixedBackground
              img={data.secondFixedBackground.childImageSharp.gatsbyImageData.images.fallback.src}
          >
            <Caption caption={t("second.floating.badge")} />
          </FixedBackground>

          <AngledStrip title={t("third.title")} description={""} />

          <FixedBackground
              img={data.thirdFixedBackground.childImageSharp.gatsbyImageData.images.fallback.src}
              height="auto"
          >
            <StyledContainer>
              <Row className="justify-content-center text-center">
                <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                  <PictureLink
                      to={"/birthdays"}
                      src={data.image1.childImageSharp.gatsbyImageData.images.fallback.src}
                      description={"Birthdays"}
                  />
                </StyledCol>
                <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                  <PictureLink
                      to={"/"}
                      src={data.image1.childImageSharp.gatsbyImageData.images.fallback.src}
                      description={"Lorem ipsum dolor sit amet."}
                  />
                </StyledCol>
                <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                  <PictureLink
                      to={"/"}
                      src={data.image1.childImageSharp.gatsbyImageData.images.fallback.src}
                      description={"Lorem ipsum dolor sit amet."}
                  />
                </StyledCol>
                <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                  <PictureLink
                      to={"/"}
                      src={data.image1.childImageSharp.gatsbyImageData.images.fallback.src}
                      description={"Lorem ipsum dolor sit amet."}
                  />
                </StyledCol>
                <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                  <PictureLink
                      to={"/"}
                      src={data.image1.childImageSharp.gatsbyImageData.images.fallback.src}
                      description={"Lorem ipsum dolor sit amet."}
                  />
                </StyledCol>
                <StyledCol md={"auto"} sm={"auto"} xs={"auto"}>
                  <PictureLink
                      to={"/"}
                      src={data.image1.childImageSharp.gatsbyImageData.images.fallback.src}
                      description={"Lorem ipsum dolor sit amet."}
                  />
                </StyledCol>
              </Row>
            </StyledContainer>
          </FixedBackground>
          <Footer />
        </ThemeProvider>
      </I18nextProvider>
  )
}

export const query = graphql`
  {
    headerBackground: file(relativePath: { eq: "background_main.jpg" }) {
      childImageSharp {
       gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: DOMINANT_COLOR)
      }
    }
    firstFixedBackground: file(relativePath: { eq: "first.jpg" }) {
      childImageSharp {
       gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: DOMINANT_COLOR)
      }
    }
    secondFixedBackground: file(relativePath: { eq: "second.jpg" }) {
      childImageSharp {
       gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: DOMINANT_COLOR)
      }
    }
    thirdFixedBackground: file(relativePath: { eq: "third.jpg" }) {
      childImageSharp {
       gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: DOMINANT_COLOR)
      }
    }
    image1: file(relativePath: { eq: "chocolate1.jpg" }) {
      childImageSharp {
       gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: DOMINANT_COLOR)
      }
    }
  }
`

export default withTranslation()(Index)
