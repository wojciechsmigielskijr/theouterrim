import React from "react"
import Link from "./Link"

export const adversariesColumns = [
  {
    title: "Name",
    field: "name",
    render: rowData => (
      <Link to={`/adversaries/${rowData.generatedId}`}>{rowData.name}</Link>
    ),
    defaultSort: "asc",
  },
  { title: "Level", field: "level" },
  { title: "Skills", field: "skills" },
  { title: "Talents", field: "talents" },
  { title: "Abilities", field: "abilities" },
  { title: "Equipment", field: "equipment" },
  { title: "Index", field: "index" },
]