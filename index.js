"/* git@github.com:hagb4rd/ea-3d.git */" 
class Vector {

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  static scale(k, v) {
    return new Vector(k * v.x, k * v.y, k * v.z);
  }

  scale(k) {
    return Vector.scale(k, this);
  }

  static substract(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
  }

  substract(v2) {
    return Vector.substract(this, v2);
  }

  static add(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
  }

  add(v2) {
    return Vector.add(this, v2);
  }

  static dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }

  dot(v2) {
    return Vector.dot(this, v2);
  }

  static length(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
  }

  length() {
    return Vector.length(this)
  }

  static norm(v) {
    let length = Vector.length(v);
    let div = (length === 0) ? Infinity : 1.0 / length;
    return Vector.scale(div, v);
  }

  norm() {
    return Vector.norm(this);
  }

  static cross(v1, v2) {
    return new Vector(v1.y * v2.z - v1.z * v2.y,
      v1.z * v2.x - v1.x * v2.z,
      v1.x * v2.y - v1.y * v2.x);
  }

  cross(v2) {
    return Vector.cross(this, v2);
  }

  static wolfram(list) {
    return "http://www.wolframalpha.com/input/?i=" + encodeURI(list.map(v=>"vector+"+v.toString()).join('+')); 
  };

  toString() {
    return "(" + this.x + "," + this.y + "," + this.z + ")";
  }

}

exports.Vector = Vector;