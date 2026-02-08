import { useEffect, useRef } from "react";
import { TransitionLink } from "./PageTransition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Images
const heroImage =
  "http://localhost:3845/assets/2644aa5239fa0177cef9990fa5c5782972a240c2.png";
const fragranceGif =
  "http://localhost:3845/assets/aa610b929af66f984c888fc120c4fd767ea5cd8e.png";

// Packaging images (masonry grid)
const packagingImg1 =
  "http://localhost:3845/assets/1b4100a98ad510efe33cb9e720b366b9ddf913c2.png"; // Large left
const packagingImg2 =
  "http://localhost:3845/assets/ba443e6ccf5c433c57bf12536f0baa507ee4e10a.png"; // Top middle
const packagingImg3 =
  "http://localhost:3845/assets/307290196c8dc2e479913911503abc4d521f659d.png"; // Middle center
const packagingImg4 =
  "http://localhost:3845/assets/06f4418e3859d7ca2f6fb05a03a0461246d6f490.png"; // Bottom left
const packagingImg5 =
  "http://localhost:3845/assets/0d8eaa36c8d18d21af150ac3595e701a39aea8c5.png"; // Bottom middle
const packagingImg6 =
  "http://localhost:3845/assets/7548773976e07f4ad39046debc08a23ad7ad9c15.png"; // Large right

// Production images (BTS row)
const productionImg1 =
  "http://localhost:3845/assets/a463f4f469b0fa87488a705fdce555ffa2067617.png";
const productionImg2 =
  "http://localhost:3845/assets/6b0273449d185053adcc2d963368a2ee3b5625ec.png";
const productionImg3 =
  "http://localhost:3845/assets/90ac020425dd282f28c3b70e24cd45667e04d578.png";
const productionImg4 =
  "http://localhost:3845/assets/d34bcc2db0573576bb16e07d2211498ee3a1972e.png";
const productionImg5 =
  "http://localhost:3845/assets/1aff24f3fdec233fbff678bd4957c483a690f22e.png";
const productionImg6 =
  "http://localhost:3845/assets/3468920b285297f8bf86dc220db3a2a4a1483983.png";

// Rollout images
const rolloutImg1 =
  "http://localhost:3845/assets/10ab78bcdcac204c76b135eccac2e9755c2c3eb0.png";
const rolloutImg2 =
  "http://localhost:3845/assets/a00adf011b8682cb1a20b40f3ccd5186df1ccc02.png";
const rolloutImg3 =
  "http://localhost:3845/assets/bd645f60dc15a8edefaa30f79b1d4514faffadcb.png";

// Final section images
const finalImg1 =
  "http://localhost:3845/assets/f586ed9401841bd798cf0e8e0c8d5f64df442ce4.png";
const finalImg2 =
  "http://localhost:3845/assets/d36b7860aaeea0aded1b7b2bccfabd1177a82078.png";
const finalImg3 =
  "http://localhost:3845/assets/ad907cc81db4404bb21216c852fa1f85f2bee151.png";

// Videos
const signUpBannerVideo = "/_videos/v1/60fe9ff9a616a5fe0931cd079a5ca367fac0f803";
const launchAdVideo = "/_videos/v1/6b7160754a4ee84366becb199f8f9df7c0d426bd";
const websiteScrollVideo = "/_videos/v1/25b1b6d7a8d685112fd0abc9eb82d2571378d1c2";
const btsReelVideo = "/_videos/v1/01c7508981c2873184ad147340d963d9382a2c54";

const arrowIcon =
  "http://localhost:3845/assets/40dbd6901addc15b20ac3d1de97b753f18c117a6.svg";
const starIcon =
  "http://localhost:3845/assets/027e5bddce9a815b7c52f040591889f3a0f50dbe.svg";

export default function CaseStudyDeborahPagani() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to(".hero-image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade in animations for sections
      gsap.utils.toArray<HTMLElement>(".fade-in").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // Large headlines slide in
      gsap.utils.toArray<HTMLElement>(".headline-slide").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      });

      // Image reveal animations
      gsap.utils.toArray<HTMLElement>(".image-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      });

      // Staggered list items
      gsap.utils.toArray<HTMLElement>(".stagger-list").forEach((list) => {
        const items = list.querySelectorAll("li");
        gsap.fromTo(
          items,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: list,
              start: "top 80%",
              once: true,
            },
          }
        );
      });

      // Grid images stagger
      gsap.utils.toArray<HTMLElement>(".image-grid").forEach((grid) => {
        const images = grid.querySelectorAll(".grid-item");
        gsap.fromTo(
          images,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: grid,
              start: "top 75%",
              once: true,
            },
          }
        );
      });

      // Parallax on section images
      gsap.utils.toArray<HTMLElement>(".parallax-image").forEach((el) => {
        gsap.to(el, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Star icon spin animation
      gsap.utils.toArray<HTMLElement>(".star-spin").forEach((el) => {
        gsap.fromTo(
          el,
          { rotation: 0 },
          {
            rotation: 360,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white font-[Helvetica_Neue,Helvetica,Arial,sans-serif]"
    >
      {/* Hero Section */}
      <section className="hero-section relative w-full h-[605px] overflow-hidden">
        <img
          src={heroImage}
          alt="Deborah Pagani Beauty"
          className="hero-image absolute inset-0 w-full h-full object-cover object-center"
        />
      </section>

      {/* Intro Section */}
      <section className="px-6 md:px-[37px] pt-16 md:pt-20 pb-8">
        <p className="fade-in text-[11px] tracking-[0.88px] mb-4">
          DEBORAH PAGANI BEAUTY
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <h2 className="headline-slide font-light text-[48px] md:text-[82px] tracking-[-4px] md:tracking-[-6.56px] leading-[1] md:leading-[64px]">
            PRODUCT LAUNCH
          </h2>
          <div className="fade-in text-[11px] tracking-[0.88px] leading-[1.5] max-w-[395px] space-y-4">
            <p>
              For the launch of Deborah Pagani Beauty's first two products, I
              led creative direction, strategy, and design across every brand
              touchpoint—building a cohesive visual world that introduced the
              products and established the brand in a new category from day one.
              Rather than anchoring the launch to a single campaign or fixed
              narrative, the goal was to create a flexible system of elements,
              language, and visuals that could evolve over time.
            </p>
            <p>
              Standing out in an already saturated market was the real
              challenge. From packaging and branding to the full visual library,
              I served as creative director throughout the entire process,
              ensuring the products resonated with the right audience and
              visually reflected the same level of detail, craftsmanship, and
              luxury found in the formulas themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Sign Up Banner Video Section */}
      <section className="py-8 flex justify-center">
        <div className="video-reveal w-full max-w-[848px] aspect-video bg-[#f5e6e0]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={signUpBannerVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Role & Collaborators Section */}
      <section className="px-6 py-16 flex justify-center">
        <div className="w-full max-w-[848px] flex justify-start">
          <div className="text-[11px] tracking-[0.88px] leading-[20px] uppercase max-w-[304px]">
            <div className="fade-in">
              <p className="mb-4">ROLE: Creative Director & Designer</p>
              <ul className="stagger-list list-disc ml-4 space-y-1">
                <li>End-to-end creative direction</li>
                <li>Packaging design</li>
                <li>Photography and video production</li>
                <li>Shoot casting & styling</li>
                <li>Shoot direction & prep</li>
                <li>Copywriting & marketing strategy</li>
                <li>Design execution across all launch materials</li>
                <li>Website re-design</li>
              </ul>
            </div>

            <div className="fade-in mt-6">
              <p className="mb-4">COLLABORATORS:</p>
              <ul className="stagger-list list-disc ml-4 space-y-1">
                <li>Lomotion (Videography)</li>
                <li>Teresa Luz (Hair & Makeup)</li>
                <li>Moreen Jones (Hair)</li>
                <li>Renee Cohen (Hair)</li>
                <li>Jacie Woodward (Paid Media Coordinator)</li>
                <li>Chase Durrett (Web Developer)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Sections + Media */}
      <section className="px-6 md:px-[37px] py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Challenge Text - left column */}
          <div className="flex flex-col gap-8 w-full lg:w-[368px] lg:shrink-0">
            {/* Beyond the Campaign Framework */}
            <div className="fade-in text-[11px] tracking-[0.88px] leading-[15px] uppercase max-w-[304px]">
              <p className="leading-[21px] mb-4">BEYOND THE CAMPAIGN FRAMEWORK</p>
              <p>
                Rather than a single campaign, the focus was on creating a
                flexible creative system that could support product storytelling,
                paid acquisition, organic social growth, and long-term brand
                consistency. Every asset and shoot was designed to build a world
                for the brand across email marketing, paid media, social posts,
                and web design.
              </p>
            </div>

            {/* Breaking Through the Noise */}
            <div className="fade-in text-[11px] tracking-[0.88px] leading-[15px] uppercase max-w-[304px]">
              <p className="leading-[21px] mb-4">BREAKING THROUGH THE NOISE</p>
              <p>
                The beauty industry is heavily saturated, so a key challenge for
                this launch was ensuring that the products and visuals told an
                impactful and memorable story. Leaning into the direction of the
                first truly luxury haircare experience allowed us to build a brand
                around the products and marketing to target the luxury and beauty
                obsessed with products that deliver undeniable results.
              </p>
            </div>

            {/* Execution */}
            <div className="fade-in text-[11px] tracking-[0.88px] leading-[18px] uppercase max-w-[368px]">
              <p className="leading-[21px] mb-4">EXECUTION</p>
              <ul className="stagger-list list-disc ml-4 space-y-1">
                <li>
                  Pre and post-production for two seasonal photo and video shoots
                </li>
                <li>Packaging design</li>
                <li>
                  Logo refresh to thoughtfully extend the brand into the beauty
                  category
                </li>
                <li>
                  Full website redesign reflecting the new, elevated visual
                  direction
                </li>
                <li>
                  Launch messaging, copywriting, and brand voice development
                </li>
                <li>Go-to-market launch strategy</li>
                <li>Social creative across organic and paid channels</li>
                <li>Email marketing campaign concept, design, and execution</li>
              </ul>
            </div>
          </div>

          {/* Media - right columns */}
          <div className="flex flex-col sm:flex-row gap-6 flex-1">
            {/* Fragrance Image */}
            <div className="image-reveal flex-1">
              <img
                src={fragranceGif}
                alt="Fragrance product"
                className="w-full h-auto lg:h-[700px] object-cover"
              />
            </div>

            {/* Launch Ad Video */}
            <div className="image-reveal flex-1">
              <video
                controls
                className="w-full h-auto lg:h-[700px] object-cover bg-[#f5e6e0]"
              >
                <source src={launchAdVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 01: Packaging */}
      <section className="py-16 md:py-20">
        <div className="px-6 md:px-[64px]">
          <p className="fade-in text-[11px] tracking-[0.88px] mb-4">PHASE 01:</p>
        </div>
        <div className="px-6 md:px-[59px]">
          <h2 className="headline-slide font-light text-[48px] md:text-[82px] tracking-[-4px] md:tracking-[-6.56px] leading-[1] md:leading-[64px] mb-12">
            PACKAGING
          </h2>
        </div>

        {/* Packaging Images - Masonry Grid */}
        <div className="image-grid relative w-full px-0" style={{ height: "clamp(600px, 50vw, 920px)" }}>
          {/* Large left image */}
          <div className="grid-item absolute left-0 top-0 w-[41%] h-[64%] overflow-hidden">
            <img
              src={packagingImg1}
              alt="Packaging"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Top middle small image */}
          <div className="grid-item absolute left-[31%] top-[1.5%] w-[34%] h-[17.5%] overflow-hidden">
            <img
              src={packagingImg2}
              alt="Packaging"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Middle center image */}
          <div className="grid-item absolute left-[42%] top-[26%] w-[23%] h-[48%] overflow-hidden">
            <img
              src={packagingImg3}
              alt="Packaging"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bottom left image */}
          <div className="grid-item absolute left-[12.5%] top-[62%] w-[26%] h-[44%] overflow-hidden">
            <img
              src={packagingImg4}
              alt="Packaging"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Bottom middle image */}
          <div className="grid-item absolute left-[40%] top-[79%] w-[27%] h-[21%] overflow-hidden">
            <img
              src={packagingImg5}
              alt="Packaging"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Large right image */}
          <div className="grid-item absolute left-[68%] top-[21%] w-[28%] h-[56%] overflow-hidden">
            <img
              src={packagingImg6}
              alt="Packaging"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Phase 02: Production */}
      <section className="px-0 py-16 md:py-20">
        <div className="px-6 md:px-[64px]">
          <p className="fade-in text-[11px] tracking-[0.88px] mb-4">PHASE 02:</p>
          <h2 className="headline-slide font-light text-[48px] md:text-[82px] tracking-[-4px] md:tracking-[-6.56px] leading-[1] md:leading-[64px] mb-12">
            PRODUCTION
          </h2>
        </div>

        {/* Production Images Row - Edge to Edge */}
        <div className="image-grid grid grid-cols-3 md:grid-cols-6 gap-0">
          <div className="grid-item overflow-hidden">
            <img
              src={productionImg1}
              alt="Production BTS"
              className="w-full h-auto md:h-[313px] object-cover aspect-[3/4] md:aspect-auto"
            />
          </div>
          <div className="grid-item overflow-hidden">
            <img
              src={productionImg2}
              alt="Production BTS"
              className="w-full h-auto md:h-[313px] object-cover aspect-[3/4] md:aspect-auto"
            />
          </div>
          <div className="grid-item overflow-hidden">
            <img
              src={productionImg3}
              alt="Production BTS"
              className="w-full h-auto md:h-[313px] object-cover aspect-[3/4] md:aspect-auto"
            />
          </div>
          <div className="grid-item overflow-hidden">
            <img
              src={productionImg4}
              alt="Production BTS"
              className="w-full h-auto md:h-[313px] object-cover aspect-[3/4] md:aspect-auto"
            />
          </div>
          <div className="grid-item overflow-hidden">
            <img
              src={productionImg5}
              alt="Production BTS"
              className="w-full h-auto md:h-[313px] object-cover aspect-[3/4] md:aspect-auto"
            />
          </div>
          <div className="grid-item overflow-hidden">
            <img
              src={productionImg6}
              alt="Production BTS"
              className="w-full h-auto md:h-[313px] object-cover aspect-[3/4] md:aspect-auto"
            />
          </div>
        </div>
      </section>

      {/* Phase 03: Rollout */}
      <section className="py-16 md:py-20">
        <div className="px-6 md:px-[64px]">
          <p className="fade-in text-[11px] tracking-[0.88px] mb-4">PHASE 03:</p>
        </div>
        <div className="px-6 md:px-[59px]">
          <h2 className="headline-slide font-light text-[48px] md:text-[82px] tracking-[-4px] md:tracking-[-6.56px] leading-[1] md:leading-[64px] mb-12">
            ROLLOUT
          </h2>
        </div>

        {/* Website Scroll Video */}
        <div className="px-6 md:px-[38px]">
          <div className="image-reveal mb-12">
            <video
              controls
              className="w-full h-auto object-cover"
              style={{ maxHeight: "856px" }}
            >
              <source src={websiteScrollVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Rollout Images - Three Column */}
        <div className="px-6 md:px-[43px]">
          <div className="image-grid grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="grid-item overflow-hidden">
              <img
                src={rolloutImg1}
                alt="Social media rollout"
                className="w-full h-auto sm:h-[800px] object-cover"
              />
            </div>
            <div className="grid-item overflow-hidden">
              <img
                src={rolloutImg2}
                alt="Social media rollout"
                className="w-full h-auto sm:h-[800px] object-cover"
              />
            </div>
            <div className="grid-item overflow-hidden">
              <img
                src={rolloutImg3}
                alt="Social media rollout"
                className="w-full h-auto sm:h-[800px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Images Section */}
      <section className="px-6 md:px-[55px] py-16 md:py-20">
        {/* Two side-by-side images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="image-reveal overflow-hidden">
            <img
              src={finalImg1}
              alt="Campaign execution"
              className="parallax-image w-full h-auto md:h-[821px] object-cover"
            />
          </div>
          <div className="image-reveal overflow-hidden">
            <img
              src={finalImg2}
              alt="Campaign execution"
              className="parallax-image w-full h-auto md:h-[821px] object-cover"
            />
          </div>
        </div>

        {/* BTS Reel Video and Before-After */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="image-reveal overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto md:h-[1053px] object-cover"
            >
              <source src={btsReelVideo} type="video/mp4" />
            </video>
          </div>
          <div className="image-reveal overflow-hidden">
            <img
              src={finalImg3}
              alt="Before and after"
              className="w-full h-auto md:h-[1053px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="next-case-study-section py-20 flex flex-col items-center justify-center">
        <TransitionLink
          to="/case-study/nalgene"
          className="flex items-center gap-3 text-[11px] tracking-[0.88px] hover:opacity-70 transition-opacity"
          style={{ opacity: 1 }}
        >
          <img src={starIcon} alt="" className="star-spin w-[22px] h-[22px]" />
          <span>NEXT CASE STUDY</span>
          <img src={arrowIcon} alt="" className="w-[15px] h-auto" />
        </TransitionLink>
      </section>
    </div>
  );
}
