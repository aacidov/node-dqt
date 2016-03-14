# dqt

![npm](https://img.shields.io/npm/v/dqt.svg) ![license](https://img.shields.io/npm/l/dqt.svg) ![github-issues](https://img.shields.io/github/issues/ibakaidov/node-dqt.svg)  ![Circle CI build status](https://circleci.com/gh/ibakaidov/node-dqt.svg?style=svg)

Techology for create one button controlled interfaces.

![nodei.co](https://nodei.co/npm/dqt.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/ibakaidov/node-dqt.svg)
![stars](https://img.shields.io/github/stars/ibakaidov/node-dqt.svg)
![forks](https://img.shields.io/github/forks/ibakaidov/node-dqt.svg)

![forks](https://img.shields.io/github/forks/ibakaidov/node-dqt.svg)

![](https://david-dm.org/ibakaidov/node-dqt/status.svg)
![](https://david-dm.org/ibakaidov/node-dqt/dev-status.svg)

## About

Do you know a man who can press only one button? Maybe. But i think you don't. In world many people wanna use your site, but can't. With this library you can create interface for them. Free and fast.

## Install

`npm install --save dqt`

## Example
``` js
var DQT = require("dqt");
var dqt = new DQT([['mum', 'dad'], ['son', 'dauther']]);

dqt.on('step', console.log).on('choosen', console.log);
process.stdin.on('data', (data)=>{
   dqt.emit('click');
});
```

## Let's go with JQuery. Link navigation
``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
      <ul>
        <li><a href="http://vk.com">vk</a></li>
        <li><a href="http://facebook.com">facebook</a></li>
        <li><a href="http://yandex.ru">yandex</a></li>
        <li><a href="http://google.ru">google</a></li>
      </ul>
      <button type="button" id="button">Choose</button>
      <script type="text/javascript" src="dqt.browser.js"></script>
      <script type="text/javascript" src="http://code.jquery.com/jquery-2.2.1.min.js"></script>
      <script type="text/javascript">
        var links = Array.prototype.slice.apply(document.querySelectorAll('a'));

        var dqt = new DQT(DQT.group(links)]);
        var prev;
        dqt.on('step', (el, x, y)=>{
          if (prev!=null) prev.toggle( "bounce" )
          prev = ($(el).toggle( "bounce" ));
        }).on('choosen', (el)=>{

          console.log('chosse',el);
          if (Array.isArray(el)) return;
          window.location.replace(el.href);
        });
        document.getElementById('button').onclick = ()=>{
          dqt.emit('click');
        };
      </script>
  </body>
</html>

```


## Scripts

 - **npm run test** : `node test.js`

## Contributing

Contributions welcome; Please submit all pull requests the against master branch.Thanks!

## Author

ibakaidov

## License

 - **ISC** : http://opensource.org/licenses/ISC
