// const axios = require("axios");

// const verifyRecaptcha = async (req, res, next) => {
//   try {
//     const recaptchaToken =
//       req.body.recaptchaToken || req.body["g-recaptcha-response"];

//     if (!recaptchaToken) {
//       return res.status(400).json({
//         success: false,
//         message: "reCAPTCHA token is required",
//       });
//     }

//     // ✅ Test keys (Google official test secret key for v2/v3)
//     const TEST_SECRET_KEY = "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";

//     // 👉 Agar test key use ho rahi hai, to hamesha success return karo
//     if (process.env.RECAPTCHA_SECRET_KEY === TEST_SECRET_KEY) {
//       req.recaptcha = { success: true, testMode: true };
//       return next();
//     }

//     // ✅ Verify with Google (Production mode)
//     const response = await axios.post(
//       "https://www.google.com/recaptcha/api/siteverify",
//       null,
//       {
//         params: {
//           secret: process.env.RECAPTCHA_SECRET_KEY,
//           response: recaptchaToken,
//           remoteip: req.ip,
//         },
//       }
//     );

//     const { success, score, action, "error-codes": errorCodes } = response.data;

//     if (!success) {
//       return res.status(400).json({
//         success: false,
//         message: "reCAPTCHA verification failed. Please try again.",
//         errors: errorCodes || [],
//       });
//     }

//     // ✅ Only for v3 (ignore if v2)
//     if (score !== undefined && score < 0.5) {
//       return res.status(400).json({
//         success: false,
//         message: "reCAPTCHA score too low. Please try again.",
//         score,
//       });
//     }

//     req.recaptcha = { success, score, action };
//     next();
//   } catch (error) {
//     console.error("reCAPTCHA verification error:", error.message);
//     return res.status(500).json({
//       success: false,
//       message: "Server error while verifying reCAPTCHA",
//     });
//   }
// };

// module.exports = { verifyRecaptcha };
