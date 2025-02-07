import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("TEST APP", () => {
	test("renders learn react link", () => {
		render(<App />);
		const helloWorld = screen.getByText(/hello world/i);
		const btn = screen.getByRole("button");
		const input = screen.getByPlaceholderText(/input value/i);
		expect(helloWorld).toBeInTheDocument();
		expect(btn).toBeInTheDocument();
		expect(input).toMatchSnapshot();
	});
	test("renders learn react link2", async () => {
		render(<App />);
		screen.debug();
		const data = await screen.findByText(/data/i);
		expect(data).toBeInTheDocument();
		expect(data).toHaveStyle({ color: "red" });
		screen.debug();
	});

	test("CLICK EVENT", () => {
		render(<App />);

		const btn = screen.getByTestId("toggle-btn");
		expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn)
    expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn)
		expect(screen.queryByTestId("toggle-elem")).toBeNull();
	});
});
