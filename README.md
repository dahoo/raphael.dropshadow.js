Adds a drop shadow filter to the svg document.

Based on [Raphael Blur Plugin](https://github.com/DmitryBaranovskiy/raphael/blob/master/plugins/raphael.blur.js)

Usage example:
--------------

Code:
    paper.addDropShadowFilter(2, 3, 3);
    ...
    element.setAttribute("class", "dropshadow");

CSS:
   .dropshadow {
       filter: url(#dropshadow);
   }