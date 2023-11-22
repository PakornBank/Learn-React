/*
Convert this HTML to JSX

<h1>Test title</h1>
<ol class="test-list">
  <li>List item 1
  <li>List item 2
  <li>List item 3
</ol>
<svg >
   <circle cx="25" cy="75" r="20" stroke="green" stroke-width="2" />
</svg>
<form><input type="text"></form>
*/

function Convert() {
    return (<><h1>Test title</h1>
<ol className="test-list">
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3</li>
</ol>
<svg >
   <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
</svg>
<form><input type="text" /></form></>);
}

export default Convert;
