import { render, screen } from "@testing-library/react-native";
import React from "react";
import Details from "..";

const animeFull: any = {
  studios: [{ name: "Sunrise" }],
  episodes: 26,
  status: "Finished Airing",
  type: "TV",
  licensors: [{ name: "Funimation" }],
};

const animePartial: any = {
  // no studios
  episodes: undefined,
  status: "Finished Airing",
  type: "TV",
  licensors: [],
};

describe("Details", () => {
  it("renders section title and all cards with values when data is complete", () => {
    render(<Details anime={animeFull} />);

    expect(screen.getByText("Details")).toBeTruthy();

    expect(screen.getByText("Studio")).toBeTruthy();
    expect(screen.getByText("Episodes")).toBeTruthy();
    expect(screen.getByText("Status")).toBeTruthy();
    expect(screen.getByText("Type")).toBeTruthy();
    expect(screen.getByText("Licensors")).toBeTruthy();

    expect(screen.getByText("Sunrise")).toBeTruthy();
    expect(screen.getByText("26")).toBeTruthy();
    expect(screen.getByText("Finished Airing")).toBeTruthy();
    expect(screen.getByText("TV")).toBeTruthy();
    expect(screen.getByText("Funimation")).toBeTruthy();
  });

  it("renders '-' for missing fields safely (no crash on undefined arrays)", () => {
    render(<Details anime={animePartial} />);

    expect(screen.getByText("Studio")).toBeTruthy();
    expect(screen.getByText("Episodes")).toBeTruthy();
    expect(screen.getByText("Licensors")).toBeTruthy();

    const dashes = screen.getAllByText("-");
    expect(dashes.length).toBeGreaterThanOrEqual(2);
  });

  it("does not crash when anime prop is undefined (renders cards with '-')", () => {
    render(<Details anime={undefined} />);

    expect(screen.getByText("Details")).toBeTruthy();
    expect(screen.getByText("Studio")).toBeTruthy();

    expect(screen.getAllByText("-").length).toBeGreaterThan(0);
  });
});
