
export const passwordResetConfirmation = (name: string) => {
    return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Change Successful</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background-color: #ffffff;
            border: 1px solid #d1d9e6;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .header {
            padding: 10px;
          }
          .title {
            color: #EAB308;
            font-size: 24px;
            font-weight: bold;
          }
          .content {
            color: #333333;
            line-height: 1.6;
            margin: 20px 0;
            font-size: 18px; 
            font-weight: normal; 
          }
          .footer {
            font-size: 12px;
            color: #777777;
            margin-top: 20px;
            border-top: 1px solid #eaeaea;
            padding-top: 20px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://i.ibb.co/qgPfJtP/logobmg.png" alt="Logo" width="100">
          </div>
          <div class="title">
            <h1>Password Change Successful</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>We are pleased to inform you that your password has been successfully changed. You can now access your account using your new password.</p>
            <p>If you did not initiate this change, please contact our support team immediately to secure your account.</p>
            <p>Thank you for choosing Disruptive Information Technologies. We are committed to providing you with a secure and efficient service.</p>
          </div>
          <div class="footer">
            &copy; 2024 Disruptive Information Technologies S.A.S. All rights reserved.<br>
            <a href="https://www.disruptiveinfo.com/support" style="color: #EAB308; text-decoration: none;">Contact Support</a>
          </div>
        </div>
      </body>
      </html>`;
  };
  