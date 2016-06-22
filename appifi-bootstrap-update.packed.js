!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){function r(n){var t=n.indexOf("\n");if(t===-1)return null;var e=n.slice(0,t);return e.startsWith("//")?e.slice(2):null}function o(n,t){return new Promise(function(e,r){D.exec("mkdir -p "+n,function(n,o,u){n?(console.log("mkdirp ERROR"),r(n)):(console.log("mkdirp OK"),e(t))})})}function u(n){return new Promise(function(t,e){l.readFile(w,function(o,u){o&&"ENOENT"===o.code?(n.currentHash=null,console.log("no current sha1file"),t(n)):o?(console.log("read current sha1file ERROR"),e(o)):(n.currentHash=r(u.toString()),console.log("current sha1file hash: "+n.currentHash),t(n))})})}function i(n){var t=[],e=!1;return new Promise(function(r,o){var u={hostname:"raw.githubusercontent.com",port:443,path:E,method:"GET"},i=B.request(u,function(u){if(console.log("response status code: "+u.statusCode),200!==u.statusCode){console.log("response not 200, reject"),e=!0;var i=new Error("Status code not 200");return i.errno="EHTTPSTATUS",o(i)}u.on("data",function(n){t.push(n)}),u.on("error",function(n){console.log("response error, reject"),e=!0,o(n)}),u.on("end",function(){e||(console.log("response end"),n.latest=Buffer.concat(t),console.log("concatenated buffer length: "+n.latest.length),r(n))})});i.on("error",function(n){console.log("request error, reject"),e=!0,o(n)}),i.end(),console.log("request sent to retrieve latest bootstrap")})}function c(n,t,e){return console.log("writing data to "+n+", length: "+t.length),new Promise(function(r,o){l.writeFile(n,t,{flag:"w+"},function(n){n?(console.log("writing to file failed, reject"),console.log("stdout: "+stdout),console.log("stderr: "+stderr),o(n)):(console.log("writing to file success"),r(e))})})}function h(n,t,e){return console.log("reading back "+n),new Promise(function(r,o){l.readFile(n,function(n,u){return n?(console.log("reading back failed, reject"),o(n)):(console.log("reading back success, resolve"),e[t]=u.toString(),void r(e))})})}function a(n){void 0!==n.latest&&null!==n.latest||console.log("latest empty, reject. ERROR");var t=r(n.latest.toString());return console.log("current hash: "+n.currentHash),console.log("latest hash: "+t),t===n.currentHash?(console.log("latest equals to current, reject"),Promise.reject("LATEST_HASH_EQUAL")):(console.log("latest not equals to current, resolve"),Promise.resolve(n))}function f(n){if(n.readback.toString()!==n.latest.toString())return console.log("readback not equals to latest, reject, ERROR"),reject("READBACK_MISMATCH_DOWNLOADED");console.log("readback equals to latest, continue");var t=n.latest.toString(),e=t.indexOf("\n"),r=t.slice(2,e),o=t.slice(e+1),u=new A.SHA1,i=u.hex(o);return console.log("hash string: "+r),console.log("body hash: "+i),i===r?(console.log("integrity check, match, resolve"),Promise.resolve(n)):(console.log("integrity check, mismatch, reject, ERROR"),Promise.reject("READBACK_HASH_MISMATCH"))}function s(n){return new Promise(function(t,e){D.exec("mv "+g+" "+w,function(r,o,u){return r?e(r):void t(n)})})}var l=e(3),D=e(2),B=e(4),A=e(1),C="/wisnuc/bootstrap/appifi-bootstrap.js",g=C+".tmp",w=C+".sha1",E="/wisnuc/appifi-bootstrap/release/appifi-bootstrap.js.sha1",d={};o("/wisnuc/bootstrap",d).then(function(n){return u(n)}).then(function(n){return i(n)}).then(function(n){return a(n)}).then(function(n){return c("/wisnuc/bootstrap/appifi-bootstrap.js.tmp",n.latest,n)}).then(function(n){return h("/wisnuc/bootstrap/appifi-bootstrap.js.tmp","readback",n)}).then(function(n){return f(n)}).then(function(n){return s(n)}).then(function(n){console.log("success")})["catch"](function(n){console.log("skipped or failed"),console.log(n)})},function(n,t,e){var r;!function(){function o(n){var t,e,r,o="",u=-1;if(n&&n.length)for(r=n.length;(u+=1)<r;)t=n.charCodeAt(u),e=u+1<r?n.charCodeAt(u+1):0,55296<=t&&t<=56319&&56320<=e&&e<=57343&&(t=65536+((1023&t)<<10)+(1023&e),u+=1),t<=127?o+=String.fromCharCode(t):t<=2047?o+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?o+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(o+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return o}function u(n){var t,e,r,o,u,i,c=[];if(t=e=r=o=u=0,n&&n.length)for(i=n.length,n+="";t<i;)r=n.charCodeAt(t),e+=1,r<128?(c[e]=String.fromCharCode(r),t+=1):r>191&&r<224?(o=n.charCodeAt(t+1),c[e]=String.fromCharCode((31&r)<<6|63&o),t+=2):(o=n.charCodeAt(t+1),u=n.charCodeAt(t+2),c[e]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&u),t+=3);return c.join("")}function i(n,t){var e=(65535&n)+(65535&t),r=(n>>16)+(t>>16)+(e>>16);return r<<16|65535&e}function c(n,t){return n<<t|n>>>32-t}function h(n,t){for(var e,r=t?"0123456789ABCDEF":"0123456789abcdef",o="",u=0,i=n.length;u<i;u+=1)e=n.charCodeAt(u),o+=r.charAt(e>>>4&15)+r.charAt(15&e);return o}function a(n){var t,e=32*n.length,r="";for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>24-t%32&255);return r}function f(n){var t,e=32*n.length,r="";for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function s(n){var t,e=8*n.length,r=Array(n.length>>2),o=r.length;for(t=0;t<o;t+=1)r[t]=0;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function l(n){var t,e=8*n.length,r=Array(n.length>>2),o=r.length;for(t=0;t<o;t+=1)r[t]=0;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<24-t%32;return r}function D(n,t){var e,r,o,u,i,c,h,a,f=t.length,s=Array();for(c=Array(Math.ceil(n.length/2)),u=c.length,e=0;e<u;e+=1)c[e]=n.charCodeAt(2*e)<<8|n.charCodeAt(2*e+1);for(;c.length>0;){for(i=Array(),o=0,e=0;e<c.length;e+=1)o=(o<<16)+c[e],r=Math.floor(o/f),o-=r*f,(i.length>0||r>0)&&(i[i.length]=r);s[s.length]=o,c=i}for(h="",e=s.length-1;e>=0;e--)h+=t.charAt(s[e]);for(a=Math.ceil(8*n.length/(Math.log(t.length)/Math.log(2))),e=h.length;e<a;e+=1)h=t[0]+h;return h}function B(n,t){var e,r,o,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i="",c=n.length;for(t=t||"=",e=0;e<c;e+=3)for(o=n.charCodeAt(e)<<16|(e+1<c?n.charCodeAt(e+1)<<8:0)|(e+2<c?n.charCodeAt(e+2):0),r=0;r<4;r+=1)i+=8*e+6*r>8*n.length?t:u.charAt(o>>>6*(3-r)&63);return i}var A;A={VERSION:"1.0.5",Base64:function(){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="=",e=!0;this.encode=function(r){var u,i,c,h="",a=r.length;for(t=t||"=",r=e?o(r):r,u=0;u<a;u+=3)for(c=r.charCodeAt(u)<<16|(u+1<a?r.charCodeAt(u+1)<<8:0)|(u+2<a?r.charCodeAt(u+2):0),i=0;i<4;i+=1)h+=8*u+6*i>8*a?t:n.charAt(c>>>6*(3-i)&63);return h},this.decode=function(r){var o,i,c,h,a,f,s,l,D,B,A="",C=[];if(!r)return r;o=B=0,r=r.replace(new RegExp("\\"+t,"gi"),"");do a=n.indexOf(r.charAt(o+=1)),f=n.indexOf(r.charAt(o+=1)),s=n.indexOf(r.charAt(o+=1)),l=n.indexOf(r.charAt(o+=1)),D=a<<18|f<<12|s<<6|l,i=D>>16&255,c=D>>8&255,h=255&D,B+=1,64===s?C[B]=String.fromCharCode(i):64===l?C[B]=String.fromCharCode(i,c):C[B]=String.fromCharCode(i,c,h);while(o<r.length);return A=C.join(""),A=e?u(A):A},this.setPad=function(n){return t=n||t,this},this.setTab=function(t){return n=t||n,this},this.setUTF8=function(n){return"boolean"==typeof n&&(e=n),this}},CRC32:function(n){var t,e,r,u=0,i=0,c=0;for(n=o(n),t=["00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 ","79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 ","84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F ","63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD ","A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC ","51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 ","B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 ","06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 ","E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 ","12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 ","D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 ","33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 ","CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 ","9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E ","7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D ","806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 ","60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA ","AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 ","5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 ","B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 ","05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 ","F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA ","11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 ","D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F ","30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E ","C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D"].join(""),u^=-1,e=0,r=n.length;e<r;e+=1)c=255&(u^n.charCodeAt(e)),i="0x"+t.substr(9*c,8),u=u>>>8^i;return(u^-1)>>>0},MD5:function(n){function t(n){return n=E?o(n):n,f(r(s(n),8*n.length))}function e(n,t){var e,u,i,c,h;for(n=E?o(n):n,t=E?o(t):t,e=s(n),e.length>16&&(e=r(e,8*n.length)),u=Array(16),i=Array(16),h=0;h<16;h+=1)u[h]=909522486^e[h],i[h]=1549556828^e[h];return c=r(u.concat(s(t)),512+8*t.length),f(r(i.concat(c),640))}function r(n,t){var e,r,o,u,c,h=1732584193,f=-271733879,s=-1732584194,D=271733878;for(n[t>>5]|=128<<t%32,n[(t+64>>>9<<4)+14]=t,e=0;e<n.length;e+=16)r=h,o=f,u=s,c=D,h=a(h,f,s,D,n[e+0],7,-680876936),D=a(D,h,f,s,n[e+1],12,-389564586),s=a(s,D,h,f,n[e+2],17,606105819),f=a(f,s,D,h,n[e+3],22,-1044525330),h=a(h,f,s,D,n[e+4],7,-176418897),D=a(D,h,f,s,n[e+5],12,1200080426),s=a(s,D,h,f,n[e+6],17,-1473231341),f=a(f,s,D,h,n[e+7],22,-45705983),h=a(h,f,s,D,n[e+8],7,1770035416),D=a(D,h,f,s,n[e+9],12,-1958414417),s=a(s,D,h,f,n[e+10],17,-42063),f=a(f,s,D,h,n[e+11],22,-1990404162),h=a(h,f,s,D,n[e+12],7,1804603682),D=a(D,h,f,s,n[e+13],12,-40341101),s=a(s,D,h,f,n[e+14],17,-1502002290),f=a(f,s,D,h,n[e+15],22,1236535329),h=l(h,f,s,D,n[e+1],5,-165796510),D=l(D,h,f,s,n[e+6],9,-1069501632),s=l(s,D,h,f,n[e+11],14,643717713),f=l(f,s,D,h,n[e+0],20,-373897302),h=l(h,f,s,D,n[e+5],5,-701558691),D=l(D,h,f,s,n[e+10],9,38016083),s=l(s,D,h,f,n[e+15],14,-660478335),f=l(f,s,D,h,n[e+4],20,-405537848),h=l(h,f,s,D,n[e+9],5,568446438),D=l(D,h,f,s,n[e+14],9,-1019803690),s=l(s,D,h,f,n[e+3],14,-187363961),f=l(f,s,D,h,n[e+8],20,1163531501),h=l(h,f,s,D,n[e+13],5,-1444681467),D=l(D,h,f,s,n[e+2],9,-51403784),s=l(s,D,h,f,n[e+7],14,1735328473),f=l(f,s,D,h,n[e+12],20,-1926607734),h=A(h,f,s,D,n[e+5],4,-378558),D=A(D,h,f,s,n[e+8],11,-2022574463),s=A(s,D,h,f,n[e+11],16,1839030562),f=A(f,s,D,h,n[e+14],23,-35309556),h=A(h,f,s,D,n[e+1],4,-1530992060),D=A(D,h,f,s,n[e+4],11,1272893353),s=A(s,D,h,f,n[e+7],16,-155497632),f=A(f,s,D,h,n[e+10],23,-1094730640),h=A(h,f,s,D,n[e+13],4,681279174),D=A(D,h,f,s,n[e+0],11,-358537222),s=A(s,D,h,f,n[e+3],16,-722521979),f=A(f,s,D,h,n[e+6],23,76029189),h=A(h,f,s,D,n[e+9],4,-640364487),D=A(D,h,f,s,n[e+12],11,-421815835),s=A(s,D,h,f,n[e+15],16,530742520),f=A(f,s,D,h,n[e+2],23,-995338651),h=C(h,f,s,D,n[e+0],6,-198630844),D=C(D,h,f,s,n[e+7],10,1126891415),s=C(s,D,h,f,n[e+14],15,-1416354905),f=C(f,s,D,h,n[e+5],21,-57434055),h=C(h,f,s,D,n[e+12],6,1700485571),D=C(D,h,f,s,n[e+3],10,-1894986606),s=C(s,D,h,f,n[e+10],15,-1051523),f=C(f,s,D,h,n[e+1],21,-2054922799),h=C(h,f,s,D,n[e+8],6,1873313359),D=C(D,h,f,s,n[e+15],10,-30611744),s=C(s,D,h,f,n[e+6],15,-1560198380),f=C(f,s,D,h,n[e+13],21,1309151649),h=C(h,f,s,D,n[e+4],6,-145523070),D=C(D,h,f,s,n[e+11],10,-1120210379),s=C(s,D,h,f,n[e+2],15,718787259),f=C(f,s,D,h,n[e+9],21,-343485551),h=i(h,r),f=i(f,o),s=i(s,u),D=i(D,c);return Array(h,f,s,D)}function u(n,t,e,r,o,u){return i(c(i(i(t,n),i(r,u)),o),e)}function a(n,t,e,r,o,i,c){return u(t&e|~t&r,n,t,o,i,c)}function l(n,t,e,r,o,i,c){return u(t&r|e&~r,n,t,o,i,c)}function A(n,t,e,r,o,i,c){return u(t^e^r,n,t,o,i,c)}function C(n,t,e,r,o,i,c){return u(e^(t|~r),n,t,o,i,c)}var g=!(!n||"boolean"!=typeof n.uppercase)&&n.uppercase,w=n&&"string"==typeof n.pad?n.pda:"=",E=!n||"boolean"!=typeof n.utf8||n.utf8;this.hex=function(n){return h(t(n,E),g)},this.b64=function(n){return B(t(n),w)},this.any=function(n,e){return D(t(n,E),e)},this.raw=function(n){return t(n,E)},this.hex_hmac=function(n,t){return h(e(n,t),g)},this.b64_hmac=function(n,t){return B(e(n,t),w)},this.any_hmac=function(n,t,r){return D(e(n,t),r)},this.vm_test=function(){return"900150983cd24fb0d6963f7d28e17f72"===hex("abc").toLowerCase()},this.setUpperCase=function(n){return"boolean"==typeof n&&(g=n),this},this.setPad=function(n){return w=n||w,this},this.setUTF8=function(n){return"boolean"==typeof n&&(E=n),this}},SHA1:function(n){function t(n){return n=C?o(n):n,a(r(l(n),8*n.length))}function e(n,t){var e,u,i,c,h;for(n=C?o(n):n,t=C?o(t):t,e=l(n),e.length>16&&(e=r(e,8*n.length)),u=Array(16),i=Array(16),c=0;c<16;c+=1)u[c]=909522486^e[c],i[c]=1549556828^e[c];return h=r(u.concat(l(t)),512+8*t.length),a(r(i.concat(h),672))}function r(n,t){var e,r,o,h,a,s,l,D,B=Array(80),A=1732584193,C=-271733879,g=-1732584194,w=271733878,E=-1009589776;for(n[t>>5]|=128<<24-t%32,n[(t+64>>9<<4)+15]=t,e=0;e<n.length;e+=16){for(h=A,a=C,s=g,l=w,D=E,r=0;r<80;r+=1)r<16?B[r]=n[e+r]:B[r]=c(B[r-3]^B[r-8]^B[r-14]^B[r-16],1),o=i(i(c(A,5),u(r,C,g,w)),i(i(E,B[r]),f(r))),E=w,w=g,g=c(C,30),C=A,A=o;A=i(A,h),C=i(C,a),g=i(g,s),w=i(w,l),E=i(E,D)}return Array(A,C,g,w,E)}function u(n,t,e,r){return n<20?t&e|~t&r:n<40?t^e^r:n<60?t&e|t&r|e&r:t^e^r}function f(n){return n<20?1518500249:n<40?1859775393:n<60?-1894007588:-899497514}var s=!(!n||"boolean"!=typeof n.uppercase)&&n.uppercase,A=n&&"string"==typeof n.pad?n.pda:"=",C=!n||"boolean"!=typeof n.utf8||n.utf8;this.hex=function(n){return h(t(n,C),s)},this.b64=function(n){return B(t(n,C),A)},this.any=function(n,e){return D(t(n,C),e)},this.raw=function(n){return t(n,C)},this.hex_hmac=function(n,t){return h(e(n,t))},this.b64_hmac=function(n,t){return B(e(n,t),A)},this.any_hmac=function(n,t,r){return D(e(n,t),r)},this.vm_test=function(){return"900150983cd24fb0d6963f7d28e17f72"===hex("abc").toLowerCase()},this.setUpperCase=function(n){return"boolean"==typeof n&&(s=n),this},this.setPad=function(n){return A=n||A,this},this.setUTF8=function(n){return"boolean"==typeof n&&(C=n),this}},SHA256:function(n){function t(n,t){return n=t?o(n):n,a(w(l(n),8*n.length))}function e(n,t){n=p?o(n):n,t=p?o(t):t;var e,r=0,u=l(n),i=Array(16),c=Array(16);for(u.length>16&&(u=w(u,8*n.length));r<16;r+=1)i[r]=909522486^u[r],c[r]=1549556828^u[r];return e=w(i.concat(l(t)),512+8*t.length),a(w(c.concat(e),768))}function r(n,t){return n>>>t|n<<32-t}function u(n,t){return n>>>t}function c(n,t,e){return n&t^~n&e}function f(n,t,e){return n&t^n&e^t&e}function s(n){return r(n,2)^r(n,13)^r(n,22)}function A(n){return r(n,6)^r(n,11)^r(n,25)}function C(n){return r(n,7)^r(n,18)^u(n,3)}function g(n){return r(n,17)^r(n,19)^u(n,10)}function w(n,t){var e,r,o,u,h,a,l,D,B,w,d,F,p=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],b=new Array(64);for(n[t>>5]|=128<<24-t%32,n[(t+64>>9<<4)+15]=t,B=0;B<n.length;B+=16){for(e=p[0],r=p[1],o=p[2],u=p[3],h=p[4],a=p[5],l=p[6],D=p[7],w=0;w<64;w+=1)w<16?b[w]=n[w+B]:b[w]=i(i(i(g(b[w-2]),b[w-7]),C(b[w-15])),b[w-16]),d=i(i(i(i(D,A(h)),c(h,a,l)),E[w]),b[w]),F=i(s(e),f(e,r,o)),D=l,l=a,a=h,h=i(u,d),u=o,o=r,r=e,e=i(d,F);p[0]=i(e,p[0]),p[1]=i(r,p[1]),p[2]=i(o,p[2]),p[3]=i(u,p[3]),p[4]=i(h,p[4]),p[5]=i(a,p[5]),p[6]=i(l,p[6]),p[7]=i(D,p[7])}return p}var E,d=!(!n||"boolean"!=typeof n.uppercase)&&n.uppercase,F=n&&"string"==typeof n.pad?n.pda:"=",p=!n||"boolean"!=typeof n.utf8||n.utf8;this.hex=function(n){return h(t(n,p))},this.b64=function(n){return B(t(n,p),F)},this.any=function(n,e){return D(t(n,p),e)},this.raw=function(n){return t(n,p)},this.hex_hmac=function(n,t){return h(e(n,t))},this.b64_hmac=function(n,t){return B(e(n,t),F)},this.any_hmac=function(n,t,r){return D(e(n,t),r)},this.vm_test=function(){return"900150983cd24fb0d6963f7d28e17f72"===hex("abc").toLowerCase()},this.setUpperCase=function(n){return"boolean"==typeof n&&(d=n),this},this.setPad=function(n){return F=n||F,this},this.setUTF8=function(n){return"boolean"==typeof n&&(p=n),this},E=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998]},SHA512:function(n){function t(n){return n=F?o(n):n,a(r(l(n),8*n.length))}function e(n,t){n=F?o(n):n,t=F?o(t):t;var e,u=0,i=l(n),c=Array(32),h=Array(32);for(i.length>32&&(i=r(i,8*n.length));u<32;u+=1)c[u]=909522486^i[u],h[u]=1549556828^i[u];return e=r(c.concat(l(t)),1024+8*t.length),a(r(h.concat(e),1536))}function r(n,t){var e,r,o,h=new Array(80),a=new Array(16),l=[new u(1779033703,(-205731576)),new u((-1150833019),(-2067093701)),new u(1013904242,(-23791573)),new u((-1521486534),1595750129),new u(1359893119,(-1377402159)),new u((-1694144372),725511199),new u(528734635,(-79577749)),new u(1541459225,327033209)],D=new u(0,0),B=new u(0,0),E=new u(0,0),d=new u(0,0),F=new u(0,0),p=new u(0,0),b=new u(0,0),y=new u(0,0),v=new u(0,0),m=new u(0,0),x=new u(0,0),S=new u(0,0),_=new u(0,0),j=new u(0,0),R=new u(0,0),P=new u(0,0),T=new u(0,0);for(void 0===w&&(w=[new u(1116352408,(-685199838)),new u(1899447441,602891725),new u((-1245643825),(-330482897)),new u((-373957723),(-2121671748)),new u(961987163,(-213338824)),new u(1508970993,(-1241133031)),new u((-1841331548),(-1357295717)),new u((-1424204075),(-630357736)),new u((-670586216),(-1560083902)),new u(310598401,1164996542),new u(607225278,1323610764),new u(1426881987,(-704662302)),new u(1925078388,(-226784913)),new u((-2132889090),991336113),new u((-1680079193),633803317),new u((-1046744716),(-815192428)),new u((-459576895),(-1628353838)),new u((-272742522),944711139),new u(264347078,(-1953704523)),new u(604807628,2007800933),new u(770255983,1495990901),new u(1249150122,1856431235),new u(1555081692,(-1119749164)),new u(1996064986,(-2096016459)),new u((-1740746414),(-295247957)),new u((-1473132947),766784016),new u((-1341970488),(-1728372417)),new u((-1084653625),(-1091629340)),new u((-958395405),1034457026),new u((-710438585),(-1828018395)),new u(113926993,(-536640913)),new u(338241895,168717936),new u(666307205,1188179964),new u(773529912,1546045734),new u(1294757372,1522805485),new u(1396182291,(-1651133473)),new u(1695183700,(-1951439906)),new u(1986661051,1014477480),new u((-2117940946),1206759142),new u((-1838011259),344077627),new u((-1564481375),1290863460),new u((-1474664885),(-1136513023)),new u((-1035236496),(-789014639)),new u((-949202525),106217008),new u((-778901479),(-688958952)),new u((-694614492),1432725776),new u((-200395387),1467031594),new u(275423344,851169720),new u(430227734,(-1194143544)),new u(506948616,1363258195),new u(659060556,(-544281703)),new u(883997877,(-509917016)),new u(958139571,(-976659869)),new u(1322822218,(-482243893)),new u(1537002063,2003034995),new u(1747873779,(-692930397)),new u(1955562222,1575990012),new u(2024104815,1125592928),new u((-2067236844),(-1578062990)),new u((-1933114872),442776044),new u((-1866530822),593698344),new u((-1538233109),(-561857047)),new u((-1090935817),(-1295615723)),new u((-965641998),(-479046869)),new u((-903397682),(-366583396)),new u((-779700025),566280711),new u((-354779690),(-840897762)),new u((-176337025),(-294727304)),new u(116418474,1914138554),new u(174292421,(-1563912026)),new u(289380356,(-1090974290)),new u(460393269,320620315),new u(685471733,587496836),new u(852142971,1086792851),new u(1017036298,365543100),new u(1126000580,(-1676669620)),new u(1288033470,(-885112138)),new u(1501505948,(-60457430)),new u(1607167915,987167468),new u(1816402316,1246189591)]),r=0;r<80;r+=1)h[r]=new u(0,0);for(n[t>>5]|=128<<24-(31&t),n[(t+128>>10<<5)+31]=t,o=n.length,r=0;r<o;r+=32){for(i(E,l[0]),i(d,l[1]),i(F,l[2]),i(p,l[3]),i(b,l[4]),i(y,l[5]),i(v,l[6]),i(m,l[7]),e=0;e<16;e+=1)h[e].h=n[r+2*e],h[e].l=n[r+2*e+1];for(e=16;e<80;e+=1)c(R,h[e-2],19),f(P,h[e-2],29),s(T,h[e-2],6),S.l=R.l^P.l^T.l,S.h=R.h^P.h^T.h,c(R,h[e-15],1),c(P,h[e-15],8),s(T,h[e-15],7),x.l=R.l^P.l^T.l,x.h=R.h^P.h^T.h,C(h[e],S,h[e-7],x,h[e-16]);for(e=0;e<80;e+=1)_.l=b.l&y.l^~b.l&v.l,_.h=b.h&y.h^~b.h&v.h,c(R,b,14),c(P,b,18),f(T,b,9),S.l=R.l^P.l^T.l,S.h=R.h^P.h^T.h,c(R,E,28),f(P,E,2),f(T,E,7),x.l=R.l^P.l^T.l,x.h=R.h^P.h^T.h,j.l=E.l&d.l^E.l&F.l^d.l&F.l,j.h=E.h&d.h^E.h&F.h^d.h&F.h,g(D,m,S,_,w[e],h[e]),A(B,x,j),i(m,v),i(v,y),i(y,b),A(b,p,D),i(p,F),i(F,d),i(d,E),A(E,D,B);A(l[0],l[0],E),A(l[1],l[1],d),A(l[2],l[2],F),A(l[3],l[3],p),A(l[4],l[4],b),A(l[5],l[5],y),A(l[6],l[6],v),A(l[7],l[7],m)}for(r=0;r<8;r+=1)a[2*r]=l[r].h,a[2*r+1]=l[r].l;return a}function u(n,t){this.h=n,this.l=t}function i(n,t){n.h=t.h,n.l=t.l}function c(n,t,e){n.l=t.l>>>e|t.h<<32-e,n.h=t.h>>>e|t.l<<32-e}function f(n,t,e){n.l=t.h>>>e|t.l<<32-e,n.h=t.l>>>e|t.h<<32-e}function s(n,t,e){n.l=t.l>>>e|t.h<<32-e,n.h=t.h>>>e}function A(n,t,e){var r=(65535&t.l)+(65535&e.l),o=(t.l>>>16)+(e.l>>>16)+(r>>>16),u=(65535&t.h)+(65535&e.h)+(o>>>16),i=(t.h>>>16)+(e.h>>>16)+(u>>>16);n.l=65535&r|o<<16,n.h=65535&u|i<<16}function C(n,t,e,r,o){var u=(65535&t.l)+(65535&e.l)+(65535&r.l)+(65535&o.l),i=(t.l>>>16)+(e.l>>>16)+(r.l>>>16)+(o.l>>>16)+(u>>>16),c=(65535&t.h)+(65535&e.h)+(65535&r.h)+(65535&o.h)+(i>>>16),h=(t.h>>>16)+(e.h>>>16)+(r.h>>>16)+(o.h>>>16)+(c>>>16);n.l=65535&u|i<<16,n.h=65535&c|h<<16}function g(n,t,e,r,o,u){var i=(65535&t.l)+(65535&e.l)+(65535&r.l)+(65535&o.l)+(65535&u.l),c=(t.l>>>16)+(e.l>>>16)+(r.l>>>16)+(o.l>>>16)+(u.l>>>16)+(i>>>16),h=(65535&t.h)+(65535&e.h)+(65535&r.h)+(65535&o.h)+(65535&u.h)+(c>>>16),a=(t.h>>>16)+(e.h>>>16)+(r.h>>>16)+(o.h>>>16)+(u.h>>>16)+(h>>>16);n.l=65535&i|c<<16,n.h=65535&h|a<<16}var w,E=!(!n||"boolean"!=typeof n.uppercase)&&n.uppercase,d=n&&"string"==typeof n.pad?n.pda:"=",F=!n||"boolean"!=typeof n.utf8||n.utf8;this.hex=function(n){return h(t(n))},this.b64=function(n){return B(t(n),d)},this.any=function(n,e){return D(t(n),e)},this.raw=function(n){return t(n,F)},this.hex_hmac=function(n,t){return h(e(n,t))},this.b64_hmac=function(n,t){return B(e(n,t),d)},this.any_hmac=function(n,t,r){return D(e(n,t),r)},this.vm_test=function(){return"900150983cd24fb0d6963f7d28e17f72"===hex("abc").toLowerCase()},this.setUpperCase=function(n){return"boolean"==typeof n&&(E=n),this},this.setPad=function(n){return d=n||d,this},this.setUTF8=function(n){return"boolean"==typeof n&&(F=n),this}},RMD160:function(n){function t(n){return n=g?o(n):n,r(u(s(n),8*n.length))}function e(n,t){n=g?o(n):n,t=g?o(t):t;var e,i,c=s(n),h=Array(16),a=Array(16);for(c.length>16&&(c=u(c,8*n.length)),e=0;e<16;e+=1)h[e]=909522486^c[e],a[e]=1549556828^c[e];return i=u(h.concat(s(t)),512+8*t.length),r(u(a.concat(i),672))}function r(n){var t,e="",r=32*n.length;for(t=0;t<r;t+=8)e+=String.fromCharCode(n[t>>5]>>>t%32&255);return e}function u(n,t){var e,r,o,u,h,s,D,B,A,C,g,p,b,y,v=1732584193,m=4023233417,x=2562383102,S=271733878,_=3285377520;for(n[t>>5]|=128<<t%32,n[(t+64>>>9<<4)+14]=t,u=n.length,o=0;o<u;o+=16){for(h=C=v,s=g=m,D=p=x,B=b=S,A=y=_,r=0;r<=79;r+=1)e=i(h,a(r,s,D,B)),e=i(e,n[o+w[r]]),e=i(e,f(r)),e=i(c(e,d[r]),A),h=A,A=B,B=c(D,10),D=s,s=e,e=i(C,a(79-r,g,p,b)),e=i(e,n[o+E[r]]),e=i(e,l(r)),e=i(c(e,F[r]),y),C=y,y=b,b=c(p,10),p=g,g=e;e=i(m,i(D,b)),m=i(x,i(B,y)),x=i(S,i(A,C)),S=i(_,i(h,g)),_=i(v,i(s,p)),v=e}return[v,m,x,S,_]}function a(n,t,e,r){return 0<=n&&n<=15?t^e^r:16<=n&&n<=31?t&e|~t&r:32<=n&&n<=47?(t|~e)^r:48<=n&&n<=63?t&r|e&~r:64<=n&&n<=79?t^(e|~r):"rmd160_f: j out of range"}function f(n){return 0<=n&&n<=15?0:16<=n&&n<=31?1518500249:32<=n&&n<=47?1859775393:48<=n&&n<=63?2400959708:64<=n&&n<=79?2840853838:"rmd160_K1: j out of range"}function l(n){return 0<=n&&n<=15?1352829926:16<=n&&n<=31?1548603684:32<=n&&n<=47?1836072691:48<=n&&n<=63?2053994217:64<=n&&n<=79?0:"rmd160_K2: j out of range"}var A=!(!n||"boolean"!=typeof n.uppercase)&&n.uppercase,C=n&&"string"==typeof n.pad?n.pda:"=",g=!n||"boolean"!=typeof n.utf8||n.utf8,w=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],E=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],d=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],F=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11];this.hex=function(n){return h(t(n,g))},this.b64=function(n){return B(t(n,g),C)},this.any=function(n,e){return D(t(n,g),e)},this.raw=function(n){return t(n,g)},this.hex_hmac=function(n,t){return h(e(n,t))},this.b64_hmac=function(n,t){return B(e(n,t),C)},this.any_hmac=function(n,t,r){return D(e(n,t),r)},this.vm_test=function(){return"900150983cd24fb0d6963f7d28e17f72"===hex("abc").toLowerCase()},this.setUpperCase=function(n){return"boolean"==typeof n&&(A=n),this},this.setPad=function(n){return"undefined"!=typeof n&&(C=n),this},this.setUTF8=function(n){return"boolean"==typeof n&&(g=n),this}}},function(o,u){var i=!1;i=t,t&&"object"==typeof global&&global&&global===global.global&&(o=global),r=function(){return A}.call(t,e,t,n),!(r!==u&&(n.exports=r))}(this)}()},function(n,t){n.exports=require("child_process")},function(n,t){n.exports=require("fs")},function(n,t){n.exports=require("https")}]);