const timelineNodes = {
  sideProjects: { name: "Side Projects", order: 8 },
  policyInPractice: { name: "Policy in Practice", order: 7 },
  talkingMedicines: { name: "Talking Medicines", order: 6 },
  infinityWorks: { name: "Infinity Works", order: 5 },
  decathlonUK: { name: "Decathlon UK (contract)", order: 4 },
  charlesRiverAssociates: { name: "Charles River Associates", order: 3 },
  ratedPeople: { name: "Rated People", order: 2 },
  mindshareWW: { name: "Mindshare Worldwide", order: 1 },
  education: { name: "Education", order: 0 },
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
  management: {
    name: "Engineering Management",
    vh: 8,
    validTimelineNodesOrder: [7],
  },
  etl: {
    name: "Data Engineering",
    vh: 15,
    validTimelineNodesOrder: [7, 6, 5, 4, 3, 2],
  },
  python: {
    name: "Python",
    vh: 21,
    validTimelineNodesOrder: [8, 7, 6, 5, 4, 3, 2],
  },
  azure: {
    name: "Azure",
    vh: 26,
    validTimelineNodesOrder: [6, 5],
  },
  aws: {
    name: "AWS",
    vh: 32,
    validTimelineNodesOrder: [8, 7, 5, 4],
  },
  dataModelling: {
    name: "Data Analysis",
    vh: 37,
    validTimelineNodesOrder: [7, 6, 5, 4, 2],
  },
  geoSpatial: {
    name: "Geospatial Analysis",
    vh: 44,
    validTimelineNodesOrder: [8, 7, 3, 2],
  },
  visualisation: {
    name: "Data Visualisation",
    vh: 51,
    validTimelineNodesOrder: [8, 7, 6, 5, 4, 3, 2],
  },
  frontendDevelopment: {
    name: "Frontend Development",
    vh: 59,
    validTimelineNodesOrder: [8, 7, 6, 5, 4, 3, 2],
  },
  databases: {
    name: "Databases",
    vh: 66,
    validTimelineNodesOrder: [8, 7, 6, 5, 4, 3, 2],
  },
  cicd: {
    name: "CI/CD",
    vh: 71,
    validTimelineNodesOrder: [8, 7, 6, 5],
  },
  testing: {
    name: "Testing",
    vh: 75,
    validTimelineNodesOrder: [8, 7, 6, 5, 4, 3, 2],
  },
  os: {
    name: "OS",
    vh: 80,
    validTimelineNodesOrder: [8, 7, 6, 5, 4, 3, 2],
  },
  other: {
    name: "Version Control",
    vh: 85,
    validTimelineNodesOrder: [8, 7, 6, 5, 4, 3, 2],
  },
}

// to combine: HTML / CSS / Javascript
// add Spacy, Django

const skillItems = {
  pandas: {
    name: "pandas",
    vh: 4,
    validTimelineNodesOrder: [8, 7, 6, 4, 3],
  },
  numpy: {
    name: "numPy",
    vh: 6,
    validTimelineNodesOrder: [8, 7, 6, 4, 3],
  },
  matplotlib: {
    name: "matplotlib/seaborn",
    vh: 8,
    validTimelineNodesOrder: [8, 7, 6, 3, 2],
  },
  sklearn: {
    name: "scikit learn",
    vh: 10,
    validTimelineNodesOrder: [8, 7, 6, 3, 2],
  },
  spacy: {
    name: "spaCy",
    vh: 12,
    validTimelineNodesOrder: [6],
  },
  tableau: {
    name: "Tableau",
    vh: 15,
    validTimelineNodesOrder: [7],
  },
  powerBI: {
    name: "Power BI",
    vh: 17,
    validTimelineNodesOrder: [6, 5],
  },
  looker: {
    name: "Looker",
    vh: 19,
    validTimelineNodesOrder: [5],
  },
  arcgis: {
    name: "ArcGIS",
    vh: 22,
    validTimelineNodesOrder: [3],
  },
  sql: {
    name: "SQL",
    vh: 25,
    validTimelineNodesOrder: [7, 6, 5, 4, 3, 2],
  },
  airflow: {
    name: "Airflow",
    vh: 28,
    validTimelineNodesOrder: [5],
  },
  dbt: {
    name: "dbt",
    vh: 30,
    validTimelineNodesOrder: [5],
  },
  dataFactory: {
    name: "Data Factory",
    vh: 33,
    validTimelineNodesOrder: [5],
  },
  devOps: {
    name: "Dev Ops",
    vh: 35,
    validTimelineNodesOrder: [5],
  },
  functions: {
    name: "Functions",
    vh: 37,
    validTimelineNodesOrder: [6, 5],
  },
  blobStorage: {
    name: "Blob Storage",
    vh: 39,
    validTimelineNodesOrder: [6, 5],
  },
  azureAndMore: {
    name: "+ more",
    vh: 41,
    validTimelineNodesOrder: [6, 5],
  },
  storage: {
    name: "S3/ECR",
    vh: 44,
    validTimelineNodesOrder: [7, 5, 4],
  },
  compute: {
    name: "EC2/ECS/EMR/Lambda",
    vh: 46,
    validTimelineNodesOrder: [8, 7, 5, 4],
  },
  databases: {
    name: "RDS/Aurora/DynamoDB",
    vh: 48,
    validTimelineNodesOrder: [7, 5],
  },
  networking: {
    name: "VPC/Networking",
    vh: 50,
    validTimelineNodesOrder: [7, 5],
  },
  other: {
    name: "Athena/Kinesis/SQS/SNS/IAM",
    vh: 52,
    validTimelineNodesOrder: [7, 5],
  },
  d3: {
    name: "d3.js",
    vh: 55,
    validTimelineNodesOrder: [8, 6, 4, 3, 2],
  },
  typescript: {
    name: "Typescript",
    vh: 57,
    validTimelineNodesOrder: [7],
  },
  htmlCSSJavaScript: {
    name: "HTML/CSS/JavaScript",
    vh: 59,
    validTimelineNodesOrder: [8, 7, 6, 4, 3, 2],
  },
  react: {
    name: "React",
    vh: 61,
    validTimelineNodesOrder: [8, 4],
  },
  node: {
    name: "Node",
    vh: 63,
    validTimelineNodesOrder: [8, 7, 6, 4],
  },
  graphQL: {
    name: "GraphQL",
    vh: 65,
    validTimelineNodesOrder: [8, 4],
  },
  postgreSQL: {
    name: "PostgreSQL",
    vh: 68,
    validTimelineNodesOrder: [7, 6, 2],
  },
  sqlserver: {
    name: "SQL Server",
    vh: 70,
    validTimelineNodesOrder: [6, 5, 1],
  },
  mongoDB: {
    name: "MongoDB",
    vh: 72,
    validTimelineNodesOrder: [7, 5, 4, 3],
  },
  mysql: {
    name: "MySQL",
    vh: 74,
    validTimelineNodesOrder: [2],
  },
  githubactions: {
    name: "Github Actions",
    vh: 77,
    validTimelineNodesOrder: [7],
  },
  jestPyTest: {
    name: "Jest/pyTest",
    vh: 80,
    validTimelineNodesOrder: [8, 7, 6, 4],
  },
  BDD: {
    name: "BDD",
    vh: 82,
    validTimelineNodesOrder: [5],
  },
  linux: {
    name: "Linux/Ubuntu",
    vh: 85,
    validTimelineNodesOrder: [8, 5, 4],
  },
  macOS: {
    name: "MacOS",
    vh: 87,
    validTimelineNodesOrder: [8, 7, 6, 5],
  },
  windows: {
    name: "Windows",
    vh: 89,
    validTimelineNodesOrder: [4, 3, 2, 1],
  },
  git: {
    name: "Git",
    vh: 92,
    validTimelineNodesOrder: [8, 7, 6, 5, 4, 3, 2],
  },
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
  skillItems: skillItems,
  skillCategoryLinks: [
    {
      key: 1,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.frontendDevelopment,
    },
    {
      key: 2,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.visualisation,
    },
    {
      key: 3,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.python,
    },
    {
      key: 4,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.geoSpatial,
    },
    {
      key: 5,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.databases,
    },
    {
      key: 6,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.testing,
    },
    {
      key: 7,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.os,
    },
    {
      key: 8,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.other,
    },
    {
      key: 9,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.management,
    },
    {
      key: 10,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.etl,
    },
    {
      key: 11,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.python,
    },
    {
      key: 12,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.geoSpatial,
    },
    {
      key: 13,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.aws,
    },
    {
      key: 14,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.visualisation,
    },
    {
      key: 15,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.frontendDevelopment,
    },

    {
      key: 17,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.databases,
    },
    {
      key: 170,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.cicd,
    },
    {
      key: 18,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.testing,
    },
    {
      key: 19,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.os,
    },
    {
      key: 20,
      y0: timelineNodes.policyInPractice,
      y1: skillCategories.other,
    },
    {
      key: 21,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.etl,
    },
    {
      key: 22,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.python,
    },
    {
      key: 23,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.dataModelling,
    },
    {
      key: 24,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.dataModelling,
    },
    {
      key: 25,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.azure,
    },
    {
      key: 26,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.visualisation,
    },
    {
      key: 27,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.frontendDevelopment,
    },
    {
      key: 28,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.frontendDevelopment,
    },
    {
      key: 29,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.databases,
    },
    {
      key: 30,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.testing,
    },
    {
      key: 31,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.os,
    },
    {
      key: 32,
      y0: timelineNodes.talkingMedicines,
      y1: skillCategories.other,
    },
    { key: 33, y0: timelineNodes.infinityWorks, y1: skillCategories.python },
    {
      key: 34,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.dataModelling,
    },
    {
      key: 35,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.etl,
    },
    {
      key: 36,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.aws,
    },
    {
      key: 37,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.azure,
    },
    {
      key: 38,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.databases,
    },
    {
      key: 29,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.testing,
    },
    {
      key: 40,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.os,
    },
    {
      key: 41,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.other,
    },
    {
      key: 42,
      y0: timelineNodes.decathlonUK,
      y1: skillCategories.frontendDevelopment,
    },
    {
      key: 43,
      y0: timelineNodes.decathlonUK,
      y1: skillCategories.visualisation,
    },
    { key: 44, y0: timelineNodes.decathlonUK, y1: skillCategories.python },
    {
      key: 45,
      y0: timelineNodes.decathlonUK,
      y1: skillCategories.dataModelling,
    },
    { key: 46, y0: timelineNodes.decathlonUK, y1: skillCategories.etl },

    { key: 47, y0: timelineNodes.decathlonUK, y1: skillCategories.aws },

    { key: 48, y0: timelineNodes.decathlonUK, y1: skillCategories.databases },
    { key: 49, y0: timelineNodes.decathlonUK, y1: skillCategories.testing },
    { key: 50, y0: timelineNodes.decathlonUK, y1: skillCategories.os },
    { key: 51, y0: timelineNodes.decathlonUK, y1: skillCategories.other },
    {
      key: 52,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.frontendDevelopment,
    },
    {
      key: 55,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.visualisation,
    },
    {
      key: 56,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.python,
    },
    {
      key: 57,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.geoSpatial,
    },
    {
      key: 58,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.etl,
    },
    {
      key: 60,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.databases,
    },
    {
      key: 61,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.testing,
    },
    {
      key: 62,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.os,
    },
    {
      key: 63,
      y0: timelineNodes.ratedPeople,
      y1: skillCategories.frontendDevelopment,
    },
    {
      key: 64,
      y0: timelineNodes.ratedPeople,
      y1: skillCategories.visualisation,
    },
    { key: 65, y0: timelineNodes.ratedPeople, y1: skillCategories.python },
    {
      key: 66,
      y0: timelineNodes.ratedPeople,
      y1: skillCategories.geoSpatial,
    },
    { key: 67, y0: timelineNodes.ratedPeople, y1: skillCategories.etl },
    { key: 68, y0: timelineNodes.ratedPeople, y1: skillCategories.databases },
    { key: 69, y0: timelineNodes.mindshareWW, y1: skillCategories.python },
    { key: 70, y0: timelineNodes.mindshareWW, y1: skillCategories.etl },
    { key: 71, y0: timelineNodes.mindshareWW, y1: skillCategories.databases },
  ],
  skillItemLinks: [
    {
      key: 1,
      y0: skillCategories.etl,
      y1: skillItems.pandas,
    },
    {
      key: 2,
      y0: skillCategories.etl,
      y1: skillItems.sql,
    },
    {
      key: 3,
      y0: skillCategories.etl,
      y1: skillItems.airflow,
    },
    {
      key: 4,
      y0: skillCategories.etl,
      y1: skillItems.dbt,
    },
    {
      key: 5,
      y0: skillCategories.etl,
      y1: skillItems.dataFactory,
    },
    {
      key: 6,
      y0: skillCategories.etl,
      y1: skillItems.blobStorage,
    },
    {
      key: 9,
      y0: skillCategories.etl,
      y1: skillItems.azureAndMore,
    },
    {
      key: 10,
      y0: skillCategories.etl,
      y1: skillItems.postgreSQL,
    },
    {
      key: 11,
      y0: skillCategories.etl,
      y1: skillItems.sqlserver,
    },
    {
      key: 110,
      y0: skillCategories.etl,
      y1: skillItems.typescript,
    },
    {
      key: 12,
      y0: skillCategories.python,
      y1: skillItems.pandas,
    },
    {
      key: 13,
      y0: skillCategories.python,
      y1: skillItems.numpy,
    },
    {
      key: 14,
      y0: skillCategories.python,
      y1: skillItems.matplotlib,
    },
    {
      key: 15,
      y0: skillCategories.python,
      y1: skillItems.sklearn,
    },
    {
      key: 16,
      y0: skillCategories.python,
      y1: skillItems.spacy,
    },
    {
      key: 17,
      y0: skillCategories.dataModelling,
      y1: skillItems.pandas,
    },
    {
      key: 18,
      y0: skillCategories.dataModelling,
      y1: skillItems.powerBI,
    },
    {
      key: 19,
      y0: skillCategories.dataModelling,
      y1: skillItems.sql,
    },
    {
      key: 20,
      y0: skillCategories.geoSpatial,
      y1: skillItems.arcgis,
    },
    {
      key: 21,
      y0: skillCategories.azure,
      y1: skillItems.dataFactory,
    },
    {
      key: 22,
      y0: skillCategories.azure,
      y1: skillItems.devOps,
    },
    {
      key: 23,
      y0: skillCategories.azure,
      y1: skillItems.functions,
    },
    {
      key: 24,
      y0: skillCategories.azure,
      y1: skillItems.blobStorage,
    },
    {
      key: 27,
      y0: skillCategories.azure,
      y1: skillItems.azureAndMore,
    },
    {
      key: 28,
      y0: skillCategories.aws,
      y1: skillItems.storage,
    },
    {
      key: 29,
      y0: skillCategories.aws,
      y1: skillItems.compute,
    },
    {
      key: 30,
      y0: skillCategories.aws,
      y1: skillItems.databases,
    },
    {
      key: 31,
      y0: skillCategories.aws,
      y1: skillItems.networking,
    },
    {
      key: 32,
      y0: skillCategories.aws,
      y1: skillItems.other,
    },
    {
      key: 33,
      y0: skillCategories.visualisation,
      y1: skillItems.d3,
    },
    {
      key: 340,
      y0: skillCategories.visualisation,
      y1: skillItems.tableau,
    },
    {
      key: 34,
      y0: skillCategories.visualisation,
      y1: skillItems.powerBI,
    },
    {
      key: 35,
      y0: skillCategories.visualisation,
      y1: skillItems.looker,
    },
    {
      key: 36,
      y0: skillCategories.visualisation,
      y1: skillItems.matplotlib,
    },
    {
      key: 37,
      y0: skillCategories.frontendDevelopment,
      y1: skillItems.d3,
    },
    {
      key: 370,
      y0: skillCategories.frontendDevelopment,
      y1: skillItems.typescript,
    },
    {
      key: 38,
      y0: skillCategories.frontendDevelopment,
      y1: skillItems.htmlCSSJavaScript,
    },
    {
      key: 39,
      y0: skillCategories.frontendDevelopment,
      y1: skillItems.react,
    },
    {
      key: 40,
      y0: skillCategories.frontendDevelopment,
      y1: skillItems.node,
    },
    {
      key: 41,
      y0: skillCategories.frontendDevelopment,
      y1: skillItems.graphQL,
    },
    {
      key: 44,
      y0: skillCategories.databases,
      y1: skillItems.postgreSQL,
    },
    {
      key: 45,
      y0: skillCategories.databases,
      y1: skillItems.sqlserver,
    },
    {
      key: 46,
      y0: skillCategories.databases,
      y1: skillItems.mongoDB,
    },
    {
      key: 47,
      y0: skillCategories.databases,
      y1: skillItems.mysql,
    },
    {
      key: 470,
      y0: skillCategories.cicd,
      y1: skillItems.githubactions,
    },
    {
      key: 48,
      y0: skillCategories.testing,
      y1: skillItems.jestPyTest,
    },
    {
      key: 49,
      y0: skillCategories.testing,
      y1: skillItems.BDD,
    },
    {
      key: 50,
      y0: skillCategories.os,
      y1: skillItems.linux,
    },
    {
      key: 51,
      y0: skillCategories.os,
      y1: skillItems.macOS,
    },
    {
      key: 52,
      y0: skillCategories.os,
      y1: skillItems.windows,
    },
    {
      key: 53,
      y0: skillCategories.other,
      y1: skillItems.git,
    },
  ],
}

export default data
