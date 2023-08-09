import React, { useState } from "react";
import style from "@/components/PortoStore/Carts/index.module.css";
import TableCart from "./table";
import { useCart, useCartDispatchh } from "@/context/CartContext";

const CartComponen = () => {
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

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < carts.length; i++) {
      totalPrice += carts[i].price * carts[i].quantity;
    }
    return totalPrice;
  };

  const formatTotal = formatCurrency(getTotalPrice() * 15108).replace(",00", "");

  const [paymentConfirm, setPaymentConfirm] = useState(false);

  const handlePaymentConfirmation = () => {
    setPaymentConfirm(true);
    closeModal();
  };

  const clearCart = (cart) => {
    dispatch({
      type: "clear",
      payload: cart,
    });
  };
  const closeModal = () => {
    clearCart();
    window.my_modal_1.close();
  };

  setTimeout(() => {
    setPaymentConfirm(false);
  }, 3000);

  const isDisablebutton = () => {
    return carts.length === 0;
  };

  return (
    <div className={style["cart"]}>
      <h1 style={{ fontWeight: "bolder", fontSize: "larger", color: "#292c4b" }}>MY CART</h1>

      <div className={style["cart__cart-list"]}>
        {/* Pesan konfirmasi */}
        {paymentConfirm && (
          <div className="alert alert-success">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Your purchase has been confirmed! Thanks You</span>
          </div>
        )}
        <TableCart />
      </div>

      <div className={style["cart__Checkout"]}>
        <div className={style["cart__Sales"]}>
          <div>
            <p>Total Price :</p>
          </div>
          <div>
            <p>{formatTotal}</p>
          </div>
        </div>
        <div className={style["cart__Button"]}>
          <button onClick={() => window.my_modal_1.showModal()} disabled={isDisablebutton()}>
            Payment
          </button>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div></div>
        <form method="dialog" className="modal-box">
          <div className={style["modal_payment"]}>
            <h3 className="font-bold text-lg">Payment !!!</h3>
            <p className="py-4">Total Payment</p>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <p className="py-1" style={{ fontSize: "50px" }}>
                {formatTotal}
              </p>
            </div>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <div className="modal-action" style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                <button className="btn btn-success" onClick={handlePaymentConfirmation}>
                  Confirm Payment
                </button>
                <button className="btn btn-error" onClick={() => window.my_modal_1.close()}>
                  Cancel Payment
                </button>
              </div>
            </div>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default CartComponen;
