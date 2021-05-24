import{gql as e}from"https://cdn.skypack.dev/@apollo/client";import{CORE_SAMPLE_DATA_FIELDS as a}from"./sample-data-fragment.js";export const CORE_SAMPLE_OF_OBJECT_FIELDS=e`
  ${a}
  fragment CoreSampleOfObjectFields on SampleModel {
    id
    objectId
    variableId
    data {
      ...CoreSampleDataFields
    }
  }
`;
