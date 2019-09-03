import React from 'react'

export class EmployeeList extends React.Component {
    render() {
        return !this.props.employees ? <h3>No items</h3> : 
            <ol>
                { this.props.employees.map(e => 
                    <li key={e.id}>{ e.firstName } { e.lastName }, { e.title }</li>
                )}
            </ol>
    }
}