module.exports = function createData (data, name) {
  return `
<head>
<link rel="shortcut icon" href="/assets/favicon.png" />
<meta content="${name}" property="og:title">
<link href="https://fonts.googleapis.com/css2?family=Consolas&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
</head>
<style>

  * {
    font-family: Cascadia Code, Consolas, 'Courier New', monospace;
  }
  html,
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    color: #abb2bf;
    background: #282c34;
  }

  .hljs-keyword,
  .hljs-operator {
    color: #F92672;
  }

  .hljs-pattern-match {
    color: #F92672;
  }

  .hljs-pattern-match .hljs-constructor {
    color: #61aeee;
  }

  .hljs-function {
    color: #61aeee;
  }

  .hljs-function .hljs-params {
    color: #A6E22E;
  }

  .hljs-function .hljs-params .hljs-typing {
    color: #FD971F;
  }

  .hljs-module-access .hljs-module {
    color: #7e57c2;
  }

  .hljs-constructor {
    color: #e2b93d;
  }

  .hljs-constructor .hljs-string {
    color: #9CCC65;
  }

  .hljs-comment,
  .hljs-quote {
    color: #b18eb1;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-formula {
    color: #c678dd;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e06c75;
  }

  .hljs-literal {
    color: #56b6c2;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta-string {
    color: #98c379;
  }

  .hljs-built_in,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #d19a66;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #61aeee;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }
</style>
<body onload="navbar()">
<div id="topnav"></div>
<pre class="hljs">${data}</pre>
</body>`;
};