const fsMorphingGrid = `
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main(){
    vec2 position=gl_FragCoord.xy*1.0-u_resolution.xy;
    vec3 color=vec3(0.0);
   
    color+=abs(cos(position.x/20.0)+sin(position.y/20.0)-cos(u_time));
    // color+=cos(position.x/20.0)-sin(u_time);
     
    
    gl_FragColor=vec4(color ,1.0 ); 
    
}`;
export default fsMorphingGrid;
