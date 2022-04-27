import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it("renders without crashing", function() {
  render(<Snowman />);
});

it("matches snapshot", function() {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});

it("after 6 wrong guesses: no buttons shown, 'You lose' and show correct word", function() {
  const { container, debug } = render(<Snowman />);

  const buttonB = container.querySelector(`.Snowman-letter-b`);
  const buttonC = container.querySelector(`.Snowman-letter-c`);
  const buttonD = container.querySelector(`.Snowman-letter-d`);
  const buttonF = container.querySelector(`.Snowman-letter-f`);
  const buttonG = container.querySelector(`.Snowman-letter-g`);
  const buttonH = container.querySelector(`.Snowman-letter-h`);

  fireEvent.click(buttonB);
  fireEvent.click(buttonC);
  fireEvent.click(buttonD);
  fireEvent.click(buttonF);
  fireEvent.click(buttonG);
  fireEvent.click(buttonH);
  debug();

  //FIXME: className of button area is not null, it now has You lose and apple in it.
  expect(container.querySelector(".Snowman-letters")).toBeNull();

  expect(container.toBeInTheDocument("You lose"));
  expect(container.toBeInTheDocument("apple"));
});

// it("after 6 wrong guesses: no buttons shown", function() {
//   const { container } = render(<Snowman />);



//   expect(container.querySelector(".Snowman-letter-button")).toBeNull();
// });

// it("counts correctly when heads appears", function() {
//   const { container } = render(<CoinContainer />);

//   const button = container.querySelector("button");
//   fireEvent.click(button);

//   expect(container.querySelector("img[alt='head']")).toBeInTheDocument();
//   expect(container.querySelector("img[alt='tail']")).not.toBeInTheDocument();
//   expect(container.querySelector("p"))
//     .toHaveTextContent("Out of 1 flips, there have been 1 heads and 0 tails.");
// });

// it("counts correctly when tails appears", function() {
//   const { container } = render(<CoinContainer />);

//   const button = container.querySelector("button");
//   fireEvent.click(button);
//   fireEvent.click(button);

//   expect(container.querySelector("img[alt='head']")).not.toBeInTheDocument();
//   expect(container.querySelector("img[alt='tail']")).toBeInTheDocument();
//   expect(container.querySelector("p"))
//     .toHaveTextContent("Out of 2 flips, there have been 1 heads and 1 tails.");
// });

// afterEach(function() {
//   Math.random.mockRestore();
// });
