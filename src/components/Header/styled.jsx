import styled from 'styled-components';

export const Slider = styled.header`
  width: 100vw;
  height: 100vh;
  background: red;
  display: flex;
  position: relative;

  .slide {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    transition: transform 0.5s;

    position: absolute;
  }

  .active {
    transform: translateX(0);
  }

  .notActive {
    transform: translateX(-100vw);
  }
`;

export const AnimeInfo = styled.div`
  width: 40vw;
  height: 20vw;
  background: blue;
  margin-left: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3rem;
    padding: 1rem;
  }

  h3 {
    background: yellow;
    width: fit-content;
  }
`;

export const AnimeBanner = styled.div`
  width: 100%;
  height: 100%;
  background: green;
  /* background-image: url('img/header3.png'); */
  background-image: url(${props => props.animeBanner});
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: -100;
`;

export const LeftArrow = styled.div`
  width: 20px;
  height: 20px;
  background: #660b66;

  position: absolute;
  bottom: 50%;
  left: 30px;

  cursor: pointer;
`;

export const RightArrow = styled.div`
  width: 20px;
  height: 20px;
  background: violet;

  position: absolute;
  bottom: 50%;
  right: 30px;

  cursor: pointer;
`;
