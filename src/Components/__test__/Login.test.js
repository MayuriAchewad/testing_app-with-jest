import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login  from "../Login";

describe("Login component testing",()=>{
    // test("Render all compoents with required elements",()=>{
    //     render(
    //         <Login/>
    //     )
    //     expect(screen.getBy)
    // })
    test("Render the login form with button",async()=>{
        render(
            <BrowserRouter>
            <Login/>
            </BrowserRouter>
        );
            const loginBtn= await screen.findAllByRole("button");
            expect(loginBtn).toHaveLength(1);
    });
    test("should failed on email validation",()=>{
        render(
            <BrowserRouter>
            <Login/>
            </BrowserRouter>
        );
        const usernameInput = screen.getByPlaceholderText(/Username/i);
        const passwordInput = screen.getByPlaceholderText(/Password/i);

        expect(usernameInput).not.toBe("testingappvalidation");
        expect(passwordInput).not.toBe("password3333");

     });
});

