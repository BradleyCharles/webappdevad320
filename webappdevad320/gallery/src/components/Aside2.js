import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Aside = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <aside>
      <h2>NPC's</h2>
      <hr />
      <div className="blueberry">
        <Slider {...sliderSettings}>
          <div>
            <img src="images/skele.png" alt="Skele" />
          </div>
          <div>
            <img src="images/orc.png" alt="Orc" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>

      {/* ... rest of your component ... */}
    </aside>
  );
};

export default Aside;
