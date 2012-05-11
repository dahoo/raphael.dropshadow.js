Adds a drop shadow filter to the svg document.

Based on [Raphael Blur Plugin](https://github.com/DmitryBaranovskiy/raphael/blob/master/plugins/raphael.blur.js)

#Usage example:

For each element:
-----------------
Use raphael.dropshadow.js

    el.dropShadow(2, 3, 3, 0.5); // dropShadow(size, offsetX, offsetY, opacity)
    
For sets:
---------
Use raphael.dropshadow.js

    set.dropShadow(2, 3, 3, 0.5);

For styling with CSS:
---------------------
Use raphael.dropshadow.filter.js

Code:

    paper.addDropShadowFilter(2, 3, 3, 0.5);
    ...
    el.node.setAttribute("class", "dropshadow");

CSS:

    .dropshadow {
      filter: url(#dropshadow);
    }