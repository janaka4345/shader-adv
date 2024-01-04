const fs = `
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;


float circle(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}
float rectangle(vec2 position, vec2 scale){
    scale = vec2(0.5) - scale * 0.5;
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
    return shaper.x * shaper.y;
}

void main(){
    vec2 position=gl_FragCoord.xy/u_resolution.xy;
    vec2 translate=vec2( sin(u_time)*0.5,cos(u_time)*0.5 );
    vec2 pos=position+translate;

    float color=circle(vec2(pos),0.2);
    // float color =rectangle(pos,vec2(0.3,0.3));
    gl_FragColor=vec4(1.0-color,0.0 ,0.0 ,1.0 );  
}
`;
export default fs;
