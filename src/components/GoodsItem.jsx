import { Link } from "react-router";

export function GoodsItem({
      mainId,
      displayName,
      displayDescription,
      price,
      displayAssets,
      addToBasket,
    }) {
      const backgroundImage = displayAssets.length
      ? displayAssets[0].full_background
      : displayName;

    return (
      <div className="card">
        <Link to={`/products/${mainId}`} className="card-link">
          <div className="card-image">
            <img src={backgroundImage} alt={displayName} />
          </div>
          <div className="card-content">
          <span className="card-title">{displayName}</span>
          <p>{displayDescription}</p>
          </div>
        </Link>
        
        <div className="card-action">
          <div>
            <button
              className="btn"
              onClick={() => 
                addToBasket({
                  mainId,
                  displayName,
                  price,
                })
              }
            >
              Купить
            </button>
          </div>
          <div>
            <span className="right">{price.finalPrice} V</span>
          </div>
        </div>
      </div>
    );
  }