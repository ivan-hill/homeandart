import gsap from "gsap";
import S from "./SectionThree.module.scss";
import React, { useEffect, useRef } from "react";
import locomotiveScrub from "../../animations/utils/locomotive-scrub";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { ReactComponent as RotatingText } from "../../svgs/rotating-text.svg";

type SectionThreeProps = {
	scroll: any;
};

const SectionThree: React.FC<SectionThreeProps> = ({ scroll }) => {
	let progress: number;
	const ref = useRef<HTMLDivElement>(null);
	const SVGRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const isOnScreen = useIntersectionObserver(ref, 0.125);

	useEffect(() => {
		if (isOnScreen && imageRef.current) {
			gsap.to(imageRef.current, {
				scale: 1,
				duration: 4,
				ease: "expo.out",
				clipPath: "inset(0% 0% 0% 0%)",
			});
		}
	}, [isOnScreen, imageRef.current]);

	useEffect(() => {
		if (scroll) {
			const tl = gsap.timeline({ paused: true });
			tl.to(SVGRef.current, {
				duration: 8,
				rotate: 720,
			});
			locomotiveScrub(scroll, "section-three", progress, tl);
		}
	}, [scroll]);

	return (
    <section data-scroll data-scroll-section data-scroll-id="section-three">
      <div className={S.section}>
        <div className={S.textWrapper}>
          <h2 className={S.title}>Made from the heart, for you</h2>
          <p className={S.text}>
            Home & Art immortalizes your most beautiful memories and adds color to your
            warm home or office with beautiful designs. The point where quality
            and price turns into Wall Art Canvas.
          </p>
        </div>
        <div ref={ref} className={S.imageWrapper}>
          <div className={S.imageContainer}>
            <img
              alt=""
              ref={imageRef}
              className={S.image}
              src="https://res.cloudinary.com/ihill/image/upload/v1697966451/wallpaper_sections_bccafi.jpg"
            />
          </div>
          <div ref={SVGRef} className={S.svg}>
            <RotatingText width="100%" height="100%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
