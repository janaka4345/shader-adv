import { useEffect, useMemo, useRef, useState } from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
// import fs from "../glsl/fragmentTransform";
// import fsRotation from "../glsl/fragmentTransformRotation"; //scale and rotation

import vs from "../glsl/vertexShader";
import fsMorphingGrid from "../glsl/fragmentMorphingGrid";

let cw = 400;
let ch = 400;
let myShader;

export default function MorphingGrid(props) {
  const [t, setT] = useState(0);

  return (
    <div>
      <div>
        <ReactP5Wrapper sketch={sketch} />
      </div>
      <button onClick={() => setT((prev) => (prev += 1))}>click</button>
      <h1>{t}</h1>
    </div>
  );
}

function sketch(p5) {
  p5.preload = preload(p5);
  p5.setup = setup(p5);
  p5.draw = draw(p5);
  p5.mousePressed = () => mousePressed(p5);
}
function setup(p5) {
  return () => {
    p5.pixelDensity(1);
    p5.createCanvas(cw, ch, p5.WEBGL);
    // myShader = p5.createShader(vs, fs);
    myShader = p5.createShader(vs, fsMorphingGrid);
    p5.shader(myShader);

    p5.background(0, 0, 0);

    myShader.setUniform("u_resolution", [cw, ch]);
  };
}
function preload(p5) {
  // img = p5.loadImage("./colorgrid.png");
  // myShader = p5.loadShader(
  //   "./src/glsl/vertexShader.vert",
  //   // "./src/glsl/fragmentColor.frag"// basic shapes
  //   "./src/glsl/fragmentTransform.frag" // transforming shapees
  // );
}
function draw(p5) {
  return () => {
    myShader.setUniform("u_time", p5.millis() / 1000.0); // we divide millis by 1000 to convert it to seconds
    myShader.setUniform("u_mouse", [
      p5.mouseX,
      p5.map(p5.mouseY, 0, ch, ch, 0),
    ]); // we flip Y so it's oriented properly in our shader
    // myShader.setUniform("u_color", 1.0, 1.0, 0.0, 1.0);
    p5.rect(0, 0, 10, 10);
    // myShader.setUniform("u_image", img);
    // p5.noLoop();
  };
}
function mousePressed(p5) {
  console.log(p5.frameRate());
  // console.log(myShader);
}
