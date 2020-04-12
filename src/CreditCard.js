import React, { Component } from 'react'


export default class CreditCard extends Component {
  state = {
    number: '',
    expiry: '',
    name: '',
  };

  inputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  numberChange = (e) => {
    setInterval(() => (this.setState({number : this.state.number.slice(0,19)})))
    setInterval(() => (this.setState({number: this.state.number.replace(/[^\d1-9]/g, "").replace(/(.{4})/g, "$1 ").trim()
      }))
    );}

  nameChange = (e) => {
    setInterval(() => (this.setState({name : this.state.name.replace(/[^a-z]/gi,' ')})))
    setInterval(() => (this.setState({name : this.state.name.slice(0,19).toUpperCase()})))
  }  

  expiryChange = (e) => {
    setInterval(() => (this.setState({expiry : this.state.expiry.slice(0,5)})))
    setInterval(() => (this.setState({expiry : this.state.expiry.replace(/[^\d1-9]/g, "").replace(/(.{2})/, "$1/").trim(),}))
    )}
    
  render() {
    return (
    <section>
       <div className="credit-card">
         <div className="number content">Card N° {this.state.number}</div>
         <div className="expiry content">Expiry : {this.state.expiry}</div>
         <div className="name content">Name : {this.state.name}</div>
        </div>
        <form>
          <input 
          type="tel" 
          name="number" 
          placeholder="Card Number" 
          onChange={this.inputChange}
          onFocus={this.numberChange} />
          <input 
          type="text" 
          name="expiry" 
          placeholder="Expiry"
          onChange={this.inputChange}
          onFocus={this.expiryChange} />
          <input 
          type="text" 
          name="name" 
          placeholder="Name"
          onChange={this.inputChange} 
          onFocus={this.nameChange}/>
        </form>
    </section>
    );
  }
}