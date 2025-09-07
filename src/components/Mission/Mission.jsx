// import './Mission.scss';
// import missionImage from '../../assets/missionLogo.png'; // Your single combined image

// const Mission = () => {
//   return (
//     <section className="mission-section">
//       <img src={missionImage} alt="Mission Visual" className="mission-image" />
//       <div className="mission-content">
//         <h3 className="mission-logo">ASTRO</h3>
//         <h1 className="mission-title">Our Mission</h1>
//         <p className="mission-subtext">
//           At Astro, we are driven by the vision of a sustainable future where transportation is both
//           environmentally friendly and exhilarating.
//         </p>
//         <p className="mission-description">
//           Our mission is to revolutionize the mobility landscape by developing innovative electric
//           vehicles (EVs) that combine cutting-edge technology with dynamic performance.
//         </p>
//         <button className="learn-more">Learn more</button>
//       </div>
//     </section>
//   );
// };

// export default Mission;
import './Mission.scss';
import missionLogo from '../../assets/missionLogo.png'; // adjust path if needed

const Mission = () => (
  <section className="mission" style={{ backgroundImage: `url(${missionLogo})` }}>
    <div className="mission__overlay"></div>

    <div className="mission__content">
      <h1 className="mission__title">Our Mission</h1>

      <p className="mission__description">
        At Astro, we are driven by the vision of a sustainable future where transportation is both environmentally friendly and exhilarating.
      </p>

      <p className="mission__description">
        Our mission is to revolutionize the mobility landscape by developing innovative electric vehicles (EVs) that combine cutting-edge technology with dynamic performance.
      </p>

      <button className="mission__button">Learn more</button>
    </div>
  </section>
);

export default Mission;
