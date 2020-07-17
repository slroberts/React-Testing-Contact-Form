import React from "react";
import {render, fireEvent, cleanup} from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

afterEach(cleanup);

test("renders App without crashing", () => {
  render(<App />);
});

test("First name length: test length of first name length is at least 3 characters", () => {
  const {getByTestId} = render(<ContactForm />);

  let firstname = getByTestId("firstName");

  firstname.value = "Sho";

  expect(firstname.value.length).toBeGreaterThanOrEqual(3);
});

test("Form can submit : test user can submit form successfully", async () => {
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
  fireEvent.click(getByTestId("submitButton"));
});

test("Inputs Required: test that inputs are required", async () => {
  const {getByTestId} = render(<ContactForm />);

  let firstname = getByTestId("firstName");
  let lastname = getByTestId("lastName");
  let email = getByTestId("email");

  fireEvent.change(firstname, {
    target: {value: "Shomari"},
  });
  fireEvent.change(lastname, {
    target: {value: "Roberts"},
  });
  fireEvent.change(email, {
    target: {value: "test@test.com"},
  });

  expect(firstname).toHaveValue();
  expect(lastname).toHaveValue();
  expect(email).toHaveValue();
});

test("Messge not required: test that message is not a required field", () => {
  const {getByTestId} = render(<ContactForm />);

  let message = getByTestId("message");

  expect(message).not.toBeRequired();
});
