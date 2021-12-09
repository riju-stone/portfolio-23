import styled from "styled-components";

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
  }
`;

export const Canvas = styled.canvas`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
`;

export const BannerTitle = styled.h1`
  position: absolute;
  bottom: -20px;
  left: -18px;
  color: ${(props) => props.theme.text};
  pointer-events: none;
  padding: 40px 80px;
`;

export const Headline = styled.span`
  display: block;
  font-size: 12rem;
  font-weight: 900;
  line-height: 1;
`;
