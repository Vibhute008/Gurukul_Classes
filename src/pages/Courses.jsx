import { motion } from 'framer-motion';
import './Courses.css';

const Courses = () => {
  const coursesData = [
    {
      id: 1,
      class: "Class 9",
      subjects: ["Mathematics", "Science (Physics & Chemistry)", "English", "Marathi/Sanskrit"],
      batchTimings: ["Morning: 8:00 AM - 10:00 AM", "Evening: 4:00 PM - 6:00 PM"],
      medium: "English/Marathi",
      description: "Comprehensive curriculum for Class 9 covering all subjects with focus on building strong fundamentals."
    },
    {
      id: 2,
      class: "Class 10",
      subjects: ["Mathematics", "Science (Physics & Chemistry)", "English", "Marathi/Sanskrit", "Social Studies"],
      batchTimings: ["Morning: 8:00 AM - 10:30 AM", "Evening: 4:00 PM - 6:30 PM"],
      medium: "English/Marathi",
      description: "Board exam focused curriculum with practical sessions and regular assessments."
    }
  ];

  const boards = [
    {
      name: "SSC Board",
      description: "Maharashtra State Board of Secondary and Higher Secondary Education"
    },
    {
      name: "CBSE Board",
      description: "Central Board of Secondary Education (Available on Request)"
    }
  ];

  return (
    <div className="courses-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Courses Offered
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Comprehensive foundation courses for classes 9th and 10th
          </motion.p>
        </div>
      </section>

      {/* Boards Section */}
      <section className="boards">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Board Affiliations
          </motion.h2>
          
          <div className="boards-grid">
            {boards.map((board, index) => (
              <motion.div
                className="board-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3>{board.name}</h3>
                <p>{board.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Foundation Course Structure
          </motion.h2>
          
          <div className="courses-grid">
            {coursesData.map((course, index) => (
              <motion.div
                className="course-card"
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="course-header">
                  <div>
                    <h3>{course.class}</h3>
                  </div>
                  <span className="medium-badge">{course.medium}</span>
                </div>
                
                <p className="course-description">{course.description}</p>
                
                <div className="course-details">
                  <div className="detail-section">
                    <h4>Subjects Covered</h4>
                    <ul>
                      {course.subjects.map((subject, idx) => (
                        <li key={idx}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h4>Batch Timings</h4>
                    <ul>
                      {course.batchTimings.map((timing, idx) => (
                        <li key={idx}>{timing}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="course-actions">
                  <button className="btn btn-primary">Enroll Now</button>
                  <button className="btn btn-secondary">Download Brochure</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="additional-info">
        <div className="container">
          <motion.div
            className="info-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Additional Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <h3>📚 Study Material</h3>
                <p>Comprehensive notes and practice materials provided for all subjects</p>
              </div>
              <div className="info-item">
                <h3>📝 Regular Assessments</h3>
                <p>Weekly tests and monthly evaluations to track progress</p>
              </div>
              <div className="info-item">
                <h3>👨‍🏫 Doubt Sessions</h3>
                <p>Dedicated doubt clearing sessions for each subject</p>
              </div>
              <div className="info-item">
                <h3>🎯 Board Exam Prep</h3>
                <p>Special focus on board exam patterns and marking schemes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Courses;