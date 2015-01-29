no-layout
==================
  It is a Sass library for you to write CSS layout easily. It's not a library like Bootstrap or Foundation. It just helps you to write your css easily on a deeper level.
  It is based on flexbox, go to http://www.w3.org/TR/css3-flexbox/ for reference.
  You can also run examples in this project for study.

### use directory

  Please import no-layout.sass in your main sass file, just like:

    @import 'assets/css/no-layout/no-layout.sass'

### flexbox Mixins

  flexbox历史上三种标准草案导致世面上流通的浏览器三种实现的兼容性问题，mixins/flex.sass 正是为了解决这个问题。(align-selft在旧版本浏览器中不支持，做移动端开发时慎用)以下是用法介绍：

* display: flex ，+flex  设置容器为flexbox布局环境(IE9行内元素需要设置display:block先)。

* display: inline-flex ,  +inline-flex 设置容器为inline-block布局环境。

* flex-direction: value ,  +flex-direction( row | row-reverse | column | column-reverse ) 设置容器内子元素水平或者垂直排列。

* flex-wrap: value , +flex-wrap( nowrap | wrap | wrap-reverse ) 设置容器是单行还是多行，也决定了侧轴方向新的一行d的排列方向。

* flex-flow: value ,  +flex-flow( <flex-direction> || <flex-wrap> )  设置容器子元素排列方向以及盒子溢出父容器时是否换行。

* justify-content: value ,  +justify-content( flex-start | flex-end | center | space-between | space-arround ) 设置容器内子元素在水平方向上的对齐方式。

* align-items: value ,  +align-items(flex-start | flex-end | center | baseline | stretch) 设置容器内所有子元素在垂直方向上的对齐方式。

* align-content: value,  +align-content(flex-start | flex-end | center | space-between | space-around | stretch)  设置子元素的与容器内所有子元素堆叠方向垂直方向上伸缩的对齐方式。

* order: value , +order(num)  设置容器内子元素的出现顺序。

* align-self: value , +align-self(auto | flex-start | flex-end | center | baseline | strech)  设置子元素独立在垂直方向上的对齐方式。

* item-flex: value , +item-flex(num) 设置容器内子元素如何分配空间。

### flexbox utilities

  语义化定义布局方法，既可以作为单独的布局类(.)使用，也可以作为作为其他布局容器extend的占位符(%)
* .flex | %flex 设置容器为flexbox布局环境

* .horizontal | %horizontal 设置容器为flexbox布局环境，且子元素水平布局

* .vertical | %vertical 设置容器为flexbox布局环境，且子元素垂直布局

* .flex-1, .flex-2, ... , .flex-20 | %flex-1, %flex-2, ... , %flex-20，设置flexbox容器内子元素所占水平或者垂直的百分比

* .start | %start ，设置子元素在flexbox容器里与子元素堆叠方向垂直的方向上向左或者向上堆叠

* .center | %center，设置子元素在flexbox容器与子元素堆叠方向的垂直方向上居中堆叠

* .end | %end，设置子元素在flexbox容器中与子元素堆叠方向的垂直方向上向右或者向下堆叠

* .start-justified | %start-justified，设置子元素在flexbox容器里与子元素堆叠方向同向上向左或向上堆叠

* .center-justified | %start-justified， 设置子元素在flexbox容器里与子元素堆叠方向同向上居中堆叠

* .end-justified | %end-justified，设置子元素在flexbox容器里与子元素堆叠方向同向上向右或者向下堆叠

* .around-justified | %.around-justified，设置子元素在flexbox容器里与子元素堆叠方向同向上水平均匀摊开

* .justified | %justified，设置子元素在flexbox容器里与子元素堆叠方向同向上两端对齐，中间均匀摊开

* .selft-start | %self-start，设置单独一个子元素自身在flexbox容器里与堆叠方向垂直方向上向上或者向左靠近边缘

* .selft-center | %self-center，设置单独一个子元素自身在flexbox容器里与堆叠方向垂直方向上居中

* .selft-end | %self-end，设置单独一个子元素自身在flexbox容器里与堆叠方向垂直方向上向右或者向下靠近边缘

* .self-stretch | %self-stretch，设置单独一个子元素自身flexbox容器里与堆叠方向垂直方向上伸展开靠近左右或者上下边缘

* .wrap | %wrap， 可以设置容器内元素超过容器容纳范围时换行

### some common mixins you can use in no-layout
* 清除浮动： +clearfix (建议@extend %clearfix)

* hover改变背景色的元素，比如button,tabs等，默认加深原始颜色百分之十： +bg-variant($color)

* 文字超过容器长度时隐藏超出部分，并以省略号结尾：+text-overflow (建议@extend %text-overflow)
* 修改边框圆角：+border-top-radius($value)，+border-right-radius($value) ，+border-bottom-radius($value)，+border-left-radius($value)

* css实现三角：+border-triangle($borderWidth, $borderColor, $directive)

* retina屏幕下背景图片兼容问题：+background-retina($img_1x, $img_2x, $width_1x, $height_2x)，$img_1x为普通屏幕下背景图片的url地址，$img_2x为retina屏幕下背景图片url地址

* font-face兼容问题： +font-face($fontName, $noSuffixFontUrl)

### some common utilities you can use in no-layout
* 清除浮动  .clearfix   %clearfix

* 设置盒子模型 .box-sizing-border，.box-sizing-content，%box-sizing-border，%box-sizing-content

* 向左向右浮动 .pull-left，.pull-right

* 显示或者隐藏（从DOM中清除）.hide， .show

* 可见或不可见（依旧在DOM中占用空间） .visible， .invisible

* 重置ul  .ul-reset，%ul-reset

* 文字超过容器长度时隐藏超出部分，并以省略号结尾 .text-overflow，%text-overflow

* 内容水平居中 .text-align-center，%text-align-center

* 内容之间垂直居中 .vertical-align-middle，%vertical-align-middle

* 常用的外边距（已添加!important）上外边距：.mt0 ~ .mt30，右外边距：.mr0 ~ .mr30，下外边距：.mb0 ~ .mb30，左外边距：.ml0 ~ .ml30

* 常用的内边距（已添加!important）上内边距：.pt0 ~ .pt30，右内边距：.pr0 ~ .pr30，下内边距：.pb0 ~ .pb30，左内边距：.pl0 ~ .pl30

### css3 compatiable mixins you can use in no-layout
* +transform($value)

* +transform-origin($value)

* +animation($value)

* +animation-timing-function($value)

* +keyframes($name)  //详细请见‘mixins/css3.sass’文件

* +box-sizing($value) (建议使用@extend %box-sizing-border 或 %box-sizing-content)

* +box-shadow($param)

* +placeholder($color)

* +user-select($model: text)

* +backface-visibility($value: visible)

* +appearance($value)

* +perspective($value: none)

* +perspective-origin($origin: 50% 50%)

* +opacity($opacity)

* +grayscale (建议@extend %grayscale)

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
* Chrome 22+ (低版本可能需要将行内元素设置display:block)
* Sarify 3.1+
* IOS Sarify 3.2+
* Android Browser 2.1+ (低版本可能需要将行内元素设置display:block)
* Android Browser 2.0 ~ 4.2   谨慎使用+align-self($value) 和 +align-content(around-space)

visit these websites for more infomation
* http://no-layout.diandian.com/post/des
* http://no-layout.diandian.com/post/utilities
* http://www.w3cplus.com/preprocessor/sass-bring-change.html
* https://github.com/sass/node-sass



