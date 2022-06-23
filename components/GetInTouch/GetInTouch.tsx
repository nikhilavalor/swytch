import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./GetInTouch.module.scss";

const GetInTouch: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.topContainer}>
        <div className={s.imgWrap}>
          <Image src="/images/logo.png" alt="image" layout="fill" />
        </div>

        <div className={s.con}>
          <div className={s.text}>
            <h1>Get in touch</h1>
            <h2>Explore blockchain solutions <br></br>for your business</h2>
            <div className={s.btn}>
            <button>Contact Us</button>
            </div>
            
          </div>
        </div>
      </div>

      {/* <div className={s.imgWrap}>
        <Image src="/images/logo.png" alt="image" layout="fill" />
      </div>

      <div className={s.con}>
        <h1>Get in touch</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <button>Contact Us</button>
      </div> */}
    </div>
  );
};
export default GetInTouch;
