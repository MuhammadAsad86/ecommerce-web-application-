import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {

  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className='w-full'>

      <div className='text-2xl section-heading'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='mt-2 overflow-hidden rounded-xl border border-border bg-surface text-sm text-secondary'>

        <div className='flex justify-between px-4 py-4'>
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>

        <hr className='border-border' />

        <div className='flex justify-between px-4 py-4'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>

        <hr className='border-border' />

        <div className='flex justify-between bg-card px-4 py-5 text-primary'>
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount() === 0
              ? 0
              : getCartAmount() + delivery_fee}.00
          </b>
        </div>

      </div>

    </div>
  );
};

export default CartTotal;
