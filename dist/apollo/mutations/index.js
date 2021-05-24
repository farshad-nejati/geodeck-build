import{gql as e}from"https://cdn.skypack.dev/@apollo/client";import{CORE_FILE_FIELDS as t}from"../fragments/file-fragment.js";import{CORE_GALLERY_FIELDS as o}from"../fragments/gallery-fragment.js";import{CORE_PLOT_FIELDS as l}from"../fragments/plot-fragment.js";import{CORE_PROJECT_FIELDS as r}from"../fragments/project-fragment.js";import{CORE_GEOMETRIC_OBJECT_FIELDS as i}from"../fragments/object-fragment.js";export const CREATE_PROJECT=e`
  ${r}
  ${o}
  ${t}
  mutation CreateProject(
    $userID: String!
    $title: String!
    $description: String!
    $url: String
    $modelFile: Upload
  ) {
    createProject(
      userID: $userID
      title: $title
      description: $description
      url: $url
      modelFile: $modelFile
    ) {
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
`,UPDATE_PROJECT=e`
  ${r}
  ${o}
  ${t}
  mutation updateProject($projectId: Int!, $object: UpdateProjectDTO!) {
    updateProject(projectId: $projectId, object: $object) {
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
`,ADD_FILE=e`
  ${t}
  mutation AddFile(
    $file: Upload!
    $galleryId: Int!
    $title: String!
    $varying: String!
  ) {
    addFile(
      file: $file
      galleryId: $galleryId
      title: $title
      varying: $varying
    ) {
      file {
        ...CoreFileFields
      }
    }
  }
`,CREATE_PLOT=e`
  ${l}
  mutation CreatePlot(
    $projectId: Int!
    $variableId: Int
    $name: String!
    $type: String!
  ) {
    createPlot(
      name: $name
      projectId: $projectId
      variableId: $variableId
      type: $type
    ) {
      ...CorePlotFields
    }
  }
`,CREATE_UPDATE_GEOMETRIC_OBJECTS=e`
  ${i}
  mutation UpdateObjectsOfProject($objects: [GeometricObjectDTO!]!) {
    updateObjectsOfProject(objects: $objects) {
      items {
        ...CoreGeometricObjectFields
      }
      total
    }
  }
`,UPDATE_PLOT=e`
  ${l}
  mutation UpdatePlot($plotId: Int!, $object: UpdatePlotDTO!) {
    updatePlot(plotId: $plotId, object: $object) {
      ...CorePlotFields
    }
  }
`,DELETE_PLOT=e`
  mutation DeletePlot($plotId: Int!) {
    deletePlot(plotId: $plotId) {
      id
    }
  }
`,DELETE_FILE_OF_GALLERY=e`
  ${o}
  mutation DeleteFileOfGallery($galleryId: Int!, $fileId: Int!) {
    deleteFile(galleryId: $galleryId, fileId: $fileId) {
      gallery {
        ...CoreGalleryFields
      }
    }
  }
`,DELETE_GEOMETRIC_OBJECT=e`
  ${i}
  mutation DeleteFileOfGallery($objectId: Int!) {
    deleteGeometricObject(objectId: $objectId) {
      ...CoreGeometricObjectFields
    }
  }
`;
