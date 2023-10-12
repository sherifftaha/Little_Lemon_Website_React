import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from '../../BookingForm/BookingForm';
import Main from "../Main";

const MockMain = (props) => {
    return (
        <Main submitFunc = {props.submitFunc} >
            <BookingForm submitFunc = {props.submitFunc} />
        </Main>
    )
}

const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
]

describe('BookingForm', () => {
    test('Render Times based on initializeTimes function', () => {
        // render(<MockMain />);
        // const optionElements = screen.getAllByTestId("time");
        // expect(optionElements.map(e => e.textContent)).toEqual(availableTimes)

    });
    test('test updateTimes function to return the updated times', () => {
        // render(<MockMain />);
        // const date = screen.getByTestId("date")
        // const optionElements = screen.getAllByTestId("time");
        // fireEvent.change(date, { target: { value: "2023-10-25" } })
        // expect(optionElements.map(e => e.textContent)).toEqual(availableTimes)
    })
})
