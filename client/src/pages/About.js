import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Gangwar Store App"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <div className="about-container">
            <div className="about-content">
              <h1>About Gangwar Store</h1>
              <p>
                Welcome to Gangwar Store, your go-to destination for a diverse
                range of high-quality products. As a project dedicated to
                enhancing your online shopping experience, we focus on quality,
                customer satisfaction, and innovation.
              </p>
              <p>
                Thank you for choosing Gangwar Store. We’re excited to serve
                you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps = {
  title: "Gangwar Store",
  description: "mern stack Project",
  keywords: "mern ,react,node,mongodb",
  author: "Akarsh Singh Gangwar",
};
export default About;
