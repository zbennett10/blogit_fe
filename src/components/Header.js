import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super();
        this.changeName = this.changeName.bind(this);

        this.state = {
            name: ""
        }
    }

    changeName(e) {
        this.setState({name: e.target.value});
    }

    componentDidMount() {
        this.setState({name: this.props.name})
    }

    render() {
        return (
            <div>
                Welcome to {this.state.name}
                <input type="text" className="form-control" onChange={this.changeName}/>
            </div>

        )
    }
}

