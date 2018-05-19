import styled from "styled-components"

// searchbar
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  width: 500px;
  margin: 25px auto;
`

export const SearchBar = styled.input`
  padding: 14px 20px;
  border: 1px solid #f9f9f9;
  color: #8d96aa;
  font-size: 18px;
  width: 250px;
  border-radius: 6px 0px 0px 6px;
  flex: 7;
`

export const SearchButton = styled.button`
  background-color: #1f6bef;
  padding: 14px 20px;
  border: none;
  border-radius: 0px 6px 6px 0px;
  cursor: pointer;
  flex: 1;
`

export const Error = styled.span`
  color: red;
  padding: 5px;
  display: block;
  font-size: 12px;
`

// player
export const PlayerOuter = styled.div`
  border: 1px solid black;
  width: 500px;
  max-width: 85%;
  margin: 0 auto;
`

export const ImageWrapper = styled.div`
  text-align: center;
  img {
    vertical-align: middle;
  }
`

export const StatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  div {
    width: 50%;
    border-bottom: 1px dashed #c9c9cb;
  }
  div:first-child,
  div:nth-child(3),
  div:nth-child(5),
  div:nth-child(7) {
    border-right: 1px dashed #c9c9cb;
  }
`

// statbox
export const StatBoxOuter = styled.div`
  background-color: #f9f9fc;
  box-sizing: border-box;
`

export const StatLabel = styled.span`
  display: block;
  font-weight: bold;
  letter-spacing: 1.5px;
  margin-top: 39px;
  margin-left: 25px;
`

export const StatValue = styled.p`
  font-weight: bold;
  color: #1f6bef;
  font-size: 50px;
  margin-top: 10px;
  margin-bottom: 27px;
  margin-left: 25px;
`
