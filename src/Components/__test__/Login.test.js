import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Login } from "../Login";

describe("Login component testing",()=>{
    test("Render the login form with button",async()=>{
        render(
            <BrowserRouter>
            <Login/>
            </BrowserRouter>
        );
            const loginBtn= await screen.findAllByRole("button");
            expect(loginBtn).toHaveLength(1);
    })
})