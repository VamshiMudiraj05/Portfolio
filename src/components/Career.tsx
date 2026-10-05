import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (Data Science)</h4>
                <h5>Malla Reddy University</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Pursued B.Tech in Computer Science Engineering (Data Science) with an 8.85 CGPA. Built a strong foundation in Object-Oriented Programming, Data Structures & Algorithms, DBMS, and Data Analytics through hands-on full-stack development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Delivered custom web applications, responsive client websites, and online menu systems. Combined modern frontend engineering with creative media editing and high-impact digital solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee Software Engineer Intern</h4>
                <h5>Isthara Parks Private Limited</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Assisting in designing and developing full-stack web applications using Java, Spring Boot, React, and MySQL. Building and testing RESTful APIs, fixing bugs, optimizing performance, and collaborating in Agile sprint cycles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications & Credentials</h4>
                <h5>NPTEL & IBM</h5>
              </div>
              <h3>CERT</h3>
            </div>
            <p>
              • <strong>Design and Analysis of Algorithms</strong> — NPTEL<br />
              • <strong>Data Analytics</strong> — IBM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
