"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[351],{1476:function(e,t,n){n.d(t,{zx:function(){return E}});var r=n(1725),a=n(8415),i=n(9468),o=n(1754),c=n.n(o),s=n(921),l=n(4724),u=n(9836);function d(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var m=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],f=(0,l.kr)({strict:!1,name:"ButtonGroupContext"}),h=f[0],y=f[1],v=(0,a.Gp)((function(e,t){var n=e.size,r=e.colorScheme,o=e.variant,c=e.className,l=e.spacing,u=void 0===l?"0.5rem":l,f=e.isAttached,y=e.isDisabled,v=d(e,m),g=(0,i.cx)("chakra-button__group",c),b=s.useMemo((function(){return{size:n,colorScheme:r,variant:o,isDisabled:y}}),[n,r,o,y]),T={display:"inline-flex"};return T=p({},T,f?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:u}}),s.createElement(h,{value:b},s.createElement(a.m$.div,p({ref:t,role:"group",__css:T,className:g,"data-attached":f?"":void 0},v)))}));i.Ts&&(v.displayName="ButtonGroup");var g=["label","placement","spacing","children","className","__css"],b=function(e){var t=e.label,n=e.placement,r=e.spacing,o=void 0===r?"0.5rem":r,c=e.children,l=void 0===c?s.createElement(u.$,{color:"currentColor",width:"1em",height:"1em"}):c,m=e.className,f=e.__css,h=d(e,g),y=(0,i.cx)("chakra-button__spinner",m),v="start"===n?"marginEnd":"marginStart",b=s.useMemo((function(){var e;return p(((e={display:"flex",alignItems:"center",position:t?"relative":"absolute"})[v]=t?o:0,e.fontSize="1em",e.lineHeight="normal",e),f)}),[f,t,v,o]);return s.createElement(a.m$.div,p({className:y},h,{__css:b}),l)};i.Ts&&(b.displayName="ButtonSpinner");var T=["children","className"],w=function(e){var t=e.children,n=e.className,r=d(e,T),o=s.isValidElement(t)?s.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,c=(0,i.cx)("chakra-button__icon",n);return s.createElement(a.m$.span,p({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:c}),o)};i.Ts&&(w.displayName="ButtonIcon");var x=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],E=(0,a.Gp)((function(e,t){var n,o,l,u,m=y(),f=(0,a.mq)("Button",p({},m,e)),h=(0,a.Lr)(e),v=h.isDisabled,g=void 0===v?null==m?void 0:m.isDisabled:v,T=h.isLoading,w=h.isActive,E=h.children,N=h.leftIcon,S=h.rightIcon,k=h.loadingText,_=h.iconSpacing,O=void 0===_?"0.5rem":_,A=h.type,j=h.spinner,L=h.spinnerPlacement,I=void 0===L?"start":L,P=h.className,G=h.as,R=d(h,x),B=s.useMemo((function(){var e,t=c()({},null!=(e=null==f?void 0:f._focus)?e:{},{zIndex:1});return p({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},f,!!m&&{_focus:t})}),[f,m]),W=(n=G,o=s.useState(!n),l=o[0],u=o[1],{ref:s.useCallback((function(e){e&&u("BUTTON"===e.tagName)}),[]),type:l?"button":void 0}),M=W.ref,$=W.type,D={rightIcon:S,leftIcon:N,iconSpacing:O,children:E};return s.createElement(a.m$.button,p({disabled:g||T,ref:(0,r.qq)(t,M),as:G,type:null!=A?A:$,"data-active":(0,i.PB)(w),"data-loading":(0,i.PB)(T),__css:B,className:(0,i.cx)("chakra-button",P)},R),T&&"start"===I&&s.createElement(b,{className:"chakra-button__spinner--start",label:k,placement:"start",spacing:O},j),T?k||s.createElement(a.m$.span,{opacity:0},s.createElement(C,D)):s.createElement(C,D),T&&"end"===I&&s.createElement(b,{className:"chakra-button__spinner--end",label:k,placement:"end",spacing:O},j))}));function C(e){var t=e.leftIcon,n=e.rightIcon,r=e.children,a=e.iconSpacing;return s.createElement(s.Fragment,null,t&&s.createElement(w,{marginEnd:a},t),r,n&&s.createElement(w,{marginStart:a},n))}i.Ts&&(E.displayName="Button");var N=["icon","children","isRound","aria-label"],S=(0,a.Gp)((function(e,t){var n=e.icon,r=e.children,a=e.isRound,i=e["aria-label"],o=d(e,N),c=n||r,l=s.isValidElement(c)?s.cloneElement(c,{"aria-hidden":!0,focusable:!1}):null;return s.createElement(E,p({padding:"0",borderRadius:a?"full":void 0,ref:t,"aria-label":i},o),l)}));i.Ts&&(S.displayName="IconButton")},7951:function(e,t,n){n.d(t,{JO:function(){return l},ZP:function(){return u}});var r=n(8415),a=n(9468),i=n(921);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var c=["as","viewBox","color","focusable","children","className","__css"],s={path:i.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},i.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),i.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),i.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},l=(0,r.Gp)((function(e,t){var n=e.as,l=e.viewBox,u=e.color,d=void 0===u?"currentColor":u,p=e.focusable,m=void 0!==p&&p,f=e.children,h=e.className,y=e.__css,v=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,c),g={ref:t,focusable:m,className:(0,a.cx)("chakra-icon",h),__css:o({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:d},y)},b=null!=l?l:s.viewBox;if(n&&"string"!=typeof n)return i.createElement(r.m$.svg,o({as:n},g,v));var T=null!=f?f:s.path;return i.createElement(r.m$.svg,o({verticalAlign:"middle",viewBox:b},g,v),T)}));a.Ts&&(l.displayName="Icon");var u=l},560:function(e,t,n){n.d(t,{GS:function(){return U},HC:function(){return K},P4:function(){return P},QI:function(){return Q},W2:function(){return C},X6:function(){return R},kC:function(){return O},rU:function(){return $},rj:function(){return L},xu:function(){return v},xv:function(){return se}});var r=n(8415),a=n(6007),i=n(9468),o=n(921),c=n(7951),s=n(4724);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var d=["ratio","children","className"],p=(0,r.Gp)((function(e,t){var n=e.ratio,a=void 0===n?4/3:n,c=e.children,s=e.className,p=u(e,d),m=o.Children.only(c),f=(0,i.cx)("chakra-aspect-ratio",s);return o.createElement(r.m$.div,l({ref:t,position:"relative",className:f,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(a,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},p),m)}));i.Ts&&(p.displayName="AspectRatio");var m=["className"],f=(0,r.Gp)((function(e,t){var n=(0,r.mq)("Badge",e),a=(0,r.Lr)(e);a.className;var c=u(a,m);return o.createElement(r.m$.span,l({ref:t,className:(0,i.cx)("chakra-badge",e.className)},c,{__css:l({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},n)}))}));i.Ts&&(f.displayName="Badge");var h=["size","centerContent"],y=["size"],v=(0,r.m$)("div");i.Ts&&(v.displayName="Box");var g=(0,r.Gp)((function(e,t){var n=e.size,r=e.centerContent,a=void 0===r||r,i=u(e,h),c=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return o.createElement(v,l({ref:t,boxSize:n,__css:l({},c,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(g.displayName="Square");var b=(0,r.Gp)((function(e,t){var n=e.size,r=u(e,y);return o.createElement(g,l({size:n,ref:t,borderRadius:"9999px"},r))}));i.Ts&&(b.displayName="Circle");var T=(0,r.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(T.displayName="Center");var w=["className"],x=(0,r.Gp)((function(e,t){var n=(0,r.mq)("Code",e),a=(0,r.Lr)(e);a.className;var c=u(a,w);return o.createElement(r.m$.code,l({ref:t,className:(0,i.cx)("chakra-code",e.className)},c,{__css:l({display:"inline-block"},n)}))}));i.Ts&&(x.displayName="Code");var E=["className","centerContent"],C=(0,r.Gp)((function(e,t){var n=(0,r.Lr)(e),a=n.className,c=n.centerContent,s=u(n,E),d=(0,r.mq)("Container",e);return o.createElement(r.m$.div,l({ref:t,className:(0,i.cx)("chakra-container",a)},s,{__css:l({},d,c&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(C.displayName="Container");var N=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],S=["className","orientation","__css"],k=(0,r.Gp)((function(e,t){var n=(0,r.mq)("Divider",e),a=n.borderLeftWidth,c=n.borderBottomWidth,s=n.borderTopWidth,d=n.borderRightWidth,p=n.borderWidth,m=n.borderStyle,f=n.borderColor,h=u(n,N),y=(0,r.Lr)(e),v=y.className,g=y.orientation,b=void 0===g?"horizontal":g,T=y.__css,w=u(y,S),x={vertical:{borderLeftWidth:a||d||p||"1px",height:"100%"},horizontal:{borderBottomWidth:c||s||p||"1px",width:"100%"}};return o.createElement(r.m$.hr,l({ref:t,"aria-orientation":b},w,{__css:l({},h,{border:"0",borderColor:f,borderStyle:m},x[b],T),className:(0,i.cx)("chakra-divider",v)}))}));i.Ts&&(k.displayName="Divider");var _=["direction","align","justify","wrap","basis","grow","shrink"],O=(0,r.Gp)((function(e,t){var n=e.direction,a=e.align,i=e.justify,c=e.wrap,s=e.basis,d=e.grow,p=e.shrink,m=u(e,_),f={display:"flex",flexDirection:n,alignItems:a,justifyContent:i,flexWrap:c,flexBasis:s,flexGrow:d,flexShrink:p};return o.createElement(r.m$.div,l({ref:t,__css:f},m))}));i.Ts&&(O.displayName="Flex");var A=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],j=["area","colSpan","colStart","colEnd","rowEnd","rowSpan","rowStart"],L=(0,r.Gp)((function(e,t){var n=e.templateAreas,a=e.gap,i=e.rowGap,c=e.columnGap,s=e.column,d=e.row,p=e.autoFlow,m=e.autoRows,f=e.templateRows,h=e.autoColumns,y=e.templateColumns,v=u(e,A),g={display:"grid",gridTemplateAreas:n,gridGap:a,gridRowGap:i,gridColumnGap:c,gridAutoColumns:h,gridColumn:s,gridRow:d,gridAutoFlow:p,gridAutoRows:m,gridTemplateRows:f,gridTemplateColumns:y};return o.createElement(r.m$.div,l({ref:t,__css:g},v))}));function I(e){return(0,i.XQ)(e,(function(e){return"auto"===e?"auto":"span "+e+"/span "+e}))}i.Ts&&(L.displayName="Grid");var P=(0,r.Gp)((function(e,t){var n=e.area,a=e.colSpan,c=e.colStart,s=e.colEnd,d=e.rowEnd,p=e.rowSpan,m=e.rowStart,f=u(e,j),h=(0,i.YU)({gridArea:n,gridColumn:I(a),gridRow:I(p),gridColumnStart:c,gridColumnEnd:s,gridRowStart:m,gridRowEnd:d});return o.createElement(r.m$.div,l({ref:t,__css:h},f))})),G=["className"],R=(0,r.Gp)((function(e,t){var n=(0,r.mq)("Heading",e),a=(0,r.Lr)(e);a.className;var c=u(a,G);return o.createElement(r.m$.h2,l({ref:t,className:(0,i.cx)("chakra-heading",e.className)},c,{__css:n}))}));i.Ts&&(R.displayName="Heading");var B=["className"],W=(0,r.Gp)((function(e,t){var n=(0,r.mq)("Kbd",e),a=(0,r.Lr)(e),c=a.className,s=u(a,B);return o.createElement(r.m$.kbd,l({ref:t,className:(0,i.cx)("chakra-kbd",c)},s,{__css:l({fontFamily:"mono"},n)}))}));i.Ts&&(W.displayName="Kbd");var M=["className","isExternal"],$=(0,r.Gp)((function(e,t){var n=(0,r.mq)("Link",e),a=(0,r.Lr)(e),c=a.className,s=a.isExternal,d=u(a,M);return o.createElement(r.m$.a,l({target:s?"_blank":void 0,rel:s?"noopener":void 0,ref:t,className:(0,i.cx)("chakra-link",c)},d,{__css:n}))}));i.Ts&&($.displayName="Link");var D=["children","styleType","stylePosition","spacing"],q=["as"],F=["as"],H=(0,r.eC)("List"),Y=H[0],z=H[1],X=(0,r.Gp)((function(e,t){var n,a=(0,r.jC)("List",e),i=(0,r.Lr)(e),c=i.children,d=i.styleType,p=void 0===d?"none":d,m=i.stylePosition,f=i.spacing,h=u(i,D),y=(0,s.WR)(c),v=f?((n={})["& > *:not(style) ~ *:not(style)"]={mt:f},n):{};return o.createElement(Y,{value:a},o.createElement(r.m$.ul,l({ref:t,listStyleType:p,listStylePosition:m,role:"list",__css:l({},a.container,v)},h),y))}));i.Ts&&(X.displayName="List");var U=(0,r.Gp)((function(e,t){e.as;var n=u(e,q);return o.createElement(X,l({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},n))}));i.Ts&&(U.displayName="OrderedList");var Q=(0,r.Gp)((function(e,t){e.as;var n=u(e,F);return o.createElement(X,l({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},n))}));i.Ts&&(Q.displayName="UnorderedList");var K=(0,r.Gp)((function(e,t){var n=z();return o.createElement(r.m$.li,l({ref:t},e,{__css:n.item}))}));i.Ts&&(K.displayName="ListItem");var V=(0,r.Gp)((function(e,t){var n=z();return o.createElement(c.JO,l({ref:t,role:"presentation"},e,{__css:n.icon}))}));i.Ts&&(V.displayName="ListIcon");var J=["columns","spacingX","spacingY","spacing","minChildWidth"],Z=(0,r.Gp)((function(e,t){var n,r,a=e.columns,c=e.spacingX,s=e.spacingY,d=e.spacing,p=e.minChildWidth,m=u(e,J),f=p?(r=p,(0,i.XQ)(r,(function(e){return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+(t=e,((0,i.hj)(t)?t+"px":t)+", 1fr))");var t}))):(n=a,(0,i.XQ)(n,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return o.createElement(L,l({ref:t,gap:d,columnGap:c,rowGap:s,templateColumns:f},m))}));i.Ts&&(Z.displayName="SimpleGrid");var ee=(0,r.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(ee.displayName="Spacer");var te="& > *:not(style) ~ *:not(style)";var ne=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],re=function(e){return o.createElement(r.m$.div,l({className:"chakra-stack__item"},e,{__css:l({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},ae=(0,r.Gp)((function(e,t){var n,a=e.isInline,c=e.direction,d=e.align,p=e.justify,m=e.spacing,f=void 0===m?"0.5rem":m,h=e.wrap,y=e.children,v=e.divider,g=e.className,b=e.shouldWrapChildren,T=u(e,ne),w=a?"row":null!=c?c:"column",x=o.useMemo((function(){return function(e){var t,n=e.spacing,r=e.direction,a={column:{marginTop:n,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:n},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:n,marginStart:0},"row-reverse":{marginTop:0,marginEnd:n,marginBottom:0,marginStart:0}};return(t={flexDirection:r})[te]=(0,i.XQ)(r,(function(e){return a[e]})),t}({direction:w,spacing:f})}),[w,f]),E=o.useMemo((function(){return function(e){var t=e.spacing,n=e.direction,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(n,(function(e){return r[e]}))}}({spacing:f,direction:w})}),[f,w]),C=!!v,N=!b&&!C,S=(0,s.WR)(y),k=N?S:S.map((function(e,t){var n=void 0!==e.key?e.key:t,r=t+1===S.length,a=b?o.createElement(re,{key:n},e):e;if(!C)return a;var i=r?null:o.cloneElement(v,{__css:E});return o.createElement(o.Fragment,{key:n},a,i)})),_=(0,i.cx)("chakra-stack",g);return o.createElement(r.m$.div,l({ref:t,display:"flex",alignItems:d,justifyContent:p,flexDirection:x.flexDirection,flexWrap:h,className:_,__css:C?{}:(n={},n[te]=x[te],n)},T),k)}));i.Ts&&(ae.displayName="Stack");var ie=(0,r.Gp)((function(e,t){return o.createElement(ae,l({align:"center"},e,{direction:"row",ref:t}))}));i.Ts&&(ie.displayName="HStack");var oe=(0,r.Gp)((function(e,t){return o.createElement(ae,l({align:"center"},e,{direction:"column",ref:t}))}));i.Ts&&(oe.displayName="VStack");var ce=["className","align","decoration","casing"],se=(0,r.Gp)((function(e,t){var n=(0,r.mq)("Text",e),a=(0,r.Lr)(e);a.className,a.align,a.decoration,a.casing;var c=u(a,ce),s=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return o.createElement(r.m$.p,l({ref:t,className:(0,i.cx)("chakra-text",e.className)},s,c,{__css:n}))}));i.Ts&&(se.displayName="Text");var le=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],ue=["className"];function de(e){return"number"==typeof e?e+"px":e}var pe=(0,r.Gp)((function(e,t){var n=e.spacing,c=void 0===n?"0.5rem":n,s=e.spacingX,d=e.spacingY,p=e.children,m=e.justify,f=e.direction,h=e.align,y=e.className,v=e.shouldWrapChildren,g=u(e,le),b=o.useMemo((function(){var e={spacingX:s,spacingY:d},t=e.spacingX,n=void 0===t?c:t,r=e.spacingY,o=void 0===r?c:r;return{"--chakra-wrap-x-spacing":function(e){return(0,i.XQ)(n,(function(t){return de((0,a.fr)("space",t)(e))}))},"--chakra-wrap-y-spacing":function(e){return(0,i.XQ)(o,(function(t){return de((0,a.fr)("space",t)(e))}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:m,alignItems:h,flexDirection:f,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[c,s,d,m,h,f]),T=v?o.Children.map(p,(function(e,t){return o.createElement(me,{key:t},e)})):p;return o.createElement(r.m$.div,l({ref:t,className:(0,i.cx)("chakra-wrap",y),overflow:"hidden"},g),o.createElement(r.m$.ul,{className:"chakra-wrap__list",__css:b},T))}));i.Ts&&(pe.displayName="Wrap");var me=(0,r.Gp)((function(e,t){var n=e.className,a=u(e,ue);return o.createElement(r.m$.li,l({ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",n)},a))}));i.Ts&&(me.displayName="WrapItem")},9836:function(e,t,n){n.d(t,{$:function(){return m}});var r=n(8415),a=n(9010),i=n(9468),o={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},c=(0,r.m$)("span",{baseStyle:o});i.Ts&&(c.displayName="VisuallyHidden");var s=(0,r.m$)("input",{baseStyle:o});i.Ts&&(s.displayName="VisuallyHiddenInput");var l=n(921);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var d=["label","thickness","speed","emptyColor","className"],p=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),m=(0,r.Gp)((function(e,t){var n=(0,r.mq)("Spinner",e),a=(0,r.Lr)(e),o=a.label,s=void 0===o?"Loading...":o,m=a.thickness,f=void 0===m?"2px":m,h=a.speed,y=void 0===h?"0.45s":h,v=a.emptyColor,g=void 0===v?"transparent":v,b=a.className,T=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(a,d),w=(0,i.cx)("chakra-spinner",b),x=u({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:f,borderBottomColor:g,borderLeftColor:g,animation:p+" "+y+" linear infinite"},n);return l.createElement(r.m$.div,u({ref:t,__css:x,className:w},T),s&&l.createElement(c,null,s))}));i.Ts&&(m.displayName="Spinner")},4692:function(e,t,n){var r,a=n(921),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(d,"canUseDOM",c),d}}},7725:function(e){e.exports=Object.assign},2602:function(e,t,n){n.d(t,{Z:function(){return ve}});var r,a,i,o,c=n(921),s=n(7225),l=n.n(s),u=n(4692),d=n.n(u),p=n(201),m=n.n(p),f=n(7725),h=n.n(f),y="bodyAttributes",v="htmlAttributes",g="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(b).map((function(e){return b[e]})),"charset"),w="cssText",x="href",E="http-equiv",C="innerHTML",N="itemprop",S="name",k="property",_="rel",O="src",A="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",P="encodeSpecialCharacters",G="onChangeClientState",R="titleTemplate",B=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),W=[b.NOSCRIPT,b.SCRIPT,b.STYLE],M="data-react-helmet",$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},X=function(e){var t=J(e,b.TITLE),n=J(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,L);return t||r||void 0},U=function(e){return J(e,G)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},V=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+$(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||n===_&&"canonical"===e[n].toLowerCase()||s===_&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==C&&c!==w&&c!==N||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=h()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Z=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:n.g.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;se(b.BODY,r),se(b.HTML,a),ce(d,p);var m={baseTag:le(b.BASE,n),linkTags:le(b.LINK,i),metaTags:le(b.META,o),noscriptTags:le(b.NOSCRIPT,c),scriptTags:le(b.SCRIPT,l),styleTags:le(b.STYLE,u)},f={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),s(e,f,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(b.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(M),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);a.length===i.length?n.removeAttribute(M):n.getAttribute(M)!==o.join(",")&&n.setAttribute(M,o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(M,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[M]=!0,a=de(n,r),[c.createElement(b.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+z(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[M]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+z(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===W.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:pe(b.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(v,a,r),link:pe(b.LINK,i,r),meta:pe(b.META,o,r),noscript:pe(b.NOSCRIPT,c,r),script:pe(b.SCRIPT,s,r),style:pe(b.STYLE,l,r),title:pe(b.TITLE,{title:d,titleAttributes:p},r)}},fe=d()((function(e){return{baseTag:K([x,A],e),bodyAttributes:Q(y,e),defer:J(e,I),encode:J(e,P),htmlAttributes:Q(v,e),linkTags:V(b.LINK,[_,x],e),metaTags:V(b.META,[S,T,E,k,N],e),noscriptTags:V(b.NOSCRIPT,[C],e),onChangeClientState:U(e),scriptTags:V(b.SCRIPT,[O,C],e),styleTags:V(b.STYLE,[w],e),title:X(e),titleAttributes:Q(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),me)((function(){return null})),he=(a=fe,o=i=function(e){function t(){return D(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return F({},r,((t={})[n.type]=[].concat(r[n.type]||[],[F({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case b.TITLE:return F({},a,((t={})[r.type]=o,t.titleAttributes=F({},i),t));case b.BODY:return F({},a,{bodyAttributes:F({},i)});case b.HTML:return F({},a,{htmlAttributes:F({},i)})}return F({},a,((n={})[r.type]=F({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=F({},t);return Object.keys(e).forEach((function(t){var r;n=F({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(H(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),r=F({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ye=n(7749),ve=function(e){var t,n,r,a,i=e.description,o=void 0===i?"":i,s=e.lang,l=e.meta,u=void 0===l?[]:l,d=e.title,p=void 0===d?"DatPayments Blog":d,m=(0,ye.useStaticQuery)("2841359383").site,f=o||(null==m||null===(t=m.siteMetadata)||void 0===t?void 0:t.description),h=null==m||null===(n=m.siteMetadata)||void 0===n?void 0:n.title,y=[{name:"description",content:f||void 0},{property:"og:title",content:p||void 0},{property:"og:description",content:f||void 0},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null==m||null===(r=m.siteMetadata)||void 0===r||null===(a=r.social)||void 0===a?void 0:a.twitter)||""},{name:"twitter:title",content:p||void 0},{name:"twitter:description",content:f||void 0}];return c.createElement(he,{htmlAttributes:{lang:s||"en"},title:p||void 0,titleTemplate:h?"%s | "+h:void 0,meta:y.concat(u||[])})}}}]);
//# sourceMappingURL=commons-e40e481292d924e977c9.js.map