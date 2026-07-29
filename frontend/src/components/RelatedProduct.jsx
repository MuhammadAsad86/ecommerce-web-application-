import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
const RelatedProducts = ({ category, subCategory }) => {

  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {

    if (products.length > 0) {

      let productsCopy = products.slice();

      productsCopy = productsCopy.filter(
        (item) => category === item.category
      );

      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

     setRelated(productsCopy.slice(0, 5));

    }

  }, [products]);

  return (
  <section className='my-24 border-t border-border pt-16'>

    <div className='page-intro text-3xl py-2 section-heading'>
      <Title text1={'RELATED'} text2={'PRODUCTS'} />
      <p className='mt-2 text-sm leading-6 text-muted'>More carefully selected pieces from the same collection.</p>
    </div>

    <div className='mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5 gap-y-7'>
      {
        related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))
      }
    </div>

  </section>
);
};

export default RelatedProducts;
