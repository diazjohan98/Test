import "./CoffeeCard.css";

const CoffeeCard = ({ coffee }) => {
  return (
    <div className="coffee-card">
      <div className="card-img">
        <img src={coffee.image} alt={coffee.name} />
        {!coffee.available && <span className="sold-out">Sold out</span>}
        {coffee.popular && <span className="popular-badge">Popular</span>}
      </div>
      <div className="card-info">
        <div className="card-header">
          <h3>{coffee.name}</h3>
          <span className="price">{coffee.price}</span>
        </div>
        <div className="card-rating">
          {coffee.rating ? (
            <>
              ⭐ {coffee.rating} <span>({coffee.votes} votes)</span>
            </>
          ) : (
            <span className="no-rating">No ratings</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;