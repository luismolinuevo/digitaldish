import React from 'react';

function CheckoutPage() {
  return (
    <div className='pt-20'>
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-8">Checkout</h2>

          <div className="flex justify-between mb-8">
            <div className="w-2/3 pr-8">
              {/* Shipping Form */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                      placeholder="Enter your name"
                    />
                  </div>
                  {/* Add more shipping fields */}
                </form>
              </div>

              {/* Payment Form */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Payment Details</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="cardNumber" className="block mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      className="border border-gray-300 rounded-lg py-2 px-4 w-full"
                      placeholder="Enter card number"
                    />
                  </div>
                  {/* Add more payment fields */}
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-1/3">
              <div className="bg-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                {/* Display order items, totals, etc. */}
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CheckoutPage;
