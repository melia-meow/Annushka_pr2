export function Cart(props) {
    const { quantity = 0, handleBaskeShow = Function.prototype } = props;

    return (
      <div className="cart teal white-text lighten-2" onClick={handleBaskeShow}>
        <i className="material-icons">shopping_basket</i>
        {quantity ? <span className="card-quantity">{quantity}</span> : null}
      </div>
    );
  }