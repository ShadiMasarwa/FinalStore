import React from "react";
import Mlogo from "../images/Logo.mp4";
import Layout from "../Components/Layout";

const About = () => {
  return (
    <div>
      <Layout>
        <div className="container pt-5 d-flex gap-5 ">
          <div style={{ paddingTop: 100 }}>
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet. Est dolorem fugiat ut saepe error et
              adipisci exercitationem et quod impedit et vero nulla. Ut rerum
              itaque cum voluptas nobis a nobis voluptates et voluptatem
              temporibus qui nesciunt temporibus qui tenetur dolores. Ex
              voluptatem possimus vel enim asperiores et fuga fuga. Et aperiam
              deleniti et perspiciatis praesentium et eveniet illum qui aliquam
              quisquam.{" "}
            </p>
            <p>
              Et consequatur exercitationem aut omnis sint et veniam ipsum sit
              quia excepturi non quas illum et voluptatem suscipit ut quae
              nihil. Ut debitis laborum sit deserunt iste sit neque dolores aut
              eius voluptates et laboriosam dolorum ad laudantium dolor.{" "}
            </p>
            <p>
              Non eaque labore ad minima esse est eius adipisci non ullam
              voluptatum. Aut illum voluptate et praesentium quod eos porro
              illum. Sed quia velit et internos omnis ad dolorem optio et natus
              atque ea accusamus quia At nisi fugit et quos aspernatur. Qui
              nobis nihil eos rerum corrupti est perferendis asperiores non
              iusto delectus ut beatae debitis et enim possimus.{" "}
            </p>
          </div>
          <video
            autoPlay
            muted
            loop
            src={Mlogo}
            width={400}
            height={600}
            className="m-0"
          />
        </div>
      </Layout>
    </div>
  );
};

export default About;
