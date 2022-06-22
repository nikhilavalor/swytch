import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Swytch.module.scss";

const Swytch: FC = () => {
  return (
    <div className={s.container}>
      <nav className={s.navbar}>
      <div className={s.logo}>
        <h1>SWYTCH</h1>
        </div>
        <ul className={s.navlinks}>
        <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Our Products</a></li>
          <li><a href="#">Who We Are</a></li>
        </ul>
        <div className={s.contactBtn}>
          <p>Contact Us</p>
        </div>
      </nav>

      <div className={s.leftcontainer}>
        <h3>Join the <span className={s.markup}>3.0 revolution  </span>of
the internet</h3>
        <p className={s.info}>Unblocking opportunities one block at a time. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className={s.buttons}>
        <div className={s.primaryBtn}>
          <p>Contact Us</p>
        </div>
        <div className={s.secondaryBtn}>
          <p>Learn More</p>
        </div>
        </div>     
      </div>

      <div className={s.productSection}>
        <div className={s.products}></div>

      </div>

      
      

    </div>
  );
};
export default Swytch;
