function snake_case_to_title_case (str) {
let output = str.replace(/(^\w)/g, g => g[0].toUpperCase()).replace(/([-_]\w)/g, g => " " + g[1].toUpperCase()).trim();
return output;
}
module.exports = snake_case_to_title_case;
