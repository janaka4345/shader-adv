#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform sampler2D u_image;
uniform vec4 u_color;

varying vec2 vTexCoord;
float circle(vec2 position,float radius){
    vec2 mouse=u_mouse.xy/u_resolution.xy;
    return step(radius,length(position-mouse) );
}


void main(){
    vec2 position=gl_FragCoord.xy/u_resolution.xy;
    float color=circle(position,0.2);
 gl_FragColor=vec4(color,0.0 ,0.0 ,1.0 );  
}