// captchaUtils.js

/**
 * Generates a random captcha string consisting of 6 alphanumeric characters.
 *
 * @returns {string} - The generated captcha string.
 */
export const generateCaptcha = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
