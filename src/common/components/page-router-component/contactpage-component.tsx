import "./contactpage-component.scss";

export const ContactPage = () => {
  return (
    <div className="c-contact-page">
      <h1 className="c-contact-page__header">Contact Me</h1>
      <br />
      <p className="c-contact-page__paragraph">
        If you want to contact me, you can do so by: <br />- sending me an email
        at <b>contact[@]bfg-e.com</b> <br /> - sending me a message on discord
        at <b>BFG-E#6319</b>
      </p>
    </div>
  );
};
