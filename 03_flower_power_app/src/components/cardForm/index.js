import React from 'react';
import PropTypes from "prop-types";

export default class CardForm extends React.PureComponent {
    
    constructor (props) {
        super(props);
        this.state = props.defaultData;
        this.onInputChange = this.onInputChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.fieldData = {
            name: 'Name',
            description: 'Description',
            unitPrice: 'Price',
            photoUrl: 'Image url'
        };
    }

    onInputChange(event) {
        const { name, value} = event.target;
        this.setState({[name]: value});
    }

    onSave() {
        this.props.onSave(this.state);
        this.props.onClose();
    }

    render() {
        const props = this.props,
            fields = Object.keys(this.fieldData);;
        
        return (
            <table className="card-form-table">
                <tbody>
                {
                    fields.map(field => {
                        return (
                            <tr key={field}>
                                <td>
                                    <label>{field}: </label>
                                </td><td>
                                    <input 
                                        value={this.state[field]}
                                        name={field}
                                        type="text"
                                        placeholder={this.fieldData[field]}
                                        onChange={this.onInputChange}
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
                <tr>
                    <td colSpan="2">
                        <button onClick={this.onSave}>Save</button>
                        <button onClick={props.onClose}>Cancel</button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

CardForm.propTypes = {
    defaultData: PropTypes.object,
    fields: PropTypes.array,
    onSave: PropTypes.func,
    onClose: PropTypes.func,
};
  