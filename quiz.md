1. Why do we need to `import React from "react"` in our files?
   We needed to import React from "react" after removing the CDN links

   React is what defines JSX and so we need to import React

2. If I were to console.log(page) in index.js, what would show up?
   You would get a JavaScript object

3. What's wrong with this code:

```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

The JSX is needing a parent element like div

4. What does it mean for something to be "declarative" instead of "imperative"?
   React is "declarative" meaning you can tell the computer what to do and expect it to handle the details. Imperative means you'd need to provide step-by-step instructions
5. What does it mean for something to be "composable"?
   Small pieces of code that you can make something bigger
