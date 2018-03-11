# google-home-auto-tester
csvファイルに記述したテストワードをGoogle Homeから喋らせます。  
csv(data.csv)にはテストワードと次のワードまでのウェイトタイム(msec)を記述します。  

## 導入方法

```
git clone https://github.com/miso-develop/google-home-auto-tester && cd google-home-auto-tester
npm i
```

### Google HomeのIPアドレスを指定
index.jsの以下のコードを修正します。  

```js:index.js
googlehome.ip('192.168.xxx.xxx')
```

### data.csvにテストワードを記述
テストワードと次のワードまでのウェイトタイム(msec)を記述します。  

```csv:data.csv
test1,6000
test2,0
```

## 実行
```
npm start
```

または、  

```
node index.js
```

で実行します。
