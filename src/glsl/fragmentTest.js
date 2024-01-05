const fsTest = `
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_Data[9] ;

void main(){
    vec2 position=gl_FragCoord.xy/u_resolution.xy;
    vec3 color=vec3(0.0,0.0,0.0);
    color.r=u_Data[0];
  

    gl_FragColor=vec4(color ,1.0 ); 
    
}`;
export default fsTest;
