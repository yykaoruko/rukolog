// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
const changeCase = require('change-case');
module.exports = [
  {
    type: 'select',
    name: 'category',
    message: 'コンポーネントのカテゴリーを選択してください',
    choices: ['basics', 'combinations', 'containers'],
  },
  {
    type: 'input',
    name: 'filename',
    message: 'ファイル名を入力してください',
    format(value) {
      return changeCase.pascalCase(value);
    },
  },
];
