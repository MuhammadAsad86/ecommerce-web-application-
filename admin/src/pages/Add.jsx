import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {

    e.preventDefault();

    try {

      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        {
          headers: { token },
        }
      );

      if (response.data.success) {

        toast.success(response.data.message);

        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);

        setName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
        setSubCategory("Topwear");
        setBestseller(false);
        setSizes([]);

      } else {

        toast.error(response.data.message);

      }

    } catch (error) {

      console.log(error);
      toast.error(error.message);

    }

  };

  return (

    <section className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">

          <span className="h-2 w-2 rounded-full bg-blue-600"></span>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">

            Admin Dashboard

          </p>

        </div>

        <h1 className="mt-5 text-4xl font-bold text-slate-900">

          Add Product

        </h1>

        <p className="mt-3 max-w-2xl text-slate-500">

          Upload a new product with images, pricing, categories and sizes.

        </p>

      </div>

      <form
        onSubmit={onSubmitHandler}
        className="space-y-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm"
      >
        {/* Upload Images */}

<div>

  <p className="mb-4 text-lg font-semibold text-slate-900">

    Product Images

  </p>

  <div className="flex flex-wrap gap-5">

    {[

      { image: image1, setImage: setImage1, id: "image1" },
      { image: image2, setImage: setImage2, id: "image2" },
      { image: image3, setImage: setImage3, id: "image3" },
      { image: image4, setImage: setImage4, id: "image4" },

    ].map((item, index) => (

      <label
        key={index}
        htmlFor={item.id}
        className="group cursor-pointer"
      >

        <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 transition-all duration-300 group-hover:border-blue-500">

          <img
            src={
              !item.image
                ? assets.upload_area
                : URL.createObjectURL(item.image)
            }
            alt=""
            className="h-full w-full object-cover"
          />

        </div>

        <input
          id={item.id}
          type="file"
          hidden
          onChange={(e) => item.setImage(e.target.files[0])}
        />

      </label>

    ))}

  </div>

</div>

{/* Product Name */}

<div>

  <label className="mb-2 block font-medium text-slate-700">

    Product Name

  </label>

  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Enter product name"
    required
    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600"
  />

</div>

{/* Description */}

<div>

  <label className="mb-2 block font-medium text-slate-700">

    Product Description

  </label>

  <textarea
    rows={5}
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Write product description..."
    required
    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600"
  />

</div>
{/* Category, Sub Category & Price */}

<div className="grid gap-6 md:grid-cols-3">

  <div>

    <label className="mb-2 block font-medium text-slate-700">

      Category

    </label>

    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600"
    >

      <option value="Men">Men</option>
      <option value="Women">Women</option>
      <option value="Kids">Kids</option>

    </select>

  </div>

  <div>

    <label className="mb-2 block font-medium text-slate-700">

      Sub Category

    </label>

    <select
      value={subCategory}
      onChange={(e) => setSubCategory(e.target.value)}
      className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600"
    >

      <option value="Topwear">Topwear</option>
      <option value="Bottomwear">Bottomwear</option>
      <option value="Winterwear">Winterwear</option>

    </select>

  </div>

  <div>

    <label className="mb-2 block font-medium text-slate-700">

      Price

    </label>

    <input
      type="number"
      placeholder="99"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      required
      className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 outline-none transition-all duration-300 focus:border-blue-600"
    />

  </div>

</div>

{/* Product Sizes */}

<div>

  <p className="mb-4 text-lg font-semibold text-slate-900">

    Available Sizes

  </p>

  <div className="flex flex-wrap gap-3">

    {["S", "M", "L", "XL", "XXL"].map((item) => (

      <button
        type="button"
        key={item}
        onClick={() =>
          setSizes((prev) =>
            prev.includes(item)
              ? prev.filter((size) => size !== item)
              : [...prev, item]
          )
        }
        className={`rounded-xl px-5 py-3 font-medium transition-all duration-300 ${
          sizes.includes(item)
            ? "bg-blue-600 text-white"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
        }`}
      >

        {item}

      </button>

    ))}

  </div>

</div>
{/* Bestseller */}

<div className="flex items-center gap-3">

  <input
    id="bestseller"
    type="checkbox"
    checked={bestseller}
    onChange={() => setBestseller((prev) => !prev)}
    className="h-5 w-5 cursor-pointer accent-blue-600"
  />

  <label
    htmlFor="bestseller"
    className="cursor-pointer font-medium text-slate-700"
  >

    Add To Bestseller

  </label>

</div>

{/* Submit Button */}

<div>

  <button
    type="submit"
    className="rounded-2xl bg-slate-900 px-10 py-4 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600"
  >

    Add Product

  </button>

</div>

</form>

</section>

);

};

export default Add;