const fsLightCircle = `
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
    vec2 translate=vec2(-0.5,-0.5);
    position+=translate;
    for(int i=0;i<20;i++){
        float radius=0.4;
        float rad=radians(360.0/20.0)*float(i);
    
        color+=0.003/length(position+vec2(radius*cos(rad),radius*sin(rad)));
    }
     
    
    gl_FragColor=vec4(color ,1.0 ); 
    
}`;
export default fsLightCircle;
