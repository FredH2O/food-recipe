const AboutUs = () => {
  return (
    <div className="m-1 p-1 max-w-7xl">
      <h2 className="text-center xl:text-left text-3xl font-medium mb-1 text-white">
        About Us
      </h2>
      <div className="flex flex-col xl:flex-row">
        <p className="flex-1 md:max-w-md sm:max-w-sm text-justify p-2 text-white">
          Test Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          nostrum unde nemo. Libero dolores in quaerat ad quos, ratione porro.
          Fugit, nesciunt optio blanditiis ipsum et possimus soluta distinctio
          vero. test Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Neque perspiciatis fugit nam impedit sunt repudiandae reiciendis velit
          illo modi et asperiores sit dolore, placeat blanditiis nihil
          exercitationem maiores vel quaerat. <br /> <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          consequuntur, officia laboriosam maiores voluptas dicta, tempore
          beatae odit nulla facilis maxime magni nisi inventore culpa sunt
          eligendi sit! Animi, doloribus?
        </p>

        <img
          className="xl:ml-6 rounded-xl shad border-white-700 border-2 flex-1 object-cover md:max-w-md"
          src="/images/foodOne.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutUs;
