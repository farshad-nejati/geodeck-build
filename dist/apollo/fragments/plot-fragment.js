import{gql as e}from"https://cdn.skypack.dev/@apollo/client";import{CORE_BASIC_VARIABLE_FIELDS as t,CORE_VARIABLE_OBJECT_FIELDS as a}from"./variable-fragment.js";export const CORE_PLOT_FIELDS=e`
  ${a}
  ${t}
  fragment CorePlotFields on PlotModel {
    id
    name
    type
    createdAt
    updatedAt
    variableObjects {
      items {
        ...CoreVariableObjectFields
      }
      total
    }
    variable {
      ...BasicVariableFields
    }
  }
`;
