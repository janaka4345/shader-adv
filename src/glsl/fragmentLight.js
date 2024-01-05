const fsLight = `
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main(){
    vec2 position=(gl_FragCoord.xy*2.0-u_resolution.xy)/min(gl_FragCoord.x,gl_FragCoord.y);
     position.x+=sin(u_time)+cos(u_time*2.1);
     position.y+=cos(u_time)+sin(u_time*1.6);
    float color=0.0;
    color+=(0.1*abs(sin(u_time))+0.1)/length(position);
    
    gl_FragColor=vec4(vec3(color) ,1.0 ); 
    
}`;
export default fsLight;
