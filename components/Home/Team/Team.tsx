import { BrandLogo } from "@components/ui";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Team.module.scss";

const Team: FC = () => {
  return (
    <div className={s.container}>
      <h1>The A Team</h1>
      <p className={s.teamDesc}>
        Each experts in their field, the core team is dedicated to realizing a
        decentralized autonomously owned NFT Marketplace
        <br />
        where holders have the power.
      </p>
      <div className={s.deck}>
        <div className={s.cards}>
          <div className={s.imageWrapper}>
            <div className={s.img}>
              <Image src="/images/Rectangle.png" alt="image" layout="fill" />
            </div>
          </div>
          <p className={s.title}>Johny Decker</p>
          <p className={s.designation}>Designation</p>
        </div>
        <div className={s.cards}>
          <div className={s.imageWrapper}>
            <div className={s.img}>
              <Image src="/images/Rectangle.png" alt="image" layout="fill" />
            </div>
          </div>
          <p className={s.title}>Johny Decker</p>
          <p className={s.designation}>Designation</p>
        </div>
        <div className={s.cards}>
          <div className={s.imageWrapper}>
            <div className={s.img}>
              <Image src="/images/Rectangle.png" alt="image" layout="fill" />
            </div>
          </div>
          <p className={s.title}>Johny Decker</p>
          <p className={s.designation}>Designation</p>
        </div>
        <div className={s.cards}>
          <div className={s.imageWrapper}>
            <div className={s.img}>
              <Image src="/images/Rectangle.png" alt="image" layout="fill" />
            </div>
          </div>
          <p className={s.title}>Johny Decker</p>
          <p className={s.designation}>Designation</p>
        </div>
      </div>
    </div>
  );
};
export default Team;
