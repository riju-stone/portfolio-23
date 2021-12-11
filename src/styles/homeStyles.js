import styled from "styled-components";
import { motion } from "framer-motion";

//home banner styles
export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`;

export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: 0;
  left: -18px;
  color: ${(props) => props.theme.turqoise};
  pointer-events: none;
  padding: 40px 80px;
`;

export const Headline = styled(motion.span)`
  display: block;
  font-size: 12rem;
  font-weight: 900;
  line-height: 1;
`;

//home content styles
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 300px;
`;

export const Content = styled.div`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${(props) => props.theme.text};
`;

//home featured styles
export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`;

export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${(props) => props.theme.text};
  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    fomt-weight: 900;
    line-height: 90px;
    margin: 0;
    .arrow {
      width: 120px;
      height: 100px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: relative;
        top: 8px;
        left: -48px;
        width: 108px;
        path {
          fill: ${(props) => props.theme.text};
        }
      }
    }
  }
`;

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
  video {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

export const FeaturedProjects = styled.div`
margin-top: 200px;
button{
  background: ${(props) => props.theme.darkTurqoise};
  color: #fff;
  position: relative;
  padding: 20px;
  display: block;
  text-align: left;
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 600;
  border: none;
  outline: none;
  border-radius: 10px;
  span{
    margin-right: 108px;
    display: block;
  }
  &:before, &:after{
    content: '',
    position: absolute;
    top: 50%;
    right: 20px;
    width: 35px;
    height: 7px;
    display: block;
    background: #fff;
    transform: translateY(-50%);
  }
  &:before{
    margin-top: -8px;
  }
  &:after{
    margin-top: 8px;
  }
}
`;
