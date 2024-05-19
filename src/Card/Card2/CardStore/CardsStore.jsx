function CardsStore({ icon, message }) {
  return (
    <div className="cards-message flex lg:flex-col lg:items-start lg:space-y-2 p-6 text-indigo-900 items-center justify-center gap-4 shadow-lg">
      <span className="bank-card-container p-3 rounded-full bg-indigo-100">
        {icon}
      </span>
      <span className="card-message break-words w-[20rem] font-semibold">
        {message}
      </span>
    </div>
  );
}

export default CardsStore;
