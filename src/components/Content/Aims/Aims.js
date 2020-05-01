import React from "react"

import useWindowSize from "../../useWindowSize"

import styled from "styled-components"

const AimsItem = styled("div")`
  display: inline-block;
  width: ${props => (props.mobile ? "90%" : "75%")};
  height: 0;
  text-align: justify;
  color: ${props => props.theme.color};
  line-height: 1.6;
  font-size: ${props => (props.mobile ? "0.8em" : "0.88em")};
`

const Aims = () => {
  const windowSize = useWindowSize()

  return (
    <AimsItem mobile={windowSize.width < 650 ? true : false}>
      I've made this site primarily as a place to host bits of work I do from
      time to time.
      <br />
      <br />
      I have a few ideas for articles at the moment, all dancing around in my
      head and colliding with each other when I'm supposed to be concentrating
      on something more important.
      <br />
      <br />
      Its a strange time.
      <br />
      <br />
      Currently, we're in what are apparently the early days of the Covid-19
      pandemic. Drastic measures are being taken by governments across the globe
      to reduce the pressure on health services. <br />
      <br />
      We're now facing much more time indoors than expected this year. In that
      time, I want to create something positive during what will otherwise feel
      like a chaotic and concerning period for humanity as a whole.
      <br />
      <br />
      The articles I hope to write will tell stories, illustrated with graphics,
      and created using open source data and technology. Themes will vary a lot,
      and will be covered with varying depth.
      <br />
      <br />
      I'll also be making some tutorials along the way for anyone interested.
      <br />
      <br />
      Tom Lynch
      <br />
      <br />
      March 19th, 2020
    </AimsItem>
  )
}

export default Aims
