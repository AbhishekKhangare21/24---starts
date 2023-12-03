import React from "react";
import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

// import store from "../stores/authStore";

const SignupForm = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate("/login");
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
