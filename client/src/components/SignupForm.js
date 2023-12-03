import React from "react";
import authStore from "../stores/authStore";
// import store from "../stores/authStore";

const SignupForm = () => {
  const store = authStore();

  const handleSignup = (e) => {
    e.preventDefault();
    store.signup();
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        onChange={store.updateSignupForm}
        value={store.signupForm.email}
        type="email"
        name="email"
      />
      <input
        onChange={store.updateSignupForm}
        value={store.signupForm.password}
        type="password"
        name="password"
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
