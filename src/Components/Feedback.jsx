import React from "react";
import "../Styles/Feedback.scss";
import star from "../assets/star.png";
import user from "../assets/Ellipse.png";
import user2 from "../assets/Ellipse 224.png";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.png";
import user5 from "../assets/user5.png";
import user6 from "../assets/user6.png";
import inverted from "../assets/inverted.png";

function Feedback() {
  return (
    <div id="Feedback" className="Feedback">
      <div className="feedback-heading">
        <h4>What Car Owners in Hyderabad Say</h4>
      </div>
      <div className="feedback-container">
        <div className="feedback-container-child">
          <div className="feedback-user">
            <div className="img">
              <img src={user} alt="" />
            </div>
            <div className="title">
              <h2>Shiva Kumar</h2>
              <div className="star-box">
                <div className="star-count">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <div className="duration">
                  <p>1 WEEK AGO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-content">
            <p>
              Absolutely recommended garage for everyone..!! Recently I had a
              issue of oil filters and engine m ounts replacement for my car BMW
              and i don't want my car to showroom because it will usually takes
              1-2 weeks , so then my friend suggested this garage. And even gave
              the manager number. The manager there Sai is very professional and
              friendly person. With in two days they resolved my issue and even
              they gave an astonishing general service
            </p>
          </div>
          {/* <i class="fa-solid fa-quote-left"></i> */}
          <p className="inverted"><i class="fa-solid fa-quote-left"></i></p>
        </div>
        <div className="feedback-container-child">
          <div className="feedback-user">
            <div className="img">
              <img src={user2} alt="" />
            </div>
            <div className="title">
              <h2>Mohith Reddy</h2>
              <div className="star-box">
                <div className="star-count">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <div className="duration">
                  <p>4 WEEKS AGO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-content">
            <p>
              This is a very trusted most popular and very amazing service
              provider mechanic luxury car service centre they have very best
              experience in this field for providing very best service (I car
              service) very good experience with maneger Sai
            </p>
          </div>
          <p className="inverted"><i class="fa-solid fa-quote-left"></i></p>
        </div>
        <div className="feedback-container-child">
          <div className="feedback-user">
            <div className="img">
              <img src={user3} alt="" />
            </div>
            <div className="title">
              <h2>Meghana Chapala</h2>
              <div className="star-box">
                <div className="star-count">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <div className="duration">
                  <p>1 WEEK AGO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-content">
            <p>
              Highly recommended this service stationThey have done a very good
              job in fixing all my issues in one go. i had done my car bumper
              painting and general service with other issues.all issues fixed
              perfectly.... Good job...👏 Service: Auto body & trim repair
            </p>
          </div>
          <p className="inverted"><i class="fa-solid fa-quote-left"></i></p>
        </div>
        <div className="feedback-container-child">
          <div className="feedback-user">
            <div className="img">
              <img src={user4} alt="" />
            </div>
            <div className="title">
              <h2>Atharva Kulkarni</h2>
              <div className="star-box">
                <div className="star-count">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <div className="duration">
                  <p>1 WEEK AGO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-content">
            <p>
              Excellent service. Sai helped me when I was stranded on highway
              (100km from city) at night due to battery malfunction. The towing
              of my car was arranged by Sai, then he repaired the car in quick
              time. He made sure that I understand what part was to be repaired
              and why. With the seamless service, I have become his all time
              customer :
            </p>
          </div>
          <p className="inverted"><i class="fa-solid fa-quote-left"></i></p>
        </div>
        <div className="feedback-container-child">
          <div className="feedback-user">
            <div className="img">
              <img src={user5} alt="" />
            </div>
            <div className="title">
              <h2>Anand K</h2>
              <div className="star-box">
                <div className="star-count">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <div className="duration">
                  <p>1 WEEK AGO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-content">
            <p>
              Exceeded my expectations in both the quality and transperency. I
              regret sticking with main dealers and not coming to outside
              vendors earlier. Thanks to i car service and their thorough,
              knowledgeable and customer-focused approach, I have now made a
              start on work that should have been carried out during the three
              and a half years in which I have owned the car. I will happily go
              back to i car service in six months to continue this process.
            </p>
          </div>
          <p className="inverted"><i class="fa-solid fa-quote-left"></i></p>
        </div>
        <div className="feedback-container-child">
          <div className="feedback-user">
            <div className="img">
              <img src={user6} alt="" />
            </div>
            <div className="title">
              <h2>Avinash Abhi</h2>
              <div className="star-box">
                <div className="star-count">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                </div>
                <div className="duration">
                  <p>4 WEEK AGO</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-content">
            <p>
              Very much pleased with work . Always makes me happy by looking at
              this work . Thank you I car service. Service: Upholstery &
              interior restoration
            </p>
          </div>
          <p className="inverted"><i class="fa-solid fa-quote-left"></i></p>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
