const timelineNodes = {
  sideProjects: { name: "Side Projects", order: 7 },
  talkingMedicines: { name: "Talking Medicines", order: 6 },
  infinityWorks: { name: "Infinity Works", order: 5 },
  decathlonUK: { name: "Decathlon UK (contract)", order: 4 },
  charlesRiverAssociates: { name: "Charles River Associates", order: 3 },
  ratedPeople: { name: "Rated People", order: 2 },
  mindshareWW: { name: "Mindshare Worldwide", order: 1 },
  education: { name: "Education", order: 0 }
}

// to add: Data Engineering, Machine Learning
// New order:
// Data Engineering (ETL)
// Python
// Data analysis
// Geospatial analysis
// Azure
// AWS
// Data Visualisation
// Frontend Development
// APIs
// Databases
// Testing
// OS
// Version Control

const skillCategories = {
  etl: {
    name: "Data Engineering",
    vh: 9,
    validTimelineNodesOrder: [6, 5, 4, 3, 2]
  },
  python: {
    name: "Python",
    vh: 16,
    validTimelineNodesOrder: [7, 6, 5, 4, 3, 2]
  },
  dataModelling: {
    name: "Data Analysis",
    vh: 20,
    validTimelineNodesOrder: [6, 5, 4, 2]
  },
  geoSpatial: {
    name: "Geospatial Analysis",
    vh: 27,
    validTimelineNodesOrder: [7, 3, 2]
  },
  azure: {
    name: "Azure",
    vh: 33,
    validTimelineNodesOrder: [6, 5]
  },
  aws: {
    name: "AWS",
    vh: 39,
    validTimelineNodesOrder: [7, 5, 4]
  },
  visualisation: {
    name: "Data Visualisation",
    vh: 44,
    validTimelineNodesOrder: [7, 6, 5, 4, 3, 2]
  },
  frontendDevelopment: {
    name: "Frontend Development",
    vh: 52,
    validTimelineNodesOrder: [7, 6, 5, 4, 3, 2]
  },
  API: {
    name: "APIs",
    vh: 60,
    validTimelineNodesOrder: [7, 6, 5, 4, 3]
  },
  databases: {
    name: "Databases",
    vh: 65,
    validTimelineNodesOrder: [7, 6, 5, 4, 3, 2]
  },
  testing: {
    name: "Testing",
    vh: 72,
    validTimelineNodesOrder: [7, 6, 5, 4, 3, 2]
  },
  os: {
    name: "OS",
    vh: 77,
    validTimelineNodesOrder: [7, 6, 5, 4, 3, 2]
  },
  other: {
    name: "Version Control",
    vh: 82,
    validTimelineNodesOrder: [7, 6, 5, 4, 3, 2]
  }
}

// to combine: HTML / CSS / Javascript
// add Spacy, Django

const skillItems = {
  pandas: {
    name: "pandas",
    vh: 4,
    validTimelineNodesOrder: [7, 6, 4, 3]
  },
  numpy: {
    name: "numPy",
    vh: 6,
    validTimelineNodesOrder: [7, 6, 4, 3]
  },
  matplotlib: {
    name: "matplotlib/seaborn",
    vh: 8,
    validTimelineNodesOrder: [7, 6, 3, 2]
  },
  sklearn: {
    name: "scikit learn",
    vh: 10,
    validTimelineNodesOrder: [7, 6, 3, 2]
  },
  spacy: {
    name: "spaCy",
    vh: 12,
    validTimelineNodesOrder: [6]
  },
  powerBI: {
    name: "Power BI",
    vh: 15,
    validTimelineNodesOrder: [6, 5]
  },
  looker: {
    name: "Looker",
    vh: 17,
    validTimelineNodesOrder: [5]
  },
  arcgis: {
    name: "ArcGIS",
    vh: 20,
    validTimelineNodesOrder: [3]
  },
  sql: {
    name: "SQL",
    vh: 23,
    validTimelineNodesOrder: [6, 5, 4, 3, 2]
  },
  airflow: {
    name: "Airflow",
    vh: 26,
    validTimelineNodesOrder: [5]
  },
  dbt: {
    name: "dbt",
    vh: 28,
    validTimelineNodesOrder: [5]
  },
  dataFactory: {
    name: "Data Factory",
    vh: 31,
    validTimelineNodesOrder: [5]
  },
  devOps: {
    name: "Dev Ops",
    vh: 33,
    validTimelineNodesOrder: [5]
  },
  functions: {
    name: "Functions",
    vh: 35,
    validTimelineNodesOrder: [6, 5]
  },
  blobStorage: {
    name: "Blob Storage",
    vh: 37,
    validTimelineNodesOrder: [6, 5]
  },
  keyVault: {
    name: "Key Vault",
    vh: 39,
    validTimelineNodesOrder: [6, 5]
  },
  containerInstances: {
    name: "Container Instances",
    vh: 41,
    validTimelineNodesOrder: [6]
  },
  logAnalytics: {
    name: "Log Analytics",
    vh: 43,
    validTimelineNodesOrder: [6, 5]
  },
  storage: {
    name: "S3/Glacier/EBS/EFS",
    vh: 46,
    validTimelineNodesOrder: [5, 4]
  },
  compute: {
    name: "EC2/ECS/EMR/Lambda",
    vh: 48,
    validTimelineNodesOrder: [7, 5, 4]
  },
  databases: {
    name: "RDS/Redshift/DynamoDB",
    vh: 50,
    validTimelineNodesOrder: [5]
  },
  networking: {
    name: "VPC/ELB/Networking",
    vh: 52,
    validTimelineNodesOrder: [5]
  },
  other: {
    name: "Athena/Kinesis/SQS/IAM",
    vh: 54,
    validTimelineNodesOrder: [5]
  },
  d3: {
    name: "d3.js",
    vh: 57,
    validTimelineNodesOrder: [7, 6, 4, 3, 2]
  },
  htmlCSSJavaScript: {
    name: "HTML/CSS/JavaScript",
    vh: 59,
    validTimelineNodesOrder: [7, 6, 4, 3, 2]
  },
  react: {
    name: "React",
    vh: 61,
    validTimelineNodesOrder: [7, 4]
  },
  node: {
    name: "Node",
    vh: 63,
    validTimelineNodesOrder: [7, 6, 4]
  },
  graphQL: {
    name: "GraphQL",
    vh: 65,
    validTimelineNodesOrder: [7, 4]
  },
  rest: {
    name: "REST",
    vh: 68,
    validTimelineNodesOrder: [6, 5, 4, 3]
  },
  django: {
    name: "Django",
    vh: 70,
    validTimelineNodesOrder: [6, 5, 4, 3]
  },
  postgreSQL: {
    name: "PostgreSQL",
    vh: 73,
    validTimelineNodesOrder: [6, 2]
  },
  sqlserver: {
    name: "SQL Server",
    vh: 75,
    validTimelineNodesOrder: [6, 5, 1]
  },
  mongoDB: {
    name: "MongoDB",
    vh: 77,
    validTimelineNodesOrder: [7, 5, 4, 3]
  },
  mysql: {
    name: "MySQL",
    vh: 79,
    validTimelineNodesOrder: [2]
  },
  jestPyTest: {
    name: "Jest/pyTest",
    vh: 82,
    validTimelineNodesOrder: [7, 6, 4]
  },
  BDD: {
    name: "BDD",
    vh: 84,
    validTimelineNodesOrder: [5]
  },
  linux: {
    name: "Linux/Ubuntu",
    vh: 86.5,
    validTimelineNodesOrder: [7, 5, 4]
  },
  macOS: {
    name: "MacOS",
    vh: 88.5,
    validTimelineNodesOrder: [6, 5]
  },
  windows: {
    name: "Windows",
    vh: 90.5,
    validTimelineNodesOrder: [4, 3, 2, 1]
  },
  git: {
    name: "Git",
    vh: 93,
    validTimelineNodesOrder: [7, 6, 5, 4, 3, 2]
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
      y1: skillCategories.frontendDevelopment
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
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.etl
    },
    {
      key: 10,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.python
    },
    {
      key: 11,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.dataModelling
    },
    {
      key: 12,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.azure
    },
    {
      key: 13,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.visualisation
    },
    {
      key: 14,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.frontendDevelopment
    },
    {
      key: 15,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.frontendDevelopment
    },
    {
      key: 16,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.API
    },
    {
      key: 17,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.databases
    },
    {
      key: 18,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.databases
    },
    {
      key: 19,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.testing
    },
    {
      key: 20,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.os
    },
    {
      key: 21,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.other
    },
    { key: 22, y0: timelineNodes.infinityWorks, y1: skillCategories.python },
    {
      key: 23,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.dataModelling
    },
    {
      key: 24,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.etl
    },
    {
      key: 25,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.aws
    },
    {
      key: 26,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.azure
    },
    {
      key: 27,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.API
    },
    {
      key: 28,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.databases
    },
    {
      key: 29,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.testing
    },
    {
      key: 30,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.os
    },
    {
      key: 31,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.other
    },
    {
      key: 32,
      y0: timelineNodes.decathlonUK,
      y1: skillCategories.frontendDevelopment
    },
    {
      key: 33,
      y0: timelineNodes.decathlonUK,
      y1: skillCategories.visualisation
    },
    { key: 34, y0: timelineNodes.decathlonUK, y1: skillCategories.python },
    {
      key: 35,
      y0: timelineNodes.decathlonUK,
      y1: skillCategories.dataModelling
    },
    { key: 36, y0: timelineNodes.decathlonUK, y1: skillCategories.etl },

    { key: 37, y0: timelineNodes.decathlonUK, y1: skillCategories.aws },

    { key: 38, y0: timelineNodes.decathlonUK, y1: skillCategories.API },
    { key: 39, y0: timelineNodes.decathlonUK, y1: skillCategories.databases },
    { key: 40, y0: timelineNodes.decathlonUK, y1: skillCategories.testing },
    { key: 41, y0: timelineNodes.decathlonUK, y1: skillCategories.os },
    { key: 42, y0: timelineNodes.decathlonUK, y1: skillCategories.other },
    {
      key: 43,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.frontendDevelopment
    },
    {
      key: 44,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.visualisation
    },
    {
      key: 45,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.python
    },
    {
      key: 46,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.geoSpatial
    },
    {
      key: 47,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.etl
    },
    {
      key: 48,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.API
    },
    {
      key: 49,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.databases
    },
    {
      key: 50,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.testing
    },
    {
      key: 51,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.os
    },
    {
      key: 52,
      y0: timelineNodes.ratedPeople,
      y1: skillCategories.frontendDevelopment
    },
    {
      key: 53,
      y0: timelineNodes.ratedPeople,
      y1: skillCategories.visualisation
    },
    { key: 54, y0: timelineNodes.ratedPeople, y1: skillCategories.python },
    {
      key: 55,
      y0: timelineNodes.ratedPeople,
      y1: skillCategories.geoSpatial
    },
    { key: 56, y0: timelineNodes.ratedPeople, y1: skillCategories.etl },
    { key: 57, y0: timelineNodes.ratedPeople, y1: skillCategories.databases },
    { key: 58, y0: timelineNodes.mindshareWW, y1: skillCategories.python },
    { key: 59, y0: timelineNodes.mindshareWW, y1: skillCategories.etl },
    { key: 60, y0: timelineNodes.mindshareWW, y1: skillCategories.databases }
  ],
  skillItemLinks: [
    {
      key: 1,
      y0: skillCategories.etl,
      y1: skillItems.pandas
    },
    {
      key: 2,
      y0: skillCategories.etl,
      y1: skillItems.sql
    },
    {
      key: 3,
      y0: skillCategories.etl,
      y1: skillItems.airflow
    },
    {
      key: 4,
      y0: skillCategories.etl,
      y1: skillItems.dbt
    },
    {
      key: 5,
      y0: skillCategories.etl,
      y1: skillItems.dataFactory
    },
    {
      key: 6,
      y0: skillCategories.etl,
      y1: skillItems.blobStorage
    },
    {
      key: 7,
      y0: skillCategories.etl,
      y1: skillItems.keyVault
    },
    {
      key: 8,
      y0: skillCategories.etl,
      y1: skillItems.containerInstances
    },
    {
      key: 9,
      y0: skillCategories.etl,
      y1: skillItems.logAnalytics
    },
    {
      key: 10,
      y0: skillCategories.etl,
      y1: skillItems.postgreSQL
    },
    {
      key: 11,
      y0: skillCategories.etl,
      y1: skillItems.sqlserver
    },
    {
      key: 12,
      y0: skillCategories.python,
      y1: skillItems.pandas
    },
    {
      key: 13,
      y0: skillCategories.python,
      y1: skillItems.numpy
    },
    {
      key: 14,
      y0: skillCategories.python,
      y1: skillItems.matplotlib
    },
    {
      key: 15,
      y0: skillCategories.python,
      y1: skillItems.sklearn
    },
    {
      key: 16,
      y0: skillCategories.python,
      y1: skillItems.spacy
    },
    {
      key: 17,
      y0: skillCategories.dataModelling,
      y1: skillItems.pandas
    },
    {
      key: 18,
      y0: skillCategories.dataModelling,
      y1: skillItems.powerBI
    },
    {
      key: 19,
      y0: skillCategories.dataModelling,
      y1: skillItems.sql
    },
    {
      key: 20,
      y0: skillCategories.geoSpatial,
      y1: skillItems.arcgis
    },
    {
      key: 21,
      y0: skillCategories.azure,
      y1: skillItems.dataFactory
    },
    {
      key: 22,
      y0: skillCategories.azure,
      y1: skillItems.devOps
    },
    {
      key: 23,
      y0: skillCategories.azure,
      y1: skillItems.functions
    },
    {
      key: 24,
      y0: skillCategories.azure,
      y1: skillItems.blobStorage
    },
    {
      key: 25,
      y0: skillCategories.azure,
      y1: skillItems.keyVault
    },
    {
      key: 26,
      y0: skillCategories.azure,
      y1: skillItems.containerInstances
    },
    {
      key: 27,
      y0: skillCategories.azure,
      y1: skillItems.logAnalytics
    },
    {
      key: 28,
      y0: skillCategories.aws,
      y1: skillItems.storage
    },
    {
      key: 29,
      y0: skillCategories.aws,
      y1: skillItems.compute
    },
    {
      key: 30,
      y0: skillCategories.aws,
      y1: skillItems.databases
    },
    {
      key: 31,
      y0: skillCategories.aws,
      y1: skillItems.networking
    },
    {
      key: 32,
      y0: skillCategories.aws,
      y1: skillItems.other
    },
    {
      key: 33,
      y0: skillCategories.visualisation,
      y1: skillItems.d3
    },
    {
      key: 34,
      y0: skillCategories.visualisation,
      y1: skillItems.powerBI
    },
    {
      key: 35,
      y0: skillCategories.visualisation,
      y1: skillItems.looker
    },
    {
      key: 36,
      y0: skillCategories.visualisation,
      y1: skillItems.matplotlib
    },
    {
      key: 37,
      y0: skillCategories.frontendDevelopment,
      y1: skillItems.d3
    },
    {
      key: 38,
      y0: skillCategories.frontendDevelopment,
      y1: skillItems.htmlCSSJavaScript
    },
    {
      key: 39,
      y0: skillCategories.frontendDevelopment,
      y1: skillItems.react
    },
    {
      key: 40,
      y0: skillCategories.frontendDevelopment,
      y1: skillItems.node
    },
    {
      key: 41,
      y0: skillCategories.frontendDevelopment,
      y1: skillItems.graphQL
    },
    {
      key: 42,
      y0: skillCategories.API,
      y1: skillItems.rest
    },
    {
      key: 43,
      y0: skillCategories.API,
      y1: skillItems.django
    },
    {
      key: 44,
      y0: skillCategories.databases,
      y1: skillItems.postgreSQL
    },
    {
      key: 45,
      y0: skillCategories.databases,
      y1: skillItems.sqlserver
    },
    {
      key: 46,
      y0: skillCategories.databases,
      y1: skillItems.mongoDB
    },
    {
      key: 47,
      y0: skillCategories.databases,
      y1: skillItems.mysql
    },
    {
      key: 48,
      y0: skillCategories.testing,
      y1: skillItems.jestPyTest
    },
    {
      key: 49,
      y0: skillCategories.testing,
      y1: skillItems.BDD
    },
    {
      key: 50,
      y0: skillCategories.os,
      y1: skillItems.linux
    },
    {
      key: 51,
      y0: skillCategories.os,
      y1: skillItems.macOS
    },
    {
      key: 52,
      y0: skillCategories.os,
      y1: skillItems.windows
    },
    {
      key: 53,
      y0: skillCategories.other,
      y1: skillItems.git
    }
  ]
}

export default data
