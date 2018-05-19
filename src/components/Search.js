import React, { Component } from "react"
import { connect } from "react-redux"
import { SearchWrapper, SearchBar, SearchButton, Error } from "styles"

import { getPlayer } from "actions/player"

class Search extends Component {
  state = {
    searchTerm: "",
    error: ""
  }

  searchPlayer = e => {
    const playerName = this.state.searchTerm.split(" ")
    const firstName = playerName[0]
    const surname = playerName[1]
    e.preventDefault()
    if (firstName && surname) {
      // if both exist, pass the searchTerm to our action creator.
      this.props.getPlayer(firstName, surname)
    } else {
      // otherwise let the user know they need more than a first name.
      this.setState({ error: "Search requires a first and last name." })
    }
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    const { searchTerm, error } = this.state
    return (
      <form onSubmit={this.searchPlayer}>
        <SearchWrapper>
          <SearchBar
            type="text"
            value={searchTerm}
            onChange={this.handleChange}
            placeholder="Enter NBA player's first and last name"
          />
          <SearchButton type="submit">
            <span role="img" aria-label="magnifying glass">
              🔍
            </span>
          </SearchButton>
        </SearchWrapper>
        <center>{error && <Error>{error}</Error>}</center>
      </form>
    )
  }
}

export default connect(null, { getPlayer })(Search)
