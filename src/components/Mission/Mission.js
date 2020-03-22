import React from "react"
import missionStyles from "./mission.module.scss"

const Mission = () => {
  return (
    <div>
      <div className={missionStyles.headerContainer}>
        <h1 className={missionStyles.title}>mission</h1>
      </div>
      <div className={missionStyles.missionContainer}>
        <div className={missionStyles.missionItem}>
          I've made this site primarily as a place to host bits of work I do
          from time to time.
          <br />
          <br />
          As I write this, we're in what apparently are the early days of the
          Covid-19 pandemic. It's the first week of isolation, and the
          government here in the UK have closed schools, requested that pubs and
          restaurants must close in an effort to relieve the pressure expected
          on the NHS in the coming weeks and months. <br />
          <br />
          We're facing much more time indoors than expected this year. I want to
          create something positive from what will otherwise be a regressive
          period for humanity around the globe.
          <br />
          <br />
          The articles I hope to write will tell stories, illustrated with
          graphics, and created using open source data and technology.
          <br />
          <br />
          I'll also be making some tutorials along the way for anyone
          interested.
        </div>
      </div>
    </div>
  )
}

export default Mission
