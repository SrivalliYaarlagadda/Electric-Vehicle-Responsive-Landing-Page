// no need to import React explicitly if your environment supports it

// import "./Models.scss";
// import car1 from "../../assets/model1.png";
// import car2 from "../../assets/model2.png";

// const Models = () => {
//   return (
//     <div className="models-section">
//       <div className="models-header">
//         <h1>Explore Models</h1>
//         <p>
//           Astro is committed to pushing the boundaries of what is possible, 
//           leading the charge toward a cleaner, greener planet through continuous 
//           innovation, superior craftsmanship.
//         </p>
//       </div>

//       <div className="models-grid">
//         <div className="model-card">
//           <img src={car1} alt="Astro 1" className="car-image" />
//           <div className="card-content">
//             <h2>Astro 1</h2>
//             <div className="card-bottom">
//               <span className="price">Starts at <strong>$39,000</strong></span>
//               <a href="#">Learn more →</a>
//             </div>
//           </div>
//         </div>

//         <div className="model-card">
//           <img src={car2} alt="Astro 2" className="car-image" />
//           <div className="card-content">
//             <h2>Astro 2</h2>
//             <div className="card-bottom">
//               <span className="price">Starts at <strong>$59,000</strong></span>
//               <a href="#">Learn more →</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Models;

import "./Models.scss";
import astro1 from "../../assets/model1.png";
import astro2 from "../../assets/model2.png";
import { FaCarSide, FaBolt, FaChargingStation, FaTachometerAlt } from "react-icons/fa";

export default function ExploreModels() {
  return (
    <section className="explore-models">
  <div className="section-header">
    <h2 className="section-title">Explore Models</h2>
    <p className="section-subtitle">
      Astro is committed to pushing the boundaries of what is possible, 
      leading the charge toward a cleaner, greener planet through continuous 
      innovation, superior craftsmanship.
    </p>
  </div>


      <div className="models-grid">
        {/* Astro 1 */}
        <div className="model-card">
          {/* Front */}
          <div className="card-front">
            <img src={astro1} alt="Astro 1" className="car-image" />
            <div className="card-front-overlay">
              <h3>Astro 1</h3>
              <div className="card-footer">
                <span>
                  Starts at <strong>$39,000</strong>
                </span>
                <span className="learn-more">Learn more →</span>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="card-back">
            <div className="card-header">
              <h3>Astro 1</h3>
              <button className="view-gallery">View gallery</button>
            </div>
            <p>
              Meet the Astro 1, our entry-level electric vehicle designed to redefine your daily commute with unparalleled
              convenience and comfort.
            </p>
            <p>
              Engineered for efficiency, the Astro 1 offers a seamless blend of practicality and modern design, perfect for
              navigating city streets or cruising on the highway. With its compact frame and... <a href="#">explore Astro 1</a>
            </p>

            <div className="specs">
              <div className="spec-item">
                <FaCarSide className="icon" />
                <div>
                  <strong>250 miles</strong>
                  <p>On a single charge</p>
                </div>
              </div>
              <div className="spec-item">
                <FaBolt className="icon" />
                <div>
                  <strong>15 kWh</strong>
                  <p>per 100 miles</p>
                </div>
              </div>
              <div className="spec-item">
                <FaChargingStation className="icon" />
                <div>
                  <strong>50 kWh</strong>
                  <p>Lithium-ion battery</p>
                </div>
              </div>
              <div className="spec-item">
                <FaBolt className="icon" />
                <div>
                  <strong>80% in 30 mins</strong>
                  <p>With fast charger</p>
                </div>
              </div>
            </div>

            <div className="card-footer-back">
              <span>
                Starts at <strong>$39,000</strong>
              </span>
              <div className="buttons">
                <button className="features-btn">All features</button>
                <button className="order-btn">Order now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Astro 2 */}
        <div className="model-card">
          {/* Front */}
          <div className="card-front">
            <img src={astro2} alt="Astro 2" className="car-image" />
            <div className="card-front-overlay">
              <h3>Astro 2</h3>
              <div className="card-footer">
                <span>
                  Starts at <strong>$59,000</strong>
                </span>
                <span className="learn-more">Learn more →</span>
              </div>
            </div>
          </div>

          {/* Back */}
          <div className="card-back">
            <div className="card-header">
              <h3>Astro 2</h3>
              <button className="view-gallery">View gallery</button>
            </div>
            <p>
              Unleash the thrill of electric performance with the Astro 2, our high-performance sports car that sets new
              standards for speed and agility in the EV sector.
            </p>
            <p>
              The Astro 2 is designed for enthusiasts who demand exhilaration, featuring a sleek, aerodynamic profile that
              slices through the air... <a href="#">explore Astro 2</a>
            </p>

            <div className="specs">
              <div className="spec-item">
                <FaCarSide className="icon" />
                <div>
                  <strong>310 miles</strong>
                  <p>On a single charge</p>
                </div>
              </div>
              <div className="spec-item">
                <FaTachometerAlt className="icon" />
                <div>
                  <strong>0–60 mph in 3.2s</strong>
                  <p>Top acceleration</p>
                </div>
              </div>
              <div className="spec-item">
                <FaChargingStation className="icon" />
                <div>
                  <strong>75 kWh</strong>
                  <p>Lithium-ion battery</p>
                </div>
              </div>
              <div className="spec-item">
                <FaBolt className="icon" />
                <div>
                  <strong>80% in 20 mins</strong>
                  <p>With supercharger</p>
                </div>
              </div>
            </div>

            <div className="card-footer-back">
              <span>
                Starts at <strong>$59,000</strong>
              </span>
              <div className="buttons">
                <button className="features-btn">All features</button>
                <button className="order-btn">Order now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
