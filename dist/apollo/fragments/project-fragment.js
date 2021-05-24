import{gql as t}from"https://cdn.skypack.dev/@apollo/client";export const CORE_PROJECT_FIELDS=t`
  fragment CoreProjectFields on ProjectModel {
    id
    title
    description
    url
    createdAt
    updatedAt
    imageUrl
  }
`;
