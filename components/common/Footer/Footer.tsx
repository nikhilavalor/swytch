import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <>
     <div className={s.Container}>
      <div className={s.firstContainer}>
        <div className={s.partOne}>
          <h2>Find us</h2>
          <div className={s.imgs}>
            <div className={s.wrapperimg}>
              <Image src="/images/twitter.png" alt="image" layout="fill" />
            </div>
            <div className={s.wrapperimg}>
              <Image src="/images/linkedin.png" alt="image" layout="fill" />
            </div>
            <div className={s.wrapperimg}>
              <Image src="/images/telegram.png" alt="image" layout="fill" />
            </div>
          </div>
        </div>
        <div className={s.partTwo}>
          <div className={s.heads}>
            <ul className={s.col}>
              <h2>Studio</h2>
              <li>
                <a href="">Our team</a>
              </li>
              <li>
                <a href="">How we work</a>
              </li>
              <li>
                <a href="">Work culture</a>
              </li>
            </ul>
            <ul className={s.col}>
              <h2>Service</h2>
              <li>
                <a href="">Research</a>
              </li>
              <li>
                <a href="">Design</a>
              </li>
              <li>
                <a href="">Testing</a>
              </li>
              <li>
                <a href="">Development</a>
              </li>
            </ul>
            <ul className={s.col}>
              <h2>Resources</h2>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Project</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Stories</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={s.card}>
        <h2>Term of use</h2>
        <h2>Privacy Policy</h2>
        <h2>Continue setting</h2>
      </div>
    </div>
    


    </>
  );
};

export default Footer;
