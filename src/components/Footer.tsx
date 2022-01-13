import * as React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import styled from "styled-components"
import "../../static/styles/bootstrap.css"

const FooterStyle = styled.footer`
  background: #f77700;
  vertical-align: center;
  color: ${props => props.theme.colors.footer.main};
  padding: 40px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: -1000;
  height: ${props => props.theme.footer.height};
`

const StyledRow = styled(Row)`
  max-width: 640px;
  margin: 0 auto;
`

const StyledCol = styled(Col)`
  text-align: center;
`

const StyledUl = styled.ul`
  list-style-type: circle;
`

const StyledLi = styled.li`
  list-style-type: none;
`

const StyledA = styled.a`
  color: ${props => props.theme.colors.footer.main};

  :hover {
    color: ${props => props.theme.colors.footer.dark};
  }
`

const StyledDiv = styled.div``

const Footer = () => {
  return (
    <FooterStyle>
      <StyledDiv>
        <StyledRow>
          <StyledCol xs>
            <strong>FIND US ON</strong>
          </StyledCol>
          <StyledCol xs>
            <strong>OTHER LIKS</strong>
          </StyledCol>
          <StyledCol xs>
            <strong>CONTACT US</strong>
          </StyledCol>
        </StyledRow>
        <StyledRow>
          <StyledCol xs>
            <StyledA href="https://www.facebook.com/chocologo.hr/">
              Facebook
            </StyledA>
          </StyledCol>
          <StyledCol xs>
            <StyledA href="https://www.facebook.com/chocologo.hr/">
              Facebook
            </StyledA>
          </StyledCol>
          <StyledCol xs>
            <StyledA href="https://www.facebook.com/chocologo.hr/">
              Facebook
            </StyledA>
          </StyledCol>
        </StyledRow>
      </StyledDiv>
    </FooterStyle>
  )
}

export default Footer
