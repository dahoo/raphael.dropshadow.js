/*!
 * Raphael Drop Shadow Plugin 0.1
 *
 * by Daniel Hoffmann
 *
 * Based on Raphael Blur Plugin 0.1 by Dmitry Baranovskiy (http://raphaeljs.com)
 * https://github.com/DmitryBaranovskiy/raphael/blob/master/plugins/raphael.blur.js
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 */

(function() {
	if(!Raphael.vml) {
		var $ = function(el, attr) {
			if(attr) {
				for(var key in attr)
				if(attr.hasOwnProperty(key)) {
					el.setAttribute(key, attr[key]);
				}
			} else {
				return document.createElementNS("http://www.w3.org/2000/svg", el);
			}
		};
		Raphael.el.dropShadow = function(size, offsetX, offsetY) {
			if(size != "none") {
				var fltr = $("filter"), blur = $("feGaussianBlur"), offset = $("feOffset"), merge = $("feMerge"), mergeNodeShadow = $("feMergeNode"), mergeNodeSource = $("feMergeNode");
				fltr.id = "dropshadow";
				$(fltr, {
					height : "130%",
					width : "130%"
				});
				$(blur, {
					stdDeviation : +size
				});
				$(blur, {in: "SourceAlpha"});
				$(offset, {
					dx : offsetX,
					dy : offsetY,
					result : "offsetblur"
				});
				$(mergeNodeShadow, {in: "offsetblur"});
				$(mergeNodeSource, {in: "SourceGraphic"});
				fltr.appendChild(blur);
				fltr.appendChild(offset);
				fltr.appendChild(merge);
				merge.appendChild(mergeNodeShadow);
				merge.appendChild(mergeNodeSource);
				this.paper.defs.appendChild(fltr);
				this._blur = fltr;
				$(this.node, {
					filter : "url(#" + fltr.id + ")"
				});
			} else {
				if(this._blur) {
					this._blur.parentNode.removeChild(this._blur);
					delete this._blur;
				}
				this.node.removeAttribute("filter");
			}
			return this;
		};

		Raphael.st.dropShadow = function(size, offsetX, offsetY) {
			return this.forEach(function(el) {
				el.dropShadow(size, offsetX, offsetY);
			});
		};
	}
})();
