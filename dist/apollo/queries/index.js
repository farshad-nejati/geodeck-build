import{gql as e}from"../../../_snowpack/pkg/@apollo/client.js";import{CORE_CONTAINER_FIELDS as r}from"../fragments/container-fragment.js";import{CORE_FILE_FIELDS as t}from"../fragments/file-fragment.js";import{CORE_GALLERY_FIELDS as o}from"../fragments/gallery-fragment.js";import{CORE_PLOT_FIELDS as l}from"../fragments/plot-fragment.js";import{CORE_PROJECT_FIELDS as s}from"../fragments/project-fragment.js";import{CORE_SAMPLE_OF_OBJECT_FIELDS as i}from"../fragments/sample-of-object-fragment.js";import{CORE_GEOMETRIC_OBJECT_FIELDS as a}from"../fragments/object-fragment.js";export const GET_USERS=e`
  query MyUsers {
    users {
      id
      name
      email
    }
  }
`,GET_PROJECTS=e`
  ${s}
  ${o}
  ${t}
  query GetProjects($userID: String!) {
    projectModel(userId: $userID) {
      total
      items {
        ...CoreProjectFields
        gallery {
          ...CoreGalleryFields
        }
        model {
          id
          file {
            ...CoreFileFields
          }
        }
      }
    }
  }
`,GET_FILES_OF_GALLERY=e`
  ${t}
  query GetFilesOfGallery(
    $galleryId: Int!
    $order: String
    $fieldSort: String
    $type: String
  ) {
    filesOfGallery(
      galleryId: $galleryId
      order: $order
      fieldSort: $fieldSort
      type: $type
    ) {
      items {
        ...CoreFileFields
      }
      total
    }
  }
`,GET_CONTAINERS=e`
  ${r}
  query GetContainers($projectId: Int!) {
    containerModel(projectId: $projectId) {
      items {
        ...CoreContainerFields
      }
      total
    }
  }
`,GET_PLOTS=e`
  ${l}
  query GetPlots($projectId: Int!) {
    plotModel(projectId: $projectId) {
      items {
        ...CorePlotFields
      }
      total
    }
  }
`,GET_SAMPLE_OF_OBJECT=e`
  ${i}
  query GetSampleOfObject($objectId: Int!, $variableId: Int!) {
    sampleOfObject(objectId: $objectId, variableId: $variableId) {
      ...CoreSampleOfObjectFields
    }
  }
`,GET_OBJECTS=e`
  ${a}
  query GetGeometricObjects($projectId: Int!) {
    geometricObjectModel(projectId: $projectId) {
      items {
        ...CoreGeometricObjectFields
      }
      total
    }
  }
`;
