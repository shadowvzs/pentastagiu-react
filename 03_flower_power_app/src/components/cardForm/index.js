import React from 'react';
import PropTypes from "prop-types";
import { withStyles, Button } from '@material-ui/core';

const styles = {
    table: {
        '& tr:last-child td': {
            textAlign: 'center'
        },
    },
    label: {
        flex: '0.5'
    },
    input: {
        flex: '0.5'
    },
    button: {
        margin: '0 10px'
    }
}

class CardForm extends React.PureComponent {
    
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
            <table className={props.classes.table}>
                <tbody>
                {
                    fields.map(field => {
                        return (
                            <tr key={field}>
                                <td>
                                    <label className={props.classes.label}>{field}: </label>
                                </td><td>
                                    <input 
                                        className={props.classes.input}
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
                        <Button 
                            className={this.props.classes.button}
                            size="small" 
                            variant="contained" 
                            color="primary"
                            onClick={this.onSave}
                        >Save</Button>
                        
                        <Button 
                            className={this.props.classes.button}
                            size="small" 
                            variant="contained" 
                            color="secondary"
                            onClick={this.props.onClose}
                        >Cancel</Button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default withStyles(styles)(CardForm);


CardForm.propTypes = {
    defaultData: PropTypes.object,
    fields: PropTypes.array,
    onSave: PropTypes.func,
    onClose: PropTypes.func,
};
  