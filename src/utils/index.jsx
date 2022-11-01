import icons from "../assets/png/icons";

const pipeLines = [
  {
    name: "sql_server",
    source: "SQL Server RDS",
    destiation: "SQL Server RDS",
    status: "STOPPED",
    last_synced: "2022/01/12",
    icon: icons.sqlIcon,
  },
  {
    name: "azure_function",
    source: "Azure Functions",
    destiation: "Azure Functions",
    status: "ACTIVE",
    last_synced: "2022/09/22",
    icon: icons.azureIcon,
  },
  {
    name: "ss_demo",
    source: "SQL Server RDS",
    destiation: "SQL Server RDS",
    status: "ACTIVE",
    last_synced: "2022/05/06",
    icon: icons.sqlIcon,
  },
  {
    name: "gsheets.sales",
    source: "Google Sheets",
    destiation: "Google Sheets",
    status: "ACTIVE",
    last_synced: "2022/11/01",
    icon: icons.googleSheetIcon,
  },
  {
    name: "github",
    source: "Github",
    destiation: "Github",
    status: "STOPPED",
    last_synced: "2022/08/15",
    icon: icons.githubIcon,
  },
  {
    name: "postgreTest",
    source: "PostgreSQL",
    destiation: "PostgreSQL",
    status: "STOPPED",
    last_synced: "2022/02/20",
    icon: icons.postgreIcon,
  },
];

const tableList = [
  { title: 'Column1'},
  { title: 'Column2'},
  { title: 'Column3'},
  { title: 'Column4'},
  { title: 'Column5'},
]

export {
  pipeLines,
  tableList,
}