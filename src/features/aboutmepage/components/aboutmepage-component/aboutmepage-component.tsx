import "./aboutmepage-component.scss";

export const AboutMePage = () => {
  return (
    <div className="c-about-me-page">
      <h1 className="c-about-me-page__header">About Me</h1>
      <br />
      <p className="c-about-me-page__paragraph">
        I am a software developer from Romania 🇷🇴 with a passion for learning
        and coding (especially low level stuff). I am currently working as a
        front-end developer at a awersome company.
      </p>
      <div className="c-about-me-page__container">
        <div>
          <h1 className="c-about-me-page__subheader">My Skills</h1>
          <ul className="c-about-me-page__skills-list">
            <li className="c-about-me-page__skills-list-category">
              <span className="c-about-me-page__skills-list--list-title">
                Web Development
              </span>
              <ul>
                <li className="c-about-me-page__skills-list-item">
                  JavaScript
                </li>
                <li className="c-about-me-page__skills-list-item">
                  TypeScript
                </li>
                <li className="c-about-me-page__skills-list-item">HTML</li>
                <li className="c-about-me-page__skills-list-item">CSS</li>
                <li className="c-about-me-page__skills-list-item">React</li>
                <li className="c-about-me-page__skills-list-item">MobX</li>
                <li className="c-about-me-page__skills-list-item">Node.js</li>
                <li className="c-about-me-page__skills-list-item">
                  Express.js
                </li>
                <li className="c-about-me-page__skills-list-item">SQL</li>
                <li className="c-about-me-page__skills-list-item">Firebase</li>
              </ul>
            </li>
            <li className="c-about-me-page__skills-list-category">
              <span className="c-about-me-page__skills-list--list-title">
                Other programming related skills
              </span>
              <ul>
                <li className="c-about-me-page__skills-list-item">Git</li>
                <li className="c-about-me-page__skills-list-item">Linux</li>
                <li className="c-about-me-page__skills-list-item">Rust</li>
                <li className="c-about-me-page__skills-list-item">C</li>
              </ul>
            </li>
            <li className="c-about-me-page__skills-list-category">
              <span className="c-about-me-page__skills-list--list-title">
                Miscelanious skills
              </span>
              <ul>
                <li className="c-about-me-page__skills-list-item">Blender</li>
                <li className="c-about-me-page__skills-list-item">Unity</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="c-about-me-page__subheader">My Hobbies</h1>
          <ul className="c-about-me-page__skills-list">
            <li className="c-about-me-page__skills-list-category">
              Simracing (especially i like to drive in Assetto Corsa
              Competizione)
            </li>
            <li className="c-about-me-page__skills-list-category">
              Programming
            </li>
            <li className="c-about-me-page__skills-list-category">Gaming</li>
            <li className="c-about-me-page__skills-list-category">
              3D Modelling
            </li>
            <li className="c-about-me-page__skills-list-category">
              Retro gaming and retro computers/game console restoration
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
