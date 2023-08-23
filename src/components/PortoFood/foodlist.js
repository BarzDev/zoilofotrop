import style from "@/components/PortoFood/index.module.css";
import Image from "next/image";
import Link from "next/link";
import NewMerchantForm from "./form";

const FoodList = ({ dbFood, handleAddMerchant }) => {
  return (
    <div className={style["container"]}>
      <div className={style["container-head"]}>
        <div>
          <div className="drawer drawer-end z" style={{ zIndex: "2" }}>
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button btn btn-accent">
                + Add New Merchant
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
              <NewMerchantForm onAddMerchant={handleAddMerchant} />
            </div>
          </div>
        </div>
        <h1 className={style["title"]}>PROTOTYPE MERCHANT PROMOTE</h1>
      </div>
      <div className={style["container-list"]}>
        {dbFood.map((user, i) => (
          <div key={i}>
            <div className="card card-compact w-80 bg-base-100 shadow-xl" style={{ border: "2px solid #fff", backgroundColor: "var(--color-dark-blue)" }}>
              <div className="flex justify-center my-3">
                <div className={style["imgicon"]}>
                  <Image src={"/foodicon.png"} alt="food-icon" width={75} height={75} />
                </div>
              </div>
              <div className="card-body">
                <div className="card-title flex justify-center w-full h-12">
                  <h2 className="text-center">{user.merchantName}</h2>
                </div>

                <div className="card-actions justify-center">
                  {user.gofood ? (
                    <Link className="btn w-9/12 border-transparent" style={{ backgroundColor: "#eb2836", color: "#fff" }} href={user.gofood} target="_blank">
                      Go-Food
                    </Link>
                  ) : (
                    <button className="btn w-9/12 border-transparent" disabled="disabled" style={{ backgroundColor: "#fff", color: "#eb2836" }}>
                      Go-Food is not available
                    </button>
                  )}

                  {user.grabfood ? (
                    <Link href={user.grabfood} target="_blank" className="btn w-9/12 border-transparent" style={{ backgroundColor: "#029835", color: "#fff" }}>
                      Grab-Food
                    </Link>
                  ) : (
                    <button className="btn w-9/12 border-transparent" disabled="disabled" style={{ backgroundColor: "#fff", color: "#029835" }}>
                      Grab-Food is not available
                    </button>
                  )}
                  {user.shopeefood ? (
                    <Link href={user.shopeefood} target="_blank" className="btn w-9/12 border-transparent" style={{ backgroundColor: "#ed4d2d", color: "#fff" }}>
                      Shopeefood
                    </Link>
                  ) : (
                    <button className="btn w-9/12 border-transparent" disabled="disabled" style={{ backgroundColor: "#fff", color: "#ed4d2d" }}>
                      Shopeefood is not available
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
