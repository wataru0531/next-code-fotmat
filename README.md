
## About next-code-format
- Eslint https://eslint.org/
  - コードの品質を保つための静的解析ツール
  - 静的 ... コードを実行せずにその構文やスタイルを分析するプロセスのこと

- Prettier https://prettier.io/
  - コードの自動整形ツール
  - コードの静的解析や品質チェックする機能はない
  - コードの整形を行い一貫性を保つことに特化している

- husky
  - Git操作をフックにして自動化することが可能

- パッケージ
 - eslint-config-prettier
   ESlintとPrettierを組み合わせた場合一部の整形ルールが競合することがあるので、Prettierと競合するESLintルールを無効化する。
   例えば、スペースの数やセミコロンの有無などが異なる場合など。
   これによりESLintがコードの品質を解析して、Prettierがコードを整形するという使い方が可能になり両者を共存させることができる。

## References Articles

- [2023年]Next.js + eslint周りの設定
  https://zenn.dev/resistance_gowy/articles/91b4f62b9f48ec#commit%E6%99%82%E3%81%AB%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AE%E6%A4%9C%E8%A8%BC%E3%82%92%E3%81%99%E3%82%8B
  
- Next.js13.4+TypeScript+ESLint+Prettier+Huskyのよくばりセットで環境を構築してみました
https://zenn.dev/bloomer/articles/294cf65fda277b

- 【Next.js】コード品質を高める環境構築手順 (TyprScript, Prettier, EsLint, Husky, GitHub Actions)
https://musclecoding.com/nextjs-pj-template/


