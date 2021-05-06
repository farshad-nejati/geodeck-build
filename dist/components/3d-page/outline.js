import React, {useEffect, useMemo, useRef, useState} from "../../../_snowpack/pkg/react.js";
import {useThree, useFrame, extend} from "../../../_snowpack/pkg/@react-three/fiber.js";
import {Vector2} from "../../../_snowpack/pkg/three.js";
import {EffectComposer} from "../../../_snowpack/pkg/three/examples/jsm/postprocessing/EffectComposer.js";
import {OutlinePass} from "../../../_snowpack/pkg/three/examples/jsm/postprocessing/OutlinePass.js";
import {RenderPass} from "../../../_snowpack/pkg/three/examples/jsm/postprocessing/RenderPass.js";
import {ShaderPass} from "../../../_snowpack/pkg/three/examples/jsm/postprocessing/ShaderPass.js";
import {FXAAShader} from "../../../_snowpack/pkg/three/examples/jsm/shaders/FXAAShader.js";
extend({EffectComposer, RenderPass, OutlinePass, ShaderPass});
const context = React.createContext();
const Outline = ({children, active}) => {
  const {gl, scene, camera, size, nodes, materials} = useThree();
  const composer = useRef();
  const [hovered, set] = useState([]);
  const aspect = useMemo(() => new Vector2(size.width, size.height), [size]);
  useEffect(() => composer.current.setSize(size.width, size.height), [size]);
  useFrame(() => composer.current.render(), 1);
  return /* @__PURE__ */ React.createElement(context.Provider, {
    value: set
  }, children, /* @__PURE__ */ React.createElement("effectComposer", {
    ref: composer,
    args: [gl]
  }, /* @__PURE__ */ React.createElement("renderPass", {
    attachArray: "passes",
    args: [scene, camera]
  }), /* @__PURE__ */ React.createElement("outlinePass", {
    attachArray: "passes",
    args: [aspect, scene, camera],
    selectedObjects: active ? hovered : [],
    visibleEdgeColor: "white",
    edgeStrength: 3,
    edgeThickness: 1,
    edgeGlow: 0,
    pulsePeriod: 0
  }), /* @__PURE__ */ React.createElement("shaderPass", {
    attachArray: "passes",
    args: [FXAAShader],
    "uniforms-resolution-value": [1 / size.width, 1 / size.height]
  })));
};
