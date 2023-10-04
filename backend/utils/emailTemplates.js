const emailTemplate = {
  orderDetails: (data) => {
    return `<html>

<head>
    <style>
        /* Add your custom CSS styles here */
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
        }

        .header {
            background-color: #2874f0;
            color: #ffffff;
            padding: 15px 0;
            text-align: center;
        }

        .content {
            padding: 20px;
        }

        .order-details {
            margin-top: 20px;
            border: 1px solid #e0e0e0;
            padding: 20px;
            background-color: #f7f7f7;
        }

        .button {
            background-color: #2874f0;
            border: none;
            color: #ffffff;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 4px;
        }

        .address {
            font-size: 16px;
            line-height: 1.6;
            color: #333;
            margin-bottom: 10px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>Your Flipkart Order Confirmation</h1>
        </div>
        <div class="content">
            <p>Hello <strong>${data.name}</strong>,</p>
            <p>Your order with Order ID: <strong>${data.oid}</strong> has been confirmed and is on its way.</p>

            <h2>Shipping Information:</h2>
            <div class="address">
                <p>Address: ${data.shippingInfo.address}</p>
                <p>City: ${data.shippingInfo.city}</p>
                <p>State: ${data.shippingInfo.state}</p>
                <p>Country: ${data.shippingInfo.country}</p>
                <p>Pincode: ${data.shippingInfo.pincode}</p>
                <p>Phone Number: ${data.shippingInfo.phoneNo}</p>
            </div>

            <h2>Order Details:</h2>
            <div class="order-details">
                ${data.orderItems.map(item => `
                <div class="order-item">
                    <p><strong>${item.name}</strong></p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price per item: ${item.price}</p>
                </div>
                `).join('')}
            </div>
            <h2>Total Price: ₹${data.totalPrice}</h2>
            <a class="button" href="${data.orderDetailsUrl}" target="_blank">View Order Details</a>
            <p>Thank you for shopping with us!</p>
            <p>If you have any questions or need assistance, please feel free to contact us.</p>
            <p>Best regards,<br>Ritesh 😊</p>
        </div>
    </div>
</body>

</html>`
  },
  resetPassword: (user, resetPasswordUrl) => {
    return `<html>
    <head>
      <style>
        .button {
          background-color: #4CAF50;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
        }
      </style>
    </head>
    <body>
      <p>Hello ${user.name},</p>
      <p>Please click on the button below to Reset your Flipkart clone password:</p>
      <a class="button" href="${resetPasswordUrl}" target="_blank">Reset Password</a>
      <p>Best regards,<br>Ritesh 😊</p>
    </body>
  </html>`
  }
}

module.exports = emailTemplate;