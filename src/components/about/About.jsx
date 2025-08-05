
const About = () => {
  // ? jsx code===================================
  return (
    <>
      <section className="container pt-[7rem] mx-auto px-3 lg:px-[4rem] text-center">
        <section className="about mb-[3rem] ">
          <h2 className="text-[2.3rem] mb-6  text-dark dark:text-light capitalize">
            about <span className="text-green-600 uppercase">mykd</span>
          </h2>
          <p className="text-dark mx-auto   dark:text-light max-w-[800px]  text-[1.1rem] lg:text-[1.2rem] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos animi
            magni illum exercitationem ad soluta culpa, repellendus autem
            ratione? Error rem facilis assumenda delectus ex magnam tempora
            fugiat debitis libero?
          </p>
        </section>
        <section className="our-team">
          <h2 className="text-[2.3rem] mb-6 text-dark dark:text-light capitalize">
            about <span className="text-green-600 uppercase">team</span>
          </h2>
          <p className="text-dark mx-auto dark:text-light max-w-[800px]  text-[1.1rem] lg:text-[1.2rem] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos animi
            magni illum exercitationem ad soluta culpa, repellendus autem
            ratione? Error rem facilis assumenda delectus ex magnam tempora
            fugiat debitis libero?
          </p>
        </section>
        <section className="our-team">
          <h2 className="text-[2.3rem] mb-6 text-dark dark:text-light capitalize">
            contact <span className="text-green-600 uppercase">us</span>
          </h2>
          <p className="text-dark mx-auto dark:text-light max-w-[800px]  text-[1.1rem] lg:text-[1.2rem] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos animi
            magni illum exercitationem ad soluta culpa, repellendus autem
            ratione? Error rem facilis assumenda delectus ex magnam tempora
            fugiat debitis libero?
          </p>
        </section>
      </section>
      {/* head tag meat============================================= */}
       <meta name="description" content={"about mykd games website and the team"} />
       <title>about</title>
    </>
  );
};

export default About;
