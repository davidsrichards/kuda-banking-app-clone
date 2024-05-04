// importing Modules

import "./ProfileCard1.css";
import GlobalProfileCard from "../GlobalProfileCard";
import dave from "../../assets/ImageFolder/dave.jpg";

// profileCard Function
function ProfileCard() {
  return (
    <>
      <section className="card3-container profile-card-container">
        <GlobalProfileCard
          comment="Well done to the guys at @kudabank had a dispensing error on Friday night and reached out to them on Sunday... 48 working hours after and my money is back in my account... Special shout out to Maxwell and Norah
"
          userImage={dave}
          userName="@David"
        />

        <GlobalProfileCard
          comment="Never thought an app would stylish become my everyday way to bank and have access to physical cash.
          @kudabank is sleek
                    
"
          userImage={dave}
          userName="@Daniel"
        />

        <GlobalProfileCard
          comment="I like the fact that kuda Microfinance Bank doesn't only run a no fee policy and 25 free transfers in a month but you can only create a budget plan to control your spending pattern. Really really nice!!
                    
"
          userImage={dave}
          userName="@Smith"
        />
      </section>
    </>
  );
}

export default ProfileCard;

/* 

<section className="card3-container profile-card-container">
<div className="profile-card">
  <div className="message">
    This is the best banking app! I'm enjoying seamless banking plus the
    free transfers to other banks is a thing of joy. This is what I call
    freedom. I've made kuda my main bank account and I'm gonna refer all
    my friends!
  </div>
  <div className="summary">
    <img src={dave} alt="profile picture" className="profile-pix" />
    <span className="name">@RealSOK</span>
  </div>
</div>

<div className="profile-card">
  <div className="message">
    This is the best banking app! I'm enjoying seamless banking plus the
    free transfers to other banks is a thing of joy. This is what I call
    freedom. I've made kuda my main bank account and I'm gonna refer all
    my friends!
  </div>
  <div className="summary">
    <img src={dave} alt="profile picture" className="profile-pix" />
    <span className="name">@RealSOK</span>
  </div>
</div>

<div className="profile-card">
  <div className="message">
    This is the best banking app! I'm enjoying seamless banking plus the
    free transfers to other banks is a thing of joy. This is what I call
    freedom. I've made kuda my main bank account and I'm gonna refer all
    my friends!
  </div>
  <div className="summary">
    <img src={dave} alt="profile picture" className="profile-pix" />
    <span className="name">@RealSOK</span>
  </div>
</div>
</section>
</> */
