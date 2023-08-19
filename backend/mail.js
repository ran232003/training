let mailHtml = `<!DOCTYPE html>
<html>
<head>
  <title>Reset your password.</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f0f0f0; text-align: center; padding: 40px;">
  <h1 style="color: #3498db;">Reset your password.</h1>
  <p style="color: #444;">Click here to reset your password.</p>
  <a href="http://localhost:3000/reset/userToken" target="_blank" style="background-color: #4CAF50; color: white; padding: 14px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 4px; font-size: 16px; margin-top: 20px;">Go to Reset Page</a>
</body>
</html>`;
const testHTML = `<!DOCTYPE html>
<html>
  <body>
    <h1>Reset your password.</h1>
    <a href="http://localhost:3000/reset/">Click here to reset your password.</a>
  </body>
</html>`; // html body
module.exports = {
  mailHtml,
  testHTML,
};
