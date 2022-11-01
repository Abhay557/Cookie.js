# Cookie.js
Cookie - Fastest Syntax Highlighter

## Usage/Methods & Examples

```js
let cookie = new window.cookie({ language: 'javascript', lineNum: true });
// Highlight All Pre Elements
// Html: <pre data-language="javascript"></pre>
cookie.highlightAll()

```
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
```js
// Javascript Code
// For Examples Check Test Folder
preElement.dataset.theme = 'Autocode';
```
