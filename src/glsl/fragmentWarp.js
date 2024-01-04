const fsWarp = `
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main(){
    vec2 position=gl_FragCoord.xy/u_resolution.xy;
    vec3 color=vec3(0.0);
    color+=sin(position.x*cos(u_time/30.0)*60.0)+sin(position.y*cos(u_time/30.0)*60.0);
    color+=cos(position.x*sin(u_time/30.0)*60.0)+cos(position.y*sin(u_time/30.0)*60.0);
    // color+=cos(position.x*sin(u_time/30.0)*60.0)+cos(position.y*sin(u_time/30.0)*60.0);//uncomment and change sin cosine to see different patterns
    // color+=cos(position.x*sin(u_time/30.0)*60.0)+cos(position.y*sin(u_time/30.0)*60.0);
    // color+=cos(position.x*sin(u_time/30.0)*60.0)+cos(position.y*sin(u_time/30.0)*60.0);
    
    gl_FragColor=vec4(color ,1.0 ); 
    
}`;
export default fsWarp;
