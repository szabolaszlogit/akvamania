<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";




import { I18n } from "aws-amplify";
import { translations } from "@aws-amplify/ui-vue";




I18n.putVocabularies(translations);
I18n.setLanguage("hu");

I18n.putVocabularies({
  hu: {
    "Account recovery requires verified contact information":
      "Account recovery requires verified contact information",
    "Back to Sign In": "Vissza a bejelentkezéshez",
    "Change Password": "Jelszóváltoztatás",
    Changing: "Változtatás",
    Code: "Kód",
    "Code *": "Kód",
    Confirm: "Megerősít",
    "Confirm Password": "Jelszó ismét",
    "Confirm Sign Up": "Regisztráció megerősítése",
    "Confirm SMS Code": "Confirm SMS Code",
    "Confirm TOTP Code": "Confirm TOTP Code",
    "Confirmation Code": "Megerősítő kód",
    Confirming: "Megerősítés",
    "Create Account": "Fiók létrehozása",
    "Creating Account": "Fiók létrehozása",
    Email: "Email",
    "Enter your code": "Kód:",
    "Enter your username": "Felhasználónév",
    "Enter your phone number": "Telefonszám",
    "Enter your email": "Email",
    "Forgot your password?": "Elfelejtett jelszó?",
    "Hide password": "Jelszó elrejtése",
    Loading: "Töltés",
    Username: "Felhasználónév",
    "New Password": "Új jelszó",
    Password: "Jelszó",
    "Phone Number": "Telefonszám",
    "Resend Code": "Kód újraküldése",
    "Reset your password": "Elfelejtett jelszó",
    "Reset your Password": "Elfelejtett jelszó",
    "Send Code": "Kódküldés",
    "Send code": "Kódküldés",
    Sending: "Küldés",
    "Setup TOTP": "Setup TOTP",
    "Show password": "Jelszó mutatása",
    "Sign in": "Belépés",
    "Sign In": "Belépés",
    "Sign In with Amazon": "Sign In with Amazon",
    "Sign In with Apple": "Sign In with Apple",
    "Sign In with Facebook": "Sign In with Facebook",
    "Sign In with Google": "Sign In with Google",
    "Sign in to your account": "Bejelentkezés",
    "Create a new account": "Fiók létrehozása",
    "Signing in": "Bejelentkezés",
    Skip: "Kihagy",
    Submit: "Küld",
    Submitting: "Küldés",
    "Verify Contact": "Verify Contact",
    Verify: "Igazolás",
    "Username/client id combination not found.": "Az email cím nem található.",
    "User does not exist.": "Nincs ilyen felhasználó",
    "Incorrect username or password.": "Hibás jelszó vagy email cím.",
    "Your passwords must match": "A jelszavak nem egyeznek.",
    "Password must have at least 8 characters": "Legalább 8 karakter",
    "Password must have numbers": "Legalább egy szám",
    "Password must have special characters": "Legalább egy speciális karakter",
    "Password must have upper case letters": "Legalább egy nagybetű",
    "An account with the given email already exists.":
      "Ez az email már használatban van.",
    "Invalid verification code provided, please try again.":
      "Hibás megerősítő kód.",
    "Your code is on the way. To log in, enter the code we emailed to":
      "A kódot elküldtük a következő email címre: ",
    "It may take a minute to arrive.": "Néhány percen belül megérkezik.",
  },
});


</script>

<template>
  <authenticator>
    <template v-slot:header>
      <div style="padding: var(--amplify-space-large); text-align: center">
        <img    alt="Akvamánia logo" src="../assets/logo.png"     />
      </div>
    </template>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
     <template v-slot:confirm-reset-password-footer>
      <div>Footer Information</div>
    </template>
  </authenticator>
</template>

<style scoped>
img {
  width: 100px;
  height: auto;
}
</style>