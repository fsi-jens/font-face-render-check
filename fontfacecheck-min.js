var fontFaceCheck=new function(){var h=document,g=h.body||h.documentElement.appendChild(h.createElement("fontface")),i=h.createElement("span"),d=h.createElement("style"),f=5,e=20,c,b=(function(){var l,j=3,m=h.createElement("div"),k=m.getElementsByTagName("i");while(m.innerHTML="<!--[if gt IE "+(++j)+"]><i></i><![endif]-->",k[0]){}return j>4?j:l}()),a=function(j,k){c=(i.offsetWidth/Math.max(1,i.offsetHeight))>=5;if(!c&&e-->0){setTimeout(function(){a(j,k)},f);return}g.removeChild(i);if(k){k(c)}else{h.getElementsByTagName("html")[0].className+=c?" fontfacerender":" no-fontfacerender"}};this.support=function(k,l){k=k||"./";i.setAttribute("style","font-family:pixelambacht !important;position:fixed;visibility:hidden");i.innerHTML="-";g.appendChild(i);d.type="text/css";h.getElementsByTagName("head")[0].appendChild(d);if(b<=8){var j=new XMLHttpRequest();j.open("GET",k+"pixelambacht.eot",false);j.send(null);d.styleSheet.cssText="@font-face{font-family:pixelambacht;src:url('"+k+"pixelambacht.eot');}"}else{d.textContent="@font-face{font-family:pixelambacht;src:url(data:application/x-font-woff;base64,d09GRgABAAAAAAKUAAsAAAAAA0QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAADQAAABgCEAG42NtYXAAAAE8AAAANgAAAGQAlQDaZ2FzcAAAAXQAAAAIAAAACP//AARnbHlmAAABfAAAADkAAABM/ye3eWhlYWQAAAG4AAAAMwAAADYQRDZ2aGhlYQAAAewAAAAcAAAAJBXiE+RobXR4AAACCAAAAAwAAAAMFQAAAGxvY2EAAAIUAAAACAAAAAgAEAAmbWF4cAAAAhwAAAAaAAAAIAAFABNuYW1lAAACOAAAAE8AAADA/REeI3Bvc3QAAAKIAAAADAAAACAAAwAAeNpjYGZiYJzAwMrAwOjDmMbAwOAOpb8ySDK0MBACDgwKDLqMD/4DIeMDIBsVAPkAxP8KKnjaY2BgYGJgYGAGYhEgyQikbRhYGDSANBuQZgTKKjDo/v8P5IPp/w//XwWrAgEi1QEAc7kRYgAAAAAAAf//AAN42mNgZIABJgaeHQwMvTsYWHp3MP5vNbQESwGJ/w9EGBgfMLCgygsqAqEIwxug1D+gXiAAACQ+EEwAAAB42mNgZGBgAOK98y/5xvPbfGXgZmIAgXPLXn4B03XcRxkY/j8QYWB8AORyMIClAWPvDHUAeNpjYGRgYHzw/wEDgwgDCABJRgZUwAwAVnUC7gAAAAABAAAAFAAAAAAAAAAAEAAmeNpjYGRgYGBmYGUA0QwMTAwIwAMiAAGCABkAAHjaTcxBCsAgDATAVWOgHvylt0KhL+sLrSvmsAkbhkACoONDwi6dWVzEJq5iF7e4SnZxk9nHWx4udAsb3cNVbl18fmL+eJmHGcy9ACPJC0kAeNpjYGbACwAAfQAE)}"}a(k,l)}};