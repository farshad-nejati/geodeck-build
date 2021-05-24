import{gql as e}from"https://cdn.skypack.dev/@apollo/client";export const CORE_FILE_FIELDS=e`
  fragment CoreFileFields on FileModel {
    id
    title
    url
    extension
    varying
    originalName
    key
    type
    createdAt
    updatedAt
  }
`;
