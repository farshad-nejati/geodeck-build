import{gql as e}from"../../../_snowpack/pkg/@apollo/client.js";import{DETAIL_VARIABLE_FIELDS as a}from"./variable-fragment.js";export const CORE_CONTAINER_FIELDS=e`
  ${a}
  fragment CoreContainerFields on ContainerModel {
    id
    name
    updatedAt
    variables {
      total
      items {
        ...DetailVariableFields
      }
    }
  }
`;
