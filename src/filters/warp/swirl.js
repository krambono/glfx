import { warpShader } from '../common';
import { simpleShader } from '../../util';
import * as store from '../../store';

/**
 * @filter        Swirl
 * @description   Warps a circular region of the image in a swirl.
 * @param centerX The x coordinate of the center of the circular region.
 * @param centerY The y coordinate of the center of the circular region.
 * @param radius  The radius of the circular region.
 * @param angle   The angle in radians that the pixels in the center of
 *                the circular region will be rotated by.
 */
export default function (centerX, centerY, radius, angle) {
  var gl = store.get('gl');
  gl.swirl =
    gl.swirl ||
    warpShader(
      '\
    uniform float radius;\
    uniform float angle;\
    uniform vec2 center;\
  ',
      '\
    coord -= center;\
    float distance = length(coord);\
    if (distance < radius) {\
      float percent = (radius - distance) / radius;\
      float theta = percent * percent * angle;\
      float s = sin(theta);\
      float c = cos(theta);\
      coord = vec2(\
        coord.x * c - coord.y * s,\
        coord.x * s + coord.y * c\
      );\
    }\
    coord += center;\
  '
    );

  simpleShader.call(this, gl.swirl, {
    radius: radius,
    center: [centerX, centerY],
    angle: angle,
    texSize: [this.width, this.height]
  });

  return this;
}
