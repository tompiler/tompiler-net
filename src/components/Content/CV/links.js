const timelineNodes = {
  infinityWorks: { name: "Infinity Works", order: 5 },
  decathlonUK: { name: "Decathlon UK (contract)", order: 4 },
  charlesRiverAssociates: { name: "Charles River Associates", order: 3 },
  ratedPeople: { name: "Rated People", order: 2 },
  mindshareWW: { name: "Mindshare Worldwide", order: 1 },
  education: { name: "Education", order: 1 },
}

const skillCategories = {
  cloudServices: { name: "Cloud Services", vh: 3 },
  python: { name: "Python", vh: 10 },
  webDevelopment: { name: "Web Development", vh: 18 },
  API: { name: "APIs", vh: 24 },
  databases: { name: "Databases", vh: 30 },
}

const data = {
  config: {
    margin: {
      top: 80,
      right: 0,
      bottom: 50,
      left: 0,
    },
    padding: {
      bottom: 50,
      top: 50,
    },
  },
  timelineNodes: timelineNodes,
  skillCategories: skillCategories,
  skillCategoryLinks: [
    { y0: timelineNodes.infinityWorks, y1: skillCategories.cloudServices },
    { y0: timelineNodes.infinityWorks, y1: skillCategories.python },
    { y0: timelineNodes.infinityWorks, y1: skillCategories.webDevelopment },
    { y0: timelineNodes.decathlonUK, y1: skillCategories.python },
    { y0: timelineNodes.decathlonUK, y1: skillCategories.API },
  ],
}

export default data
