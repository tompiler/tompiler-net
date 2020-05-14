const timelineNodes = {
  sideProjects: { name: "Side Projects", order: 6 },
  infinityWorks: { name: "Infinity Works", order: 5 },
  decathlonUK: { name: "Decathlon UK (contract)", order: 4 },
  charlesRiverAssociates: { name: "Charles River Associates", order: 3 },
  ratedPeople: { name: "Rated People", order: 2 },
  mindshareWW: { name: "Mindshare Worldwide", order: 1 },
  education: { name: "Education", order: 0 }
}

const skillCategories = {
  webDevelopment: {
    name: "Web Development",
    vh: 9,
    validTimelineNodesOrder: [6, 5, 4, 2]
  },
  visualisation: {
    name: "Data Visualisation",
    vh: 16,
    validTimelineNodesOrder: [6, 5, 4, 3, 2]
  },
  python: {
    name: "Python",
    vh: 23,
    validTimelineNodesOrder: [6, 5, 4, 3, 2]
  },
  geoSpatial: {
    name: "Geospatial Analysis",
    vh: 27,
    validTimelineNodesOrder: [6, 3, 2]
  },
  dataModelling: {
    name: "Data Modelling",
    vh: 33,
    validTimelineNodesOrder: [5, 4, 2]
  },
  etl: {
    name: "ETL",
    vh: 39,
    validTimelineNodesOrder: [6, 5, 4, 3, 2]
  },
  aws: {
    name: "AWS",
    vh: 45,
    validTimelineNodesOrder: [6, 5, 4]
  },
  azure: {
    name: "Azure",
    vh: 50,
    validTimelineNodesOrder: [5]
  },
  API: {
    name: "APIs",
    vh: 58,
    validTimelineNodesOrder: [6, 5, 4, 3]
  },
  databases: {
    name: "Databases",
    vh: 65,
    validTimelineNodesOrder: [6, 5, 4, 3, 2]
  },
  testing: {
    name: "Testing",
    vh: 72,
    validTimelineNodesOrder: [6, 5, 4, 3, 2]
  },
  os: {
    name: "OS",
    vh: 77,
    validTimelineNodesOrder: [6, 5, 4, 3, 2]
  },
  other: {
    name: "Version Control",
    vh: 82,
    validTimelineNodesOrder: [6, 5, 4, 3, 2]
  }
}

const skillItems = {
  d3: {
    name: "d3.js",
    vh: 5,
    validTimelineNodesOrder: [6, 4, 3, 2]
  },
  javascript: {
    name: "JavaScript/ES6",
    vh: 7,
    validTimelineNodesOrder: [6, 4, 3, 2]
  },
  html: {
    name: "HTML",
    vh: 9,
    validTimelineNodesOrder: [6, 4, 3, 2]
  },
  css: {
    name: "CSS",
    vh: 11,
    validTimelineNodesOrder: [6, 4, 3, 2]
  },
  react: {
    name: "React",
    vh: 13,
    validTimelineNodesOrder: [6, 4]
  },
  node: {
    name: "Node",
    vh: 15,
    validTimelineNodesOrder: [6, 4]
  },
  graphQL: {
    name: "GraphQL",
    vh: 17,
    validTimelineNodesOrder: [6, 4]
  },
  powerBI: {
    name: "Power BI",
    vh: 20,
    validTimelineNodesOrder: [5]
  },
  pandas: {
    name: "pandas",
    vh: 23,
    validTimelineNodesOrder: [6, 4, 3]
  },
  numpy: {
    name: "numPy",
    vh: 25,
    validTimelineNodesOrder: [6, 4, 3]
  },
  matplotlib: {
    name: "matplotlib/seaborn",
    vh: 27,
    validTimelineNodesOrder: [6, 3, 2]
  },
  sklearn: {
    name: "scikit learn",
    vh: 29,
    validTimelineNodesOrder: [6, 3, 2]
  },
  arcgis: {
    name: "ArcGIS",
    vh: 32,
    validTimelineNodesOrder: [3]
  },
  sql: {
    name: "SQL",
    vh: 35,
    validTimelineNodesOrder: [3, 2]
  },
  airflow: {
    name: "Airflow",
    vh: 38,
    validTimelineNodesOrder: [5]
  },
  s3: {
    name: "S3",
    vh: 41,
    validTimelineNodesOrder: [5, 4]
  },
  ec2: {
    name: "EC2",
    vh: 43,
    validTimelineNodesOrder: [6, 5, 4]
  },
  lambda: {
    name: "Lambda",
    vh: 45,
    validTimelineNodesOrder: [5]
  },
  redshift: {
    name: "Redshift",
    vh: 47,
    validTimelineNodesOrder: [5]
  },
  emr: {
    name: "EMR",
    vh: 49,
    validTimelineNodesOrder: [5]
  },
  athena: {
    name: "Athena",
    vh: 51,
    validTimelineNodesOrder: [5]
  },
  kinesis: {
    name: "Kinesis",
    vh: 53,
    validTimelineNodesOrder: [5]
  },
  dataFactory: {
    name: "Data Factory",
    vh: 56,
    validTimelineNodesOrder: [5]
  },
  devOps: {
    name: "Dev Ops",
    vh: 58,
    validTimelineNodesOrder: [5]
  },
  functions: {
    name: "Functions",
    vh: 60,
    validTimelineNodesOrder: [5]
  },
  blobStorage: {
    name: "Blob Storage",
    vh: 62,
    validTimelineNodesOrder: [5]
  },
  keyVault: {
    name: "Key Vault",
    vh: 64,
    validTimelineNodesOrder: [5]
  },
  rest: {
    name: "REST",
    vh: 67,
    validTimelineNodesOrder: [5, 4, 3]
  },
  postgreSQL: {
    name: "PostgreSQL",
    vh: 70,
    validTimelineNodesOrder: [2]
  },
  sqlserver: {
    name: "SQL Server",
    vh: 72,
    validTimelineNodesOrder: [5, 1]
  },
  mongoDB: {
    name: "MongoDB",
    vh: 74,
    validTimelineNodesOrder: [6, 5, 4, 3]
  },
  mysql: {
    name: "MySQL",
    vh: 76,
    validTimelineNodesOrder: [2]
  },
  jest: {
    name: "Jest",
    vh: 79,
    validTimelineNodesOrder: [6, 4]
  },
  pyTest: {
    name: "pyTest",
    vh: 81,
    validTimelineNodesOrder: [6, 5]
  },
  linux: {
    name: "Linux/Ubuntu",
    vh: 84,
    validTimelineNodesOrder: [6, 5, 4]
  },
  macOS: {
    name: "MacOS",
    vh: 86,
    validTimelineNodesOrder: [5]
  },
  windows: {
    name: "Windows",
    vh: 88,
    validTimelineNodesOrder: [4, 3, 2, 1]
  },
  git: {
    name: "Git",
    vh: 91,
    validTimelineNodesOrder: [6, 5, 4, 3, 2]
  }
}

const data = {
  config: {
    margin: {
      top: 80,
      right: 0,
      bottom: 50,
      left: 0
    },
    padding: {
      bottom: 50,
      top: 50
    }
  },
  timelineNodes: timelineNodes,
  skillCategories: skillCategories,
  skillItems: skillItems,
  skillCategoryLinks: [
    {
      key: 1,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.webDevelopment
    },
    {
      key: 2,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.visualisation
    },
    {
      key: 3,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.python
    },
    {
      key: 4,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.geoSpatial
    },
    {
      key: 5,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.databases
    },
    {
      key: 6,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.testing
    },
    {
      key: 7,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.os
    },
    {
      key: 8,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.other
    },
    {
      key: 9,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.visualisation
    },
    { key: 10, y0: timelineNodes.infinityWorks, y1: skillCategories.python },
    {
      key: 11,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.dataModelling
    },
    {
      key: 12,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.etl
    },
    {
      key: 13,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.aws
    },
    {
      key: 14,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.azure
    },
    {
      key: 15,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.API
    },
    {
      key: 16,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.databases
    },
    {
      key: 17,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.testing
    },
    {
      key: 18,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.os
    },
    {
      key: 19,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.other
    },
    {
      key: 20,
      y0: timelineNodes.decathlonUK,
      y1: skillCategories.webDevelopment
    },
    {
      key: 21,
      y0: timelineNodes.decathlonUK,
      y1: skillCategories.visualisation
    },
    { key: 22, y0: timelineNodes.decathlonUK, y1: skillCategories.python },
    {
      key: 23,
      y0: timelineNodes.decathlonUK,
      y1: skillCategories.dataModelling
    },
    { key: 24, y0: timelineNodes.decathlonUK, y1: skillCategories.etl },

    { key: 25, y0: timelineNodes.decathlonUK, y1: skillCategories.aws },

    { key: 26, y0: timelineNodes.decathlonUK, y1: skillCategories.API },
    { key: 27, y0: timelineNodes.decathlonUK, y1: skillCategories.databases },
    { key: 28, y0: timelineNodes.decathlonUK, y1: skillCategories.testing },
    { key: 29, y0: timelineNodes.decathlonUK, y1: skillCategories.os },
    { key: 30, y0: timelineNodes.decathlonUK, y1: skillCategories.other },
    {
      key: 31,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.webDevelopment
    },
    {
      key: 32,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.visualisation
    },
    {
      key: 33,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.python
    },
    {
      key: 34,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.geoSpatial
    },
    {
      key: 35,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.etl
    },
    {
      key: 36,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.API
    },
    {
      key: 37,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.databases
    },
    {
      key: 38,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.testing
    },
    {
      key: 39,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.os
    },
    {
      key: 40,
      y0: timelineNodes.ratedPeople,
      y1: skillCategories.webDevelopment
    },
    {
      key: 41,
      y0: timelineNodes.ratedPeople,
      y1: skillCategories.visualisation
    },
    { key: 42, y0: timelineNodes.ratedPeople, y1: skillCategories.python },
    {
      key: 43,
      y0: timelineNodes.ratedPeople,
      y1: skillCategories.geoSpatial
    },
    { key: 44, y0: timelineNodes.ratedPeople, y1: skillCategories.etl },
    { key: 45, y0: timelineNodes.ratedPeople, y1: skillCategories.databases },
    { key: 46, y0: timelineNodes.mindshareWW, y1: skillCategories.python },
    { key: 47, y0: timelineNodes.mindshareWW, y1: skillCategories.etl },
    { key: 48, y0: timelineNodes.mindshareWW, y1: skillCategories.databases }
  ],
  skillItemLinks: [
    {
      key: 1,
      y0: skillCategories.webDevelopment,
      y1: skillItems.d3
    },
    {
      key: 2,
      y0: skillCategories.webDevelopment,
      y1: skillItems.javascript
    },
    {
      key: 3,
      y0: skillCategories.webDevelopment,
      y1: skillItems.html
    },
    {
      key: 4,
      y0: skillCategories.webDevelopment,
      y1: skillItems.css
    },
    {
      key: 5,
      y0: skillCategories.webDevelopment,
      y1: skillItems.react
    },
    {
      key: 6,
      y0: skillCategories.webDevelopment,
      y1: skillItems.node
    },
    {
      key: 7,
      y0: skillCategories.webDevelopment,
      y1: skillItems.graphQL
    },
    {
      key: 8,
      y0: skillCategories.visualisation,
      y1: skillItems.d3
    },
    {
      key: 9,
      y0: skillCategories.visualisation,
      y1: skillItems.powerBI
    },
    {
      key: 10,
      y0: skillCategories.visualisation,
      y1: skillItems.matplotlib
    },
    {
      key: 11,
      y0: skillCategories.python,
      y1: skillItems.pandas
    },
    {
      key: 12,
      y0: skillCategories.python,
      y1: skillItems.numpy
    },
    {
      key: 13,
      y0: skillCategories.python,
      y1: skillItems.matplotlib
    },
    {
      key: 14,
      y0: skillCategories.python,
      y1: skillItems.sklearn
    },
    {
      key: 15,
      y0: skillCategories.geoSpatial,
      y1: skillItems.pandas
    },
    {
      key: 16,
      y0: skillCategories.geoSpatial,
      y1: skillItems.numpy
    },
    {
      key: 17,
      y0: skillCategories.geoSpatial,
      y1: skillItems.matplotlib
    },
    {
      key: 18,
      y0: skillCategories.geoSpatial,
      y1: skillItems.sklearn
    },
    {
      key: 19,
      y0: skillCategories.geoSpatial,
      y1: skillItems.arcgis
    },
    {
      key: 20,
      y0: skillCategories.dataModelling,
      y1: skillItems.sql
    },
    {
      key: 21,
      y0: skillCategories.etl,
      y1: skillItems.pandas
    },
    {
      key: 22,
      y0: skillCategories.etl,
      y1: skillItems.airflow
    },
    {
      key: 23,
      y0: skillCategories.etl,
      y1: skillItems.emr
    },
    {
      key: 24,
      y0: skillCategories.etl,
      y1: skillItems.dataFactory
    },
    {
      key: 25,
      y0: skillCategories.aws,
      y1: skillItems.s3
    },
    {
      key: 26,
      y0: skillCategories.aws,
      y1: skillItems.ec2
    },
    {
      key: 27,
      y0: skillCategories.aws,
      y1: skillItems.lambda
    },
    {
      key: 28,
      y0: skillCategories.aws,
      y1: skillItems.redshift
    },
    {
      key: 29,
      y0: skillCategories.aws,
      y1: skillItems.emr
    },
    {
      key: 30,
      y0: skillCategories.aws,
      y1: skillItems.athena
    },
    {
      key: 31,
      y0: skillCategories.aws,
      y1: skillItems.kinesis
    },
    {
      key: 32,
      y0: skillCategories.azure,
      y1: skillItems.dataFactory
    },
    {
      key: 33,
      y0: skillCategories.azure,
      y1: skillItems.devOps
    },
    {
      key: 34,
      y0: skillCategories.azure,
      y1: skillItems.functions
    },
    {
      key: 35,
      y0: skillCategories.azure,
      y1: skillItems.blobStorage
    },
    {
      key: 36,
      y0: skillCategories.azure,
      y1: skillItems.keyVault
    },
    {
      key: 37,
      y0: skillCategories.API,
      y1: skillItems.graphQL
    },
    {
      key: 38,
      y0: skillCategories.API,
      y1: skillItems.rest
    },
    {
      key: 39,
      y0: skillCategories.databases,
      y1: skillItems.redshift
    },
    {
      key: 40,
      y0: skillCategories.databases,
      y1: skillItems.postgreSQL
    },
    {
      key: 41,
      y0: skillCategories.databases,
      y1: skillItems.sqlserver
    },
    {
      key: 42,
      y0: skillCategories.databases,
      y1: skillItems.mongoDB
    },
    {
      key: 43,
      y0: skillCategories.databases,
      y1: skillItems.mysql
    },
    {
      key: 44,
      y0: skillCategories.testing,
      y1: skillItems.jest
    },
    {
      key: 45,
      y0: skillCategories.testing,
      y1: skillItems.pyTest
    },
    {
      key: 46,
      y0: skillCategories.os,
      y1: skillItems.linux
    },
    {
      key: 47,
      y0: skillCategories.os,
      y1: skillItems.macOS
    },
    {
      key: 48,
      y0: skillCategories.os,
      y1: skillItems.windows
    },
    {
      key: 49,
      y0: skillCategories.other,
      y1: skillItems.git
    }
  ]
}

export default data
