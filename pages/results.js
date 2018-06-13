import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Layout from '../components/Layout';

class Results extends Component {
  static async getInitialProps(context) {
    const { id } = await context.query;
    return { id };
  }

  state = {
    name: '',
    monthlyGross: 0,
    monthlyNet: 0,
    super: 0,
    tax: 0,
    payPeriod: ''
  };

  componentDidMount() {
    const slip = JSON.parse(window.localStorage.getItem(this.props.id));
    this.setState({
      name: slip.name,
      monthlyGross: slip.monthlyGross,
      monthlyNet: slip.monthlyNet,
      super: slip.super,
      tax: slip.tax,
      payPeriod: slip.payPeriod
    });
  }

  render() {
    return (
      <div>
        <Layout />
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap'
          }}
        >
          <h3>name</h3>
          <h3 style={{ marginLeft: 140 }}>pay-period</h3>
          <h3 style={{ marginLeft: 75 }}>gross-income</h3>
          <h3 style={{ marginLeft: 75 }}>income-tax</h3>
          <h3 style={{ marginLeft: 75 }}>net-income</h3>
          <h3 style={{ marginLeft: 75 }}>super-amount</h3>
        </div>
        <div
          style={{
            display: 'flex',
            whiteSpace: 'nowrap'
          }}
        >
          <div>{this.state.name}</div>
          <div style={{ marginLeft: 75 }}>{this.state.payPeriod}</div>
          <div style={{ marginLeft: 90 }}>{this.state.monthlyGross}</div>
          <div style={{ marginLeft: 140 }}>{this.state.tax}</div>
          <div style={{ marginLeft: 140 }}>{this.state.monthlyNet}</div>
          <div style={{ marginLeft: 140 }}>{this.state.super}</div>
        </div>
      </div>
    );
  }
}

export default Results;
