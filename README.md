jquery.morelines
==============

What is this?
-------------
`.moreLines()` morelines.js is a small jQuery plugin to create a Read More button to expand a long block of text content shrunk by various lines. The overflowing text fades out at the bottom and has a custom "Read More" link. [view a demo][1] on [codepen.io][1].

[1]: https://codepen.io/tsurule/pen/aGdBzb


How do I use it?
----------------

Add the following HTML structure:
```html
<div class="b-category_page-description">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
</div>
```
And then initialise the plugin:

	$('.b-category_page-description').moreLines();

You can customise with the following options:

	$('.b-category_page-description').moreLines({
		linecount: 3,                   	// force moreLines after a certain number of lines. Default is 'auto' auto = 1
		baseclass: 'b-category_page',   	// define your custom first part of class name for your CSS, for example 'b-category_page'
		basejsclass: 'js-category_page',	// define your custom first part of class name for js manipulation if needed
		classspecific: '-description',  	// specify you class name, for example '-description' - it will combine with baseclass and transform to 'b-category_page-description'
		buttontxtmore: "read more",     	// Add your inner text for button
		buttontxtless: "read less",     	// Add your inner text for button
		animationspeed: 250             	// Type your custom speed animation, by defaul is 'auto' auto = 1
	});
