/**
 * Point-ex for EaselJS
 * Version: 0.70
 * Contact and bug reports : http://kudox.jp/contact or http://twitter.com/u_kudox
 * License : public domain
 **/

(function(window) {
	"use strict";

	if (!createjs || !createjs.Point) {
		return;
	}

	var Point = createjs.Point;

	var p = {
		get length() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		}
	};

	var oProto = Point.prototype;
	for (var k in oProto) {
		p[k] = oProto[k];
	}
	Point.prototype = p;
	p.constructor = Point;

	/**
	* @deprecated Use `length` instead.
	**/
	p.getLength = function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	};

	p.add = function(v) {
		return new Point(this.x + v.x, this.y + v.y);
	};

	p.subtract = function(v) {
		return new Point(this.x - v.x, this.y - v.y);
	};

	p.equals = function(toCompare) {
		return this.x === toCompare.x && this.y === toCompare.y;
	};

	p.normalize = function(thickness) {
		var length = this.length;
		var scale = thickness / length;
		this.x *= scale;
		this.y *= scale;
	};

	p.offset = function(dx, dy) {
		this.x += dx;
		this.y += dy;
	};

	p.setTo = function(xa, ya) {
		this.x = xa;
		this.y = ya;
	};

	p.copyFrom = p.copy;

	Point.distance = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	};

	Point.interpolate = function(pt1, pt2, f) {
		return new Point((pt1.x - pt2.x) * f + pt2.x, (pt1.y - pt2.y) * f + pt2.y);
	};

	Point.polar = function(len, angle) {
		return new Point(Math.cos(angle) * len, Math.sin(angle) * len);
	};

}(window));
