export const verificationEmail = (name: string, code: string, redirectUrl: string) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Account Verification</title>
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
          
        .code-box {
          font-size: 28px;
          font-weight: bold;
          color: #333333;
          background-color: #f0f0f0;
          padding: 10px 20px;
          margin: 20px 0;
          border-radius: 5px;
          display: inline-block;
        }
        .button-wrapper {
          text-align: center;
          margin: 20px 0;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #EAB308;
          color: #ffffff !important;
          text-decoration: none;
          border-radius: 9999px;
          font-weight: bold;
          font-size: 16px;
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
          <img src="https://i.ibb.co/qgPfJtP/logobmg.png" alt="Logo" width="100" />
        </div>
        <h1 class="title">Account Verification</h1>
        <div class="content">
          <p>Hi ${name}!</p>
          <p>To ensure the security of your account, we have generated a unique verification code for you: <strong>${code}</strong>. Please enter this code in the verification form to complete the account activation process.</p>
          <p>Please note that you have 5 hours to change your password using this code. If you do not complete the verification within this time, the code will expire.</p>
        </div>
        <div class="button-wrapper">
          <a href="${redirectUrl}" class="button">Verify Account</a>
        </div>
        <div class="footer">
            &copy; 2024 Disruptive Information Technologies S.A.S. All rights reserved.<br>
            <a href="https://www.disruptiveinfo.com/support" style="color: #EAB308; text-decoration: none;">Contact Support</a>
          </div>
      </div>
    </body>
    </html>`; 
};
