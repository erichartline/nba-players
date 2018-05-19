import React, { Component } from "react"
import { connect } from "react-redux"

import PlayerPhoto from "./PlayerPhoto"
import StatBox from "./StatBox"
import { PlayerOuter, ImageWrapper, StatsWrapper } from "styles"

class Player extends Component {
  render() {
    const { name, image, stats } = this.props.player
    const statBoxList =
      stats && stats.map(stat => <StatBox stat={stat} key={stat.label} />)

    return (
      <PlayerOuter>
        <ImageWrapper>
          {image && <PlayerPhoto url={image} name={name} />}
        </ImageWrapper>
        <StatsWrapper>{statBoxList}</StatsWrapper>
      </PlayerOuter>
    )
  }
}

export default connect(state => ({ player: state.player.player }))(Player)
