import React from "react";
import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard";
import { MemoryRouter } from "react-router";


it("matches snapshot with logo", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <CompanyCard
            handle="Springboard"
            name="Springboard School"
            description="Become an developer in 36 weeks."
            logo_url="https://pbs.twimg.com/profile_images/770491761412173826/ZUeIa4tw_400x400.jpg"
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without logo", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <CompanyCard
            handle="nologo"
            name="No-Logo School"
            description="Become a developer in 100 weeks."
        />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
