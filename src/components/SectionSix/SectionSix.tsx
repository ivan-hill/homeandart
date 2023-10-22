import React from "react";
import S from "./SectionSix.module.scss";

const SectionSix: React.FC = () => {
	return (
    <section data-scroll-section>
      <div className={S.section}>
        <div data-scroll data-scroll-speed="-10" className={S.videoWrapper}>
          <img
            src="https://res.cloudinary.com/ihill/image/upload/v1697880564/sunglasses_swirl_r7b3vo.jpg"
            alt="sun glasses"
            className={S.img}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionSix;
