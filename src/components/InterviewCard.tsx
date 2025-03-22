// "use client"; // This marks the component as a Client Component

// import React from "react";
// import { InterviewJson } from "../../interface";

// interface InterviewCardProps {
//   interview: InterviewJson["data"][0]; // Each interview in the data array
// }

// const InterviewCard: React.FC<InterviewCardProps> = ({ interview }) => {
//   return (
//     <li className="p-4 border rounded-lg shadow-md bg-gray-100">
//       <div className="mb-2">
//         <strong className="text-lg">Interview with {interview.user.name}</strong>
//       </div>
//       <div className="mb-2 p-2 bg-blue-50 rounded">
//         <strong>Company:</strong> {interview.company.name}
//       </div>
//       <div className="mb-2 p-2 bg-yellow-50 rounded">
//         <strong>Date:</strong> {new Date(interview.intwDate).toLocaleDateString()}
//       </div>
//       <div className="mb-2 p-2 bg-green-50 rounded">
//         <strong>Created At:</strong> {new Date(interview.createdAt).toLocaleDateString()}
//       </div>
//     </li>
//   );
// };

// export default InterviewCard;



"use client"; // This marks the component as a Client Component

import React from "react";
import { InterviewJson } from "../../interface";
import InteractiveCard from "./InteractiveCard";

interface InterviewCardProps {
  interview: InterviewJson["data"][0]; // Each interview in the data array
}

const InterviewCard: React.FC<InterviewCardProps> = ({ interview }) => {
  return (
    
        <li className="p-4 shadow-md bg-gray-100 rounded-lg">
        <div className="mb-2">
            <strong className="text-lg">Interview with {interview.user.name}</strong>
        </div>
        <div className="mb-2 p-2 bg-blue-50 rounded">
            <strong>Company:</strong> {interview.company.name}
        </div>
        <div className="mb-2 p-2 bg-yellow-50 rounded">
            <strong>Date:</strong> {new Date(interview.intwDate).toLocaleDateString()}
        </div>
        <div className="mb-2 p-2 bg-green-50 rounded">
            <strong>Created At:</strong> {new Date(interview.createdAt).toLocaleDateString()}
        </div>
        </li>
    
  );
};

export default InterviewCard;
