"use client";
import Image from "next/image";
import React, { useState } from "react";
import Face from "../../../assets/icons/faceSocial.svg";
import Insta from "../../../assets/icons/instaSocial.svg";
import Snap from "../../../assets/icons/snapSocial.svg";
import style from '../settings.module.css'
const Socialnfo = () => {
  return (
    <div className={`mt-4 lg:basis-5/12 w-full`}>
      <h5 className="text-[13px] font-normal mb-3">التواصل الاجتماعـى</h5>
      <div className={`${style.socials} w-full flex flex-col gap-3`}>
        <div className="face flex justify-start gap-3">
          <div className="faceIcon rounded-lg border border-[#E8E8E8] p-3 w-12 h-12 flex items-center justify-center">
            <Image src={Face} alt="faceicon" />
          </div>
          <input
            type="url"
            placeholder="الرابـط"
            className="rounded-lg border border-[#E8E8E8] p-3 focus:outline-[#ccc] w-full"
          />
        </div>
        <div className="insta flex justify-start gap-3">
          <div className="faceIcon rounded-lg border border-[#E8E8E8] p-3 w-12 h-12 flex items-center justify-center">
            <Image src={Insta} alt="Instaicon" />
          </div>
          <input
            type="url"
            placeholder="الرابـط"
            className="rounded-lg border border-[#E8E8E8] p-3 focus:outline-[#ccc] w-full"
          />
        </div>
        <div className="snap flex justify-start gap-3">
          <div className="faceIcon rounded-lg border border-[#E8E8E8] p-3 w-12 h-12 flex items-center justify-center">
            <Image src={Snap} alt="Snapicon" />
          </div>
          <input
            type="url"
            placeholder="الرابـط"
            className="rounded-lg border border-[#E8E8E8] p-3 focus:outline-[#ccc] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Socialnfo;

// "use client";
// import React, { useState } from "react";
// const socialOptions = [
//   {
//     label: "Facebook",
//     value: "facebook",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="8.106"
//         height="14.985"
//         viewBox="0 0 8.106 14.985"
//         fill="#000"
//       >
//         <path
//           id="facebook-svgrepo-com_2_"
//           data-name="facebook-svgrepo-com (2)"
//           d="M18.156,5,15.9,5a3.412,3.412,0,0,0-3.594,3.688v1.7H10.05v3.075h2.259l0,6.522h3.161l0-6.522h2.592l0-3.075h-2.59V8.948c0-.693.164-1.044,1.067-1.044h1.612L18.156,5Z"
//           transform="translate(-10.05 -5.001)"
//         />
//       </svg>
//     ),
//   },
//   { label: "Twitter", value: "twitter", icon: "🐦" },
//   { label: "Instagram", value: "instagram", icon: "📸" },
// ];

// const Socialnfo = () => {
//   const [selectedOptions, setSelectedOptions] = useState([null, null, null]);

//   const handleSelectChange = (index: number, value: any) => {
//     const newOptions = [...selectedOptions];
//     newOptions[index] = value;
//     setSelectedOptions(newOptions);
//   };

//   const isOptionDisabled = (value: any) => selectedOptions.includes(value);

//   return (
//     <div className="space-y-4">
//       {selectedOptions.map((selected, index) => (
//         <div key={index} className="flex items-center space-x-4">
//           <select
//             value={selected || ""}
//             onChange={(e) => handleSelectChange(index, e.target.value)}
//             className="border border-gray-300 rounded p-2"
//           >
//             <option value="" disabled>
//               Select Social Media
//             </option>
//             {socialOptions.map((option) => (
//               <option
//                 key={option.value}
//                 value={option.value}
//                 disabled={isOptionDisabled(option.value)}
//               >
//                 {option.icon}
//               </option>
//             ))}
//           </select>

//           <input
//             type="text"
//             placeholder="Enter URL"
//             className="border border-gray-300 rounded p-2 flex-grow"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Socialnfo;
