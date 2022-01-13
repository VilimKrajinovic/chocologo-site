import * as React from "react"
import styled from "styled-components"
import { Tween } from "react-gsap"
import LazyLoad, { lazyload } from "react-lazyload"

const MainCaption = styled.span`
  text-align: center;
  color: white;
  width: 100%;
  font-family: Moonflower;
  text-transform: none;
  font-size: 50px;
`

const CaptionWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`

const RoundedBox = styled.div`
  background: linear-gradient(
    90deg,
    ${props => props.theme.strips.gradient.from} 10%,
    ${props => props.theme.strips.gradient.to} 90%
  );
  border-radius: 20px;
  position: absolute;
  width: 15vw;
  left: 100%;
  color: #f7f7f7;
  text-align: center;
  transform: translateY(-50%) translateX(-50%);
  height: auto;
  padding: 10px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`
const Caption = props => {
  return (
    <LazyLoad height={100} once offset={-350}>
      <Tween from={{ y: "50px", opacity: 0, delay: 0.1 }}>
        <CaptionWrapper>
          <RoundedBox>
            <MainCaption>{props.caption}</MainCaption>
          </RoundedBox>
        </CaptionWrapper>
      </Tween>
    </LazyLoad>
  )
}

export default Caption
