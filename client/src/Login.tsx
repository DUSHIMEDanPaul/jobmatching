import { AuthService } from "@/services/auth.service"; // Import the entire AuthService class

// Create an instance of the AuthService
const authService = new AuthService();

// Use the methods
authService.signup("user@example.com", "password123")
  .then(user => {
    console.log("Signed up user:", user);
  })
  .catch(error => {
    console.error("Error during signup:", error);
  });

authService.login("user@example.com", "password123")
  .then(user => {
    console.log("Logged in user:", user);
  })
  .catch(error => {
    console.error("Error during login:", error);
  });
