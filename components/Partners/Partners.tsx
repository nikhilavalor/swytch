import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useState } from "react";

import s from "./Partners.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const slide_img = [
  "/images/nike.png",
  "/images/nike.png",
  "/images/nike.png",
  "/images/nike.png",
  "/images/nike.png",
  "/images/nike.png",
  "/images/nike.png",
  "/images/nike.png",
  "/images/nike.png",
];
const Partners: FC = () => {
  const [data, setData] = useState("");

  return (
    <div className={s.mainContainer}>
      <div className={s.partner}>
        <div className={s.part1}>
          <h1>Partners</h1>
          <h2>
            Our leading collaboration<br></br> that leverages blockchain
            <br></br> technology
          </h2>
        </div>
        <div className={s.part2}>
          <Swiper
            autoplay={{
              delay: 900,
              disableOnInteraction: false,
            }}
            spaceBetween={5}
            slidesPerView={8}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
              {slide_img.map((img, i) => {
            return (
              <SwiperSlide className={s.data} key={i}>
                <img className={s.img} src={img} alt="" />
              </SwiperSlide>
            );
          })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Partners;
