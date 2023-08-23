import React, { useState } from "react";
import style from "./index.module.css";
import Swal from "sweetalert2";

const NewMerchantForm = ({ onAddMerchant }) => {
  const [newMerchant, setNewMerchant] = useState({
    gofood: "",
    grabfood: "",
    merchantName: "",
    shopeefood: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMerchant((prevMerchant) => ({
      ...prevMerchant,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMerchant(newMerchant);
    // Reset form fields
    setNewMerchant({
      gofood: "",
      grabfood: "",
      merchantName: "",
      shopeefood: "",
    });

    Swal.fire({
      title: "New Merchant Added",
      confirmButtonColor: "var(--color-blue)",
      icon: "success",
    });
  };

  return (
    <div className={style["container-form"]}>
      <h2>Add New Merchant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Merchant Name:</span>
            </label>
            <input type="text" name="merchantName" value={newMerchant.merchantName} onChange={handleInputChange} className="input input-bordered w-full max-w-xs" required />
            <label className="label">
              <span className="label-text ">Go-food Link:</span>
            </label>
            <input type="text" name="gofood" value={newMerchant.gofood} onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
            <label className="label">
              <span className="label-text ">GrabFood Link:</span>
            </label>
            <input type="text" name="grabfood" value={newMerchant.grabfood} onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
            <label className="label">
              <span className="label-text ">ShopeeFood Link:</span>
            </label>
            <input type="text" name="shopeefood" value={newMerchant.shopeefood} onChange={handleInputChange} className="input input-bordered w-full max-w-xs" />
          </div>
        </div>

        <div className="pt-3">
          <button className="btn btn-success" style={{ color: "#fff" }} type="submit">
            Add Merchant
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewMerchantForm;
