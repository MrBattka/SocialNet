import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import ProfileStatus from "./ProfileStatus"

describe('testing ProfileStatus', () => {
    it("status be should changed", () => {
        render(<ProfileStatus status="test" />)

        const statusText = screen.getByTestId("status")
        fireEvent.click(statusText)
        
        const statusInput = screen.getByTestId("status-input")
        userEvent.clear(statusInput)
        userEvent.type(statusInput, "status changed")

        expect(statusInput).toHaveValue("status changed")
    })
})