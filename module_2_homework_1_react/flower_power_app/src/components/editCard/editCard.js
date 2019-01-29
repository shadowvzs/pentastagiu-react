
import React from 'react';
import PropTypes from 'prop-types';
import './editCard.css';

class EditCard extends React.PureComponent {
    constructor(props) {
        super(props);
        this.defaultData = {
            name: "loading",
            description: "",
            unitPrice: ""
        };
        this.state = { 
            data: this.defaultData
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.updateCard = this.updateCard.bind(this);
    }
    
    componentDidMount = async () => {
        let  data;
        try {
          data = await (await fetch(`http://172.18.0.2:4000/products/${this.props.id}`)).json();
        } catch(err) {
          data = this.defaultData;
        } 
        this.setState({ data });
    }

    onInputChange(ev) {
        const key = ev.target.getAttribute("name");
        const value = ev.target.value;
        this.setState({ data: Object.assign({ ...this.state.data }, { [key]: value }) });
    }

    async updateCard() {
        await fetch(`http://172.18.0.2:4000/products/${this.props.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product: this.state.data })
        });
        this.props.handleClick(this.props.id, this.state.data);
    }

    render() {
        const fields = Object.keys(this.state.data).filter(e => e !== "id" );
        
        return(
            <div className="editForm">
                {fields.map(e => <input 
                    value={this.state.data[e]} 
                    name={e} 
                    key={e}
                    type="text" 
                    onChange={this.onInputChange} 
                /> )}
              <button onClick={this.updateCard}> Save </button>
            
            </div>
        )       
    }
}


EditCard.propTypes = {
    id: PropTypes.number.isRequired,
}

export default EditCard;