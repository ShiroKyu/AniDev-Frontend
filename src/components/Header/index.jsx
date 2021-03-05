import React, { useState } from 'react';

import {
  Slider,
  AnimeInfo,
  AnimeBanner,
  LeftArrow,
  RightArrow,
} from './styled';

import { sliderData } from './SliderData';

export default function Header() {
  const [slide, setSlide] = useState(0);
  const len = sliderData.length;

  function handleRightClick() {
    setSlide(slide === len - 1 ? 0 : slide + 1);
  }

  function handleLeftClick() {
    setSlide(slide === 0 ? len - 1 : slide - 1);
  }

  setTimeout(handleRightClick, 10000);

  return (
    <Slider>
      {sliderData.map((data, index) => (
        <div
          key={index}
          className={slide === index ? 'slide active' : 'slide notActive'}
        >
          <AnimeInfo>
            <h3>{data.tag}</h3>
            <h1>{data.name}</h1>
            <p>Saiba mais</p>
          </AnimeInfo>

          <AnimeBanner animeBanner={data.image} />
        </div>
      ))}
      <LeftArrow onClick={handleLeftClick} />
      <RightArrow onClick={handleRightClick} />
    </Slider>
  );
}
