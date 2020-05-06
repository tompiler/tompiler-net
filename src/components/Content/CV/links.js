const timelineNodes = {
  sideProjects: { name: "Side Projects", order: 6 },
  infinityWorks: { name: "Infinity Works", order: 5 },
  decathlonUK: { name: "Decathlon UK (contract)", order: 4 },
  charlesRiverAssociates: { name: "Charles River Associates", order: 3 },
  ratedPeople: { name: "Rated People", order: 2 },
  mindshareWW: { name: "Mindshare Worldwide", order: 1 },
  education: { name: "Education", order: 1 },
}

const skillCategories = {
  webDevelopment: {
    name: "Web Development",
    vh: 5,
    validTimelineNodesOrder: [6, 5, 4, 2],
  },
  visualisation: {
    name: "Data Visualisation",
    vh: 15,
    validTimelineNodesOrder: [6, 5, 4, 3, 2],
  },
  python: {
    name: "Python",
    vh: 21,
    validTimelineNodesOrder: [6, 5, 4, 3, 2],
  },
  etl: {
    name: "ETL",
    vh: 27,
    validTimelineNodesOrder: [6, 5, 4, 3, 2],
  },
  aws: {
    name: "AWS",
    vh: 35,
    validTimelineNodesOrder: [6, 5, 4],
  },
  azure: {
    name: "Azure",
    vh: 48,
    validTimelineNodesOrder: [6, 5],
  },
  API: {
    name: "APIs",
    vh: 55,
    validTimelineNodesOrder: [6, 5, 4, 3],
  },
  databases: {
    name: "SQL/Databases",
    vh: 63,
    validTimelineNodesOrder: [6, 5, 4, 3, 2],
  },
  testing: {
    name: "Testing",
    vh: 71,
    validTimelineNodesOrder: [6, 5, 4, 3, 2],
  },
  os: {
    name: "OS",
    vh: 75,
    validTimelineNodesOrder: [6, 5, 4, 3, 2],
  },
  other: {
    name: "Other",
    vh: 79,
    validTimelineNodesOrder: [6, 5, 4, 3, 2],
  },
}

const skillItems = {
  d3: {
    name: "d3.js",
    vh: 0,
    validTimelineNodesOrder: [6, 4, 3, 2],
  },
  javascript: {
    name: "JavaScript/ES6",
    vh: 2,
    validTimelineNodesOrder: [6, 4, 3, 2],
  },
  html: {
    name: "HTML",
    vh: 4,
    validTimelineNodesOrder: [6, 4, 3, 2],
  },
  css: {
    name: "CSS",
    vh: 6,
    validTimelineNodesOrder: [6, 4, 3, 2],
  },
  react: {
    name: "React",
    vh: 8,
    validTimelineNodesOrder: [6, 4],
  },
  node: {
    name: "Node",
    vh: 10,
    validTimelineNodesOrder: [6, 4],
  },
  graphQL: {
    name: "GraphQL",
    vh: 12,
    validTimelineNodesOrder: [6, 4],
  },
  powerBI: {
    name: "Power BI",
    vh: 15,
    validTimelineNodesOrder: [5],
  },
  pandas: {
    name: "pandas",
    vh: 18,
    validTimelineNodesOrder: [6, 4, 3],
  },
  numpy: {
    name: "numPy",
    vh: 20,
    validTimelineNodesOrder: [4, 3],
  },
  matplotlib: {
    name: "matplotlib/seaborn",
    vh: 22,
    validTimelineNodesOrder: [3, 2],
  },
  sklearn: {
    name: "scikit learn",
    vh: 24,
    validTimelineNodesOrder: [3, 2],
  },
  airflow: {
    name: "Airflow",
    vh: 27,
    validTimelineNodesOrder: [5],
  },
  s3: {
    name: "S3",
    vh: 30,
    validTimelineNodesOrder: [5, 4],
  },
  ec2: {
    name: "EC2",
    vh: 32,
    validTimelineNodesOrder: [6, 5, 4],
  },
  lambda: {
    name: "Lambda",
    vh: 34,
    validTimelineNodesOrder: [5],
  },
  redshift: {
    name: "Redshift",
    vh: 36,
    validTimelineNodesOrder: [5],
  },
  emr: {
    name: "EMR",
    vh: 38,
    validTimelineNodesOrder: [5],
  },
  athena: {
    name: "Athena",
    vh: 40,
    validTimelineNodesOrder: [5],
  },
  kinesis: {
    name: "Kinesis",
    vh: 42,
    validTimelineNodesOrder: [5],
  },
  dataFactory: {
    name: "Data Factory",
    vh: 45,
    validTimelineNodesOrder: [5],
  },
  devOps: {
    name: "Dev Ops",
    vh: 47,
    validTimelineNodesOrder: [5],
  },
  functions: {
    name: "Functions",
    vh: 49,
    validTimelineNodesOrder: [5],
  },
  blobStorage: {
    name: "Blob Storage",
    vh: 51,
    validTimelineNodesOrder: [5],
  },
  keyVault: {
    name: "Key Vault",
    vh: 53,
    validTimelineNodesOrder: [5],
  },
  rest: {
    name: "REST",
    vh: 57,
    validTimelineNodesOrder: [5, 4, 3],
  },
  postgreSQL: {
    name: "PostgreSQL",
    vh: 60,
    validTimelineNodesOrder: [5, 4],
  },
  sqlserver: {
    name: "SQL Server",
    vh: 62,
    validTimelineNodesOrder: [5, 1],
  },
  mongoDB: {
    name: "MongoDB",
    vh: 64,
    validTimelineNodesOrder: [6, 5, 4, 3],
  },
  mysql: {
    name: "MySQL",
    vh: 66,
    validTimelineNodesOrder: [2],
  },
  jest: {
    name: "Jest",
    vh: 69,
    validTimelineNodesOrder: [6, 4],
  },
  pyTest: {
    name: "pyTest",
    vh: 71,
    validTimelineNodesOrder: [6, 5],
  },
  linux: {
    name: "Linux/Ubuntu",
    vh: 74,
    validTimelineNodesOrder: [6, 5, 4],
  },
  macOS: {
    name: "MacOS",
    vh: 76,
    validTimelineNodesOrder: [5],
  },
  windows: {
    name: "Windows",
    vh: 78,
    validTimelineNodesOrder: [4, 3, 2, 1],
  },
  git: {
    name: "git",
    vh: 81,
    validTimelineNodesOrder: [6, 5, 4, 3, 2],
  },
  nginx: {
    name: "nginx",
    vh: 83,
    validTimelineNodesOrder: [6, 4],
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
      y1: skillCategories.webDevelopment,
    },
    {
      key: 1,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.visualisation,
    },
    {
      key: 1,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.python,
    },
    {
      key: 1,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.databases,
    },
    {
      key: 1,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.testing,
    },
    {
      key: 1,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.os,
    },
    {
      key: 1,
      y0: timelineNodes.sideProjects,
      y1: skillCategories.other,
    },
    {
      key: 7,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.visualisation,
    },
    { key: 3, y0: timelineNodes.infinityWorks, y1: skillCategories.python },
    {
      key: 7,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.etl,
    },
    {
      key: 1,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.aws,
    },
    {
      key: 2,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.azure,
    },
    {
      key: 5,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.API,
    },
    {
      key: 6,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.databases,
    },
    {
      key: 6,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.testing,
    },
    {
      key: 6,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.os,
    },
    {
      key: 6,
      y0: timelineNodes.infinityWorks,
      y1: skillCategories.other,
    },
    {
      key: 9,
      y0: timelineNodes.decathlonUK,
      y1: skillCategories.webDevelopment,
    },
    {
      key: 9,
      y0: timelineNodes.decathlonUK,
      y1: skillCategories.visualisation,
    },
    { key: 8, y0: timelineNodes.decathlonUK, y1: skillCategories.python },
    { key: 7, y0: timelineNodes.decathlonUK, y1: skillCategories.etl },

    { key: 7, y0: timelineNodes.decathlonUK, y1: skillCategories.aws },

    { key: 10, y0: timelineNodes.decathlonUK, y1: skillCategories.API },
    { key: 11, y0: timelineNodes.decathlonUK, y1: skillCategories.databases },
    { key: 11, y0: timelineNodes.decathlonUK, y1: skillCategories.testing },
    { key: 11, y0: timelineNodes.decathlonUK, y1: skillCategories.os },
    { key: 11, y0: timelineNodes.decathlonUK, y1: skillCategories.other },
    {
      key: 11,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.webDevelopment,
    },
    {
      key: 11,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.visualisation,
    },
    {
      key: 11,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.python,
    },
    {
      key: 11,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.etl,
    },
    {
      key: 11,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.API,
    },
    {
      key: 11,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.databases,
    },
    {
      key: 11,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.testing,
    },
    {
      key: 11,
      y0: timelineNodes.charlesRiverAssociates,
      y1: skillCategories.os,
    },
    {
      key: 11,
      y0: timelineNodes.ratedPeople,
      y1: skillCategories.webDevelopment,
    },
    {
      key: 11,
      y0: timelineNodes.ratedPeople,
      y1: skillCategories.visualisation,
    },
    { key: 11, y0: timelineNodes.ratedPeople, y1: skillCategories.python },
    { key: 11, y0: timelineNodes.ratedPeople, y1: skillCategories.etl },
    { key: 11, y0: timelineNodes.ratedPeople, y1: skillCategories.databases },
    { key: 11, y0: timelineNodes.mindshareWW, y1: skillCategories.python },
    { key: 11, y0: timelineNodes.mindshareWW, y1: skillCategories.etl },
    { key: 11, y0: timelineNodes.mindshareWW, y1: skillCategories.databases },
  ],
  skillItemLinks: [
    {
      key: 1,
      y0: skillCategories.webDevelopment,
      y1: skillItems.d3,
    },
    {
      key: 2,
      y0: skillCategories.webDevelopment,
      y1: skillItems.javascript,
    },
    {
      key: 3,
      y0: skillCategories.webDevelopment,
      y1: skillItems.html,
    },
    {
      key: 4,
      y0: skillCategories.webDevelopment,
      y1: skillItems.css,
    },
    {
      key: 5,
      y0: skillCategories.webDevelopment,
      y1: skillItems.react,
    },
    {
      key: 6,
      y0: skillCategories.webDevelopment,
      y1: skillItems.node,
    },
    {
      key: 7,
      y0: skillCategories.webDevelopment,
      y1: skillItems.graphQL,
    },
    {
      key: 8,
      y0: skillCategories.visualisation,
      y1: skillItems.d3,
    },
    {
      key: 9,
      y0: skillCategories.visualisation,
      y1: skillItems.powerBI,
    },
    {
      key: 10,
      y0: skillCategories.visualisation,
      y1: skillItems.matplotlib,
    },
    {
      key: 11,
      y0: skillCategories.python,
      y1: skillItems.pandas,
    },
    {
      key: 12,
      y0: skillCategories.python,
      y1: skillItems.numpy,
    },
    {
      key: 13,
      y0: skillCategories.python,
      y1: skillItems.matplotlib,
    },
    {
      key: 14,
      y0: skillCategories.python,
      y1: skillItems.sklearn,
    },
    {
      key: 15,
      y0: skillCategories.etl,
      y1: skillItems.pandas,
    },
    {
      key: 16,
      y0: skillCategories.etl,
      y1: skillItems.airflow,
    },
    {
      key: 17,
      y0: skillCategories.etl,
      y1: skillItems.emr,
    },
    {
      key: 18,
      y0: skillCategories.etl,
      y1: skillItems.dataFactory,
    },
    {
      key: 19,
      y0: skillCategories.aws,
      y1: skillItems.s3,
    },
    {
      key: 20,
      y0: skillCategories.aws,
      y1: skillItems.ec2,
    },
    {
      key: 21,
      y0: skillCategories.aws,
      y1: skillItems.lambda,
    },
    {
      key: 22,
      y0: skillCategories.aws,
      y1: skillItems.redshift,
    },
    {
      key: 23,
      y0: skillCategories.aws,
      y1: skillItems.emr,
    },
    {
      key: 24,
      y0: skillCategories.aws,
      y1: skillItems.athena,
    },
    {
      key: 25,
      y0: skillCategories.aws,
      y1: skillItems.kinesis,
    },
    {
      key: 26,
      y0: skillCategories.azure,
      y1: skillItems.dataFactory,
    },
    {
      key: 27,
      y0: skillCategories.azure,
      y1: skillItems.devOps,
    },
    {
      key: 28,
      y0: skillCategories.azure,
      y1: skillItems.functions,
    },
    {
      key: 29,
      y0: skillCategories.azure,
      y1: skillItems.blobStorage,
    },
    {
      key: 30,
      y0: skillCategories.azure,
      y1: skillItems.keyVault,
    },
    {
      key: 31,
      y0: skillCategories.API,
      y1: skillItems.graphQL,
    },
    {
      key: 32,
      y0: skillCategories.API,
      y1: skillItems.rest,
    },
    {
      key: 33,
      y0: skillCategories.databases,
      y1: skillItems.redshift,
    },
    {
      key: 34,
      y0: skillCategories.databases,
      y1: skillItems.postgreSQL,
    },
    {
      key: 35,
      y0: skillCategories.databases,
      y1: skillItems.sqlserver,
    },
    {
      key: 36,
      y0: skillCategories.databases,
      y1: skillItems.mongoDB,
    },
    {
      key: 37,
      y0: skillCategories.databases,
      y1: skillItems.mysql,
    },
    {
      key: 38,
      y0: skillCategories.testing,
      y1: skillItems.jest,
    },
    {
      key: 39,
      y0: skillCategories.testing,
      y1: skillItems.pyTest,
    },
    {
      key: 40,
      y0: skillCategories.os,
      y1: skillItems.linux,
    },
    {
      key: 41,
      y0: skillCategories.os,
      y1: skillItems.macOS,
    },
    {
      key: 42,
      y0: skillCategories.os,
      y1: skillItems.windows,
    },
    {
      key: 43,
      y0: skillCategories.other,
      y1: skillItems.git,
    },
    {
      key: 44,
      y0: skillCategories.other,
      y1: skillItems.nginx,
    },
  ],
}

export default data
