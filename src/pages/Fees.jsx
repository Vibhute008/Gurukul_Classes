import { motion } from 'framer-motion';
import './Fees.css';

const Fees = () => {
  const feesData = [
    {
      class: "Class 9 Science",
      annualFee: "₹18,000",
      quarterlyFee: "₹4,500",
      monthlyFee: "₹1,500",
      installmentOptions: ["Annual", "Quarterly", "Monthly"],
      features: ["Complete Science Curriculum", "All Subjects Covered", "Study Materials Included", "Weekly Tests", "Doubt Sessions"]
    },
    {
      class: "Class 9 Commerce",
      annualFee: "₹16,000",
      quarterlyFee: "₹4,000",
      monthlyFee: "₹1,333",
      installmentOptions: ["Annual", "Quarterly", "Monthly"],
      features: ["Complete Commerce Curriculum", "All Subjects Covered", "Study Materials Included", "Weekly Tests", "Doubt Sessions"]
    },
    {
      class: "Class 10 Science",
      annualFee: "₹20,000",
      quarterlyFee: "₹5,000",
      monthlyFee: "₹1,667",
      installmentOptions: ["Annual", "Quarterly", "Monthly"],
      features: ["Board Exam Focused", "All Subjects Covered", "Study Materials Included", "Weekly Tests", "Doubt Sessions", "Mock Exams"]
    },
    {
      class: "Class 10 Commerce",
      annualFee: "₹18,000",
      quarterlyFee: "₹4,500",
      monthlyFee: "₹1,500",
      installmentOptions: ["Annual", "Quarterly", "Monthly"],
      features: ["Board Exam Focused", "All Subjects Covered", "Study Materials Included", "Weekly Tests", "Doubt Sessions", "Mock Exams"]
    }
  ];

  const scholarshipData = [
    {
      title: "Merit Scholarship",
      description: "Up to 20% off for students scoring 90%+ in previous grade",
      amount: "Up to 20%"
    },
    {
      title: "Sibling Discount",
      description: "10% off for each additional sibling enrolled",
      amount: "10%"
    },
    {
      title: "Early Bird Offer",
      description: "15% off for enrollments before June 30th",
      amount: "15%"
    }
  ];

  return (
    <div className="fees-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Fee Structure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transparent and affordable pricing for quality education
          </motion.p>
        </div>
      </section>

      {/* Fees Overview */}
      <section className="fees-overview">
        <div className="container">
          <motion.div
            className="overview-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Affordable Quality Education</h2>
            <p>
              At Gurukul Classes, we believe quality education should be accessible to all. 
              Our fee structure is designed to provide exceptional value while remaining affordable.
            </p>
            <div className="features">
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Comprehensive study materials included</span>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Regular assessments and mock tests</span>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Personalized attention in small batches</span>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <span>Experienced faculty members</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fees Structure */}
      <section className="fees-structure">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Detailed Fee Structure
          </motion.h2>
          
          <div className="fees-grid">
            {feesData.map((fee, index) => (
              <motion.div
                className="fee-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="card-header">
                  <h3>{fee.class}</h3>
                </div>
                <div className="card-body">
                  <div className="pricing-options">
                    <div className="price-option">
                      <span className="label">Annual Fee</span>
                      <span className="amount">{fee.annualFee}</span>
                    </div>
                    <div className="price-option">
                      <span className="label">Quarterly Fee</span>
                      <span className="amount">{fee.quarterlyFee}</span>
                    </div>
                    <div className="price-option">
                      <span className="label">Monthly Fee</span>
                      <span className="amount">{fee.monthlyFee}</span>
                    </div>
                  </div>
                  <div className="features-list">
                    <h4>Included Benefits:</h4>
                    <ul>
                      {fee.features.map((feature, featIndex) => (
                        <li key={featIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card-footer">
                  <a href="/contact" className="btn btn-primary">Contact for Enrollment</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships & Discounts */}
      <section className="scholarships">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Scholarships & Discounts
          </motion.h2>
          
          <div className="scholarships-grid">
            {scholarshipData.map((scholarship, index) => (
              <motion.div
                className="scholarship-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h3>{scholarship.title}</h3>
                <p>{scholarship.description}</p>
                <div className="discount-badge">{scholarship.amount} OFF</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="payment-options">
        <div className="container">
          <motion.div
            className="payment-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Flexible Payment Options</h2>
            <div className="payment-methods">
              <div className="payment-method">
                <span className="icon">💰</span>
                <h3>Cash Payment</h3>
                <p>Pay in person at our institute</p>
              </div>
              <div className="payment-method">
                <span className="icon">💳</span>
                <h3>Bank Transfer</h3>
                <p>Direct bank transfer to our account</p>
              </div>
              <div className="payment-method">
                <span className="icon">📱</span>
                <h3>UPI/QR Code</h3>
                <p>Instant payment via UPI apps</p>
              </div>
              <div className="payment-method">
                <span className="icon">🌐</span>
                <h3>Online Payment</h3>
                <p>Secure online payment gateway</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Fees;