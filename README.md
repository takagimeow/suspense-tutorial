# Suspense Tutorial

このリポジトリは、Zennで公開した次の記事にて書き切ることができなかった、ウォーターフォール問題とその解決の具体例を紹介するものとなっています。

[useEffectをやめて、Suspenseを使おう](https://zenn.dev/takagimeow/articles/switch-from-useeffect-to-suspense)

ローカル環境にクローンを行い、プロジェクトを立ち上げてください。

```shell
$ npm install
$ npm run dev
```

次のパスにアクセスすることで、それぞれの例を確認することができます。

| Path | Description |
| --- | --- |
| / | 2つの`<Suspense>`を配置した例 |
| /effect | `useEffect()`を使った例 |
| /suspense2 | `<Articles>`と`<Artcile>`と`<Suspense>`を使った例 |
| /effect2 | `<Articles>`と`<Artcile>`と`useEffect()`を使った例 |
