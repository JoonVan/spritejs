(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{718:function(n,e,t){"use strict";t.r(e),e.default="importScripts('spritejs.worker.js');\n\nconst textureURL = 'https://p4.ssl.qhimg.com/t012170360e1552ce17.png';\n\nspritejs.layerCreated.then((layer) => {\n  const {Sprite} = spritejs;\n\n  const s = new Sprite();\n  s.attr({\n    anchor: 0.5,\n    size: [200, 200],\n    pos: [600, 300],\n    bgcolor: 'red',\n    texture: textureURL,\n  });\n\n  layer.append(s);\n\n  s.addEventListener('click', (evt) => {\n    console.log(evt);\n  });\n});"}}]);