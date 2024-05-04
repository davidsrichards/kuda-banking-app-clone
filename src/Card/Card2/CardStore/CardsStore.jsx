function CardsStore({ icon, message }) {
  return (
    <div className="cards-message">
      <div className="details">
        <span className="bank-card-container">{icon}</span>
        <span className="card-message">{message}</span>
      </div>
    </div>
  );
}

export default CardsStore;
