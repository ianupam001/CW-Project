import React from 'react';
import ReactToPrint from 'react-to-print';
import BarGraph from '../pageComponents/BarGraph';
import CareerSuggestions from './CareerSuggestions';

const Result = () => {
  let componentRef = null;

  return (
    <div>
      <div ref={(el) => (componentRef = el)}>
        <BarGraph />
        <CareerSuggestions />
      </div>
      <div className="mt-4 text-center">
        <ReactToPrint
          trigger={() => <button className="bg-purple-800 text-white px-4 py-2 rounded mb-5">Print Result</button>}
          content={() => componentRef}
        />
      </div>
    </div>
  );
};

export default Result;
