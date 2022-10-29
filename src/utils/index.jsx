import icons from "../assets/png/icons";

const pipleLines = [
  {
    name: "sql_server",
    source: "SQL Server RDS",
    destiation: "SQL Server RDS",
    status: "STOPPED",
    last_synced: 13,
    icon: icons.sqlIcon,
  },
  {
    name: "azure_function",
    source: "Azure Functions",
    destiation: "Azure Functions",
    status: "ACTIVE",
    last_synced: 24,
    icon: icons.azureIcon,
  },
  {
    name: "ss_demo",
    source: "SQL Server RDS",
    destiation: "SQL Server RDS",
    status: "ACTIVE",
    last_synced: 33,
    icon: icons.sqlIcon,
  },
  {
    name: "gsheets.sales",
    source: "Google Sheets",
    destiation: "Google Sheets",
    status: "ACTIVE",
    last_synced: 36,
    icon: icons.googleSheetIcon,
  },
  {
    name: "github",
    source: "Github",
    destiation: "Github",
    status: "STOPPED",
    last_synced: 51,
    icon: icons.githubIcon,
  },
  {
    name: "postgreTest",
    source: "PostgreSQL",
    destiation: "PostgreSQL",
    status: "STOPPED",
    last_synced: 66,
    icon: icons.postgreIcon,
  },
];


export {
  pipleLines,
}