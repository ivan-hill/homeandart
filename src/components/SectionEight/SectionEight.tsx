import gsap from "gsap";
import { LongLine } from "../LongLine";
import React, { useEffect } from "react";
import S from "./SectionEight.module.scss";
import useRefArray from "../../hooks/useRefArray";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

type SectionEightProps = {
	windowWidth: number;
};

const SectionEight: React.FC<SectionEightProps> = ({ windowWidth }) => {
	const refs = useRefArray<SVGSVGElement>(5);
	const linesVisibility: boolean[] = [
		useIntersectionObserver(refs[0], 1),
		useIntersectionObserver(refs[1], 1),
		useIntersectionObserver(refs[2], 1),
		useIntersectionObserver(refs[3], 1),
		useIntersectionObserver(refs[4], 1),
	];

	useEffect(() => {
		if (!refs) return;
		refs.forEach((ref, i) => {
			if (linesVisibility[i]) {
				gsap.to(ref.current?.firstChild, {
					delay: windowWidth > 1024 ? 0.5 : 0.2,
					duration: 2.5,
					ease: "expo.out",
					strokeDashoffset: 0,
				});
			}
		});
	}, [linesVisibility, refs]);

	return (
    <section id="section-eight" data-scroll-section>
      <div className={S.section}>
        <div className={S.box}>
          <LongLine
            ref={refs[0]}
            className={S.line}
            windowWidth={windowWidth}
          />
          <p className={S.title}>Chimela</p>
          <p className={S.text}>
            Each piece of the Chimela has been designed to accentuate the beauty
            of the female form, from the intricate point d'esprit embroidery.
            The simplicity and minimal approach is what makes each atmosphere
            collection unique.
          </p>
          <img
            className={S.img}
            src="https://res.cloudinary.com/ihill/image/upload/v1697971123/up_peeling_ulc2qo.jpg"
            alt="her"
          />
        </div>
        <div className={S.box}>
          <LongLine
            ref={refs[1]}
            className={S.line}
            windowWidth={windowWidth}
          />
          <p className={S.title}>Turbis</p>
          <p className={S.text}>
            Designed by luchesse and crafted using luscious fabrics, this Turbis
            collection is as opulent as it is versatile. Versatile enough to
            take on many different patterns and sizes of canvas wall art.
          </p>
          <img
            className={S.img}
            src="https://res.cloudinary.com/ihill/image/upload/v1697971076/small_wall_zuugpg.jpg"
            alt="her"
          />
        </div>
        <div className={S.box}>
          <LongLine
            ref={refs[2]}
            className={S.line}
            windowWidth={windowWidth}
          />
          <p className={S.title}>Ardoniss</p>
          <p className={S.text}>
            Ardoniss is a fashion collection of interior design art like
            livingroom wall decor, bedroom decor, kitchen decor, bathroom
            canvas, office decor, hotel decor, gym decor, and many other places
            in your life which will change your atmosphere.
          </p>
          <img
            className={S.img}
            src="https://res.cloudinary.com/ihill/image/upload/v1697971390/multipart_wallpaper_hieajf.jpg"
            alt="her"
          />
        </div>
        <div className={S.box}>
          <LongLine
            ref={refs[3]}
            className={S.line}
            windowWidth={windowWidth}
          />
          <p className={S.title}>Plaid</p>
          <p className={S.text}>
            Plaid is a clean, modern, and minimalistic canvas paintings that are
            carefully printed on top-quality cotton canvas with certified
            eco-friendly ink that can be easily cleaned with a damp cloth.
          </p>
          <img
            className={S.img}
            src="https://res.cloudinary.com/ihill/image/upload/v1697971287/whitesofa_s654up.jpg"
            alt="her"
          />
          <LongLine
            ref={refs[4]}
            className={S.line}
            windowWidth={windowWidth}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
