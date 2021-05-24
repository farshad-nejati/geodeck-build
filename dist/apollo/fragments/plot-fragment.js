import{gql as e}from"../../../_snowpack/pkg/@apollo/client.js";import{CORE_BASIC_VARIABLE_FIELDS as a,CORE_VARIABLE_OBJECT_FIELDS as t}from"./variable-fragment.js";export const CORE_PLOT_FIELDS=e`
  ${t}
  ${a}
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
