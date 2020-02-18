import { graphql } from "gatsby"
import React from "react"

import Dashboard from "../components/Dashboard"
import SEO from "../components/SEO"
import Table from "../components/Table"
import { talentsColumns } from "../components/Talents"

export default function Talents({ data }) {
  return (
    <Dashboard>
      <SEO title="Talents" />
      <Table
        title="Talents"
        columns={talentsColumns}
        data={data.allTalentsYaml.edges.map(({ node }) => {
          return {
            ...node,
          }
        })}
      />
    </Dashboard>
  )
}

export const query = graphql`
  query TalentsPageQuery {
    allTalentsYaml {
      edges {
        node {
          name
          activation
          ranked
          forceSensitive
          index
          generatedId
        }
      }
    }
  }
`