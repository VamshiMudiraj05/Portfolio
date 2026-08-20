import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "PG Made Eazy",
    category: "Full-Stack Web App",
    tools: "React, Spring Boot, MongoDB, Payment Integration, Admin Dashboard",
    image: "/images/pgmadeeazy.png",
    link: "https://pg-made-eazy.vercel.app/",
  },
  {
    title: "CreatorSphere",
    category: "Web Platform (MERN)",
    tools: "React, Node.js, Express, MongoDB, Media Upload, Campaign Workflows",
    image: "/images/CS.png",
    link: "https://creator-sphere-iota.vercel.app/",
  },
  {
    title: "CTR Analysis",
    category: "Data Science & Forecasting",
    tools: "Python, Time Series Forecasting, Data Visualization, Predictive Analytics",
    image: "/images/ctr.png",
    link: "https://github.com/VamshiMudiraj05/CTR-Analysis",
  },
  {
    title: "Freelance Portals",
    category: "Client Web Solutions",
    tools: "JavaScript, React, Online Menus, Responsive UI, Video Editing",
    image: "/images/freelance.png",
    link: "https://vercel.com/vamshis-projects-d150b3fb/hackathon-94l7",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!box || !box[0] || !container) return;
      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => {
          setTranslateX();
          return `+=${translateX}`;
        },
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    // Refresh ScrollTrigger after initial render to ensure accurate layout
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
