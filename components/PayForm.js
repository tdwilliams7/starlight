import { Component } from 'react';
import Link from 'next/link';

class PayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      annual: 0,
      super: 0,
      payPeriod: '',
      monthlyGross: 0,
      monthlyNet: 0,
      tax: 0,
      bonus: 0,
      id: 0,
      payslips: []
    };
  }

  componentDidMount() {
    for (let i in window.localStorage) {
      if (Number(i)) {
        this.setState({
          ...this.state,
          payslips: [
            ...this.state.payslips,
            JSON.parse(window.localStorage.getItem(i))
          ],
          id: this.state.id + 1
        });
      }
    }
  }

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  submitFormHandler = e => {
    e.preventDefault();
    let monthlyGross = Math.round(this.state.annual / 12);
    let tax = 0;
    if (monthlyGross >= 15000) {
      tax = Math.floor((monthlyGross - 15000) * 0.45 + 4519.33);
    } else if (monthlyGross >= 7250 && monthlyGross < 15000) {
      tax = Math.floor((monthlyGross - 7250) * 0.37 + 1652);
    } else if (monthlyGross >= 3083 && monthlyGross < 7250) {
      tax = Math.floor((monthlyGross - 3083) * 0.325 + 298);
    } else if (monthlyGross >= 1517 && monthlyGross < 3083) {
      tax = Math.floor((monthlyGross - 1517) * 0.19);
    }
    this.setState({
      ...this.state,
      tax,
      monthlyGross,
      monthlyNet: monthlyGross - Math.floor(tax),
      bonus: Math.round(monthlyGross * (this.state.super / 100)),
      payslips: [
        ...this.state.payslips,
        {
          name: `${this.state.firstName} ${this.state.lastName}`,
          id: this.state.id
        }
      ]
    });
    window.localStorage.setItem(
      this.state.id,
      JSON.stringify({
        name: `${this.state.firstName} ${this.state.lastName}`,
        monthlyGross,
        monthlyNet: monthlyGross - Math.floor(tax),
        tax,
        super: Math.round(monthlyGross * (this.state.super / 100)),
        payPeriod: this.state.payPeriod,
        id: this.state.id
      })
    );
    this.setState({
      id: this.state.id + 1
    });
  };

  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <form onSubmit={this.submitFormHandler}>
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder="first name"
            id="firstName"
            name="firstName"
            onChange={this.inputChangeHandler}
            required
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="last name"
            id="LastName"
            name="lastName"
            onChange={this.inputChangeHandler}
            required
          />
          <div>
            <label htmlFor="payPeriod">Pay Period</label>
            <input
              placeholder="pay period"
              id="payPeriod"
              name="payPeriod"
              onChange={this.inputChangeHandler}
              required
            />
          </div>
          <div>
            <label htmlFor="annualInput">Annual Income</label>
            <input
              placeholder="annual income"
              id="annualInput"
              name="annual"
              onChange={this.inputChangeHandler}
              required
            />
            <label htmlFor="superInput">Super</label>
            <select
              id="superInput"
              name="super"
              onChange={this.inputChangeHandler}
              required
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <label>%</label>
          </div>
          <button>Submit</button>
        </form>
        <div style={{ marginLeft: 50 }}>
          {this.state.payslips.map((payslip, i) => {
            return (
              <div key={i}>
                <Link href={`/results/${payslip.id}`}>
                  <a>{payslip.name}</a>
                </Link>
              </div>
            );
          })}
        </div>
        <style jsx>{`
          div {
            margin-top: 25px;
          }
        `}</style>
      </div>
    );
  }
}

export default PayForm;
