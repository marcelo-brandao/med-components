import{j as t}from"./p-8c48408a.js";import"./p-57a37da4.js";import{createGesture as o}from"./p-2382bb77.js";const r=(r,e,s,a,n)=>{const p=r.ownerDocument.defaultView;return o({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&e(),onStart:s,onMove:t=>{a(t.deltaX/p.innerWidth)},onEnd:o=>{const r=p.innerWidth,e=o.deltaX/r,s=o.velocityX,a=s>=0&&(s>.2||o.deltaX>r/2),c=(a?1-e:e)*r;let i=0;if(c>5){const t=c/Math.abs(s);i=Math.min(t,540)}n(a,e<=0?.01:t(0,e,.9999),i)}})};export{r as createSwipeBackGesture}