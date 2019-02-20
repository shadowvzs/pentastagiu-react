import React from 'react';
import { withStyles, Button } from '@material-ui/core';

const styles = {
    header: {
        background: 'linear-gradient(to bottom, #55a, #007)',
        margin: '0',
        padding: '10px',
        textAlign: 'center',
        color: 'white'
    },
    table: {
        '& tr:last-child td': {
            textAlign: 'center'
        },
        '& td': {
            padding: '5px 20px'
        }
    },
    label: {
        flex: '0.5'
    },
    input: {
        flex: '0.5'
    },
    button: {
        margin: '0 10px 20px 10px'
    }
}

class CardForm extends React.PureComponent {
    
    constructor (props) {
        super(props);
        this.state = props.defaultData;
        this.fieldData = {
            name: 'Name',
            description: 'Description',
            unitPrice: 'Price',
            photoUrl: 'Image url'
        };
    }

    onInputChange = (event) => {
        const { name, value} = event.target;
        this.setState({[name]: value});
    }

    onSave = () => {
        this.props.onSave(this.state);
    }

    render() {
        const props = this.props,
            fields = Object.keys(this.fieldData),
            { classes } = props;
        return (
            <>
                <h1 className={classes.header}>{ props.title }</h1>
                <table className={classes.table}>
                    <tbody>
                    {
                        fields.map(field => {
                            return (
                                <tr key={field}>
                                    <td>
                                        <label className={classes.label}>{field}: </label>
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
                                className={classes.button}
                                size="small" 
                                variant="contained" 
                                color="primary"
                                onClick={this.onSave}
                            >Save</Button>
                            
                            <Button 
                                className={classes.button}
                                size="small" 
                                variant="contained" 
                                color="secondary"
                                onClick={() => props.history.push('/')}
                            >Cancel</Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </>
        )
    }
}

export default withStyles(styles)(CardForm);