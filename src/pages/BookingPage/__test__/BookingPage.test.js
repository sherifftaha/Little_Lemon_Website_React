import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "../BookingPage";
import { fetchAPI } from "../../../util/fetch";

const MockBookingPage = () => {
    return (
        <BrowserRouter>
            <BookingPage />
        </BrowserRouter>
    )
}



describe('BookingForm', () => {

    test('BookingsForm component can be submitted by the user', () => {
        render(<MockBookingPage />);
        const submitBtn = screen.getByTestId("next-submit");
        fireEvent.click(submitBtn);
        fireEvent.click(submitBtn);
        const success = screen.getByText("Booking Succes!!");
        expect(success).toBeInTheDocument();
    })
})
