// import './Hero.scss';
// import carBg from '../assets/car-background.png';

// function Hero() {
//   return (
//     <div className="hero">
//       <div className="hero-content">
//         <h1>Meet The Astro 1</h1>
//         <h2>Starts at $39,000</h2>
//         <p>
//           Meet the Astro 1, our entry-level electric vehicle designed to redefine your daily commute with unparalleled convenience and comfort.
//         </p>
//         <div className="hero-buttons">
//           <button className="order">Order now</button>
//           <button className="test-drive">Test drive</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// Hero.jsx
// Hero.jsx
// import './Hero.scss';
// import carBg from '../assets/car-background.png'; // adjust path if needed

// const Hero = () => {
//   return (
//     <section className="hero" id="hero">
//       <div
//         className="hero-image"
//         style={{ backgroundImage: `url(${carBg})` }}
//       >
//         <h1 className="hero-title">Meet The Astro 1</h1>

//         <div className="hero-info">
//           <h2>Starts at $39,000</h2>
//           <p>
//             Meet the Astro 1, our entry-level electric vehicle designed to
//             redefine your daily commute with unparalleled convenience and
//             comfort.
//           </p>
//           <div className="hero-buttons">
//             <button className="order-now">Order now</button>
//             <button className="test-drive">Test drive</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




import './Hero.scss';
import { useEffect, useState } from 'react';
import carBg from '../assets/car-background.png';

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimate(true);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-image" style={{ backgroundImage: `url(${carBg})` }}>
        {/* Falling Title */}
        <h1 className={`hero-title ${animate ? 'animate-drop' : ''}`}>
          Meet The Astro 1
        </h1>

        <div className="hero-info">
          <h2>Starts at $39,000</h2>
          <p>
            Meet the Astro 1, our entry-level electric vehicle designed to
            redefine your daily commute with unparalleled convenience and
            comfort.
          </p>
          <div className="hero-buttons">
            <button className="order-now">Order now</button>
            <button className="test-drive">Test drive</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
