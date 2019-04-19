import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { getSmurfs, addSmurf } from '../actions'


class App extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    componentDidMount() {
        this.props.getSmurfs()
    }

    handleChanges = e => {
        this.setState( {
            [e.target.name]: e.target.value
        } )
    }

    addNewSmurf = e => {
        e.preventDefault()
        this.props.addSmurf( this.state )
        this.setState( { name: '', age: '', height: '' } )
    }

    render() {
        console.log(this.props.smurfs);
        
        return (
            <div className="App">
                <h1>Smurf Village</h1>
                <div>
                    {this.props.smurfs.map( ( smurf, index ) => (
                        <div>
                            <h3>{smurf.name}</h3>
                            <p>{smurf.age}</p>
                            <p>{smurf.height}</p>
                        </div>
                    ) )}
                </div>
                <div>
                    <input
                        type="text"
                        name='name'
                        value={this.state.name}
                        placeholder='enter name...'
                        onChange={this.handleChanges}
                    />
                    <input
                        type="text"
                        name='age'
                        value={this.state.age}
                        placeholder='enter age...'
                        onChange={this.handleChanges}
                    />
                    <input
                        type="text"
                        name='height'
                        value={this.state.height}
                        placeholder='enter height...'
                        onChange={this.handleChanges}
                    />
                    <button onClick={this.addNewSmurf}>Add Smurf</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ( {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,
    postingSmurf: state.postingSmurf // ???
} )

export default connect( mapStateToProps, { getSmurfs, addSmurf } )( App )
