import React from "react"
import { StatBoxOuter, StatLabel, StatValue } from "styles"

export default function StatBox({ stat }) {
  const statsMap = {
    points_per_game: "Points Per Game",
    assists_per_game: "Assists",
    blocks_per_game: "Blocks",
    three_point_percentage: "Three Point Percentage",
    field_goal_percentage: "Field Goal Percentage",
    rebounds_per_game: "Rebounds",
    player_efficiency_rating: "PER",
    steals_per_game: "Steals"
  }

  const label = statsMap[stat.label]
  const value = stat.label.includes("percentage")
    ? `${stat.value}%`
    : stat.value

  return (
    <StatBoxOuter>
      <StatLabel>{label}</StatLabel>
      <StatValue>{value}</StatValue>
    </StatBoxOuter>
  )
}
