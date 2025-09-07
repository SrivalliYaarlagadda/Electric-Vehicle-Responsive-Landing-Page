// import { useState } from "react";
// import { FiMapPin } from "react-icons/fi";
// import "./FindDealer.scss";

// export default function FindDealer() {
//   const [location, setLocation] = useState("");
//   const [mapUrl, setMapUrl] = useState("");

//   const handleUseLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;
//         setMapUrl(
//           `https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${lat},${lng}&zoom=14`
//         );
//       });
//     } else {
//       alert("Geolocation not supported by your browser.");
//     }
//   };

//   return (
//     <section className="find-dealer">
//       <div className="dealer-card">
//         <h2>Find a dealer</h2>
//         <p>
//           To find the best offers and nearby inventory, we need to find your
//           location. Please enter your location
//         </p>

//         <div className="search-box">
//           <input
//             type="text"
//             placeholder="Search your location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//           />
//         </div>

//         <div className="divider">or</div>

//         <button className="location-btn" onClick={handleUseLocation}>
//           <FiMapPin className="icon" /> Use my current location
//         </button>

//         {mapUrl && (
//           <div className="map-container">
//             <iframe
//               title="Google Map"
//               src={mapUrl}
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

import "./FindDealer.scss";
import bgImage from "../../assets/dealer.png"; 
import { FaSearch } from "react-icons/fa";   // search icon
import { FaLocationDot } from "react-icons/fa6"; // location icon

function FindDealer() {
  return (
    <section
      className="find-dealer"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="dealer-card">
        <h2>Find a dealer</h2>
        <p>
          To find the best offers and nearby inventory, we need to find your
          location. Please enter your location
        </p>

        {/* Search input with icon */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search your location" />
          <button className="clear-btn">×</button>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        {/* Location button with icon */}
        <button className="location-btn">
          <FaLocationDot className="icon" /> Use my current location
        </button>
      </div>
    </section>
  );
}

export default FindDealer;
