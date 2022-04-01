import React from "react";
import LoginForm from "./LoginForm";
import {render} from "@testing-library/react";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
    const { asFragment } = render(
        <MemoryRouter>
          <LoginForm />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });