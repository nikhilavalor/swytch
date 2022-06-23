import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./News.module.scss";

const News: FC = () => {
  return (
    <div className={s.mainContainer}>
      <div className={s.upperContainer}>
        <h1>Latest News</h1>
        <div className={s.content}>
          <h2>
            Get yourself the right information on web3 and blockchain and
            workout on <br></br>technology that suits your business
          </h2>
        </div>
      </div>

      <div className={s.card}>
        <div className={s.cards}>
          <div className={s.imgWrap}>
            <Image src="/images/img1.png" alt="image" layout="fill" />
          </div>
          <div className={s.daysCount}>
            <h2>3days ago</h2>
          </div>
          <h1>Lorem ipsum dolor </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            nibh a, elit hac augue malesuada
          </h2>
          <h3>{"Read More >>"}</h3>
        </div>
        <div className={s.cards}>
          <div className={s.imgWrap}>
            <Image src="/images/img1.png" alt="image" layout="fill" />
          </div>
          <div className={s.daysCount}>
            <h2>3days ago</h2>
          </div>
          <h1>Lorem ipsum dolor </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            nibh a, elit hac augue malesuada
          </h2>
          <h3>{"Read More >>"}</h3>
        </div>
        <div className={s.cards}>
          <div className={s.imgWrap}>
            <Image src="/images/img1.png" alt="image" layout="fill" />
          </div>
          <div className={s.daysCount}>
            <h2>3days ago</h2>
          </div>

          <h1>Lorem ipsum dolor </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            nibh a, elit hac augue malesuada
          </h2>
          <h3>{"Read More >>"}</h3>
        </div>
      </div>
    </div>
  );
};
export default News;
