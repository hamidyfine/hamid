---
title: 'A Complete Guide to Flexbox: Understanding and Implementing CSS Flexbox - Part 1'
metaTitle: 'CSS Flexbox: A Comprehensive Guide for Web Developers'
metaDesc: 'Learn everything you need to know about CSS flexbox, a powerful tool for creating flexible and responsive layouts on the web. This comprehensive guide covers the basics of flexbox, its properties and values, and how to use it in your web development projects.'
excerpt: 'CSS flexbox is a powerful tool for creating flexible and responsive layouts on the web. With flexbox, you can easily align and distribute elements within a container, regardless of their size or content.'
coverImage: 
socialImage: 
date: '2023/04/22'
update:
tags: sass,scss,css,flexbox
category: 
readingTime: 
---

Flexbox is a powerful layout module in CSS that provides a flexible and dynamic way to arrange elements within a container. It is particularly useful when it comes to building responsive and adaptive layouts that can adjust to different screen sizes and device orientations.

With Flexbox, you can control the size, position, and alignment of your layout elements in a much more intuitive way than with traditional CSS positioning techniques. Instead of relying on absolute or relative positioning, which can be difficult to manage and prone to breaking, Flexbox offers a simplified approach to layout design that is based on the concept of a flexible container and flexible items.

Flexbox offers a wide range of features and options. You can use it to control the order in which items are displayed, to align items along a main or cross axis, to distribute space between items, and much more.

## Flexbox vs Grid

While both Flexbox and Grid are layout systems in CSS, they will be used for different purposes.

**Flexbox** is designed to provide a flexible and dynamic way to arrange elements within a container. It works best for one-dimensional layouts, such as menus, navigation bars, and forms, where you need to control the flow of items along a single axis (either horizontally or vertically). Flexbox is great for handling small-scale layouts and making sure that items are evenly spaced, aligned, and sized based on their content.

On the other hand, **Grid** is a two-dimensional layout system that enables you to create complex and responsive grids of rows and columns. Unlike Flexbox, Grid allows you to control both the row and column dimensions of your layout, and to create dynamic grid structures that can adjust to different screen sizes and content. CSS Grid is especially useful for large-scale layouts, such as web pages, dashboards, and data visualizations, where you need to arrange items in a more complex and structured way.

## Terminology

When elements are laid out as flex items, they are laid out along two axes:

![flex_terms.png](/posts/flexbox-ultimate-guide/flex-terms.png)

- The **main axis** is the axis running in the direction the flex items are laid out (for example, as a row across the page, or a column down the page.) The start and end of this axis are called the **main start** and **main end**.
- The **cross axis** is the axis running perpendicular to the direction the flex items are laid out in. The start and end of this axis are called the **cross start** and **cross end**.
- The parent element that has `display: flex` set on it is called the **flex container**.
- The items laid out as flexible boxes inside the flex container are called **flex items** (we call them boxes in this post).

Keep in mind this vocabulary as you proceed through the following sections. If you encounter any unfamiliar terms, you can refer back to it as a point of reference to help you understand the concepts better.

*Source: [MDN Doc](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)*

## Playground

In this post, I cover the basics of Flexbox and how to use it to create modern, dynamic web layouts. To truly understand and master Flexbox, however, you'll need to dive in and get your hands dirty. That's why I encourage you to use the [playground](https://flexbox-seven.vercel.app/) I've created to experiment with different Flexbox properties and see firsthand how they affect your layout. By testing out the concepts you learn in this post using the [playground](https://flexbox-seven.vercel.app/), you'll be able to solidify your understanding of Flexbox and develop the skills you need to create visually stunning websites.

Visit [Interactive Flexbox Playground](https://flexbox-seven.vercel.app/) to see how Flexbox works in real world! :)

## Container Properties

These properties should be added to the container element which has `display: flex` :

### display

It enables `flex` context for all its direct children.

```scss {2}
.container {
    display: flex;
}
```

It's important to note that this property will only affect the direct children of the element. The children of the children will not be impacted.

### flex-direction

`flex-direction` property determines the direction in which the flex container arranges its items. It specifies whether the items should be arranged in a row (horizontally) or in a column (vertically), as well as their order.

```scss {3}
.container {
    display: flex;
    flex-direction: row;
}
```

![flex-direction-row.jpg](/posts/flexbox-ultimate-guide/flex-direction-row.jpg)

```scss {3}
.container {
    display: flex;
    flex-direction: column;
}
```

![flex-direction-column.jpg](/posts/flexbox-ultimate-guide/flex-direction-column.jpg)

#### Values

- **row (default)** arranges items horizontally from left to right in LTR and right to left in RTL.
- **row-reverse** is same as `raw` but arranges them in the opposite direction.
- **column** arranges items vertically from top to bottom in LTR and bottom to top in RTL.
- **column-reverse** is same as `column` but  arranges them in the opposite direction.

### flex-wrap

`flex-wrap` controls whether the flex items should be forced to stay on a single line or if they can wrap onto multiple lines within the flex container. It specifies how the flex container should behave when the items exceed the available space in their container.

```scss {3}
.container {
    display: flex;
    flex-wrap: wrap;
}
```

![flex-wrap-wrap.jpg](/posts/flexbox-ultimate-guide/flex-wrap-wrap.jpg)

#### Values

- **nowrap (default)** forces all flex items to remain on a single line.
- **wrap** allows the items to wrap onto multiple lines if needed.
- **wrap-reverse** is similar to `wrap` but reverses the order of the wrapped lines.

### flex-flow

`flex-flow` is a shorthand CSS property that combines `flex-direction` and `flex-wrap`. It provides a convenient way to set both properties at once, allowing you to control the direction and wrapping behavior of your flex items with a single line of code.

```scss {3}
.container {
    display: flex;
    flex-flow: row wrap; // [flex-direction] [flex-wra]
}
```

The `flex-flow` property accepts two values. The first value is for `flex-direction`, and the second value is for `flex-wrap`. For example, the value `row wrap` sets the `flex-direction` to `row` and the `flex-wrap` to `wrap`.

### justify-content

`justify-content` controls how flex items are positioned along the main axis of the their container, horizontal axis in a row layout or vertical axis in a column layout. It determines the distribution of space between and around the flex items, and can be used to center or align them within the container.

```scss {3}
.container {
    display: flex;
    justify-content: space-between;
}
```

![justify-content-between.jpg](/posts/flexbox-ultimate-guide/justify-content-between.jpg)

#### Values

- **center** aligns them to the center of the main axis.
- **flex-start (default)** aligns the items to the start of the main axis.
- **flex-end** aligns them to the end of the main axis.
- **space-between** distributes the items along the main axis, with the first item at the start and the last item at the end and add space between the them.
- **space-around** distributes the items along the main axis with equal spacing before, between, and after them.
- **space-evenly** distributes the items along the main axis with equal space around them.

### align-items

`align-items` determines how flex items are positioned along the cross axis of their container, vertical axis in a row layout or horizontal axis in a column layout. It specifies the alignment of items within the container, and can be used to center or align them vertically or horizontally.

```scss {3}
.container {
    display: flex;
    align-items: center;
}
```

![align-items-center.jpg](/posts/flexbox-ultimate-guide/align-items-center.jpg)

#### Values

- **center** aligns them to the center of the cross axis.
- **stretch (default)** stretches the items to fill the entire height of the container.
- **flex-start** aligns them to the start of the cross axis.
- **flex-end** aligns them to the end of the cross axis.
- **baseline** aligns them so that their baselines align with each other.

### align-content

`align-content` determines how the flex container aligns its items along the cross axis (vertical axis in a row layout or horizontal axis in a column layout) when there is extra space available. It specifies the alignment of the entire flex container within its parent container.

```scss {3}
.container {
    display: flex;
    align-content: flex-end;
}
```

![align-content-end.jpg](/posts/flexbox-ultimate-guide/align-content-end.jpg)

#### Values

- **center** aligns the container to the center of the cross axis.
- **stretch (default)** stretches the container to fill the entire height of its parent container.
- **flex-start** aligns the container to the start of the cross axis.
- **flex-end** aligns the container to the start of the cross axis.
- **space-between** distributes the items along the cross axis, with the first item at the start and the last item at the end and add space between the them.
- **space-around** distributes the items along the cross axis with equal spacing before, between, and after them.

### place-content

`place-content` property allows us to align both the main axis and cross axis of the flex container at the same time. This property combines the functionalities of `justify-content` and `align-content` into a single shorthand property. 

```scss {3}
.container {
    display: flex;
    place-content: center flex-start; // [align-content] [justify-content]
}
```

The `place-content` property accepts two values. The first value is for `align-content`, and the second value is for `justify-content`. For example, the value `center flex-start` sets the `align-content` to `center` and the `justify-content` to `flex-start`.

### row-gap

`row-gap` defines the size of the gap between rows of a grid container. It specifies the space between the grid rows, and can be used to create vertical spacing between grid items.

The `row-gap` property is specified in length or percentage units, and has a default value of `0`. This means that by default, there is no gap between the rows of a grid container. To add spacing between the rows, you can set the `row-gap` property to a value that suits your design.

```scss {3}
.container {
    display: flex;
    row-gap: 10px;
}
```

### column-gap

`column-gap` defines the size of the gap between columns of a grid container. It specifies the space between the grid columns, and can be used to create horizontal spacing between grid items.

The `column-gap` property is specified in length or percentage units, and has a default value of `0`. This means that by default, there is no gap between the columns of a grid container. To add spacing between the columns, you can set the `column-gap` property to a value that suits your design.

```scss {3}
.container {
    display: flex;
    column-gap: 10px;
}
```

### gap

`gap` is a shorthand property that combines the `row-gap` and `column-gap` properties into a single declaration. It defines the size of the gap between rows and columns of a grid container, and can be used to create spacing between grid items in both directions.

The `gap` property is specified in length or percentage units, and takes two values separated by a space. The first value specifies the `row-gap`, and the second value specifies the `column-gap`. If only one value is specified, it is used for both `row-gap` and `column-gap`. The default value of gap is `0`, which means that there is no gap between rows or columns by default.

```scss {3}
.container {
    display: flex;
    gap: 10px 20px; // [row-gap] [column-gap]
}
```

## Conclusion

This particular post delves into the properties that are specifically related to the container in a web page. Containers are an essential aspect of web page design, and these properties are crucial to understanding how to design and manipulate containers for a more efficient and user-friendly website.

In the subsequent post, we will shift our focus to the properties related to the items within the container. Items refer to the elements that are placed inside the container, and understanding how to manipulate these elements can greatly impact the overall design and functionality of a web page. By exploring these item-related properties, we can further optimize the container's layout and create a more streamlined and visually appealing website.
