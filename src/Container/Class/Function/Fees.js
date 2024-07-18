import React from 'react';

export default function Fees({selectedCourse }) {
  // Define fees for each course
  const courseFees = {
    React: 10000,
    flutter: 15000,
    unity: 12000,
    node: 13000,
    uiux: 11000,
  };

  return (
    <div>
        <h2>Fees for {selectedCourse}</h2>
        <p>ru.{courseFees[selectedCourse]}</p>
    </div>
  );
}
