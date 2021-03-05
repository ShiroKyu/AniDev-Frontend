import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Slider = styled.header`
  width: 100vw;
  height: 100vh;

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
  width: 30vw;
  height: 40vh;

  margin-left: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: rgba(61, 53, 53, 0.685);
  border-radius: 30px;
  color: rgba(253, 253, 253, 0.767);

  div {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 2.5rem;
    padding: 10px;
  }

  h3 {
    font-size: 1rem;
    padding: 10px;
  }

  p {
    display: flex;
    align-items: center;
  }
`;

export const AnimeBanner = styled.div`
  width: 100%;
  height: 100%;

  /* background-image: url('img/header3.png'); */
  background-image: url(${props => props.animeBanner});
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: -100;
`;

export const LeftArrow = styled(FiChevronLeft)`
  width: 3.5rem;
  height: 4.5rem;

  color: rgba(202, 174, 174, 0.897);

  position: absolute;
  bottom: 2%;
  right: 13%;

  cursor: pointer;
`;

export const RightArrow = styled(FiChevronRight)`
  width: 3.5rem;
  height: 4.5rem;

  color: rgba(202, 174, 174, 0.897);

  position: absolute;
  bottom: 2%;
  right: 8%;

  cursor: pointer;
`;
