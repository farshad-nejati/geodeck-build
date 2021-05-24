import{gql as a}from"../../../_snowpack/pkg/@apollo/client.js";import{CORE_SAMPLE_DATA_FIELDS as e}from"./sample-data-fragment.js";export const CORE_SAMPLE_OF_OBJECT_FIELDS=a`
  ${e}
  fragment CoreSampleOfObjectFields on SampleModel {
    id
    objectId
    variableId
    data {
      ...CoreSampleDataFields
    }
  }
`;
