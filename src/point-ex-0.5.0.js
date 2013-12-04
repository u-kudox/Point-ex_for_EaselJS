/**
 * Point-ex for EaselJS
 * Version: 0.50
 * Contact and bug reports : http://kudox.jp/contact or http://twitter.com/u_kudox
 * License : public domain
 **/

(function(window) {
	if (!createjs || !createjs.Point) {
		return;
	}

	var p = createjs.Point.prototype;

	p.getLength = function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	};

	p.add = function(v) {
		return new createjs.Point(this.x + v.x, this.y + v.y);
	};

	p.subtract = function(v) {
		return new createjs.Point(this.x - v.x, this.y - v.y);
	};

	p.equals = function(toCompare) {
		return this.x === toCompare.x && this.y === toCompare.y;
	};

	p.normalize = function(thickness) {
		var length = this.getLength();
		var scale = thickness / length;
		this.x *= scale;
		this.y *= scale;
	};

	p.offset = function(dx, dy) {
		this.x += dx;
		this.y += dy;
	};

	createjs.Point.distance = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	};

	createjs.Point.interpolate = function(pt1, pt2, f) {
		return new createjs.Point((pt1.x - pt2.x) * f + pt2.x, (pt1.y - pt2.y) * f + pt2.y);
	};

	createjs.Point.polar = function(len, angle) {
		return new createjs.Point(Math.cos(angle) * len, Math.sin(angle) * len);
	};

}(window));
