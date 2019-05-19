# CharTo-Web

## 概要
[CharTo](https://charto-abc1d.firebaseapp.com/)のソースコードです。
## 準備
CharToではバックエンドとしてmBaaSの一種である[Firebase](https://firebase.google.com)を利用しています。

`./src`配下に`firebase.json`をおいてください。
また、`./src/main.ts`に
```typescript
// ここにFirebaseのコードをいれよう!!
const config = {
  
};
```
があるので、とりいあえずここにconfigを書いてください。
## コマンド
### 起動前
```bash
npm ci
```
を使ってnode packageをインストールしてください。
### 実行
```bash
npm run serve
```
をしてから[localhost:8080](localhost:8080)で実行してください。

### ビルド
```bash
npm run build
```

を使うとProduction環境用にBuildできます!!
## 使用技術
- Vue
- Vuex
- TypeScript
- Firebase