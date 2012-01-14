Adds a drop shadow filter to the svg document.

Based on [Raphael Blur Plugin](https://github.com/DmitryBaranovskiy/raphael/blob/master/plugins/raphael.blur.js)

Usage example:
--------------

#For each element:

    el.dropShadow(2, 3, 3);

#For styling with CSS:
Code:

    paper.addDropShadowFilter(2, 3, 3);
    ...
    el.setAttribute("class", "dropshadow");

CSS:

    .dropshadow {
      filter: url(#dropshadow);
    }