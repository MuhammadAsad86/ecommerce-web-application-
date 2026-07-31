import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";


const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes("collection")) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location]);

    return showSearch && visible ? (
<div className="relative my-5 overflow-hidden rounded-2xl border border-border bg-surface px-4 py-4 text-center shadow-card sm:px-6">
            <div className="mx-auto flex max-w-2xl items-center gap-4 rounded-xl border border-border bg-card px-4 py-2 shadow-card focus-within:border-accent focus-within:shadow-card-hover transition-all duration-300">
                <span className="eyebrow hidden sm:block">DISCOVER</span>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 min-w-0 outline-none bg-inherit py-2 text-sm"
                    type="text"
                    placeholder="Search"
                />
                <img className="w-4 opacity-70" src={assets.search_icon} alt="" />
            </div>

            <img
                onClick={() => setShowSearch(false)}
                className="absolute right-5 top-1/2 w-3.5 -translate-y-1/2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-200"
                src={assets.cross_icon}
                alt=""
            />
        </div>
    ) : null;
};

export default SearchBar;
