import React from 'react';
import { shallow } from "enzyme";

import { EmployeeList } from "./EmployeeList";
import { getEmployees } from "../../data";

describe('EmployeeList', () => {
    it('should render 25 list items', () => {
        const employees = getEmployees().slice(0, 25)
        const wrapper = shallow(<EmployeeList employees={employees}/>)

        expect(wrapper.find('li')).toHaveLength(25)
    });

    it('should render "No Items" label if no employees paased', () => {
        const wrapper = shallow(<EmployeeList />)

        // expect(wrapper.text().includes("No items")).toEqual(true)
        expect(wrapper.text()).toContain('No items')
    });
});