/*eslint-disable*/
export default function returnWordsArray(callback: (word: string) => string) {
  return [
    callback("content.one"),
    callback("content.two"),
    callback("content.three"),
    callback("content.four"),
  ];
}
