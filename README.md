no-layout-sass
==================
  It is a Sass library for you to write CSS layout easily. It's not a frame like Bootstrap or Foundation who does everything well and provides a good interface for user. It just handles some compatible problems and provides some encapsulation which helps you to write your css easily on a deeper level.

  I like Sass better than SCSS. If you can't accept this, please transform it into SCSS as you want.

  Some old browsers who support flexbox's old syntax don't suport some properties, these properties are flex-wrap, flex-flow, align-content: space-around, align-self and so on. if you want to make your pages compatible with old Android browsers or something like them, be careful to use these properties. but you can do most of the layout work with other flexbox properties.

  You can feel fress to use this library in your mobile web development. Run examples in this project to see how to use it.

### install and use
  First install no-layout-sass

    npm install no-layout-sass

  Then you can import no-layout.sass in your main sass file, just like:

    @import 'sass/no-layout.sass'

  If you don't want to use the existed classes in no-layout-sass, you can import no-layout-utilities.sass in your main sass file, then you will just get some mixins and useful placeholders in your project, such as:

    @import 'sass/no-layout-utilities.sass'

### flexbox Mixins
  Flexbox is pretty awesome and is certainly part of the future of layout. The syntax has changed quite a bit over the past few years, hence the "Old" and "New" syntax. Flexbox Mixins help you weave together the old, new, and in-between syntaxes, which can get decent browser support. (Be careful for +align-self($value) and +justify-content(space-around) in old syntax browsers)

#### Properties for the Parent (flex container)

* display: flex, +flex  //defines a flex container, it is a block element itself and enables a flex context for all its direct children.

* display: inline-flex, +inline-flex  //defines a flex container, it is a inline element itself and enables a flex context for all its direct children.

* flex-direction: value,  +flex-direction(row | row-reverse | column | column-reverse)  //This establishes the main-axis, thus defining the direction which flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

* flex-wrap: value, +flex-wrap(nowrap | wrap | wrap-reverse)  //By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property. Direction also plays a role here, determining the direction new lines are stacked in.

* flex-flow: value, +flex-flow(flex-direction || flex-wrap) //This is a shorthand flex-direction and flex-wrap properties, which together define the flex container's main and cross axes. Default is row nowrap.

* justify-content: value, +justify-content(flex-start | flex-end | center | space-between | space-arround)  //This defines the alignment along the main axis. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

* align-items: value, +align-items(flex-start | flex-end | center | baseline | stretch)  //This defines the default behaviour for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).

* align-content: value, +align-content(flex-start | flex-end | center | space-between | space-around | stretch)  //This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis. Note: this property has no effect when there is only one line of flex items.

#### Properties for the Children (flex items)

* order: value, +order(num)  //By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.

* align-self: value , +align-self(auto | flex-start | flex-end | center | baseline | strech)  //This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

* flex: value , +item-flex(num)  //This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

* flex-grow: number  //default 0, This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

* flex-shrink: number  //default 1, This defines the ability for a flex item to shrink if necessary.

* flex-basis: length | auto  //default auto, This defines the default size of an element before the remaining space is distributed. The main-size value makes it match the width or height, depending on which is relevant based on the flex-direction.

### flexbox utilities
  Some semantic capsulations help write layout easily. They are classes(.) or Sass placeholders(%) for extending. I suggest you to use @extend %XXX properly for maximizing your code reuse.

#### for the Parent (flex container)
* .flex | %flex  //defines a block flex container

* .inline-flex | %inline-flex  //defines a inline-block flex container

* .row | %row (.horizontal | %horizontal) //defines a block flex container and flex items are placed from left to right (flex items are laid out along on the current line and are packed toward to the start of the current line by default)

* .inline-row | %inline-row (.inline-horizontal | %inline-horizontal)  //defines a inline-block flex container and flex items are placed from left to right (flex items are laid out along on the current line and are packed toward to the start of the current line by default)

* .column | %column (.vertical | %vertical) //defines a block flex container and flex items are placed from top to bottom (flex items are laid out along the cross axis on the current line and are stretch to fill the container)

* .inline-column | %inline-column (.inline-vertical | %inline-vertical) //defines a inline-block flex container and flex items are placed from top to bottom (flex items are laid out along the cross axis on the current line and are stretch to fill the container)

* .reverse | %reverse //mirror layout direction

* .justify-center | %justify-center (.center-justify | %center-justify) //flex items are laid out along the current line and are centered along the current line

* .justify-end | %justify-end (.end-justify | %end-justify) //flex items are laid out along the current line and are packed toward to end of the current line

* .justify-space-around | %justify-space-around (.around-justify | %around-justify) //flex items are laid out along the current line and are evenly distributed in the current line with equal space around them

* .justify-space-between | %justify-space-between (.justifiy | %justify) //flex items are laid out along the current line and are evenly distributed in the current line; first item is on the start line, last item on the end line

* .align-start | %align-start (.start | %start) //flex items are laid out along the cross axis on the current line and are placed on the cross-start line

* .align-center | %align-center (.center | %center) //flex items are laid out along the cross axis on the current line and are placed in the cross-axis

* .align-end | %align-end (.end | %end) //flex items are laid out along the cross axis on the current line and are placed on the cross-end line

* .algin-baseline | %align-baseline (.baseline | %baseline) //flex items are laid out along the cross axis on the current line and are aligned such as their baselines align

* .wrap | %wrap  //flex items are multi-line wraped in from left to right

#### for the Children (flex items)
* .flex-1, .flex-2, ... , .flex-20 | %flex-1, %flex-2, ... , %flex-20  //If all flex items have flex-grow set to 1, every child will set to an equal size inside the container. If you were to give one of the children a value of 2, that child would take up twice as much space as the others. If you were to give one of the children a value of 1 and did nothing to others, the children who was given value 1 will take up all of the rest available space.

* .selft-start | %self-start  //This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Please see the align-items explanation to understand the available values.

* .selft-center | %self-center  //This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Please see the align-items explanation to understand the available values.

* .selft-end | %self-end  //This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items. Please see the align-items explanation to understand the available values.

### some common mixins you can use in no-layout
* +clearfix (@extend %clearfix is better)

* +abs-pos($top, $right, $bottom, $left) //absolute position

* +bg-variant($color) //hover background variant (darken 10%)

* +text-truncate (@extend %text-truncate is better)  //overflow: hidden; text-overflow: ellipsis; white-space: nowrap;

* +border-top-radius($value), +border-right-radius($value), +border-bottom-radius($value), +border-left-radius($value)

* +border-triangle($borderWidth, $borderColor, $directive)

* +device-retina //classes work for retina device (@media)

* +device-normal //classes work for normal device (@media)

* +retina-border-1px($color, $direction) //get 1px 'border' for retina device (only one border)

* +device-border-none //hide boder created by +retina-border-1px

* +font-face($fontName, $noSuffixFontUrl) //compatible font-face

### some common utilities you can use in no-layout
* .clearfix | %clearfix

* .box-sizing-border, .box-sizing-content | %box-sizing-border, %box-sizing-content

* .pull-left, .pull-right

* .hide, .show  //display: none, display: block

* .visible, .invisible  //visibility: visible, visibility: hidden

* .ul-reset | %ul-reset  //margin: 0; padding: 0; list-style: none

* .text-truncate | %text-truncate

* .text-align-center, .text-align-right, .text-align-left

* .vertical-align-middle

* %drop-back //drop back for modals or something like modal

* .mt0 ~ .mt30, .mr0 ~ .mr30, .mb0 ~ .mb30, .ml0 ~ .ml30  //the most frequently used margin (with !important)

* .pt0 ~ .pt30, .pr0 ~ .pr30, .pb0 ~ .pb30, .pl0 ~ .pl30  //the most frequently used padding (with !important)

* .fs10 ~ .fs48  //the most frequently used font size (with !important)


### css3 compatiable mixins you can use in no-layout
* +transform($value)

* +transform-origin($value)

* +animation($value)

* +animation-timing-function($value)

* +keyframes($name)  //refer to 'mixins/css3.sass'

* +box-sizing($value) (@extend %box-sizing-border and %box-sizing-content is better)

* +box-shadow($param)

* +placeholder($color)

* +user-select($model: text)

* +backface-visibility($value: visible)

* +perspective($value: none)

* +perspective-origin($origin: 50% 50%)

* +opacity($opacity)

* +background-size($size)

* +background-origin($model: border-box)

* +background-clip($model: border-box)

* +radial-gradient($arguments)

* +linear-gradient($arguments)


depen on
===================
* node
* gulp
* gulp-sass
* no-layout.sass

command
==================
* npm install
* gulp

compatible
=================
* IE10 +
* Chrome 22+
* Sarify 3.1+
* IOS Sarify 3.2+
* Android Browser 2.1+
* for Android Browser 2.0 ~ 4.2, Just be careful for using +align-self($value) and +align-content(around-space)

reference
================
visit these websites for more infomation
* http://www.w3.org/TR/css3-flexbox/
* http://blog.rainjay.wang/no-layout-sass-flexbox/
* http://blog.rainjay.wang/no-layout-sasss-common/
* http://www.w3cplus.com/preprocessor/sass-bring-change.html
* https://github.com/sass/node-sass
for reference.
