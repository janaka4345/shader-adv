import "./App.css";
/*
 *CONSIDER THE PIXEL DENSITY OF THE DEVICE  . NEED TO FIX FOR DIFFERENT DEVICES
 */
import Canvas from "./components/Canvas"; // blue print for shaders
import ShaderScaleRotation from "./components/ShaderScaleRotation"; // shader matrix blueprint for scale and rotation
import Canvas1 from "./components/Canvas1"; //scale rotation with shader matrix
import Warp from "./components/Warp"; // warping
import Rainbow from "./components/Rainbow"; // rainbow water flow
import Light from "./components/Light"; // spot light
import LightCircle from "./components/LightCircle"; // light circle
function App() {
  return (
    <>
      {/* <Canvas/> */}
      {/* <ShaderScaleRotation /> */}
      {/* <Canvas1 /> */}
      {/* <Warp /> */}
      {/* <Rainbow /> */}
      {/* <Light /> */}
      <LightCircle />
    </>
  );
}

export default App;
