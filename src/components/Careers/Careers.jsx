import "./Careers.scss";
import careersImg from "../../assets/carees.png"; 

const JoinAstro = () => {
  return (
    <section className="join-astro">
      <div className="join-astro__container">
        {/* Left Content */}
        <div className="join-astro__content">
          <h2>
            Come and build a sustainable <br />
            future with us. Join <span className="astro">astro</span>
          </h2>
          <p>
            Our company is seeking passionate, talented, and <br />
            driven people who care about what they do.
          </p>
          <button className="join-btn">Explore open positions</button>
        </div>

        {/* Right Image */}
        <div className="join-astro__image">
          <img src={careersImg} alt="Careers at Astro" />
        </div>
      </div>
    </section>
  );
};

export default JoinAstro;
