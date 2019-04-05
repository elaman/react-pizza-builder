import React from 'react';
import classes from './CheckoutForm.module.css';

function CheckoutForm(props) {
  return (
    <div className={classes.CheckoutForm}>
      <h3>Checkout</h3>

      <label>Name: <input type="text" placeholder="e.g. Bakyt" /></label>
      <label>Phone: <input type="text" placeholder="e.g. 0 555 123 456" /></label>
      <label>Address: <input type="text" placeholder="e.g. 150 Karasaeva str." /></label>
      
      <button>Submit</button>
      <button>Cancel</button>
    </div>
  );
}

export default CheckoutForm;