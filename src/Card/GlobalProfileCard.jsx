function GlobalProfileCard({ comment, userImage, userName }) {
  return (
    <>
      <div className="profile-card">
        <div className="message">{comment}</div>
        <div className="summary">
          <img src={userImage} alt="profile picture" className="profile-pix" />
          <span className="name">{userName}</span>
        </div>
      </div>
    </>
  );
}

export default GlobalProfileCard;
