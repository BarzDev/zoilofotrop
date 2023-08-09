import { useCart, useCartDispatchh } from "@/context/CartContext";
import style from "@/components/PortoStore/Carts/index.module.css";

const TableCart = () => {
  const carts = useCart();
  const dispatch = useCartDispatchh();

  // Function to format the amount into Indonesian Rupiah currency format
  const formatCurrency = (amount) => {
    const numericAmount = Number(amount);

    if (Number.isNaN(numericAmount)) {
      return "Invalid Price";
    }

    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(numericAmount);
  };

  const handleAddToCart = (cart) => {
    dispatch({
      type: "add",
      payload: cart,
    });
  };

  const handleDecreseToCart = (cart) => {
    dispatch({
      type: "decrese",
      payload: cart,
    });
  };

  const handleRemove = (cart) => {
    dispatch({
      type: "remove",
      payload: cart,
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table" style={{ color: "var(--color-blue" }}>
        {/* head */}
        <thead style={{ color: "var(--color-dark-blue)", fontSize: "larger", fontWeight: "bolder" }}>
          <tr>
            <th className={style["no-tab"]}>No. </th>
            <th>Name Item</th>
            <th style={{ width: "100px" }}>Quatity</th>
            <th className={style["price-tab"]}>Price</th>
            <th> Total Price</th>
            <th style={{ width: "50px" }}> Clear</th>
            <th></th>
          </tr>
        </thead>
        <tbody style={{ fontWeight: "bold" }}>
          {carts.map((cart, index) => {
            const productPrice = cart.price;
            const Price = productPrice * 15108; // Calculate the  price based on the quantity
            const formattedPrice = formatCurrency(Price).replace(",00", "");
            const producttotal = formatCurrency(cart.price * cart.quantity * 15108).replace(",00", "");
            return (
              <tr key={index}>
                <th className={style["no-tab"]}>{index + 1}</th>
                <td>{cart.title}</td>
                <td>
                  <div className={style["cart-item__action"]}>
                    <button onClick={() => handleDecreseToCart(cart)} style={{ backgroundColor: "red" }}>
                      -
                    </button>
                    <p>{cart.quantity}</p>
                    <button onClick={() => handleAddToCart(cart)} style={{ backgroundColor: "greenyellow" }}>
                      +
                    </button>
                  </div>
                </td>
                <td className={style["price-tab"]}>{formattedPrice}</td>
                <td>{producttotal}</td>
                <td>
                  <button style={{ color: "white" }} className="btn btn-warning btn-xs" onClick={() => handleRemove(cart)}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TableCart;
