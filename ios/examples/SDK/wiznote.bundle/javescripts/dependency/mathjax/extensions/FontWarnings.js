/*
 *  /MathJax/extensions/FontWarnings.js
 *
 *  Copyright (c) 2009-2017 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function(b,d){var i="2.7.1";var a="http://www.stixfonts.org/";var f="https://github.com/mathjax/MathJax/tree/master/fonts/HTML-CSS/TeX/otf";var h=b.CombineConfig("FontWarnings",{messageStyle:{position:"fixed",bottom:"4em",left:"3em",width:"40em",border:"3px solid #880000","background-color":"#E0E0E0",color:"black",padding:"1em","font-size":"small","white-space":"normal","border-radius":".75em","-webkit-border-radius":".75em","-moz-border-radius":".75em","-khtml-border-radius":".75em","box-shadow":"4px 4px 10px #AAAAAA","-webkit-box-shadow":"4px 4px 10px #AAAAAA","-moz-box-shadow":"4px 4px 10px #AAAAAA","-khtml-box-shadow":"4px 4px 10px #AAAAAA",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=3, OffY=3, Color='gray', Positive='true')"},Message:{webFont:[["closeBox"],["webFont","MathJax is using web-based fonts to display the mathematics on this page.  These take time to download, so the page would render faster if you installed math fonts directly in your system's font folder."],["fonts"]],imageFonts:[["closeBox"],["imageFonts","MathJax is using its image fonts rather than local or web-based fonts. This will render slower than usual, and the mathematics may not print at the full resolution of your printer."],["fonts"],["webFonts"]],noFonts:[["closeBox"],["noFonts","MathJax is unable to locate a font to use to display its mathematics, and image fonts are not available, so it is falling back on generic unicode characters in hopes that your browser will be able to display them.  Some characters may not show up properly, or possibly not at all."],["fonts"],["webFonts"]]},HTML:{closeBox:[["div",{style:{position:"absolute",overflow:"hidden",top:".1em",right:".1em",border:"1px outset",width:"1em",height:"1em","text-align":"center",cursor:"pointer","background-color":"#EEEEEE",color:"#606060","border-radius":".5em","-webkit-border-radius":".5em","-moz-border-radius":".5em","-khtml-border-radius":".5em"},onclick:function(){if(c.div&&c.fade===0){if(c.timer){clearTimeout(c.timer)}c.div.style.display="none"}}},[["span",{style:{position:"relative",bottom:".2em"}},["x"]]]]],webFonts:[["p"],["webFonts","Most modern browsers allow for fonts to be downloaded over the web. Updating to a more recent version of your browser (or changing browsers) could improve the quality of the mathematics on this page."]],fonts:[["p"],["fonts","MathJax can use either the [STIX fonts](%1) or the [MathJax TeX fonts](%2).  Download and install one of those fonts to improve your MathJax experience.",a,f]],STIXfonts:[["p"],["STIXPage","This page is designed to use the [STIX fonts](%1).  Download and install those fonts to improve your MathJax experience.",a]],TeXfonts:[["p"],["TeXPage","This page is designed to use the [MathJax TeX fonts](%1).  Download and install those fonts to improve your MathJax experience.",f]]},removeAfter:12*1000,fadeoutSteps:10,fadeoutTime:1.5*1000});if(MathJax.Hub.Browser.isIE9&&document.documentMode>=9){delete h.messageStyle.filter}var c={div:null,fade:0};var e=function(m){if(c.div){return}var j=MathJax.OutputJax["HTML-CSS"],n=document.body;if(b.Browser.isMSIE){if(h.messageStyle.position==="fixed"){MathJax.Message.Init();n=document.getElementById("MathJax_MSIE_Frame")||n;if(n!==document.body){h.messageStyle.position="absolute"}}}else{delete h.messageStyle.filter}h.messageStyle.maxWidth=(document.body.clientWidth-75)+"px";var k=0;while(k<m.length){if(MathJax.Object.isArray(m[k])){if(m[k].length===1&&h.HTML[m[k][0]]){m.splice.apply(m,[k,1].concat(h.HTML[m[k][0]]))}else{if(typeof m[k][1]==="string"){var l=MathJax.Localization.lookupPhrase(["FontWarnings",m[k][0]],m[k][1]);l=MathJax.Localization.processMarkdown(l,m[k].slice(2),"FontWarnings");m.splice.apply(m,[k,1].concat(l));k+=l.length}else{k++}}}else{k++}}c.div=j.addElement(n,"div",{id:"MathJax_FontWarning",style:h.messageStyle},m);MathJax.Localization.setCSS(c.div);if(h.removeAfter){b.Register.StartupHook("End",function(){c.timer=setTimeout(g,h.removeAfter)})}d.Cookie.Set("fontWarn",{warned:true})};var g=function(){c.fade++;if(c.timer){delete c.timer}if(c.fade<h.fadeoutSteps){var j=1-c.fade/h.fadeoutSteps;c.div.style.opacity=j;c.div.style.filter="alpha(opacity="+Math.floor(100*j)+")";setTimeout(g,h.fadeoutTime/h.fadeoutSteps)}else{c.div.style.display="none"}};if(!d.Cookie.Get("fontWarn").warned){b.Startup.signal.Interest(function(m){if(m.match(/HTML-CSS Jax - /)&&!c.div){var j=MathJax.OutputJax["HTML-CSS"],n=j.config.availableFonts,l;var k=(n&&n.length);if(!k){h.HTML.fonts=[""]}else{if(n.length===1){h.HTML.fonts=h.HTML[n[0]+"fonts"]}}if(j.allowWebFonts){h.HTML.webfonts=[""]}if(m.match(/- Web-Font/)){if(k){l="webFont"}}else{if(m.match(/- using image fonts/)){l="imageFonts"}else{if(m.match(/- no valid font/)){l="noFonts"}}}if(l&&h.Message[l]){MathJax.Localization.loadDomain("FontWarnings",[e,h.Message[l]])}}})}})(MathJax.Hub,MathJax.HTML);MathJax.Ajax.loadComplete("[MathJax]/extensions/FontWarnings.js");
