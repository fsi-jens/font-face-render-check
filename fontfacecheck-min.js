var fontFaceCheck=new function(){var f=document,b=f.body||f.documentElement.appendChild(f.createElement("fontface")),e=f.createElement("span"),d=f.createElement("style"),c=5,h=20,a;var g=(function(){var k,i=3,l=f.createElement("div"),j=l.getElementsByTagName("i");while(l.innerHTML="<!--[if gt IE "+(++i)+"]><i></i><![endif]-->",j[0]){}return i>4?i:k}());checkSupport=function(j){a=(e.offsetWidth/Math.max(1,e.offsetHeight))>=5;if(!a&&h-->0){setTimeout(function(){checkSupport(j)},c);return}b.removeChild(e);if(j){j(a)}else{var i=f.getElementsByTagName("html")[0];i.className+=a?" fontfacerender":" no-fontfacerender"}};this.support=function(j){e.setAttribute("style","font-family:pixelambacht;position:fixed;visibility:hidden");e.innerHTML="-";b.appendChild(e);d.type="text/css";f.getElementsByTagName("head")[0].appendChild(d);if(g<=8){var i=new XMLHttpRequest();i.open("GET","pixelambacht.eot",false);i.send(null);d.styleSheet.cssText="@font-face{font-family:pixelambacht;src:url('/pixelambacht.eot');}"}else{d.textContent="@font-face{font-family:pixelambacht;src:url(data:font/truetype;base64,AAEAAAALAIAAAwAwT1MvMghABuMAAAC8AAAAYGNtYXAAlQDaAAABHAAAAGRnYXNw//8ABAAAAYAAAAAIZ2x5Zv8nt3kAAAGIAAAATGhlYWQQRDZ2AAAB1AAAADZoaGVhFeIT5AAAAgwAAAAkaG10eBUAAAAAAAIwAAAADGxvY2EAEAAmAAACPAAAAAhtYXhwAAUAEwAAAkQAAAAgbmFtZf0RHiMAAAJkAAAAwHBvc3QAAwAAAAADJAAAACAAAwIAAZAABQAAAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAACAALQHg/+D/4AHgACAAAAAAAAAAAAAAAAAAAAAgAAAAAAACAAAAAwAAABQAAwABAAAAPAAEACgAAAAGAAQAAQACACAALf//AAAAIAAt////4f/VAAEAAAAAAAAABAAoAAAABgAEAAEAAgAgAC3//wAAACAALf///+H/1QABAAAAAAAAAAAAAf//AAMAAQAAAAAAAAAAAAIADLgAAI24AASNuAH/hTE5AQAAAAABAAD/4BQAAeAABAAMuAAAjbgABI24Af+FESERIREUAOwAAeD+AAIAAAAAAAEAAAABAAC9n9JNXw889QALAgAAAAAAzqbp9AAAAADOfgvFAAD/4BQAAeAAAAAIAAIAAAAAAAAAAQAAAeD/4AAAFAAAAAAAFAAAAQAAAAAAAAAAAAAAAAAAAAMAAAAAAQAAABQAAAAAAAAAABAAJgABAAAAAwAFAAEAAAAAAAIAAAAAAAAAAAAAAAwAAAAAAAAADgCwAAEAAAAAAAEAAAAAAAEAAAAAAAIAAAAAAAEAAAAAAAMAAAAAAAEAAAAAAAQAAAAAAAEAAAAAAAUAAAAAAAEAAAAAAAYAAAAAAAEAAAAAAAoAAAAAAAMAAQQJAAEAAgACAAMAAQQJAAIAAgAGAAMAAQQJAAMAAgAKAAMAAQQJAAQAAgAOAAMAAQQJAAUAAAAAAAMAAQQJAAYAAAAAAAMAAQQJAAoAAAAAAAD+/wBy/v8Ab/7/AGX+/wBsAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=)}"}checkSupport(j)}};