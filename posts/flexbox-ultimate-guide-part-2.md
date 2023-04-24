---
title: 'A Complete Guide to Flexbox: Understanding and Implementing CSS Flexbox - Part 2'
metaTitle: 'CSS Flexbox: A Comprehensive Guide for Web Developers'
metaDesc: 'Learn everything you need to know about CSS flexbox, a powerful tool for creating flexible and responsive layouts on the web. This comprehensive guide covers the basics of flexbox, its properties and values, and how to use it in your web development projects.'
excerpt: 'CSS flexbox is a powerful tool for creating flexible and responsive layouts on the web. With flexbox, you can easily align and distribute elements within a container, regardless of their size or content.'
coverImage: 
socialImage: 
date: '2023/04/24'
update:
tags: sass,scss,css,flexbox
category: 
readingTime: 
---

In [part 1](/blog/flexbox-ultimate-guide-part-1) of this article, we introduced the basics of Flexbox and covered the terminology used in the Flexbox model. We also discussed the properties that are used to style the container element. In this part, we'll be focusing on the properties that are used to style the items within the container. By the end of this section, you'll have a solid understanding of how to use Flexbox to create flexible and responsive layouts for your web projects.

## Playground

In this post, I cover the basics of Flexbox and how to use it to create modern, dynamic web layouts. To truly understand and master Flexbox, however, you'll need to dive in and get your hands dirty. That's why I encourage you to use the [playground](https://flexbox-seven.vercel.app/) I've created to experiment with different Flexbox properties and see firsthand how they affect your layout. By testing out the concepts you learn in this post using the [playground](https://flexbox-seven.vercel.app/), you'll be able to solidify your understanding of Flexbox and develop the skills you need to create visually stunning websites.

Visit [Interactive Flexbox Playground](https://flexbox-seven.vercel.app/) to see how Flexbox works in real world! :)

## Items Properties

### order

The `order` property allows you to control the order in which flex items are displayed within a flex container. By default, flex items are displayed in the order in which they appear in the source code. However, the order property allows you to change this order and specify a custom order for each item.

The `order` property is specified as a positive or negative integer value. The default value of `order` is `0`, which means that the item will be displayed in the default order. If you set the `order` value to a positive integer, the item will be displayed after all the items with lower order values. Conversely, if you set the order value to a negative integer, the item will be displayed before all the items with higher order values.

By using the `order` property, you can rearrange the display order of flex items, creating more flexible and dynamic layouts that adapt to different screen sizes and device orientations. This property is particularly useful when working with responsive web design, as it allows you to control the order in which elements are displayed on different devices.

```scss {6}
.container {
    display: flex;
}

.container .item {
    order: 1; // default is 0
}
```

### flex-grow

The `flex-grow` property allows you to control how much an item in a flex container should grow relative to other items. It determines the proportion of available space that each flex item should occupy within the flex container.

The `flex-grow` property is specified as a positive numeric value. The default value of `flex-grow` is `0`, which means that the item will not grow and will maintain its original size. If you set the `flex-grow` value to a positive number, the item will grow proportionally to other flex items in the same container. The higher the value, the more space the item will take up compared to other items with lower `flex-grow` values.

```scss {6}
.container {
    display: flex;
}

.container .item-a {
    flex-grow: 1;
}
```

![flex-grow-1.jpg](/posts/flexbox-ultimate-guide/flex-grow-1.jpg)

### flex-shrink

The `flex-shrink` property allows you to control how much an item in a flex container should shrink relative to other items when there is not enough space available. It determines the proportion of space that each flex item should lose within the flex container.

The `flex-shrink` property is specified as a positive numeric value. The default value of `flex-shrink` is `1`, which means that the item will shrink proportionally to other items in the same container when there is not enough space available. If you set the `flex-shrink` value to `0`, the item will not shrink and will maintain its original size. If you set the `flex-shrink` value to a positive number greater than 1, the item will shrink more than other items with lower `flex-shrink` values.

```scss {3}
.container {
    display: flex;
    flex-shrink: 2; // default is 1
}
```

### flex-basis

The `flex-basis` property specifies the initial size of a flex item before any available space is distributed according to the flex-grow and flex-shrink properties. It determines the starting size of the flex item along the main axis of the flex container.

```scss {3}
.container {
    display: flex;
    flex-basis: min-content;
}
```

#### Values

The `flex-basis` property can be specified using a length value, a percentage value, or the keywords `auto` or `content`. Items with value of:

- **length** will have a fixed size along the main axis of the flex container.
- **percentage** will have a percentage size of the container along the main axis of the flex container.
- **auto (default)** will use its intrinsic size as its flex basis.
- **min-content** will use its intrinsic minimum width.
- **max-content** will use its intrinsic preferred width.
- **fit-content** will have the maximum possible size of a containing block's content area, bounded by the min-content and max-content values, and calculated based on the content of the current element.

The `flex-flow` property accepts two values. The first value is for `flex-direction`, and the second value is for `flex-wrap`. For example, the value "row wrap" sets the `flex-direction` to `row` and the `flex-wrap` to `wrap`.

### flex

The `flex` property is a shorthand property allows you to set the values of the three main flex properties: `flex-grow`, `flex-shrink`, and `flex-basis`, in a single declaration. It specifies how much a flex item can grow or shrink in relation to other flex items in the same container, and also determines its initial size before any available space is distributed.

```scss {3}
.container {
    display: flex;
    flex: 0 1 auto; // [flex-grow] [flex-shrink] [flex-basis]
}
```

The flex property can be specified using one, two, or three values, depending on the desired effect. When only one value is used, it is interpreted as the `flex-grow` value. When two values are used, they are interpreted as the `flex-grow` and `flex-shrink` values, respectively. When three values are used, they are interpreted as the `flex-grow`, `flex-shrink`, and `flex-basis` values, respectively.

### align-self

`align-self` property allows you to control the alignment of a single flex item within a flex container along the cross-axis. It overrides the default alignment set by the align-items property of the container, which applies to all flex items in the container.

The `align-self` property can be specified using various values, including "auto", "flex-start", "flex-end", "center", "baseline", and "stretch". If you set the value to "auto", the item will use the value of the align-items property set on the container. If you set the value to "flex-start", the item will be aligned to the start of the cross-axis. If you set the value to "flex-end", the item will be aligned to the end of the cross-axis. If you set the value to "center", the item will be centered along the cross-axis. If you set the value to "baseline", the item will be aligned to the baseline of the text within it. If you set the value to "stretch", the item will stretch to fill the available space along the cross-axis.

```scss {3}
.container {
    display: flex;
    align-items: center;
}
```

![align-items-center.jpg](/posts/flexbox-ultimate-guide/align-items-center.jpg)

#### Values

- **auto** value set the value of the `align-items` property of the container to the item.
- **center** aligns item to the center of the cross axis.
- **stretch (default)** stretches the item to fill the available space along the cross-axis.
- **flex-start** aligns item to the start of the cross axis.
- **flex-end** aligns item to the end of the cross axis.
- **baseline** aligns item with the baseline of the text within it.

It's important to keep in mind that if you apply the `align-content` property to the container, any `align-self` values set on the flex items will be overridden by the value set on the container.

## Conclusion

[Flexbox](/blog/flexbox-ultimate-guide-part-1) is a powerful tool for creating flexible and responsive layouts in CSS. By using the [container properties](/blog/flexbox-ultimate-guide-part-1), we can control the layout of the flex container itself, and how its items are arranged along the main and cross axis. The item properties allow us to control the size, order, and alignment of individual flex items within the container. By mastering these properties, we can create complex and dynamic layouts that adapt to different screen sizes and device orientations. So, whether you're building a simple web page or a complex web application, understanding the ins and outs of [Flexbox](/blog/flexbox-ultimate-guide-part-1) can help you create better and more consistent designs.

If you have any questions or comments about this post, please feel free to reach out to me. I am always happy to engage with readers. Your feedback is important to me, and it helps me to improve the quality of my content and better serve the needs of my readers.

Finally, I want to remind you to use the [Interactive Flexbox Playground](https://flexbox-seven.vercel.app/) where you can experiment with Flexbox and see how the different properties affect the layout of your web page in real-time. This interactive tool is a great way to practice and refine your skills, and I encourage you to take advantage of it.
