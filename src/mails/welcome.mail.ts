import { envs } from "../config";

export const welcomeEmail = (
    email: string,
    name: string,
    token: string,
    role: string, // Role parameter
    url = `${envs.WEB_SERVICE}welcome`
) => {
    return `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>System Notifications</title>
                <style>
                  .container {
                    max-width: 600px;
                    margin: 40px auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border: 1px solid #d1d9e6;
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                  }
                  .header {
                    padding: 10px;
                    text-align: center;
                  }
                  .logo {
                    width: 100px;
                    margin: 0 auto;
                  }
                  .title {
                    color: #EAB308;
                    font-size: 22px;
                    margin-top: 20px;
                    font-weight: bold;
                    text-align: center;
                  }
                  .content {
            color: #333333;
            line-height: 1.6;
            margin: 20px 0;
            font-size: 18px; 
            font-weight: normal; 
          }
                  .button {
                    display: inline-block;
                    padding: 12px 24px;
                    background-color: #EAB308;
                    color: #ffffff !important;
                    text-decoration: none;
                    border-radius: 9999px;
                    margin: 20px 0;
                    font-weight: bold;
                    font-size: 16px;
                  }
                  .button-wrapper {
                    text-align: center; /* This centers the button */
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
              <body style="font-family: 'Arial', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
                <div class="container">
                  <div class="header">
                    <img src="https://i.ibb.co/qgPfJtP/logobmg.png" alt="Logo" class="logo" />
                  </div>
                  <h1 class="title">System Notifications</h1>
                  <div class="content">
                    <!-- Container with more design and text separation -->
                      <p>Hello ${name}!</p>
                      <p>Welcome to Barmager, the system where efficiency and collaboration are our priorities. As a <strong>${role}</strong>, you'll be able to manage all your tasks easily, access critical information, and work together with your team to achieve the company's goals.</p>
                      <p>Please be informed that you have 1 day (24 hours) to activate your account in the system. If you do not complete the activation within this period, kindly contact the administrators for assistance.</p>
                    <div class="button-wrapper">
                      <a href="${url}/${token}" class="button">Activate your account</a>
                    </div>
                  </div>
                  <div class="footer">
            &copy; 2024 Disruptive Information Technologies S.A.S. All rights reserved.<br>
            <a href="https://www.disruptiveinfo.com/support" style="color: #EAB308; text-decoration: none;">Contact Support</a>
          </div>
                </div>
              </body>
              </html>`;
};
