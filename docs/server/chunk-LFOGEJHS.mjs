import './polyfills.server.mjs';
import{A as w,D as I,F as A,G as E,J as F,N as T,Q as j,a as f,b as C,c as _,d as x,e as b,f as M,g as c,h as m,i as d,j as u,k as h,l as v,m as l,n as r,o as s,p as O,q as P,r as g,s as k,t as p,u as y,v as S}from"./chunk-OOL5T2DC.mjs";var z=(()=>{let t=class t{constructor(){}getStages(){let i=[];for(let n=0;n<10;n++){let a={id:n+1,title:this.getStageTitle(n),description:"lorem ipsum"+(n+1),visible:n==0,active:n==0};i.push(a)}return i}getStageTitle(i){return["\u041F\u0440\u043E\u0435\u043A\u0442","1 \u043F\u043E\u0432\u0435\u0440\u0445","2 \u043F\u043E\u0432\u0435\u0440\u0445","3 \u043F\u043E\u0432\u0435\u0440\u0445","4 \u043F\u043E\u0432\u0435\u0440\u0445","\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0438\u0439 \u043F\u043E\u0432\u0435\u0440\u0445","\u0434\u0432\u0435\u0440\u0456","\u0432\u0456\u043A\u043D\u0430","\u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u0456 \u043A\u043E\u043C\u0443\u043D\u0456\u043A\u0430\u0446\u0456\u0457","\u0437\u043E\u0432\u043D\u0456\u0448\u043D\u0456 \u043A\u043E\u043C\u0443\u043D\u0456\u043A\u0430\u0446\u0456\u0457"][i].toString()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function H(e,t){if(e&1&&s(0,"img",7),e&2){let o=g().$implicit,i=g();k("src","/images/",i.pad(o.id),".png",M)}}function V(e,t){if(e&1&&m(0,H,1,2,"img",7),e&2){let o=t.$implicit;d(o.visible?0:-1)}}function Z(e,t){e&1&&(l(0,"span",9),p(1,"+"),r())}function q(e,t){if(e&1){let o=O();l(0,"h6",8),P("click",function(){let n=x(o).$implicit,a=g();return b(a.selectStage(n.id))}),m(1,Z,2,0,"span",9),p(2),r()}if(e&2){let o=t.$implicit;c(),d(o.active?1:-1),c(),y(" ",o.title," ")}}var U=(()=>{let t=class t{constructor(){this.title="building-progress",this.stages=[],this.buildingService=C(z),this.currentStage=1}ngOnInit(){this.stages=this.buildingService.getStages()}pad(i){var n="000"+i;return n.substr(n.length-3)}selectStage(i){this.stages.forEach(n=>{n.visible=n.id<=i,n.active=n.id==i})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=_({type:t,selectors:[["app-root"]],standalone:!0,features:[S],decls:15,vars:0,consts:[[1,"main"],[1,"content"],[1,"left-side"],[1,"building"],["role","separator","aria-label","Divider",1,"divider"],[1,"right-side"],[2,"position","relative"],["alt","",3,"src"],[2,"position","relative",3,"click"],[2,"position","absolute","left","-20px"]],template:function(n,a){n&1&&(l(0,"main",0)(1,"div",1)(2,"div",2)(3,"h2"),p(4,"\u0412\u0456\u0437\u0443\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u0445\u043E\u0434\u0443 \u0431\u0443\u0434\u0456\u0432\u043D\u0438\u0446\u0442\u0432\u0430"),r(),l(5,"div",3),h(6,V,1,1,null,null,u),r()(),s(8,"div",4),l(9,"div",5)(10,"h2"),p(11,"\u0421\u0442\u0430\u0434\u0456\u0457"),r(),h(12,q,3,2,"h6",6,u),r()()(),s(14,"router-outlet")),n&2&&(c(6),v(a.stages),c(6),v(a.stages))},dependencies:[T],styles:[".building[_ngcontent-%COMP%]{width:700px;height:700px;position:relative}.building[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;width:100%}",`[_nghost-%COMP%] {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1[_ngcontent-%COMP%] {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p[_ngcontent-%COMP%] {
    margin: 0;
    color: var(--gray-700);
  }

  main[_ngcontent-%COMP%] {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo[_ngcontent-%COMP%] {
    max-width: 9.2rem;
  }

  .content[_ngcontent-%COMP%] {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
    margin-top: 1.75rem;
  }

  .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    margin-top: 1.5rem;
  }

  .divider[_ngcontent-%COMP%] {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group[_ngcontent-%COMP%] {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill[_ngcontent-%COMP%]:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 3), 
   .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 4), 
   .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {
    margin-inline-start: 0.25rem;
  }

  .social-links[_ngcontent-%COMP%] {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {
    fill: var(--gray-900);
  }
  .right-side[_ngcontent-%COMP%] {
    min-width: 160px;
  }
  @media screen and (max-width: 650px) {
    .content[_ngcontent-%COMP%] {
      flex-direction: column;
      width: max-content;
    }

    .divider[_ngcontent-%COMP%] {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }`]});let e=t;return e})();var B=[];var D={providers:[w({eventCoalescing:!0}),j(B),E()]};var G={providers:[F()]},R=I(D,G);var J=()=>A(U,R),dn=J;export{dn as a};
