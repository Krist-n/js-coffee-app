"use strict";

// append to cart-items, adding rows to a table in cart
//inside the rows of the data of the item's name
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

// take the cart total and reset it at 0
// empty out the items in the cart-items object (html table)
const resetCart = () => {
  $('#cart-total').html('0.00'); // TODO check out later :) 
  $('#cart-items').empty();
};
//Creating a var to accumulate cart total
//and incrementing based on item in cart, setting decimal place
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

// set variable equal to number of coffee sold
// increase coffeSold by amountSold
// coffee-sold-counter - convert to coffeeSold
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};
//taking in progressval and statusmsg, whatever that is 
//looking for id tag order-progress changing attribute to progressVal
//replacing order-status-message with status message
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
