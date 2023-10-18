import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from '../BookingForm';
import { fetchAPI } from "../../../util/fetch";


describe('BookingForm', () => {
    const availableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00']

    test('Renders the BookingForm heading', () => {
        render(<BookingForm availableTimes={availableTimes} form={{}} Dispatch={jest.fn()} />);
        const headingElement = screen.getByText("Choose date");
        expect(headingElement).toBeInTheDocument();
    })
    test('Render Times based on initializeTimes function', () => {
        render(<BookingForm availableTimes={fetchAPI(new Date())} form={{}} Dispatch={jest.fn()} />);
        const optionElements = screen.getAllByTestId("time");
        expect(optionElements.map(e => e.textContent)).not.toEqual([])

    });
    test('test updateTimes function to return the updated times', () => {
        dispatch = jest.fn();
        render(<BookingForm availableTimes={fetchAPI(new Date())} form={{}} setForm={jest.fn()} Dispatch={dispatch} />);
        const date = screen.getByTestId("date")
        const optionElements = screen.getAllByTestId("time");
        fireEvent.change(date, { target: { value: "2023-10-23" } })
        expect(dispatch).toHaveBeenCalledTimes(1);
    })
})
