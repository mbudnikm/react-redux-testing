import React, { useEffect, useState } from 'react';

import { EmployeeList } from "./EmployeeList";
import { Pagination } from "../pagination/Pagination";
import { Loader } from "../Loader";

import { fetchEmployees } from "../../api/employee";

export const EmployeeContainer = () => {
    const [employees, setEmployees] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchEmployees()
            .then(data => {
                setEmployees(data)
                setIsLoading(false)
            }) 
    }, [])

    return isLoading ? <Loader /> : <>
        <Pagination />
        <EmployeeList employees={employees} />
    </>
}