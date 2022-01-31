(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1155:function(t,e,n){"use strict";n.r(e);n(28),n(127),n(40),n(256),n(857),n(177),n(696),n(391),n(707),n(34),n(128),n(153),n(61),n(47);var r=n(3),l=n(694),o={components:{ICountUp:n.n(l).a},head:function(){return{title:"Distribution"}},data:function(){return{loading:!0,balances:[],claims:{},totalFees:null,lastCycleTotalFees:null,lastCycleTotalWeight:null,lastCycleUserWeight:null,efxToken:"EFX",isTestnet:"eos.greymass.com".includes("kylin"),cycleOverride:null,accountOverride:null,claimOverride:null}},computed:{accountName:function(){return this.accountOverride?this.accountOverride:this.$wallet&&this.$wallet.wallet?this.$wallet.wallet.auth.accountName:null},distributionBalances:function(){return this.balances.reverse()},lastCycleId:function(){return this.cycleOverride?this.cycleOverride:this.$dao.cycleConfig?this.$dao.cycleConfig.id-1:null},lastCycleUserFees:function(){return this.lastCycleTotalFees>0&&this.lastCycleUserWeight>0?Math.trunc(1e4*this.lastCycleTotalFees/this.lastCycleTotalWeight)/1e4*this.lastCycleUserWeight:0},lastCycleUserShare:function(){return this.lastCycleUserFees>0?(this.lastCycleUserWeight/this.lastCycleTotalWeight*100).toFixed(2):0},canClaim:function(){return this.claimOverride?this.claimOverride:!this.claims[this.lastCycleId]&&this.lastCycleUserFees>0&&isFinite(this.lastCycleUserFees)},q1q2Airdrop:function(){return this.$wallet.q1q2Airdrop},genesisAirdrop:function(){return this.$wallet.genesisAirdrop}},watch:{accountName:function(){this.init()},lastCycleId:function(){this.init()}},created:function(){this.init()},methods:{init:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,t.lastCycleId){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,t.$eos.rpc.get_table_rows({code:"feepool.efx",scope:"feepool.efx",table:"balance",limit:50});case 5:if(!((n=e.sent)&&n.rows.length>0)){e.next=17;break}return t.balances=n.rows,t.getClaims(t.balances),e.next=11,t.$eos.rpc.get_table_rows({code:"daoproposals",scope:"daoproposals",table:"cycle",lower_bound:t.lastCycleId,upper_bound:t.lastCycleId});case 11:return(r=e.sent)&&r.rows.length>0&&(t.lastCycleTotalWeight=r.rows[0].total_vote_weight),e.next=15,t.$eos.rpc.get_table_rows({code:"daoproposals",scope:"daoproposals",table:"proposal",key_type:"i64",index_position:3,lower_bound:t.lastCycleId,upper_bound:t.lastCycleId,limit:50});case 15:(l=e.sent)&&l.rows.length>0&&(o=l.rows.map((function(t){return t.id})),t.getLastCycleUserWeight(o));case 17:t.calculateFees(),t.loading=!1;case 19:case"end":return e.stop()}}),e)})))()},calculateFees:function(){var t=this;this.totalFees=Object.values(this.balances).reduce((function(e,n){if(n.balance.length>0)return n.cycle_id===t.lastCycleId&&(t.lastCycleTotalFees=n.balance[0].value/1e4),e+n.balance[0].value/1e4}),0)},getLastCycleUserWeight:function(t){var e=this;this.lastCycleUserWeight=0,this.accountName&&t.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$helpers.getCompositeKey(e.accountName,n),t.next=3,e.$eos.rpc.get_table_rows({code:"daoproposals",scope:"daoproposals",table:"vote",index_position:2,key_type:"i128",lower_bound:r,upper_bound:r});case 3:(l=t.sent)&&l.rows.length>0&&(e.lastCycleUserWeight+=l.rows[0].weight);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getClaims:function(t){var e=this;this.accountName&&t.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$helpers.getCompositeKey(e.accountName,n.cycle_id),t.next=3,e.$eos.rpc.get_table_rows({code:"feepool.efx",scope:"feepool.efx",table:"claim",index_position:2,key_type:"i128",lower_bound:r,upper_bound:r});case 3:(l=t.sent)&&l.rows.length>0&&l.rows.map((function(t){e.claims[t.cycle_id]=parseFloat(t.amounts[0].quantity.replace(" ".concat("EFX"),""))}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getUserCycleClaim:function(t){return this.claims[t]?this.claims[t]:0},addStakeActions:function(t){return this.$wallet.efxStaked>0?t.push({account:"efxstakepool",name:"claim",authorization:[{actor:this.$wallet.wallet.auth.accountName,permission:this.$wallet.wallet.auth.permission}],data:{owner:this.$wallet.wallet.auth.accountName,symbol:"4,".concat("EFX")}}):t.push({account:"efxstakepool",name:"open",authorization:[{actor:this.$wallet.wallet.auth.accountName,permission:this.$wallet.wallet.auth.permission}],data:{owner:this.$wallet.wallet.auth.accountName,symbol:"4,".concat("EFX"),ram_payer:this.$wallet.wallet.auth.accountName}}),t.push({account:"effecttokens",name:"transfer",authorization:[{actor:this.$wallet.wallet.auth.accountName,permission:this.$wallet.wallet.auth.permission}],data:{from:this.$wallet.wallet.auth.accountName,to:"efxstakepool",quantity:"".concat(Number.parseFloat(this.lastCycleUserFees).toFixed(4)," ").concat("EFX"),memo:"stake"}}),t},claimRewards:function(t){var e=this;this.loading=!0;var n=[{account:"feepool.efx",name:"claimreward",authorization:[{actor:this.$wallet.wallet.auth.accountName,permission:this.$wallet.wallet.auth.permission}],data:{account:this.$wallet.wallet.auth.accountName}}];t&&(n=this.addStakeActions(n)),this.$wallet.handleTransaction(n).then((function(){setTimeout(e.init,3e3)})).catch((function(){e.loading=!1}))}}},c=(n(858),n(25)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"columns stakes is-multiline mt-5"},[n("div",{staticClass:"column is-half"},[n("div",{staticClass:"box"},[n("h5",{staticClass:"subtitle box-title"},[t._v("\n          Your Share\n        ")]),t._v(" "),t.accountName?n("div",{staticClass:"has-text-centered"},[n("div",{staticClass:"has-text-centered"},[n("h3",{staticClass:"subtitle is-3 has-text-weight-bold"},[isFinite(t.lastCycleUserFees)?n("ICountUp",{attrs:{"end-val":t.lastCycleUserFees}}):n("span",[t._v("...")]),t._v(" "),n("span",{staticClass:"symbol"},[t._v(t._s(t.efxToken))])],1),t._v(" "),isFinite(t.lastCycleUserFees)?n("h6",[t._v("\n              "+t._s(t.lastCycleUserShare)+"% of pool\n            ")]):t._e()]),t._v(" "),t.getUserCycleClaim(t.lastCycleId)>0?n("div",{staticClass:"claimed has-text-success"},[t._v("\n            You successfully claimed your share for this cycle!\n          ")]):n("div",{staticClass:"buttons"},[n("button",{staticClass:"button is-primary is-fullwidth rainbow-btn",class:{"is-loading":t.loading},attrs:{disabled:!t.canClaim},on:{click:function(e){return t.claimRewards(!0)}}},[t._v("\n              Claim & Stake Rewards\n            ")]),t._v(" "),n("button",{staticClass:"button is-fullwidth is-text is-small mb-4",class:{"is-loading":t.loading},staticStyle:{"margin-top":"2px"},attrs:{disabled:!t.canClaim},on:{click:function(e){return t.claimRewards(!1)}}},[t._v("\n              or claim without staking\n            ")])])]):n("div",{staticClass:"has-text-centered"},[n("br"),t._v(" "),n("a",{staticClass:"button is-primary",on:{click:function(e){t.$wallet.loginModal=!0}}},[n("strong",[t._v("Connect Wallet")])])])])]),t._v(" "),n("div",{staticClass:"column is-half"},[n("div",{staticClass:"box"},[n("h5",{staticClass:"subtitle box-title"},[t._v("\n          Cycle "+t._s(t.lastCycleId)+": Total Fees\n        ")]),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("h3",{staticClass:"subtitle is-3 has-text-weight-bold"},[null!==t.lastCycleTotalFees?n("ICountUp",{attrs:{"end-val":t.lastCycleTotalFees}}):n("span",[t._v("...")]),t._v(" "),n("span",{staticClass:"symbol"},[t._v(t._s(t.efxToken))])],1)]),t._v(" "),n("h5",{staticClass:"subtitle box-title mt-6"},[t._v("\n          Cycle "+t._s(t.lastCycleId)+": Total Vote Weight\n        ")]),t._v(" "),n("div",{staticClass:"has-text-centered"},[n("h3",{staticClass:"subtitle has-text-weight-bold is-4"},[null!==t.lastCycleTotalWeight?n("ICountUp",{attrs:{"end-val":t.lastCycleTotalWeight}}):n("span",[t._v("...")])],1)])])]),t._v(" "),n("div",{staticClass:"column is-full"},[n("div",{staticClass:"box"},[n("h5",{staticClass:"subtitle box-title"},[t._v("\n          Cycle Distribution History\n        ")]),t._v(" "),n("div",[n("table",{staticClass:"table"},[t._m(0),t._v(" "),n("tbody",t._l(t.distributionBalances,(function(e){return n("tr",{key:e.cycle_id},[n("td",[t._v(t._s(e.cycle_id))]),t._v(" "),n("td",[e.balance.length>0?n("span",[t._v("\n                    "+t._s(e.balance[0].value/1e4)+" "+t._s(t.efxToken)+"\n                  ")]):t._e()]),t._v(" "),e.cycle_id>t.lastCycleId?n("td",[t._v("\n                  Can be claimed in next cycle\n                ")]):t.getUserCycleClaim(e.cycle_id)>0?n("td",[t._v("\n                  "+t._s(t.getUserCycleClaim(e.cycle_id))+" "+t._s(t.efxToken)+"\n                ")]):n("td",[t._v("\n                  -\n                ")])])})),0)])]),t._v(" "),n("h5",{staticClass:"subtitle box-title"},[t._v("\n          Other Distribution History\n        ")]),t._v(" "),n("div",[n("table",{staticClass:"table"},[t._m(1),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Effect Network Fee Distribution III")]),t._v(" "),n("td",[t._v(t._s(t.q1q2Airdrop.toFixed(0))+" EFX")])]),t._v(" "),n("tr",[n("td",[t._v("Effect Network Fee Distribution II")]),t._v(" "),n("td",[t._v(t._s(t.genesisAirdrop.toFixed(0))+" EFX")])]),t._v(" "),n("tr",[n("td",[t._v("Effect Network Fee Distribution")]),t._v(" "),n("td",[t._v(t._s(t.genesisAirdrop.toFixed(0))+" EFX")])])])])])])])]),t._v(" "),t.isTestnet?n("form",[n("h4",[t._v("Dev tools (override)")]),t._v(" "),n("label",{attrs:{for:"cycle"}},[t._v("LastCycleId")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.cycleOverride,expression:"cycleOverride"}],attrs:{id:"cycle",type:"number"},domProps:{value:t.cycleOverride},on:{input:function(e){e.target.composing||(t.cycleOverride=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("label",{attrs:{for:"account"}},[t._v("accountName")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.accountOverride,expression:"accountOverride"}],attrs:{id:"account",type:"text"},domProps:{value:t.accountOverride},on:{input:function(e){e.target.composing||(t.accountOverride=e.target.value)}}}),t._v(" "),n("br"),t._v(" "),n("label",{attrs:{for:"claim"}},[t._v("canClaim")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.claimOverride,expression:"claimOverride"}],attrs:{id:"claim",type:"checkbox"},domProps:{checked:Array.isArray(t.claimOverride)?t._i(t.claimOverride,null)>-1:t.claimOverride},on:{change:function(e){var n=t.claimOverride,r=e.target,l=!!r.checked;if(Array.isArray(n)){var o=t._i(n,null);r.checked?o<0&&(t.claimOverride=n.concat([null])):o>-1&&(t.claimOverride=n.slice(0,o).concat(n.slice(o+1)))}else t.claimOverride=l}}}),t._v(" "),n("br"),t._v("\n    lastCycleUserWeight: "+t._s(t.lastCycleUserWeight)+"\n  ")]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Cycle")]),this._v(" "),e("th",[e("abbr",{attrs:{title:"Total EFX"}},[this._v("Total")])]),this._v(" "),e("th",[e("abbr",{attrs:{title:"Your Claimed EFX"}},[this._v("You claimed")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Distribution Type")]),this._v(" "),e("th",[this._v("Amount ")])])])}],!1,null,"2e74bf7e",null);e.default=component.exports},686:function(t,e,n){"use strict";n.r(e),n.d(e,"CountUp",(function(){return l}));n(177),n(391),n(34),n(153),n(392);var r=function(){return(r=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var e in i=arguments[a])Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);return t}).apply(this,arguments)},l=function(){function t(t,i,a){var s=this;this.target=t,this.endVal=i,this.options=a,this.version="2.0.7",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(i/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var i,a,e,n,r,l=t<0?"-":"";if(i=Math.abs(t).toFixed(s.options.decimalPlaces),e=(a=(i+="").split("."))[0],n=a.length>1?s.options.decimal+a[1]:"",s.options.useGrouping){r="";for(var o=0,c=e.length;o<c;++o)0!==o&&o%3==0&&(r=s.options.separator+r),r=e[c-o-1]+r;e=r}return s.options.numerals&&s.options.numerals.length&&(e=e.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),n=n.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),l+s.options.prefix+e+n+s.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=r(r({},this.defaults),a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},694:function(t,e,n){var r,l,o;n(28),n(177),n(9),n(16),n(61);var c=n(70);!function(h,d){"object"==c(e)&&void 0!==t?t.exports=d(n(686)):(l=[n(686)],void 0===(o="function"==typeof(r=d)?r.apply(e,l):r)||(t.exports=o))}(0,(function(t){"use strict";var e=("Function",function(t){return Object.prototype.toString.call(t)==="[object ".concat("Function","]")}),i={__countup__:t.CountUp,name:"VueCountUp",props:{delay:{type:Number,required:!1,default:0},endVal:{type:Number,required:!0},options:{type:Object,required:!1}},data:function(){return{instance:null}},watch:{endVal:{handler:function(t){this.instance&&e(this.instance.update)&&this.instance.update(t)},deep:!1}},methods:{create:function(){var e=this;if(!e.instance){var n=e.$el,i=new t.CountUp(n,e.endVal,e.options);i.error||(e.instance=i,e.delay<0?e.$emit("ready",i,t.CountUp):setTimeout((function(){return i.start((function(){return e.$emit("ready",i,t.CountUp)}))}),e.delay))}},destroy:function(){this.instance=null},printValue:function(t){if(this.instance&&e(this.instance.printValue))return this.instance.printValue(t)},start:function(t){if(this.instance&&e(this.instance.start))return this.instance.start(t)},pauseResume:function(){if(this.instance&&e(this.instance.pauseResume))return this.instance.pauseResume()},reset:function(){if(this.instance&&e(this.instance.reset))return this.instance.reset()},update:function(t){if(this.instance&&e(this.instance.update))return this.instance.update(t)}},mounted:function(){this.create()},beforeDestroy:function(){this.destroy()}};return function(t,e){void 0===e&&(e={});e.insertAt}(),function(t,e,n,i,s,r,l,a,u,o){"boolean"!=typeof l&&(a,a=l,l=!1);var c,h="function"==typeof n?n.options:n;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0),h._scopeId=i,c)if(h.functional){var p=h.render;h.render=function(t,e){return c.call(e),p(t,e)}}else{var d=h.beforeCreate;h.beforeCreate=d?[].concat(d,c):[c]}return n}({render:function(){var t=this.$createElement;return(this._self._c||t)("span")},staticRenderFns:[]},0,i,"data-v-0abbdf5a",0,0,void 0,void 0)}))},696:function(t,e,n){var r=n(2),l=n(706);r({target:"Number",stat:!0,forced:Number.parseFloat!=l},{parseFloat:l})},706:function(t,e,n){var r=n(6),l=n(258).trim,o=n(259),c=r.parseFloat,h=1/c(o+"-0")!=-1/0;t.exports=h?function(t){var e=l(String(t)),n=c(e);return 0===n&&"-"==e.charAt(0)?-0:n}:c},707:function(t,e,n){var r=n(2),l=n(397).values;r({target:"Object",stat:!0},{values:function(t){return l(t)}})},765:function(t,e,n){var content=n(859);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("11af6a96",content,!0,{sourceMap:!1})},857:function(t,e,n){var r=n(2),l=Math.ceil,o=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?o:l)(t)}})},858:function(t,e,n){"use strict";n(765)},859:function(t,e,n){(e=n(58)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),e.push([t.i,"@import url(https://use.typekit.net/kej5qyk.css);"]),e.push([t.i,".buttons[data-v-2e74bf7e]{margin-top:25px;padding-bottom:2px}.total-dist[data-v-2e74bf7e]{text-align:center}.claimed[data-v-2e74bf7e]{font-weight:700;max-width:200px;margin:40px auto 27px}.table[data-v-2e74bf7e]{width:100%}",""]),t.exports=e}}]);