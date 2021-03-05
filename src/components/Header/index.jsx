import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

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
            <div>
              <h3>{data.tag}</h3>
              <h1>{data.name}</h1>
              <p>
                <FiPlusCircle
                  style={{
                    margin: '0 0.5rem',
                    width: '20px',
                    height: '30px',
                    cursor: 'pointer',
                  }}
                />
                Saiba mais
              </p>
            </div>
          </AnimeInfo>

          <AnimeBanner animeBanner={data.image} />
        </div>
      ))}
      <LeftArrow onClick={handleLeftClick} />
      <RightArrow onClick={handleRightClick} />
    </Slider>
  );
}
