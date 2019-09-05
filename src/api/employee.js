import axios from 'axios'

export const fetchEmployees = (page = 1) => {
    return new Promise((res, rej) => {
        setTimeout(res, 1000)
    })
    return axios.get(`http://localhost:3000/employees?_page=${page}`)
        .then(res => res.data)
}