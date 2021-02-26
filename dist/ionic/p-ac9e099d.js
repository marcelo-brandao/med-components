import{G as e}from"./p-e89eb2f9.js";export{G as GESTURE_CONTROLLER}from"./p-e89eb2f9.js";const t=(e,t,n,r)=>{const s=o(e)?{capture:!!r.capture,passive:!!r.passive}:!!r.capture;let i,c;return e.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",c="__zone_symbol__removeEventListener"):(i="addEventListener",c="removeEventListener"),e[i](t,n,s),()=>{e[c](t,n,s)}},o=e=>{if(void 0===n)try{const t=Object.defineProperty({},"passive",{get:()=>{n=!0}});e.addEventListener("optsTest",()=>{},t)}catch(t){n=!1}return!!n};let n;const r=e=>e instanceof Document?e:e.ownerDocument,s=o=>{let n=!1,s=!1,u=!0,d=!1;const l=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},o),v=l.canStart,m=l.onWillStart,p=l.onStart,f=l.onEnd,y=l.notCaptured,_=l.onMove,b=l.threshold,h=l.passive,E=l.blurOnStart,L={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},x=((e,t,o)=>{const n=o*(Math.PI/180),r="x"===e,s=Math.cos(n),i=t*t;let c=0,a=0,u=!1,d=0;return{start(e,t){c=e,a=t,d=0,u=!0},detect(e,t){if(!u)return!1;const o=e-c,n=t-a,l=o*o+n*n;if(l<i)return!1;const v=Math.sqrt(l),m=(r?o:n)/v;return d=m>s?1:m<-s?-1:0,u=!1,!0},isGesture:()=>0!==d,getDirection:()=>d}})(l.direction,l.threshold,l.maxAngle),D=e.createGesture({name:o.gestureName,priority:o.gesturePriority,disableScroll:o.disableScroll}),T=()=>{n&&(d=!1,_&&_(L))},g=()=>!(D&&!D.capture()||(n=!0,u=!1,L.startX=L.currentX,L.startY=L.currentY,L.startTime=L.currentTime,m?m(L).then(j):j(),0)),j=()=>{E&&(()=>{if("undefined"!=typeof document){const e=document.activeElement;null!==e&&e.blur&&e.blur()}})(),p&&p(L),u=!0},G=()=>{n=!1,s=!1,d=!1,u=!0,D.release()},O=e=>{const t=n,o=u;G(),o&&(i(L,e),t?f&&f(L):y&&y(L))},X=((e,o,n,s,i)=>{let c,a,u,d,l,v,m,p=0;const f=r=>{p=Date.now()+2e3,o(r)&&(!a&&n&&(a=t(e,"touchmove",n,i)),u||(u=t(e,"touchend",_,i)),d||(d=t(e,"touchcancel",_,i)))},y=s=>{p>Date.now()||o(s)&&(!v&&n&&(v=t(r(e),"mousemove",n,i)),m||(m=t(r(e),"mouseup",b,i)))},_=e=>{h(),s&&s(e)},b=e=>{E(),s&&s(e)},h=()=>{a&&a(),u&&u(),d&&d(),a=u=d=void 0},E=()=>{v&&v(),m&&m(),v=m=void 0},L=()=>{h(),E()},x=(o=!0)=>{o?(c||(c=t(e,"touchstart",f,i)),l||(l=t(e,"mousedown",y,i))):(c&&c(),l&&l(),c=l=void 0,L())};return{enable:x,stop:L,destroy:()=>{x(!1),s=n=o=void 0}}})(l.el,e=>{const t=a(e);return!(s||!u)&&(c(e,L),L.startX=L.currentX,L.startY=L.currentY,L.startTime=L.currentTime=t,L.velocityX=L.velocityY=L.deltaX=L.deltaY=0,L.event=e,(!v||!1!==v(L))&&(D.release(),!!D.start()&&(s=!0,0===b?g():(x.start(L.startX,L.startY),!0))))},e=>{n?!d&&u&&(d=!0,i(L,e),requestAnimationFrame(T)):(i(L,e),x.detect(L.currentX,L.currentY)&&(x.isGesture()&&g()||Y()))},O,{capture:!1,passive:h}),Y=()=>{G(),X.stop(),y&&y(L)};return{enable(e=!0){e||(n&&O(void 0),G()),X.enable(e)},destroy(){D.destroy(),X.destroy()}}},i=(e,t)=>{if(!t)return;const o=e.currentX,n=e.currentY,r=e.currentTime;c(t,e);const s=e.currentX,i=e.currentY,u=(e.currentTime=a(t))-r;if(u>0&&u<100){const t=(i-n)/u;e.velocityX=(s-o)/u*.7+.3*e.velocityX,e.velocityY=.7*t+.3*e.velocityY}e.deltaX=s-e.startX,e.deltaY=i-e.startY,e.event=t},c=(e,t)=>{let o=0,n=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];o=e.clientX,n=e.clientY}else void 0!==e.pageX&&(o=e.pageX,n=e.pageY)}t.currentX=o,t.currentY=n},a=e=>e.timeStamp||Date.now();export{s as createGesture}