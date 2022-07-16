"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[790],{8493:function(e,t,r){r.d(t,{Ee:function(){return g}});var a=r(8415),n=r(9468),i=r(921),o=r(4347);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}var c=["htmlWidth","htmlHeight","alt"],u=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],d=i.forwardRef((function(e,t){var r=e.htmlWidth,a=e.htmlHeight,n=e.alt,o=s(e,c);return i.createElement("img",l({width:r,height:a,ref:t,alt:n},o))})),g=(0,a.Gp)((function(e,t){var r=e.fallbackSrc,c=e.fallback,g=e.src,m=e.srcSet,f=e.align,p=e.fit,h=e.loading,v=e.ignoreFallback,y=e.crossOrigin,b=e.fallbackStrategy,w=void 0===b?"beforeLoadOrError":b,E=e.referrerPolicy,x=s(e,u),k=null!=h||v||!(void 0!==r||void 0!==c),L=function(e){var t=e.loading,r=e.src,a=e.srcSet,n=e.onLoad,l=e.onError,s=e.crossOrigin,c=e.sizes,u=e.ignoreFallback,d=(0,i.useState)("pending"),g=d[0],m=d[1];(0,i.useEffect)((function(){m(r?"loading":"pending")}),[r]);var f=(0,i.useRef)(),p=(0,i.useCallback)((function(){if(r){h();var e=new Image;e.src=r,s&&(e.crossOrigin=s),a&&(e.srcset=a),c&&(e.sizes=c),t&&(e.loading=t),e.onload=function(e){h(),m("loaded"),null==n||n(e)},e.onerror=function(e){h(),m("failed"),null==l||l(e)},f.current=e}}),[r,s,a,c,n,l,t]),h=function(){f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,o.a)((function(){if(!u)return"loading"===g&&p(),function(){h()}}),[g,p,u]),u?"loaded":g}(l({},e,{ignoreFallback:k})),C=function(e,t){return"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t}(L,w),S=l({ref:t,objectFit:p,objectPosition:f},k?x:(0,n.CE)(x,["onError","onLoad"]));return C?c||i.createElement(a.m$.img,l({as:d,className:"chakra-image__placeholder",src:r},S)):i.createElement(a.m$.img,l({as:d,src:g,srcSet:m,crossOrigin:y,loading:h,referrerPolicy:E,className:"chakra-image"},S))}));n.Ts&&(g.displayName="Image")},6962:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},6931:function(e,t,r){r.d(t,{G:function(){return A},L:function(){return f},M:function(){return E},P:function(){return w},S:function(){return q},_:function(){return l},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return s}});var a=r(921),n=(r(6962),r(7225)),i=r.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,i,l,s){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,g=["children"],m=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,r=l(e,g);return a.createElement(a.Fragment,null,a.createElement(m,o({},r)),t,null)},p=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=l(e,p);return a.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:s}))},y=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,s=void 0===i||i,c=l(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(v,o({},c,t,{sizes:u,shouldLoad:s}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:s?r:void 0,"data-srcset":s?void 0:r,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],w=function(e){var t=e.fallback,r=l(e,b);return t?a.createElement(y,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(d=y.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return a.createElement(a.Fragment,null,a.createElement(y,o({},e)),a.createElement("noscript",null,a.createElement(y,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;var x,k,L=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:L},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],I=new Set,T=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,g=e.class,m=e.onStartLoad,f=e.onLoad,p=e.onError,h=l(e,S),v=i.width,y=i.height,b=i.layout,w=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(v,y,b),E=w.style,L=w.className,C=l(w,O),T=(0,a.useRef)(),A=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);g&&(d=g);var _=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,v,y);return(0,a.useEffect)((function(){x||(x=Promise.all([r.e(774),r.e(895)]).then(r.bind(r,6895)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=T.current.querySelector("[data-gatsby-image-ssr]");return a&&s()?(a.complete?(null==m||m({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==m||m({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)})),void I.add(A)):k&&I.has(A)?void 0:(x.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;T.current&&(T.current.innerHTML=a(o({isLoading:!0,isLoaded:I.has(A),image:i},h)),I.has(A)||(e=requestAnimationFrame((function(){T.current&&(t=n(T.current,A,I,c,m,f,p))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){I.has(A)&&k&&(T.current.innerHTML=k(o({isLoading:I.has(A),isLoaded:I.has(A),image:i},h)),null==m||m({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},C,{style:o({},E,c,{backgroundColor:u}),className:L+(d?" "+d:""),ref:T,dangerouslySetInnerHTML:{__html:_},suppressHydrationWarning:!0}))},A=(0,a.memo)((function(e){return e.image?(0,a.createElement)(T,e):null}));A.propTypes=C,A.displayName="GatsbyImage";var _,z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],j=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),N={src:i().string.isRequired,alt:L,width:j,height:j,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(_=A,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=l(e,z);return n&&console.warn(n),r?a.createElement(_,o({image:r},i)):(console.warn("Image not loaded",t),null)});q.displayName="StaticImage",q.propTypes=N},130:function(e,t,r){r.d(t,{R:function(){return u}});var a=r(4629),n=r(560),i=r(8493),o=r(6931),l=r(7749),s=r(921),c=r(6794);function u(e){var t,r,u,d,g,m,f,p=e.post,h=(0,a.ff)("blackAlpha.50","whiteAlpha.100"),v=null===(t=p.frontmatter)||void 0===t||null===(r=t.heroImageFile)||void 0===r||null===(u=r.childImageSharp)||void 0===u?void 0:u.gatsbyImageData,y=null===(d=p.frontmatter)||void 0===d?void 0:d.heroImageLink,b="/"+p.slug||0;return s.createElement(n.xu,{sx:{transition:"transform .2s ease",_hover:{transform:"translateY(-4px)"}},cursor:"pointer",position:"relative"},s.createElement(n.rU,{as:l.Link,to:b,position:"absolute",top:"0",bottom:"0",right:"0",left:"0",zIndex:"1"}),s.createElement(n.xu,{roundedTop:"xl",overflow:"hidden"},y&&s.createElement(i.Ee,{src:y,alt:(null===(g=p.frontmatter)||void 0===g?void 0:g.heroImageAlt)||"",objectFit:"cover",height:"200px",w:"100%"}),!y&&v&&s.createElement(o.G,{objectFit:"cover",style:{height:"200px",width:"100%"},image:v,alt:(null===(m=p.frontmatter)||void 0===m?void 0:m.heroImageAlt)||""})),s.createElement(n.xu,{bg:h,p:8,roundedBottom:"xl",roundedTop:y||v?void 0:"xl"},s.createElement(n.X6,{as:"h3",fontSize:"3xl",mb:"3"},null===(f=p.frontmatter)||void 0===f?void 0:f.title),s.createElement(n.xu,{textDecoration:"none"},s.createElement(c.l,{post:p}))))}},7246:function(e,t,r){var a=r(921),n=r(7749),i=r(4629),o=r(560),l=r(1476);t.Z=function(e){var t,r,s=e.location,c=e.title,u=e.children,d=(0,i.If)(),g=d.colorMode,m=d.toggleColorMode,f=(0,i.ff)("blackAlpha.600","whiteAlpha.500"),p="/blog/"===s.pathname,h=(0,n.useStaticQuery)("864671932");return a.createElement(o.W2,{maxW:"container.xl","data-is-root-path":p},a.createElement(o.xu,{as:"header",mb:"12"},a.createElement(o.X6,{as:"h1",textAlign:"center",size:"4xl",my:"12"},a.createElement(o.rU,{as:n.Link,to:"/",id:"blog-title"},c),a.createElement(l.zx,{onClick:m,ml:"4",variant:"outline"},"light"===g?"🌙":"💡"))),a.createElement(o.xu,{as:"main",my:"12"},u),a.createElement(o.xu,{as:"footer",mt:"12",mb:"12",color:f},"© ",(new Date).getFullYear(),", ",null===(t=h.site)||void 0===t||null===(r=t.siteMetadata)||void 0===r?void 0:r.copyright,a.createElement("br",null),a.createElement(o.rU,{href:"https://github.com/fastup-kit",textDecoration:"underline"},"Built with OpenSource")))}},6794:function(e,t,r){r.d(t,{l:function(){return o}});var a=r(4629),n=r(560),i=r(921);function o(e){var t,r,o=e.post,l=(0,a.ff)("gray.300","whiteAlpha.200"),s=null===(t=o.frontmatter)||void 0===t?void 0:t.tag,c=(null==o?void 0:o.timeToRead)||0;return i.createElement(n.xu,null,s&&i.createElement(n.xv,{px:"1.5",py:"1",as:"span",fontSize:"sm",bg:l,rounded:"md"},s),s&&" · ",null===(r=o.frontmatter)||void 0===r?void 0:r.date,c>0?" · "+c+" min read":"")}}}]);
//# sourceMappingURL=022d3153bf09c36cd784dcdb36ffbd187f9c96d7-f3b62fd9a26c7a403b85.js.map