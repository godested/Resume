export default `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 p = gl_FragCoord.xy / u_resolution.xy;
    vec3 color1 = vec3(.845,0,0.2);
    vec3 color2 = vec3(0.2,0,.853);

    vec3 gradient = mix(color1, color2, (p.y * p.x / 2.0) - (cos(u_time) / 3.0));

    vec3 col = vec3(gradient);

    gl_FragColor = vec4(col, 1.0);
}
`;
