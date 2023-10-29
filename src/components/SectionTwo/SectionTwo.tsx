import React from "react";
import S from "./SectionTwo.module.scss";
import { ReactComponent as Signature } from "../../svgs/signature.svg";

const SectionTwo: React.FC = () => {
	return (
    <section id="section-two" data-scroll-section>
      <div className={S.section}>
        <div className={S.textWrapper}>
          <h2 className={S.title}>The story behind the brand</h2>
          <p className={S.text}>
            I'm Anderizen Voll, Lead Designer at Home & Art who has been
            designing and creating unique wall decor for more than 10 years. If you
            have a special picture of you, your baby's birthday, your Instagram
            photos, or a moment you want to immortalize, please contact me. I
            would be happy to make custom designs for you and turn them into
            canvas, glass painting, or wallpaper.
          </p>

          <p className={S.text}>
            Here, I design all my prints myself and print them in my own studio.
            You can use these beautiful prints as Wall Art Decor in every
            corner of your home or office as home decor or office decor. You can
            give a Wedding Gift or engagement Gift to your friends, or loved ones.
          </p>

          <Signature className={S.signature} />
          <p className={S.person}>Lead designer</p>
        </div>
        <div className={S.imageWrapper}>
          <div className={S.imageContainer}>
            <div data-scroll className={S.image} data-scroll-speed="-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
