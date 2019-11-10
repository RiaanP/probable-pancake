import React, { Component } from 'react';

class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.person_name}
                </td>
                <td>
                    {this.props.obj.person_email}
                </td>
                <td>
                    {this.props.obj.person_number}
                </td>
                <td>
                    {this.props.obj.person_start}
                </td>
                <td>
                    {this.props.obj.person_end}
                </td>
                <td>
                    {this.props.obj.person_created}
                </td>
            </tr>
        );
    }
}

export default TableRow;