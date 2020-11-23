import prettyFormat from 'pretty-format';

const data: any = {
  aaa: 123,
  bbb: undefined,
  ccc: null,
  hello: () => '',
}

console.log("### prettyFormat", prettyFormat(data))
console.log("### JSON.stringify", JSON.stringify(data));


console.log("---------- nested --------------")
data.nest = data;
console.log("### prettyFormat", prettyFormat(data))
console.log("### JSON.stringify", JSON.stringify(data));
