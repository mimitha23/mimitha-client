function LearnMore() {
  return (
    <div className="footer__learn-more">
      <figure
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        className="footer__learn-more__figure"
      >
        <img src="assets/mimitha-logo-large.png" alt="" />
      </figure>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum
        recusandae veritatis odit magni maiores ea
      </p>
    </div>
  );
}

export default LearnMore;
