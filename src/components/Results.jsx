import React from 'react';
import { motion } from 'framer-motion';
import './Results.css';

const Results = () => {
  const topResults = [
    {
      id: 1,
      rank: 1,
      name: "Amit Sharma",
      exam: "JEE Advanced 2023",
      score: " AIR 42"
    },
    {
      id: 2,
      rank: 2,
      name: "Priya Patel",
      exam: "NEET 2023",
      score: " AIR 18"
    },
    {
      id: 3,
      rank: 3,
      name: "Rahul Gupta",
      exam: "JEE Main 2023",
      score: " 99.7 Percentile"
    },
    {
      id: 4,
      rank: 4,
      name: "Sneha Reddy",
      exam: "CBSE 12th Boards",
      score: " 98.2%"
    }
  ];

  const achievements = [
    {
      id: 1,
      count: "10,000+",
      description: "Students Trained"
    },
    {
      id: 2,
      count: "500+",
      description: "Top Rankers"
    },
    {
      id: 3,
      count: "18+",
      description: "Years of Excellence"
    },
    {
      id: 4,
      count: "98%",
      description: "Success Rate"
    }
  ];

  return (
    <section className="results" id="results">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Outstanding Results
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Celebrating the achievements of our students who secured top ranks in national-level examinations
        </motion.p>
        
        <div className="results-grid">
          {topResults.map((result, index) => (
            <motion.div 
              className="result-card"
              key={result.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="rank-badge">#{result.rank}</div>
              <div className="result-info">
                <h3>{result.name}</h3>
                <p className="exam">{result.exam}</p>
                <p className="score">{result.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="achievements"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              className="achievement-item"
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{achievement.count}</h3>
              <p>{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Results;