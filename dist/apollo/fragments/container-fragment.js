import{gql as e}from"https://cdn.skypack.dev/@apollo/client";import{DETAIL_VARIABLE_FIELDS as t}from"./variable-fragment.js";export const CORE_CONTAINER_FIELDS=e`
  ${t}
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
