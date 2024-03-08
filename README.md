
## About next-code-format
- Eslint https://eslint.org/
  - コードの品質を保つための静的解析ツール
  - 静的 ... コードを実行せずにその構文やスタイルを分析するプロセスのこと

- Prettier https://prettier.io/
  - コードの自動整形ツール
  - コードの静的解析や品質チェックする機能はない
  - コードの整形を行い一貫性を保つことに特化している

- Husky
  - Gitフックを管理するためのツール
  - 特定のGit操作（コミット、プッシュ、マージなど）の前後に実行されるカスタムスクリプト
  - 例 ステージにだけaddしているファイルにのみコードフォーマットを行う
  - v8とv9ではコマンドが違うので注意
   - npx husky install と打つと "install  command is deprecated" とエラーが吐かれる → npx husky init に変更などしている。

- package.json scriptのprepareについて
  - npmインストールする前に実行される特殊なフィールドらしい
  - 準備スクリプトを実行して、必要なファイルを生成、コンパイルを実行したりすることができる。開発時に必要な前処理を自動化するのに役立つ。
  - https://docs.npmjs.com/cli/v9/using-npm/scripts#life-cycle-scripts

- .husky/pre-commit ファイル
  - Gitフックの1つであり、Git コミットが実行される前に実行されるスクリプトを定義


- パッケージ
 - eslint-config-prettier
   ESlintとPrettierを組み合わせた場合一部の整形ルールが競合することがあるので、Prettierと競合するESLintルールを無効化する。
   例えば、スペースの数やセミコロンの有無などが異なる場合など。
   これによりESLintがコードの品質を解析して、Prettierがコードを整形するという使い方が可能になり両者を共存させることができる。
  
-あったらいいパッケージ
 - eslint-plugin-import → import、exportの並び替えnarabikae

- VS Codeの拡張機能
 - prettier-plugin-tailwindcss
 - Prettier - Code formatter

## References Articles

- [2023年]Next.js + eslint周りの設定
  https://zenn.dev/resistance_gowy/articles/91b4f62b9f48ec#commit%E6%99%82%E3%81%AB%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E6%A4%9C%E8%A8%BC%E3%82%92%E3%81%99%E3%82%8B
  
-【2024/01最新】husky + lint-staged でコミット前にlintを強制する方法
  https://zenn.dev/risu729/articles/latest-husky-lint-staged

- その他の参考記事
https://typicode.github.io/husky/get-started.html#install


