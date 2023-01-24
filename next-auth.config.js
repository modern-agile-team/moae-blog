const providers = [
  {
    name: "google",
    clientId: process.env.NEXT_PUBLIC_GOOGLE_ID || "",
    clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET || "",
    scope: ["profile", "email"],
    redirectUri: NEXT_PUBLIC_GOOGLE_CALLBACK_URL || "",
  },
  // Add additional providers here
];

module.exports = {
  providers,
};
