/*! npm.im/intrinsic-scale */
!function(i){"use strict";function n(i){return function(n,t,c,r){var e,s,u=c/r,a=n/t;return(i?u>a:u<a)?(e=n,s=e/u):(s=t,e=s*u),{width:e,height:s,x:(n-e)/2,y:(t-s)/2}}}var t=n(!0),c=n(!1);i.contain=t,i.cover=c}(this.intrinsicScale=this.intrinsicScale||{});