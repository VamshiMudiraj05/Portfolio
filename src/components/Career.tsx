import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
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
              Completed a B.Tech in Computer Science with 8.85 CGPA. Built a strong foundation in software development, Data Structures, Algorithms, OOP, DBMS, and Data Analytics, with practical experience through projects and professional work.
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
              Developed full-responsive web applications, online menus, and custom client portals. Delivered tailored digital solutions combining modern web frontend development with digital video editing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer Intern</h4>
                <h5>Isthara Parks Pvt. Ltd.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Assisting in designing and developing full-stack web applications using Java, Spring Boot, React, and MySQL. Building and testing RESTful APIs, resolving bugs, and optimizing performance under Agile practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
