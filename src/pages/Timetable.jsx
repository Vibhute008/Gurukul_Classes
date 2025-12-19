import { motion } from 'framer-motion';
import './Timetable.css';

const Timetable = () => {
  const timetableData = {
    "Class 9 Science": [
      { day: "Monday", morning: "Mathematics (8:00-9:30 AM)", evening: "Science (4:00-5:30 PM)" },
      { day: "Tuesday", morning: "English (8:00-9:00 AM)", evening: "Marathi (4:00-5:00 PM)" },
      { day: "Wednesday", morning: "Science (8:00-9:30 AM)", evening: "Mathematics (4:00-5:30 PM)" },
      { day: "Thursday", morning: "Marathi (8:00-9:00 AM)", evening: "English (4:00-5:00 PM)" },
      { day: "Friday", morning: "Mathematics (8:00-9:30 AM)", evening: "Science (4:00-5:30 PM)" },
      { day: "Saturday", morning: "Weekly Test (8:00-10:00 AM)", evening: "Doubt Session (4:00-5:30 PM)" }
    ],
    "Class 9 Commerce": [
      { day: "Monday", morning: "Mathematics (10:30-12:00 PM)", evening: "Accounts (6:30-8:00 PM)" },
      { day: "Tuesday", morning: "English (10:30-11:30 AM)", evening: "Marathi (6:30-7:30 PM)" },
      { day: "Wednesday", morning: "Accounts (10:30-12:00 PM)", evening: "Mathematics (6:30-8:00 PM)" },
      { day: "Thursday", morning: "Marathi (10:30-11:30 AM)", evening: "English (6:30-7:30 PM)" },
      { day: "Friday", morning: "Mathematics (10:30-12:00 PM)", evening: "Accounts (6:30-8:00 PM)" },
      { day: "Saturday", morning: "Weekly Test (10:30-12:30 PM)", evening: "Doubt Session (6:30-8:00 PM)" }
    ],
    "Class 10 Science": [
      { day: "Monday", morning: "Mathematics (8:00-9:30 AM)", evening: "Science (4:00-5:30 PM)" },
      { day: "Tuesday", morning: "English (8:00-9:00 AM)", evening: "Marathi (4:00-5:00 PM)" },
      { day: "Wednesday", morning: "Science (8:00-9:30 AM)", evening: "Mathematics (4:00-5:30 PM)" },
      { day: "Thursday", morning: "Marathi (8:00-9:00 AM)", evening: "English (4:00-5:00 PM)" },
      { day: "Friday", morning: "Mathematics (8:00-9:30 AM)", evening: "Science (4:00-5:30 PM)" },
      { day: "Saturday", morning: "Weekly Test (8:00-10:00 AM)", evening: "Doubt Session (4:00-6:00 PM)" }
    ],
    "Class 10 Commerce": [
      { day: "Monday", morning: "Mathematics (11:00-12:30 PM)", evening: "Accounts (6:30-8:00 PM)" },
      { day: "Tuesday", morning: "English (11:00-12:00 PM)", evening: "Economics (6:30-7:30 PM)" },
      { day: "Wednesday", morning: "Accounts (11:00-12:30 PM)", evening: "Mathematics (6:30-8:00 PM)" },
      { day: "Thursday", morning: "Economics (11:00-12:00 PM)", evening: "English (6:30-7:30 PM)" },
      { day: "Friday", morning: "Marathi (11:00-12:00 PM)", evening: "Accounts (6:30-8:00 PM)" },
      { day: "Saturday", morning: "Weekly Test (11:00-1:00 PM)", evening: "Doubt Session (6:30-8:30 PM)" }
    ]
  };

  return (
    <div className="timetable-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Class Timetable
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Updated schedule for all batches
          </motion.p>
        </div>
      </section>

      {/* Timetable Sections */}
      {Object.entries(timetableData).map(([className, schedule], index) => (
        <section className="timetable-section" key={className}>
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {className}
            </motion.h2>
            
            <div className="timetable-container">
              <table className="timetable">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Morning Batch</th>
                    <th>Evening Batch</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, itemIndex) => (
                    <motion.tr
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <td className="day">{item.day}</td>
                      <td className="morning">{item.morning}</td>
                      <td className="evening">{item.evening}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      {/* Notes Section */}
      <section className="notes">
        <div className="container">
          <motion.div
            className="notes-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Important Notes</h2>
            <ul>
              <li>All timings are in IST (Indian Standard Time)</li>
              <li>Weekly tests are conducted every Saturday morning</li>
              <li>Doubt sessions are held every Saturday evening</li>
              <li>Please arrive 10 minutes before class starts</li>
              <li>Timetable may be updated periodically. Please check regularly for changes</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Timetable;