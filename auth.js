import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    confirmPasswordReset
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { auth } from "./firebaseConfig.js";

// Function to handle user registration
async function signUp(email, password) {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
        window.location.href = "index.html"; // Redirect to welcome page
    } catch (error) {
        alert("Error creating account: " + error.message);
    }
}
// Function to handle user login
async function signIn(email, password) {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        window.location.href = "welcome.html"; // Redirect to welcome page
    } catch (error) {
        alert("Error logging in: " + error.message);
    }
}
// Function to handle password reset
async function resetPassword(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset email sent!");
    } catch (error) {
        alert("Error sending password reset email: " + error.message);
    }
}

async function createNewPassword (oobCode, newPassword) {
    try {
        await confirmPasswordReset(auth, oobCode, newPassword);
        alert("Password has been reset successfully!");
    } catch (error) {
        alert("Error resetting password: " + error.message);    
    }
}
//Event listeners for the functions
document.addEventListener('DOMContentLoaded', () => {
    //sign Up form
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;
            await signUp(email, password);
        });                                             
    }
    //Login form
    const signinForm = document.getElementById("login-form");
    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            await signIn(email, password);
        });
    }
    //Password reset form
    const resetEmailForm = document.getElementById('forgotform');
    if (resetEmailForm) {
        resetEmailForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById("forgot-email").value;
            await sendresetEmail(email);
        });
    }
    //New password form
    const newPasswordForm = document.getElementById('resetForm');
    if (newPasswordForm) {
        const urlParams = new URLSearchParams(window.location.search);
        const oobCode = urlParams.get('oobCode');
        
        if (oobcode) {
             //if a password reset code exists, show the new password form
            newPasswordForm.style.display = 'block';
            newPasswordForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const newPassword = document.getElementById("new-password").value;
                await createNewPassword(oobCode, newPassword);
            });
        } else {
            //if no code exists, hide the new password form
            newPasswordForm.style.display = 'none';
        }
    }
});