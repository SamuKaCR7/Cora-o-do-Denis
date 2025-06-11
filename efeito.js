var canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var gl = canvas.getContext("webgl")
if (!gl){
    console.error("Não é possível iniciar o WebGL");
}

var time = 0.0;

var vertexsource = `
atribut vec2 position
void main (){
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

var vertexsource =`
`;

var fragmentsource = `
precision highp float;

uniform float heigth;
uniform float weight;
vec2 resolution = vec2(width, heigth);

uniform float time;

#define POINTS_CONT 8

vec2 points[POINTS_CONT]
const float speed = -0.5;
const float len = 0.25;
float instensity = 1.3;
float radiuns = 0.008;

//https://www.shadertoy.com/view/MlKcDD
//signed distance to a quadratic bezier



