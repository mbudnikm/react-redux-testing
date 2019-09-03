import React from 'react'

export class EmployeeList extends React.Component {
    render() {
        return !this.props.employees ? <h3>No items</h3> : 
        <ol>
            {(this.props.filterBy.nationality ? 
            this.props.employees
                .filter(e => e.nationality === this.props.filterBy.nationality)
                .map(e => 
                    <li key={e.id}>{ e.firstName } { e.lastName }, { e.title }</li>) :
                 this.props.employees.map(e => 
                    <li key={e.id}>{ e.firstName } { e.lastName }, { e.title }</li>
                ))}
        </ol>
    }
}