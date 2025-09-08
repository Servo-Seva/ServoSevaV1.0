import React, { useState, useEffect } from "react";

// Define the type for the user object returned from the backend
interface UserType {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Define the type for the Google credential response
interface CredentialResponse {
  credential: string;
  select_by: string;
}

// Define the global Google Identity Services object type to avoid TypeScript errors
declare const google: any;

// Extend the Window interface to include 'google'
declare global {
  interface Window {
    google: any;
  }
}

// Main application component
const GoogleAuth = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<string | null>(null);

  // This function handles the Google Sign-In response.
  // It's the callback function specified in the `initialize` method.
  const handleCredentialResponse = async (response: CredentialResponse) => {
    // The ID token is in response.credential. This is what you send to your backend.
    const idToken = response.credential;

    // We'll call a function to send the token to your backend.
    // The URL should match the endpoint where your googleSignIn function is being called.
    // Assuming the endpoint is something like `/api/auth/google`.
    try {
      const backendResponse = await fetch(
        "http://localhost:5000/api/auth/google",
        {
          // Change port if needed
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: idToken }),
        }
      );

      if (!backendResponse.ok) {
        throw new Error("Failed to authenticate with backend");
      }

      const result = await backendResponse.json();
      console.log("Backend response:", result);

      // Store the user info and accessToken from the backend response.
      // Your backend returns { accessToken, user: { id, name, email, role } }
      setUser(result.user);
      setError(null);
    } catch (err: any) {
      console.error("Login failed:", err);
      setError("Login failed. Please try again.");
    }
  };

  const handleSignOut = () => {
    // Revoke the token with Google Identity Services
    if (user) {
      google.accounts.id.revoke(user.email, (done: any) => {
        console.log("Google account revoked:", done);
        // Clear user state and cookie on the frontend
        setUser(null);

        // You may also want to call a backend endpoint to clear the session/refresh token
        // For this example, we'll just handle it on the client side.
      });
    }
  };

  // useEffect to initialize Google Identity Services when the component mounts.
  useEffect(() => {
    // Check if the google object is available
    if (typeof window.google !== "undefined") {
      google.accounts.id.initialize({
        client_id: "YOUR_CLIENT_ID", // <-- Replace with your Google Client ID
        callback: handleCredentialResponse,
        // Optional: `auto_select: true` automatically signs in returning users
        auto_select: false,
      });

      // Render the sign-in button
      // You can customize the button appearance here
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
        text: "continue_with",
      });
    } else {
      setError("Google Identity Services script not loaded. Check your HTML.");
    }
  }, [user]); // Re-run effect if user changes, for rendering the button

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Google Login</h1>

        {user ? (
          <div className="space-y-4">
            <p className="text-gray-600">You are logged in as:</p>
            <p className="text-xl font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <button
              onClick={handleSignOut}
              className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-600 mb-4">Sign in to continue.</p>
            <div id="signInDiv" className="flex justify-center"></div>
            {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleAuth;
