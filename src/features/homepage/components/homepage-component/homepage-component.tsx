import "./homepage-component.scss";

export const HomePage = () => {
  return (
    <div className="c-homepage">
      <h1>Home Page</h1>
      <br />
      <p>
        Hi, I'm <span className="c-homepage__text--bfg">BFG</span> and this is
        my personal website. I'm a software engineer, but to dont spoil the fun,
        you'll have to explore the site to find out more about me.
      </p>
      <p>
        Use the navbar on the left to navigate to the different sections of the
        site.
      </p>
    </div>
  );
};
