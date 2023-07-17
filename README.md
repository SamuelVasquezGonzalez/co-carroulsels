# Co-Carrousels
Co-Carrousels is a simple tool for make image Carousels on React.js. We are start. This is a original project of [Samuel](https://github.com/SamuelVasquezGonzalez) :)


## Examples
We have two Carousels types for you.

### Carousel for Full page

This carousel is designed so that you can use it completely on your screen. With full screen we mean that it uses the `width: 100%` and the `height: 100vh;` You can add more content below according to your needs.

![This is a Fullpage Carousel](https://res.cloudinary.com/lm-galery/image/upload/v1689538521/co-carousels/1_bulml9.png)

---
### Small Carousel
This carousel is designed to be placed anywhere in React, you can fill spaces with small carousels to diversify the content a bit more, it's a nice minimalist design.

You can place the number of carousels you want without affecting performance and also that each carousel works independently.

![This is a Normal Carousel](https://res.cloudinary.com/lm-galery/image/upload/v1689538521/co-carousels/2_hwqloz.png)

---
## Instalation

To start using the library, we must install the package with our npm command
**make sure you have formatted your styles so you don't have any conflicts with the styles of the carousels**
```bash
$ npm install co-carrousels
```

Once the module is installed it is time to start using the carousels

The module provides you 3 functions to import
`FullCarrousel`, `SmallCarrousel` and `CoImage`

The `Full Carrousel`, `Small Carrousel` modules are the container components of the images that will contain


### use this module if you want to use screen carousel

```js
import { FullCarrousel, CoImage } from "co-carrousels";

export default function MyComponent() {
    return (
        <>
            <FullCarrousel controls="true">
                <CoImage src="imagePath" alt="" />
                <CoImage src="imagePath" alt="" />
                <CoImage src="imagePath" alt="" />

                {/*More images*/}
            </FullCarrousel>
        </>
    )
}
```

the `controls` attribute receives `true` and `false`, with this attribute you can decide whether or not to show the buttons to change the images

---

### Use this module if you want to use the small carousel that you can use anywhere in your application

```js
import { SmallCarrousel, CoImage } from "co-carrousels";

export default function MyComponent() {
    return (
        <>
            <SmallCarrousel borderRadius="12px" controls="true">
                <CoImage src="imagePath" alt="" />
                <CoImage src="imagePath" alt="" />
                <CoImage src="imagePath" alt="" />

                {/*More images*/}
            </SmallCarrousel>
        </>
    )
}
```
the `borderRadius` attribute allows you to put a rounded border to your carousel, you just have to put the amount in pixels as if it were CSS