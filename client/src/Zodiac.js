import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class Zodiac extends Component {
  state = {
    seenDates: [],
    zodiacSigns: {},
    birthDate: "",
  };

  componentDidMount() {
    this.fetchZodiacSigns();
    this.fetchSeenDates();
  }

  async fetchZodiacSigns() {
    const zodiacSigns = await axios.get("/api/zodiac/current");
    this.setState({ zodiacSigns: zodiacSigns.data });
  }

  async fetchSeenDates() {
    const seenDates = await axios.get("/api/zodiac/all");
    this.setState({
      seenDates: seenDates.data,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("/api/zodiac", {
      birthDate: this.state.birthDate,
    });
    this.setState({ birthDate: "" });
  };

  renderSeenDates() {
    return this.state.seenDates.map(({ date }) => date).join(", ");
  }

  renderZodiacSigns() {
    const entries = [];

    for (let key in this.state.zodiacSigns) {
      entries.push(
        <div key={key}>
          For birth date {key} the zodiac sign is {this.state.zodiacSigns[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your birth date (YYYY-MM-DD):</label>
          <input
            type="date"
            value={this.state.birthDate}
            onChange={(event) =>
              this.setState({ birthDate: event.target.value })
            }
          />
          <button>Submit</button>
        </form>

        <h3>Dates I have seen:</h3>
        <div className="results">{this.renderSeenDates()}</div>

        <h3>Calculated Zodiac Signs:</h3>
        <div className="results">{this.renderZodiacSigns()}</div>
      </div>
    );
  }
}

export default Zodiac;
