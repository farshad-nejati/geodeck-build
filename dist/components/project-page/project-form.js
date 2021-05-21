import React, {useEffect} from "../../../_snowpack/pkg/react.js";
import _ from "../../../_snowpack/pkg/lodash.js";
import {Form, Input, Button, Select} from "../../../_snowpack/pkg/antd.js";
import {useMutation} from "../../../_snowpack/pkg/@apollo/client.js";
import {CREATE_PROJECT, UPDATE_PROJECT} from "../../apollo/mutations/index.js";
import {GET_PROJECTS} from "../../apollo/queries/index.js";
import {projectsVar} from "../../apollo/cache.js";
const {Option} = Select;
const ProjectForm = (props) => {
  const userID = localStorage.getItem("sub");
  const [form] = Form.useForm();
  const project = props?.project;
  const isUpdate = !_.isEmpty(project);
  const [createProject, {loading}] = useMutation(CREATE_PROJECT, {
    refetchQueries: [{query: GET_PROJECTS, variables: {userID}}],
    onCompleted: (data) => {
      console.log(data);
      props.onCompleted(data?.createProject);
      form.resetFields();
    }
  });
  const [updateProject, {loading: updateLoading}] = useMutation(UPDATE_PROJECT, {
    refetchQueries: [{query: GET_PROJECTS, variables: {userID}}],
    onCompleted: (data) => {
      console.log(data);
      props.onCompleted(data?.updateProject);
    }
  });
  const initialValues = {
    title: !isUpdate ? null : project?.title,
    url: !isUpdate ? null : project?.url,
    description: !isUpdate ? null : project?.description
  };
  const onFinish = (values) => {
    if (isUpdate) {
      const projectId = project?.id;
      const newValues = _.pick(values, ["title", "description"]);
      updateProject({variables: {projectId, object: newValues}});
    } else {
      props.onCompleted(values);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const validate = (_2, value) => {
    if (!value) {
      return Promise.reject(`${_2.field} is required`);
    }
    return Promise.resolve();
  };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 8
      }
    },
    wrapperCol: {
      xs: {
        span: 24
      },
      sm: {
        span: 16
      }
    }
  };
  return /* @__PURE__ */ React.createElement(Form, {
    ...formItemLayout,
    name: "project-form",
    form,
    onFinish,
    onFinishFailed,
    initialValues
  }, /* @__PURE__ */ React.createElement(Form.Item, {
    label: "Project Title"
  }, /* @__PURE__ */ React.createElement(Form.Item, {
    name: "title",
    noStyle: true,
    rules: [{validator: validate}]
  }, /* @__PURE__ */ React.createElement(Input, {
    placeholder: "Title"
  }))), /* @__PURE__ */ React.createElement(Form.Item, {
    label: "Data Endpoint URL"
  }, /* @__PURE__ */ React.createElement(Form.Item, {
    name: "url",
    noStyle: true,
    rules: [
      {
        type: "url",
        message: "please enter a url!"
      },
      {
        validator: validate
      }
    ]
  }, /* @__PURE__ */ React.createElement(Input, {
    placeholder: "https://example.com",
    type: "url"
  }))), /* @__PURE__ */ React.createElement(Form.Item, {
    label: "Description"
  }, /* @__PURE__ */ React.createElement(Form.Item, {
    name: "description",
    noStyle: true,
    rules: [{validator: validate}]
  }, /* @__PURE__ */ React.createElement(Input, {
    placeholder: "Type description here"
  }))), /* @__PURE__ */ React.createElement(Form.Item, {
    className: "margin-0 project__form__buttons"
  }, /* @__PURE__ */ React.createElement(Input.Group, {
    className: "grid__two"
  }, /* @__PURE__ */ React.createElement(Form.Item, {
    className: "margin-0"
  }, /* @__PURE__ */ React.createElement(Button, {
    block: true,
    type: "default",
    onClick: props.onCancel
  }, "Cancel")), /* @__PURE__ */ React.createElement(Form.Item, {
    className: "margin-0"
  }, /* @__PURE__ */ React.createElement(Button, {
    block: true,
    type: "primary",
    loading: loading || updateLoading,
    disabled: loading || updateLoading,
    htmlType: "submit"
  }, isUpdate ? `Update` : `Next`)))));
};
export default ProjectForm;
