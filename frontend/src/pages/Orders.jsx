import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="pt-12">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="p-5 my-4 border border-border bg-card rounded-2xl shadow-card hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-300 text-secondary flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20 rounded-xl bg-surface"
                src={item.image[0]}
                alt={item.name}
              />

              <div>
                <p className="sm:text-base font-medium text-primary">{item.name}</p>

                <div className="flex items-center gap-3 mt-2 text-base text-secondary">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>

                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>

                <p className="mt-2">
                  Date:{" "}
                  <span className="text-muted">
                    {new Date().toLocaleDateString()}
                  </span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-success"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>

              <button className="premium-button border border-border px-5 py-3 text-xs hover:bg-primary hover:border-primary hover:text-white">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
