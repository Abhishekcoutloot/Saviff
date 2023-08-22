import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Saviff-Aboutus"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          **About Us**<br />

Welcome to <b>SAVIFF</b>, your premier destination for renting exquisite partywear and a diverse range of clothing for men and women. Our curated collection offers a variety of styles to suit every occasion. Choose us for quality, convenience, and sustainability, as we redefine fashion by offering premium rentals at your fingertips. Join us in celebrating self-expression and making each moment memorable without the burden of ownership. Thank you for choosing <b>SAVIFF</b> to be a part of your unique journey in style.


          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;