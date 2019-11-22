export default `
precision highp float;

uniform vec2 u_resolution;

void main() {
    vec2 p = gl_FragCoord.xy / u_resolution.xy - .4;
    vec3 color1 = vec3(0.94,0.017,0.796);
    vec3 color2 = vec3(0.384,0.015,0.749);

    vec3 col = mix(color1, color2, p.y);

    gl_FragColor = vec4(col, 1.0);
}
`;
