import "./BeersMenu.scss";

export default function Product(props) {
  function increaseAmount() {
    // console.log(props.id);
    setAmount((prevAmount) => prevAmount + 1);
    // setEnabled((isEnabled = amount > 0));
  }

  function decreaseAmount() {
    // console.log(props.id);

    setAmount((prevAmount) => {
      if (prevAmount > 0) {
        return prevAmount - 1;
      }
      return 0;
    });
  }

  function handleClick() {
    setFlipped((flipped) => !flipped);
  }

  function add() {
    props.addToBasket({
      amount: amount,
      price: function () {
        return props.price() * this.amount * (props.isHappyHour ? 0.5 : 1);
      },
      name: props.name,
    });
    setAmount(0);
  }

  return (
    <article className="Product">
      <button className="moreInfo" onClick={handleClick}>
        Info
      </button>

      <div className="mainInfo">
        <img src={"./assets/" + props.label} alt="" />
        <div className="text">
          <p>
            {props.category} | {props.alc}%
          </p>
          <h3>{props.name}</h3>
          <div className="money">
            <img src="/assets/coin.svg" alt="" />
            <p className="price">${props.price() * (props.isHappyHour ? 0.5 : 1)}</p>
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="amountWrapper">
          <button onClick={decreaseAmount}>-</button>
          <p className="amount">{amount}</p>
          <button onClick={increaseAmount}>+</button>
        </div>

        <button className="buttonAdd" onClick={add} style={amount < 1 ? { backgroundColor: "grey", pointerEvents: "none" } : { backgroundColor: "blue", pointerEvents: "all" }}>
          Add
        </button>
      </div>
    </article>
  );
}
