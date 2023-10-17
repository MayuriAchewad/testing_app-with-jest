import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { Counter } from "../Counter";

describe("Counter Component testing", () => {
  test("Render the buttons of counter component", async() => {
    render(<Counter />);
  const IncreBtn = await screen.getByTestId("incre");
  const DecreBtn = await screen.getByTestId("decre");
  const outputData = await screen.getByTestId("output");

  fireEvent.click(IncreBtn);
  expect(outputData).toHaveTextContent(1);

  fireEvent.click(DecreBtn);
  expect(outputData).toHaveTextContent(0);

  expect(outputData).toBeInTheDocument();
  console.log(outputData.textContent);

  // disabled or not disbled upto 300 

  for (let i=0; i<=30; i++){
    fireEvent.click(IncreBtn);

}
    expect(IncreBtn).toBeDisabled();

    //disabled button below 0

    for(let i=0; i>=0; i++){
        fireEvent.click(DecreBtn);
    }
    expect(DecreBtn).toBeDisabled();
});
 
});
