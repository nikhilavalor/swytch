import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination,} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Products.module.scss";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const slide_img = [
  "https://i.pinimg.com/originals/4d/19/e1/4d19e1180e21500b22b440ca6d15936e.png",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
  "https://swiperjs.com/demos/images/nature-6.jpg",
  "https://swiperjs.com/demos/images/nature-7.jpg",
  "https://swiperjs.com/demos/images/nature-8.jpg",
  "https://swiperjs.com/demos/images/nature-9.jpg",
];

const Products: FC = () => {
  // const[data,setData]=useState(10)
  return (
    <div className={s.container}>
      <div className={s.productSection}>
        <div className={s.slider}>
          <Swiper
      loop={true}
      autoplay={{
        delay:700,
        disableOnInteraction:false
      }}
      
        //  effect={"coverflow"}
     
        // grabCursor={true}
        slidesPerView={3}
        spaceBetween={40}
        pagination={false}
        className="mySwiper"
      >
        <SwiperSlide className={s.slider}>
          {/* <img className={s.imageWrapper}
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt=""
            height={500}
            width="100%"
          /> */}
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.imageWrapper} src="https://swiperjs.com/demos/images/nature-2.jpg" alt=""   height={500}
            width={700}/>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.imageWrapper} src="https://swiperjs.com/demos/images/nature-3.jpg" alt=""   height={500}
            width="100%"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.imageWrapper} src="https://swiperjs.com/demos/images/nature-4.jpg" alt=""   height={500}
            width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.imageWrapper} src="https://swiperjs.com/demos/images/nature-5.jpg" alt=""   height={500}
            width="100%"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.imageWrapper} src="https://swiperjs.com/demos/images/nature-6.jpg" alt=""   height={500}
            width="100%"/>
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.imageWrapper} src="https://swiperjs.com/demos/images/nature-7.jpg" alt=""  height={500}
            width="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={s.imageWrapper} src="https://swiperjs.com/demos/images/nature-8.jpg" alt=""   height={500}
            width="100%"/>
        </SwiperSlide>
       
      </Swiper>




        </div>
        <div className={s.products}>
         <p>jfbvbvk kv kbcknvbkxckvbcxvjncxkkcn </p> 
          
        </div>

      </div>


      
      
    </div>
  );
};
export default Products;
