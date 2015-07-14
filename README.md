# myrest

## 概要
node.js + Express で実装した、RESTful API の習作です。
express-resource が新しいExpressに対応していなかったので、node.jsの学習がてら単一テーブルに対するCRUDのRESTful APIを実装しています。

以下のURLを参考にしています。
* http://yutapon.hatenablog.com/entry/2014/04/29/124657
* http://coenraets.org/blog/2012/10/creating-a-rest-api-using-node-js-express-and-mongodb/

※ 2015/07/14現在

## バージョン
* node.js v0.10.26
* Express v1.4.3
* mysql v*

## 作り方
```express myrest```

このプロジェクトをベースに実装。

## 実装箇所
* app.js
* routes/users.js
