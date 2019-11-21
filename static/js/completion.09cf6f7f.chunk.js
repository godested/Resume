(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{65:function(e,n,t){e.exports={Background:"_63d26"}},66:function(e,n,t){e.exports={Section:"b1a97",Container:"_0951c",Heading:"d6a15",Title:"c306e"}},69:function(e,n,t){"use strict";t.r(n);var i=t(0),r=t.n(i),a=t(27),o=t(29),c=t(28),s=t(31),l=t(25),g=t(23);var u=t(56),v=t(67),d=t(68),f=t(64),m=t(58),h=t(61),x=t(63),y=t(60),z=t(62),p=function(e){function n(e,t){var i;return Object(m.a)(this,n),(i=Object(x.a)(this,Object(y.a)(n).call(this))).renderer=void 0,i.cameraAspect=void 0,i.camera=void 0,i.renderer=new u.r({alpha:!0,antialias:!0}),i.renderer.setSize(e,t),i.cameraAspect=e/(2.5*t),i.camera=new u.i(55,i.cameraAspect,1,2e3),i.camera.position.z=50,i}return Object(z.a)(n,e),Object(h.a)(n,[{key:"render",value:function(){this.renderer.autoClearColor=!0,this.renderer.render(this,this.camera)}},{key:"resize",value:function(e,n){this.camera.aspect=this.cameraAspect,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}}]),n}(u.m),w='\nprecision highp float;\n\nuniform float\t  u_amplitude;\nuniform float \tu_frequency;\nuniform float   u_time;\n//\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r) {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P) {\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nvoid main() {\n    float displacement = u_amplitude * cnoise( u_frequency * position + u_time );\n\n    vec3 newPosition = position + normal * displacement;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );\n}\n',P="\nprecision highp float;\n\nuniform vec2 u_resolution;\n\nvoid main() {\n    vec2 p = gl_FragCoord.xy / u_resolution.xy - .4;\n    vec3 color1 = vec3(0.94,0.017,0.796);\n    vec3 color2 = vec3(0.384,0.015,0.749);\n\n    vec3 col = mix(color1, color2, p.y);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n",_=function(){function e(n){Object(m.a)(this,e),this.uniforms=void 0,this.geometry=void 0,this.material=void 0,this.mesh=void 0,this.slowingSpeed=void 0,this.uniforms={u_amplitude:{value:n.amplitude},u_frequency:{value:n.frequency},u_resolution:{value:n.resolution},u_time:{value:0}},this.geometry=new u.j(n.sizeX,n.sizeY,n.segmentsX,n.segmentsY),this.material=new u.n({uniforms:this.uniforms,vertexShader:w,fragmentShader:P,side:u.c,wireframe:!0}),this.slowingSpeed=n.slowingSpeed,this.mesh=new u.g(this.geometry,this.material),this.mesh.rotation.x=360}return Object(h.a)(e,[{key:"update",value:function(e,n){this.uniforms.u_time.value+=e/this.slowingSpeed,this.uniforms.u_resolution.value=n}}]),e}(),b=250,S=150,E=190,j=100,O=10,H=.05,L=4600;var C=t(65),q=t.n(C);function A(){var e=Object(i.useRef)(null),n=function(){var e=Object(i.useState)({width:window.innerWidth,height:window.innerHeight}),n=Object(g.a)(e,2),t=n[0],r=n[1];return Object(i.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}().height,t=function(){var e=Object(i.useState)(0),n=Object(g.a)(e,2),t=n[0],r=n[1];return Object(i.useEffect)((function(){function e(){r(window.scrollY)}return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),t}();Object(i.useEffect)((function(){var n=function(e){var n,t,i,r,a,o=0,c=Date.now();function s(){n.setSize(e.clientWidth,e.clientHeight),t.setSize(e.clientWidth,e.clientHeight),a.update(o,[e.clientWidth,e.clientHeight])}return{init:function(){(n=new u.r({alpha:!0})).setSize(e.clientWidth,e.clientHeight),n.setPixelRatio(window.devicePixelRatio),t=new v.a(n),r=new p(e.clientWidth,e.clientHeight),a=new _({resolution:[e.clientWidth,e.clientHeight],amplitude:O,frequency:H,sizeX:b,sizeY:S,segmentsX:E,segmentsY:j,slowingSpeed:L}),r.add(a.mesh),t.addPass(new f.a(r,r.camera)),i=new d.a,t.addPass(i),e.appendChild(n.domElement),window.addEventListener("resize",s,!1)},animate:function n(){requestAnimationFrame(n),o=Date.now()-c,c=Date.now(),a.update(o,[e.clientWidth,e.clientHeight]),t.render(o)},removeEventListeners:function(){window.removeEventListener("resize",s)}}}(e.current),t=n.init,i=n.animate,r=n.removeEventListeners;return t(),i(),function(){r()}}),[]);var a=Math.max((n-t)/n,0);return r.a.createElement("div",{style:{opacity:a},className:q.a.Background,ref:e})}var W=t(66),k=t.n(W);function I(){var e=Object(l.b)(),n=e.lastname,t=e.firstname,i=e.profession,a="".concat(n," ").concat(t);return r.a.createElement("div",{className:k.a.Section},r.a.createElement(A,null),r.a.createElement(o.a,{className:k.a.Container},r.a.createElement(c.a,{font:"secondary",variant:"heading",weight:"regular",align:"center",component:"h1",marginBottom:"sm",uppercase:!0,className:k.a.Heading},r.a.createElement(s.a,null,a)),r.a.createElement(c.a,{variant:"title",align:"center",uppercase:!0,weight:"regular",className:k.a.Title},i)))}function M(){return r.a.createElement(a.a,{title:"Home"},r.a.createElement(I,null))}t.d(n,"default",(function(){return M}))}}]);
//# sourceMappingURL=completion.09cf6f7f.chunk.js.map