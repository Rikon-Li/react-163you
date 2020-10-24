import React from "react";

const Banner = React.forwardRef(({ data }, ref) => {
  return (
    <div className="banner swiper-container" ref={ref}>
      <div className="swiper-wrapper">
        {data.map((item) => (
          <div className="swiper-slide" key={item.id}>
            <img src={item.picUrl} alt="" />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
});

Banner.displayName = "Banner";

export default Banner;
