import React from "react";
import "../Styles/Blog2.scss";
import bloghero from "../assets/bloghero.png";
import Articles from "../Components/Articles";
import add_ico from "../assets/add.png";
import play_ico from "../assets/play.png";
import { Link, useNavigate } from "react-router-dom";

function Blog2() {


  return (
    <div className="second-blog" id="second-blog">
      <div className="second-blog-hero-image">
        <img src={bloghero} alt="" />
      </div>
      <div className="second-blog-heading">
        <h1>Unleashing Maruti Suzuki Invicto Top-Spec Variant!</h1>
      </div>
      <div className="second-blog-container">
        <div className="second-blog-left">
          <div className="second-blog-left-top">
            <div className="second-blog-left-top-child">
              <h2>INTRODUCTIONS</h2>
              <p>
                Maruti Suzuki, the renowned automobile manufacturer, is set to
                make waves in the MPV segment with its latest offering, the
                Maruti Suzuki Invicto. Anticipation is high as the company
                announces the availability of a single top-spec variant, the
                Alpha+. While additional variants are yet to be confirmed, the
                Invicto aims to capture the hearts of MPV enthusiasts with its
                impressive features and performance. In this blog, we will delve
                into the details of this eagerly anticipated vehicle and how it
                stacks up against its competitors.
              </p>
            </div>

            <div className="second-blog-left-top-child">
              <h2>GLIMPSE OF INVICTO’S FEATURES</h2>
              <p>
                Although specific details about the Invicto’s features have not
                been officially released, industry experts predict that it will
                rival the range-topping Toyota Innova Hycross in terms of bells
                and whistles. Expectations are high for a comprehensive feature
                list, including a panoramic sunroof, LED headlamps, powered
                opening/closing of the boot, ventilated front seats, powered
                ottoman seats with leg support, a 10.25-inch touchscreen
                infotainment system, a nine-speaker JBL sound system with a
                subwoofer, auto-dimming IRVM, digital instrument cluster,
                eight-way powered driver seat with memory settings, dual-zone
                climate control (front and rear rows), connected car tech with
                smartwatch connectivity, six airbags, USB fast charging ports,
                and Advanced Driver Assistance Systems (ADAS). These advanced
                features promise a luxurious and technologically advanced
                driving experience.
              </p>
            </div>
            <div className="second-blog-left-top-child">
              <h2>CONCLUSION</h2>
              <p>
                The Maruti Suzuki Invicto MPV is poised to make a significant
                impact in the MPV market with its single top-spec Alpha+
                variant. Packed with premium features, impressive performance,
                and the backing of Maruti Suzuki’s trusted reputation, the
                Invicto is set to challenge its competitors head-on. As the
                launch date approaches, the automotive world eagerly awaits the
                opportunity to experience the Invicto firsthand and witness how
                it redefines the MPV segment with its unique offerings
              </p>
            </div>
          </div>
          <div className="second-blog-left-bottom">
            <h2>View Launch of New Maruti Suzuki Invicto! HERE!!</h2>
            <img className="main-image" src={add_ico} alt="" />
            <Link  className="play_ico" to={"https://www.youtube.com/watch?v=e-AIojpk1pA"}>

            <img  src={play_ico} alt="" />
            </Link>
          </div>
        </div>
        <div className="second-blog-right">
            <Articles/>
        </div>
      </div>
    </div>
  );
}

export default Blog2;
