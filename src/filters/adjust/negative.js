import Shader from '../../shader';
import * as store from '../../store';
import { simpleShader } from '../../util';

/**
 * @filter          Negative
 * @description     Apply a negative filter
 */
export default function () {
  var gl = store.get('gl');
  gl.negative =
    gl.negative ||
    new Shader(
      null,
      '\
    uniform sampler2D texture;\
    varying vec2 texCoord;\
    void main() {\
      vec4 color = texture2D(texture, texCoord);\
      gl_FragColor = vec4(1.0 - color.r, 1.0 - color.g, 1.0 - color.b, 1);\
    }\
  '
    );

  simpleShader.call(this, gl.negative, {});

  return this;
}
