import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
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
          Hey, I'm Sarvesh kumar Yadav am electrical engineering undergrad pursuing
                    B.Tech(2020-2024) from Rajkiya Engineering College , Sonbhadra. I am quite
                    passionate about programming , who loves to solve real life problems
                    and applying his knowledge to come up with a great solution. I am always curious about
                    the emerging technologies and their application in our daily life. I aspire to be a
                    great software engineer and use my skills to develop something new that can ease
                    human life.  I want to become a good software engineerig and also want to get a job in a company.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;




         
         