import React, {Component} from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class PersonList extends Component {

    constructor(props) {
        super(props);
        this.state = {person: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/person')
            .then(response => {
                this.setState({person: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.person.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Person List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Created</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}