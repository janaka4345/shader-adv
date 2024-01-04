const fsRainbow = `
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

void main(){
    vec2 position=6.0*gl_FragCoord.xy/u_resolution.xy;//zoom in out with multiplier

    for(int i=1;i<8;i++){
        float j=float(i);
        position+=vec2(0.7/j*sin(j*position.y+u_time+0.3*j)+0.8,0.4/j*sin(position.x+u_time+0.3*j)+1.6);
    }

    vec3 color=vec3(0.5*sin(position.x)+0.5,0.5*sin(position.y)+0.5,sin(position.x+position.y));
    
    gl_FragColor=vec4(color ,1.0 ); 
    
}`;
export default fsRainbow;
