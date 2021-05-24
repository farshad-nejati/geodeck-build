import{gql as e}from"../../../_snowpack/pkg/@apollo/client.js";import{CORE_GEOMETRIC_OBJECT_FIELDS as a}from"./object-fragment.js";export const CORE_BASIC_VARIABLE_FIELDS=e`
  fragment BasicVariableFields on VariableBasicModel {
    id
    name
    unit
    containerName
  }
`,CORE_VARIABLE_OBJECT_FIELDS=e`
  ${a}
  ${CORE_BASIC_VARIABLE_FIELDS}
  fragment CoreVariableObjectFields on VariableObjectModel {
    id
    object {
      ...CoreGeometricObjectFields
    }
    variable {
      ...BasicVariableFields
    }
  }
`,DETAIL_VARIABLE_FIELDS=e`
  ${CORE_VARIABLE_OBJECT_FIELDS}
  fragment DetailVariableFields on VariableDetailsModel {
    id
    name
    unit
    containerName
    variableObjects {
      items {
        ...CoreVariableObjectFields
      }
      total
    }
  }
`;
