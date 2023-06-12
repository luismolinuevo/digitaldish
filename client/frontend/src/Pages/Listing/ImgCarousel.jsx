import React from "react";
import { Carousel } from "@material-tailwind/react";

export default function ImgCarousel({ url }) {
  return (
    <div>
      <Carousel>
        <img
          src={url}
          alt="listingimage"
          className="w-[704px] h-[700px]"
        />
      </Carousel>
    </div>
  );
}
