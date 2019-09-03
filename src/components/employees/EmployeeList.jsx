import React from 'react'

export class EmployeeList extends React.Component {

    filtered() {
        let result = this.props.employees
        if (this.props.filterBy && this.props.filterBy.nationality) {
            result = result.filter(e => e.nationality === this.props.filterBy.nationality)
        }

        return result
    }

    render() {
        return !this.props.employees ? <h3>No items</h3> : 
        <ol>
            { this.filtered().map(e => 
                <li key={e.id}>{ e.firstName } { e.lastName }, { e.title }</li>) }
        </ol>
    }
}