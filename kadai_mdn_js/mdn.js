// 現在の日付を取得する
const today = new Date();

// 年、月、日をそれぞれ取得する
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月は0から始まるため1を加算
const day = today.getDate();

console.log(year + '年' + month + '月' + day + '日'); // 変数を正しく使用