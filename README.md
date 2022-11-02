# Cookie.js
Cookie - Fastest Syntax Highlighter

## Preview
![Preview](/readme/gallery/preview.png)

## How To Use?
1. **Add Below Files To Index.html**

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Abhay557/Cookie.js@main/src/index.css"/>
<script src="https://cdn.jsdelivr.net/gh/Abhay557/Cookie.js@main/src/index.js"></script>
```

2. **Adding Script**

Language Available - Python, Sql, Plsql, Kotlin, Php, Java, Go, Csharp, Cpp, C

```html
<script>
let cookie = new window.cookie({ language: 'javascript', lineNum: true }); 
// Highlight All Pre Elements
// Html: <pre data-language="javascript"></pre>
cookie.highlightAll()
</script>
```

3. **Add Your Code**

```html
<pre data-language="javascript">
const axios = require("axios");

const getData = async (animename) => {
let url = `http://www.cookie-api.ml/api/anime
/search?name=${animename}`;

await axios.get(url)
.then(function (response) {
  console.log(response.data);
   })
};
getData("Naruto"); // Example - Naruto
</pre>
```

4. **Cool Awesome Output**

![Preview](/readme/gallery/pre.png)

## How To Make My Own Theme?

```css
/* 
  Css Code 
  Note: (Themes Are Not Built-In)
  Just Copy Your Favorite Theme From The Folder Themes! 
*/
[data-theme="Autocode"] {
--cookie-method:#E01E1E;
--cookie-num:#d2a8ff;
--cookie-comment:#ceb18d;
--cookie-string:#1C9B40;
--cookie-variable:#3556E3;
--cookie-keyword:#b11fff;
--cookie-operator:#E01E1E;
--cookie-data-type:#d2a8ff;
--cookie-spkey:#8DA6CE;
--cookie-line-num:#b1b1b1;
--cookie-bg:#2d2d35;
--cookie-fg:#b1b1b1;
--cookie-dg:#FFFFFF
}
```
**Use Below Code To Use Theme!**
```js
// Javascript Code
// For Examples Check Test Folder
preElement.dataset.theme = 'Autocode';
```
## Community
Do you have a question, feature request or something else on your mind?
Or you just want to follow  news?
Check out these links:

* [Support](https://autocode.com)
* [Join a Discord server](https://discord.gg/5V68EK8AeS)
* [Report An Issue](https://github.com/Abhay557/Code-Editor/issues/new)
* [Contact The Author](https://github.com/Abhay557)
* [Github Repo](https://github.com/Abhay557/Cookie.js)
