const supabaseUrl = "https://wudmezmxdnwzfpppjmzw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1ZG1lem14ZG53emZwcHBqbXp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1MDE2NjMsImV4cCI6MjA2ODA3NzY2M30.oOIXvvMThJjjwDVosngEhvhzLIB6hfYkwhiqxi9marY";
const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
 

  if (error) {
    alert("Error signing up: " + error.message);
  } else {
    alert(
      "Account created successfully! Please check your email for confirmation link."
    );
    console.log("User signed up:", data);
    window.location.href = "./index.html"; // Redirect to login page after sign up
  }
}
async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    alert(`Login failed: ${error.message}`);
  } else {
    alert("Logged in successfully!");
    console.log("User signed in:", data);
    window.location.href = "welcome.html "; // Redirect to welcome page after login
  }
}
async function forgotPassword(email) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo:  window.location.origin + '/reset.html',
  });
  // RedirectTo is set to the reset-password.html page in the current origin
  // This allows the user to reset their password after clicking the link in the email
  if (error) {
    alert(`Error sending reset link: ${error.message}`);
  } else {
    alert("Password reset email sent! Please check your inbox.");
    console.log("Password reset initiated:", data);
  }
}
async function resetPassword(newPassword) {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    alert(`Error resetting password: ${error.message}`);
  } else {
    alert(
      "Password reset successfully! You can now log in with your new password."
    );
    console.log("Password reset:", data);
    window.location.href = "./index.html"; // Redirect to login page after password reset
  }
}
async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert(`Error signing out: ${error.message}`);
  } else {
    alert("Signed out successfully!");
    console.log("User signed out");
    window.location.href = "./index.html"; // Redirect to login page after sign out
  }
}
//event listeners for form submissions
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
      signIn(email, password);
    });
  }

  const signupForm = document.getElementById("signup-form");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;
      signUp(email, password);
    });
  }

  const forgotPasswordForm = document.getElementById("forgotform");
  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("forgot-email").value;
      forgotPassword(email);
    });
  }

  const resetPasswordForm = document.getElementById("resetform");
  if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newPassword = document.getElementById("reset-password").value;
      resetPassword(newPassword);
    });
  }
});
