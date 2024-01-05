const fsTest = `
#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;
varying vec3 vPosition;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_Data[9] ;

float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}
float random2dc(vec2 coord){
    return fract(cos(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(){
    vec2 position=gl_FragCoord.xy/u_resolution.xy;
    float random1=random2d(floor(abs(sin(position))*10.0));
    float random2=random2d(floor(abs(sin(position))*20.0));
    float random3=random2dc(floor(abs(sin(position))*10.0));
    // vec3 color=vec3(random1,random2,0.0);
    vec3 color=vec3(random1,random2,random3);
    

    gl_FragColor=vec4(color ,1.0 );

}`;
export default fsTest;
