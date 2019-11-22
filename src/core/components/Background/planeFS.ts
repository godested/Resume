export default `
precision highp float;

uniform vec2 u_resolution;

void main() {
    vec2 p = gl_FragCoord.xy / u_resolution.xy - .6;
    vec3 color1 = vec3(1,0,0);
    vec3 color2 = vec3(0,0,1);

    vec3 col = mix(color1, color2, p.y);

    gl_FragColor = vec4(col, 1.0);
}
`;
