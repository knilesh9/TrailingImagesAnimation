# TrailingImagesAnimation
Just module number 3, another practice set for JS and GSAP, DOM. We have an animation where, moving the mouse in a div or wherever this is applied will make images appear following the mouse cursor

## Demonstration 🐱.
<img src="https://github.com/knilesh9/TrailingImagesAnimation/blob/main/media/gifs/demo.gif" alt="Demo" width="auto" height="auto">


## What's happening under the hood.

<img src="https://github.com/knilesh9/TrailingImagesAnimation/blob/main/media/gifs/devtools.gif" alt="Demo" width="auto" height="auto">

* Here, we are creating and removing classes, with the help of DOM, and JS.

## Remember ‼
⚠⚠ if you don't remove the div's, here that is being done in the setTimeout().
Then the cat's might stop to appear since the div's won't disappear and continue to occupy the space.
Then you won't have the contact with the rectangle div and thus rendering the logic useless.
