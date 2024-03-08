

// lint-staged の設定
// → commit時に下の処理が走るようにする
// package.jsonに普通に記述したらエラーになる

const path = require('path')


// .ts, tsxファイルに対して、next lintと prettier --write を行ってくれる
const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`


module.exports = {
  '*.{ts,tsx}': [
    () => 'tsc --incremental false --noEmit', // tscのコンパイルの検証の設定
    buildEslintCommand,
    "prettier --write"
  ],
}

// incremental
// → コンパイラは前回のビルドから変更されたファイルのみをコンパイルし、ビルド速度を大幅に向上させることができるオプション

// noEmitオプション
// → コンパイラにコードの型チェックを実行するように指示する

