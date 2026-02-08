import { useEffect, useRef } from "react";
import { TransitionLink } from "./PageTransition";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoPlayer from "./VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

// videos
const togethxrMicro = "/assets/videos/togethxr_micro.mp4";
const keepUpMicro = "/assets/videos/keepup_micro.mp4";
const keepUpDemo = "/assets/video/keepup_demo.mp4";

// Images
const heroImage = "/assets/c4cfbd03e4f09a9135ae9078ab30f08057982e5c.png";
const btsImage = "/assets/74d5050a6be3a969b2778a35a5e57f8c5dc74bec.png";
const conceptsImage = "/assets/2185f5df26e264fd54e75a9c3fb05321a2f16e10.png";
const direction01Image = "/assets/d57a0970620071cbfed3bba2976b444ded853d86.png";
const direction01Image2 = "/assets/2195b1c1fe9a200b3ba299a41d702d8eda760e0b.png";
const phoneImage1 = "/assets/c4f332c380d6ddee0f6f929b04f5bff629803e32.png";
const phoneImage2 = "/assets/b14010e3a0ead6c38a07ccc888beacc1a8b59873.png";
const phoneImage3 = "/assets/e668e2eb12b0bc7817688a10cea48b00e54531d9.png";
const finalImage1 = "/assets/84c73b49dae3cc5d70e20386aaed773726d847f0.png";
const arrowIcon = "/assets/40dbd6901addc15b20ac3d1de97b753f18c117a6.svg";
const starIcon = "/assets/027e5bddce9a815b7c52f040591889f3a0f50dbe.svg";

export default function CaseStudyTogethxr() {
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

      // Phone mockups stagger
      gsap.fromTo(
        ".phone-mockup",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".phone-section",
            start: "top 70%",
            once: true,
          },
        }
      );

      // Parallax on section images
      gsap.utils.toArray<HTMLElement>(".parallax-image").forEach((el) => {
        gsap.to(el, {
          yPercent: -15,
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
          alt="TOGETHXR Campaign"
          className="hero-image absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Intro Section */}
      <section className="px-6 md:px-[42px] pt-8 pb-16 md:pb-20">
        <p className="fade-in text-[11px] tracking-[0.88px] mb-4">
          TOGETHXR DIGITAL CAMPAIGN CONCEPT EXPLORATION
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <h2 className="headline-slide font-light text-[48px] md:text-[82px] tracking-[-4px] md:tracking-[-6.56px] leading-[1] md:leading-[64px]">
            TRY TO KEEP UP
          </h2>
          <p className="fade-in text-[11px] tracking-[0.88px] leading-[1.5] max-w-[395px]">
            TOGETHXR partnered with me to develop a bold digital campaign
            platform designed to drive sign-ups and engagement for their
            platform. Working as a freelance Creative Director, I led the
            concept development and execution of a campaign pitch that explored
            multiple creative territories before landing on a single scalable
            direction selected by the client.
          </p>
        </div>
      </section>

      {/* BTS Image Section */}
      <section className="py-8 flex justify-center">
        <div className="image-reveal w-full max-w-[848px] h-[533px] overflow-hidden">
          <img
            src={btsImage}
            alt="Behind the scenes"
            className="parallax-image w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Role Section */}
      <section className="px-6 md:pl-[296px] py-16">
        <div className="fade-in text-[11px] tracking-[0.88px] leading-[20px] uppercase max-w-[328px]">
          <p className="mb-4">ROLE: Creative Director & Designer</p>
          <ul className="stagger-list list-disc ml-4 space-y-1">
            <li>Creative Direction & Concept Exploration</li>
            <li>Concept Platform Pitch Presentation</li>
            <li>Art Direction & Design Execution</li>
            <li>Concept Video Sizzle Treatment</li>
            <li>Final Output Video Edit & Delivery</li>
          </ul>
        </div>
      </section>

      {/* Phase 01 Section */}
      <section className="px-6 md:px-[37px] py-16 md:py-20">
        <p className="fade-in text-[11px] tracking-[0.88px] mb-4">
          CREATIVE PLATFORM EXPLORATION
        </p>
        <h2 className="headline-slide font-light text-[48px] md:text-[82px] tracking-[-4px] md:tracking-[-6.56px] leading-[1] md:leading-[64px] mb-12">
          PHASE 01:
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Left Column - Text blocks stacked */}
          <div className="lg:w-[304px] lg:shrink-0 space-y-[108px]">
            {/* Opportunity */}
            <div className="fade-in text-[11px] tracking-[0.88px] leading-[15px] uppercase max-w-[304px]">
              <p className="leading-[21px] mb-5">OPPORTUNITY</p>
              <p>
                TOGETHXR needed a campaign that could cut through crowded digital
                placements while clearly communicating the value of their
                platform. The challenge was to create a system that felt
                energetic, aspirational, and culturally relevant, while remaining
                flexible across video, social, and static executions.
              </p>
            </div>

            {/* Building on Momentum */}
            <div className="fade-in text-[11px] tracking-[0.88px] leading-[15px] uppercase max-w-[304px]">
              <p className="leading-[21px] mb-5">BUILDING ON MOMENTUM</p>
              <p>
                TOGETHXR had already made a huge impact in the world of sports
                with a viral moment around their Nike collaboration "Everyone
                Watches Women's Sports". They wanted this new campaign to continue
                the story and highlight the momentum that was building around
                female athletes.
              </p>
            </div>

            {/* Execution */}
            <div className="fade-in text-[11px] tracking-[0.88px] leading-[15px] uppercase max-w-[304px]">
              <p className="leading-[21px] mb-5">EXECUTION</p>
              <p>
                Before landing on the final direction, I developed three distinct
                campaign platforms, each with its own narrative, visual language,
                and sample executions to help the client evaluate tone,
                positioning, and scalability.
              </p>
            </div>
          </div>

          {/* Right Column - Concepts Image */}
          <div className="image-reveal lg:flex-1 lg:ml-auto overflow-hidden">
            <img
              src={conceptsImage}
              alt="Campaign concepts"
              className="w-full lg:w-[952px] h-auto lg:h-[538px] object-cover lg:ml-auto"
            />
          </div>
        </div>
      </section>

      {/* Direction 01 Section */}
      <section className="py-16 md:py-20">
        <div className="px-6 md:px-[42px]">
          <p className="fade-in text-[11px] tracking-[0.88px] mb-4">
            CREATIVE PLATFORM EXPLORATION
          </p>
          <h2 className="headline-slide font-light text-[48px] md:text-[82px] tracking-[-4px] md:tracking-[-6.56px] leading-[1] md:leading-[64px] mb-12">
            DIRECTION 01
          </h2>
        </div>

        {/* Full bleed image */}
        <div className="image-reveal overflow-hidden">
          <img
            src={direction01Image}
            alt="Direction 01 concept"
            className="parallax-image w-full h-auto object-cover"
          />
        </div>

        {/* Two images below */}
        <div className="px-6 md:px-[42px] mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="image-reveal overflow-hidden">
            <img
              src={direction01Image2}
              alt="Direction 01 detail"
              className="w-full h-auto lg:h-[829px] object-cover"
            />
          </div>
               <VideoPlayer
                      src={togethxrMicro}
                      controls={true}
                      className="video-reveal w-full aspect-auto max-w-[848px]"
                      ariaLabel="Behind the scenes video of Mother's Milk campaign"
                    />
        </div>
      </section>

      {/* Client Selected Direction */}
      <section className="px-6 md:px-[42px] py-16 md:py-20">
        <p className="fade-in text-[11px] tracking-[0.88px] mb-4">
          CLIENT SELECTED PLATFORM DIRECTION
        </p>
        <h2 className="headline-slide font-light text-[48px] md:text-[82px] tracking-[-4px] md:tracking-[-6.56px] leading-[1] md:leading-[64px] mb-12">
          TRY TO KEEP UP
        </h2>

        {/* Phone Mockups */}
        <div className="phone-section grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16">
          <div className="phone-mockup overflow-hidden">
            <img
              src={phoneImage3}
              alt="Campaign on mobile"
              className="w-full h-auto lg:h-[667px] object-cover"
            />
          </div>
          <div className="phone-mockup overflow-hidden">
            <img
              src={phoneImage1}
              alt="Campaign on mobile"
              className="w-full h-auto lg:h-[668px] object-cover"
            />
          </div>
          <div className="phone-mockup overflow-hidden">
            <img
              src={phoneImage2}
              alt="Campaign on mobile"
              className="w-full h-auto lg:h-[667px] object-cover"
            />
          </div>
        </div>

        {/* Two large images/videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 pb-12">
          <div className="image-reveal overflow-hidden">
            <img
              src={finalImage1}
              alt="Campaign execution"
              className="w-full h-auto lg:h-[893px] object-cover"
            />
          </div>
            <VideoPlayer
                      src={keepUpMicro}
                      autoPlay
                      controls={false}
                      loop
                      muted
                      className="video-reveal w-full max-w-[848px] aspect-auto"
                      ariaLabel="Behind the scenes video of Mother's Milk campaign"
                    />
        </div>

        {/* Description and Deliverables */}
        <div className="flex flex-col lg:flex-row gap-12 lg:justify-between">
          {/* Try to Keep Up description */}
          <div className="fade-in text-[11px] tracking-[0.88px] leading-[15px] uppercase max-w-[304px]">
            <p className="leading-[21px] mb-5">TRY TO KEEP UP</p>
            <p className="mb-5">
              An in your face,
              <br />
              no punches pulled,
              <br />
              rally cry from female athletes
              <br />
              to the world.
            </p>
            <p>
              This direction draws directly from the movement behind the
              TOGETHXR x NIKE collaboration, maintaining a confident, bold tone
              while layering in a strong sense of urgency and FOMO. The
              messaging and manifesto serve as a call to action—inviting
              audiences to sign up and follow TOGETHXR for all things women's
              sports—while amplifying the momentum building within the fandom.
              Through its language, attitude, and high-impact visuals, the
              concept was designed to flex seamlessly across every touchpoint,
              from digital and social to in-person activations.
            </p>
          </div>

          {/* Deliverables */}
          <div className="fade-in text-[11px] tracking-[0.88px] leading-[20px] uppercase max-w-[328px]">
            <p className="mb-4">DELIVERABLES</p>
            <ul className="stagger-list list-disc ml-4 space-y-1">
              <li>CREATIVE PLATFORM OVERVIEW & PRESENTATION</li>
              <li>MANIFESTO & ESTABLISHED TONE/VOICE</li>
              <li>ART DIRECTION & DESIGN OVERVIEW</li>
              <li>CONCEPT VIDEO SIZZLE TREATMENT</li>
              <li>FINAL OUTPUT VIDEO EDIT & DELIVERY</li>
              <li>ACTIVATION CONCEPTS FOR SOCIAL MEDIA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final Video Section */}
      <section className="px-6 md:px-[51px] py-16 flex justify-center">
          <VideoPlayer
                      src={keepUpDemo}
                      controls={true}
                      className="video-reveal w-full max-w-[848px] aspect-video"
                      ariaLabel="Behind the scenes video of Mother's Milk campaign"
                    />
      </section>

      {/* Next Case Study */}
      <section className="py-20 flex flex-col items-center justify-center">
        <TransitionLink
          to="/case-study/deborah-pagani"
          className="flex items-center gap-3 text-[11px] tracking-[0.88px] hover:opacity-70 transition-opacity"
          style={{ opacity: 1, transform: 'none' }}
        >
          <img src={starIcon} alt="" className="star-spin w-[22px] h-[22px]" />
          <span>NEXT CASE STUDY</span>
          <img src={arrowIcon} alt="" className="w-[15px] h-auto" />
        </TransitionLink>
      </section>
    </div>
  );
}
