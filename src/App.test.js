import React from "react";
import {render, fireEvent} from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("test user can submit form successfully", async () => {
  const {getByTestId} = render(<ContactForm />);

  fireEvent.change(getByTestId("firstName"), {
    target: {value: "Shomari"},
  });
  fireEvent.change(getByTestId("lastName"), {
    target: {value: "Roberts"},
  });
  fireEvent.change(getByTestId("email"), {
    target: {value: "test@test.com"},
  });
  // fireEvent.change(getByTestId("message"), {
  //   target: {value: "Test message."},
  // });
  fireEvent.click(getByTestId("submitButton"));
});

// test("input reuired to be true", () => {
//   const {getByTestId} = render(<ContactForm />);

//   let firstName = getByTestId("firstName");
//   let lastName = getByTestId("lastName");
//   let email = getByTestId("email");
//   let message = getByTestId("message");
//   let notTrue = false;
//   expect([firstName, lastName, email, message, notTrue]).toBeTruthy();
// });
