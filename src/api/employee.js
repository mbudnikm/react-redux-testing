import axios from 'axios'

export const fetchEmployees = (page = 1) => {
    axios.get(`http://localhost:3000/employees?_page=${page}`)
        .then(res => res.data)
}