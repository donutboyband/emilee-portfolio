import { useEffect, useRef, useState } from "react";
import { TransitionLink } from "./PageTransition";
import VideoPlayer from "./VideoPlayer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// Video
const mmBTS = "/assets/videos/mm_bts.mp4";
const mmTwo = "/assets/videos/mm_two.mp4"
// Images
const heroImage = "/assets/343cab8934af33e34f9a29a7629c76689057ac57.webp";
const lifestyleImage = "/assets/cf65c10e851254b63f64e0ca84ff0d8586e0add1.webp";
const starIcon = "/assets/027e5bddce9a815b7c52f040591889f3a0f50dbe.svg";
// YouTube spots (first entry is featured)
const youtubeVideos = [
  { id: "9YbrO_UZSUw", title: "Where Wisdom Meets Wellness" },
  { id: "BFQh09MBktM", title: "Meet Throat Coat® Lozenges" },
  // No maxres thumbnail exists for this one; sddefault's letterboxing is cropped by object-cover
  { id: "wyoB5ImDFvo", title: "Sore Throat? There's a Tea for That", posterSize: "sddefault" },
];

function YouTubeSpot({
  id,
  title,
  index,
  featured = false,
  posterSize = "maxresdefault",
}: {
  id: string;
  title: string;
  index: number;
  featured?: boolean;
  posterSize?: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const number = String(index + 1).padStart(2, "0");

  return (
    <figure className="video-reveal group flex flex-col h-full">
      <div
        className={`relative w-full aspect-video overflow-hidden bg-black ${
          featured ? "lg:aspect-auto lg:flex-1" : ""
        }`}
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label={`Play ${title}`}
            className="absolute inset-0 w-full h-full cursor-pointer text-white"
          >
            <img
              src={`https://i.ytimg.com/vi/${id}/${posterSize}.jpg`}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <span className="absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/40" />
            <span
              className={`absolute flex items-center gap-3 text-[11px] tracking-[0.88px] uppercase ${
                featured ? "left-6 bottom-6 md:left-8 md:bottom-8" : "left-5 bottom-5"
              }`}
            >
              <span
                className={`flex items-center justify-center rounded-full border border-white/80 transition-all duration-500 group-hover:bg-white group-hover:text-black ${
                  featured ? "w-14 h-14" : "w-10 h-10"
                }`}
              >
                <svg
                  viewBox="0 0 10 12"
                  className={featured ? "w-3 h-3.5 ml-0.5" : "w-2.5 h-3 ml-0.5"}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 0l10 6-10 6z" />
                </svg>
              </span>
              <span className="opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                Play spot
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-4 pt-3 border-t border-black/15 flex items-baseline gap-4 text-[11px] tracking-[0.88px] uppercase">
        <span className="tabular-nums text-black/40">{number}</span>
        <span className="flex-1">{title}</span>
      </figcaption>
    </figure>
  );
}

export default function CaseStudyTraditionalMedicinals() {
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

      // Video section scale in
      gsap.utils.toArray<HTMLElement>(".video-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
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
      {/* YouTube Spots Section */}
      <section className="px-6 md:px-[42px] pt-10 md:pt-14 pb-12 md:pb-16">
        <div className="fade-in flex items-baseline justify-between border-b border-black pb-3 mb-8 md:mb-10 text-[11px] tracking-[0.88px] uppercase">
          <span>Traditional Medicinals — Spots</span>
          <span className="tabular-nums">
            ({String(youtubeVideos.length).padStart(2, "0")})
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-10">
          <div className="lg:col-span-8">
            <YouTubeSpot {...youtubeVideos[0]} index={0} featured />
          </div>
          <div className="lg:col-span-4 flex flex-col gap-10 lg:gap-8">
            {youtubeVideos.slice(1).map((video, i) => (
              <YouTubeSpot key={video.id} {...video} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section relative w-full h-[605px] overflow-hidden">
        <img
          src={heroImage}
          alt="Traditional Medicinals Mother's Milk"
          className="hero-image absolute inset-0 w-full h-full object-cover"
        />
      </section>

      {/* Intro Section */}
      <section className="px-6 md:px-[42px] pt-8 pb-16 md:pb-20">
        <p className="fade-in text-[11px] tracking-[0.88px] mb-4">
          TRADITIONAL MEDICINALS PRODUCT CAMPAIGN
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <h2 className="headline-slide font-light text-[48px] md:text-[82px] tracking-[-4px] md:tracking-[-6.56px] leading-[1] md:leading-[64px]">
            MOTHER'S MILK
          </h2>
          <div className="fade-in text-[11px] tracking-[0.88px] leading-[1.5] max-w-[395px] space-y-4">
            <p>
              Traditional Medicinals partnered with our agency to develop a new
              campaign for Mother's Milk rooted in the real world experiences of
              breastfeeding and lactating mothers. As Creative Director, I led
              the concept and execution of a campaign focused on authenticity,
              trust, and emotional honesty.
            </p>
            <p>
              Taking things a step further, my team decided that given the
              project was taking place during the month of March and our
              campaign shoot would take place on International Women's Day, we
              would use an entirely female creative team and crew from
              conceptualizing, writing, to execution on the day of.
            </p>
          </div>
        </div>
      </section>

      {/* Video Placeholder Section */}
      <section className="py-8 flex justify-center px-4">
        <VideoPlayer
          src={mmBTS}
          autoPlay
          controls={false}
          loop
          muted
          className="video-reveal w-full max-w-[848px] aspect-auto"
          ariaLabel="Behind the scenes video of Mother's Milk campaign"
        />
      </section>

      {/* Role & Collaborators Section */}
      <section className="px-6 py-16 flex justify-center">
        <div className="w-full max-w-[848px] flex justify-start">
          <div className="fade-in text-[11px] tracking-[0.88px] leading-[20px] uppercase max-w-[304px]">
          <p className="mb-4">ROLE: Creative Director (Agency Side)</p>
          <ul className="stagger-list list-disc ml-4 space-y-1">
            <li>Creative direction & concept</li>
            <li>On-set video and photo direction</li>
            <li>Oversight of assets</li>
          </ul>

          <p className="mt-6 mb-4">COLLABORATORS:</p>
          <ul className="stagger-list list-disc ml-4 space-y-1">
            <li>LOMOTION (VIDEOGRAPHY & EDITING)</li>
            <li>RENEE BROWN (STRATEGY & RESIDENT MOM)</li>
            <li>EMMA TINLOY (STRATEGY & BABY WRANGLER)</li>
            <li>MIA DONDERO (HAIR & MAKEUP)</li>
          </ul>
          </div>
        </div>
      </section>

      {/* Insight, Idea, Execution Section with Image */}
      <section className="px-6 md:px-[37px] py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1 lg:w-[304px] lg:shrink-0 space-y-[108px]">
            {/* Insight */}
            <div className="fade-in text-[11px] tracking-[0.88px] leading-[15px] max-w-[304px]">
              <p className="leading-[21px] mb-5 uppercase">INSIGHT</p>
              <p>
                Breastfeeding and lactation is deeply personal and often
                underrepresented in advertising. New mothers don't need
                idealized narratives filled with fluffy language. They need
                reassurance, relatability, and real stories from people who
                understand the journey.
              </p>
            </div>

            {/* Idea */}
            <div className="fade-in text-[11px] tracking-[0.88px] leading-[15px] max-w-[304px]">
              <p className="leading-[21px] mb-5 uppercase">IDEA</p>
              <p>
                New motherhood takes a village, and the most meaningful support
                comes from those who've lived it. We invited real moms who were
                actively using Mother's Milk tea for lactation support to share
                their stories in their own words. With zero actors and no
                script, the campaign was built to feel genuine, supportive, and
                rooted in real experiences.
              </p>
            </div>

            {/* Execution */}
            <div className="fade-in text-[11px] tracking-[0.88px] leading-[15px] max-w-[304px]">
              <p className="leading-[21px] mb-5 uppercase">EXECUTION</p>
              <p>
                We captured intimate, interview-style testimonials that
                emphasized warmth, trust, and connection, and paired them with
                unscripted moments shot on 16mm film. Together, these elements
                highlighted the raw, authentic experiences of five different
                women, each on their own unique journey.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 image-reveal lg:flex-1 overflow-hidden flex items-center justify-end">
            <img
              src={lifestyleImage}
              alt="Traditional Medicinals Mother's Milk campaign lifestyle photography with real mothers"
              className="parallax-image w-full lg:w-[900px] h-auto lg:h-[640px] object-cover" loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Final Video Section */}
      <section className="px-6 md:px-[39px] py-16">
        <div className="video-reveal">
          <VideoPlayer
            src={mmTwo}
            controls
            loop
            className="w-full max-w-[1361px] mx-auto"
            aspectRatio="1361/766"
            ariaLabel="Mother's Milk campaign video"
          />
        </div>
      </section>

      {/* Next Case Study */}
      <section className="py-20 flex flex-col items-center justify-center">
        <TransitionLink
          to="/case-study/togethxr"
          className="flex items-center gap-3 text-[11px] tracking-[0.88px] hover:opacity-70 transition-opacity"
          style={{ opacity: 1, transform: 'none' }}
        >
          <img src={starIcon} alt="" className="star-spin w-[22px] h-[22px]" />
          <span>NEXT CASE STUDY</span>
        </TransitionLink>
      </section>
    </div>
  );
}
