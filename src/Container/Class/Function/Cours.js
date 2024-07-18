import React, { useState } from 'react';
import Fees from '../Function/Fees';

export default function Cours() {

  const courses = ['React', 'flutter', 'unity', 'node', 'ui-ux'];

  
  const [Course, setCourse] = useState('');


  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div>
      <select value={Course} onChange={handleChange}>
        <option value="" disabled>Select a course</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>{course}</option>
        ))}
      </select>
      {/* {selectedCourse && <p>You have selected: {selectedCourse}</p>} */}

      {/* Pass the selected course to the Fees component */}
      <Fees selectedCourse={Course} />
    </div>
  );
}
