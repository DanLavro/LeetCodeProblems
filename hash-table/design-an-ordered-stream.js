var OrderedStream = function (n) {
  this.stream = new Array(n).fill(null);
  this.ptr = 0;
};

// O(1)
OrderedStream.prototype.insert = function (idKey, value) {
  this.stream[idKey - 1] = value;

  let chunk = [];

  if (idKey - 1 === this.ptr) {
    while (this.ptr < this.stream.length && this.stream[this.ptr] !== null) {
      chunk.push(this.stream[this.ptr]);
      this.ptr++;
    }
  }

  return chunk;
};
