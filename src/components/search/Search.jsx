import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';

class Search extends Component {
    state ={
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '9114369-43e2c8e3a6f1d3cddce2813a0',
        images: []
    }

    textChange = (e) => {
        console.log(this.state.images);
        this.setState({[e.target.name]: e.target.value}, 
        () => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}`)
            .then(res => this.setState({images: res.data.hits}))
            .catch(err => console.log(err))
        }
        );

    }
    onAmountChange = (e, index, value) => this.setState({amount: value })
    
  render() {
    return (
      <div>
        <TextField
        value={this.state.searchText}
        name="searchText"
        onChange={this.textChange}
        floatingLabelText="search"
        fullWidth={true}
        />  

        <br/>
        <SelectField
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        
      </div>
    )
  }
}

export default Search;