/**
 * Create a transform stream that converts a stream
 * to valid `data: <value>\n\n' events for SSE.
 */

import stream from 'stream';
import util from 'util';

export default SSE;

util.inherits(SSE, stream.Transform);

function SSE(options) {
  if (!(this instanceof SSE)) return new SSE(options);

  options = options || {};
  stream.Transform.call(this, options);
}

SSE.prototype._transform = function(data, enc, cb) {
  this.push('data: ' + data.toString('utf8') + '\n\n');
  cb();
};