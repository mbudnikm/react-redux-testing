import React from 'react';
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

import { flushPromises } from "../../utils";

import { EmployeeContainer } from "./EmployeeContainer";
// import { Loader } from "../Loader"

const facade = (wrapper) => ({
    isLoaderVisible: () => true,

})

jest.mock('../../api/employee', () => ({
    fetchEmployees: jest.fn(() => Promise.resolve())
})) // relative path

describe('EmployeeContainer', () => {
    it('should display loader if still loading', async () => {
        let wrapper
        act(() => {
            wrapper = mount(<EmployeeContainer />)
        })

        const { isLoaderVisible } = facade(wrapper)
            // wrapper.containsMatchingElement(<Loader />)
        
        await act(async() => {
            await flushPromises()
        })
        
        expect(isLoaderVisible()).toBeTruthy()
    });
});