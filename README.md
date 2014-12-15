no-layout
==================
  a SASS library for you to write CSS layout easily.

### flexbox Mixins

  flexbox历史上三种标准草案导致世面上流通的浏览器三种实现的兼容性问题，flexbox Mixins正是为了解决这个问题。以下是用法介绍：

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

* .horizontal | %horizontal 设置容器为flexbox布局环境，且子元素水平布局
* .vertical | %vertical 设置容器为flexbox布局环境，且子元素垂直布局

* .flex-1, .flex-2, ... , .flex-20 | %flex-1, %flex-2, ... , %flex-20，设置flexbox容器内子元素所占水平或者垂直的百分比
* .start | %start ，设置子元素在垂直方向上贴近flexbox容器上边缘

* .center | %center，设置子元素在flexbox容器垂直方向上居中

* .end | %end，设置子元素贴近flexbox容器垂直方向上下边缘

* .start-justified | %start-justified，设置子元素在flexbox容器里水平向左堆叠

* .center-justified | %start-justified， 设置子元素在flexbox容器里水平居中堆叠

* .end-justified | %end-justified，设置子元素在flexbox容器里水平向右堆叠

* .around-justified | %.around-justified，设置子元素在flexbox容器里水平均匀摊开

* .justified | %justified，设置子元素在flexbox容器里水平两端对齐，中间均匀摊开

* .wrap | %wrap， 可以设置容器内元素超过容器容纳范围时换行


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
