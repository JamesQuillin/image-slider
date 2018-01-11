# Image Slider
A simple, lightweight, and responsive image slideshow made with vanilla CSS and JS.

To run just download and open the html sample page in a browser. To use with your own code:

- add the appropriate classes and IDs to your markup like with the sample (.image-slider and #slider-button-left / #slider-button-right)

- set your images after the first one to display as 'none' by default initially (this is taken care of in the inline style tag in the sample html page though you could add this to the css file)

- edit your references to the images in the js file (lines 1-6)

Works well for common image sizes (640x480, 1258x720, etc.) but may have some problems with either really small images (as it is set not to distort any images) or really tall ones (as the slideshow was designed for your typical portrait-type photos).