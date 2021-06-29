(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{707:function(t,e,n){"use strict";n.r(e);n(737);var o=n(771);e.default={extends:o.a,props:["data","options"],mounted:function(){this.renderChart(this.data,{responsive:!0,maintainAspectRatio:!1,onClick:this.clickHandle,legend:{onClick:function(){}},tooltips:{callbacks:{label:function(t,data){var e=data.datasets[t.datasetIndex],n=t.index;return e.labels[n]+": "+e.data[n]}}}})},methods:{clickHandle:function(t,e){var n=e[0];n&&window.open(this.data.datasets[n._datasetIndex].meta[n._index].link,"_blank")}}}},708:function(t,e,n){var content=n(742);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("d11d8666",content,!0,{sourceMap:!1})},741:function(t,e,n){"use strict";n(708)},742:function(t,e,n){(e=n(57)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),e.push([t.i,"@import url(https://use.typekit.net/kej5qyk.css);"]),e.push([t.i,"table{font-size:.7em}table .tag{font-size:.9em;height:inherit}",""]),t.exports=e},776:function(t,e,n){"use strict";n.r(e);n(9),n(37),n(18),n(152),n(44);var o=n(3),c={components:{PieChart:n(707).default},data:function(){return{loadingBalances:!1,totalVoteWeight:0,totalMembers:300,nextCycleStartDate:"...",membersLowerBound:"13528614985990483600",balances:{daoBalance:0,liquidBalance:0,stakeBalance:0,unswappedBalance:0,foundationBalance:1e8,liquidityBalance:88447533,communityBalance:5e6,teamBalance:32125e3,maxSupply:65e7},contracts:[{name:"Effect Tokens",description:"Contract managing the EFX and NFX tokens",account:"effecttokens",link:"https://bloks.io/account/effecttokens?loadContract=true&tab=Tables&table=stat&account=effecttokens&scope=EFX&limit=100",source:"https://github.com/effectai/effect-network/tree/master/contracts/token"},{name:"Effect Staking Protocol",description:"Implemetation of the Effect Staking Protocol 2.0",account:"efxstakepool",link:"https://bloks.io/account/efxstakepool?loadContract=true&tab=Tables&account=efxstakepool&scope=efxstakepool&limit=100",source:"https://github.com/effectai/effect-network-eos/blob/master/contracts/stake/stake.cpp"},{name:"Token Swap",description:"Verifies NEO transactions with an Oracle and issues EFX tokens on EOS",account:"efxtokenswap",link:"https://bloks.io/account/efxtokenswap?loadContract=true&tab=ABI&account=efxtokenswap&scope=efxtokenswap&limit=100&table=nep5",source:"https://github.com/effectai/effect-network-eos/blob/master/contracts/swap/swap.cpp"},{name:"EffectDAO",description:"Holds the registry of the members and guardians of the EffectDAO",account:"theeffectdao",link:"https://bloks.io/account/theeffectdao?loadContract=true&tab=Tables&account=theeffectdao&scope=theeffectdao&limit=100&table=member",source:"https://github.com/effectai/effect-network/blob/master/contracts/dao/dao.cpp"},{name:"Effect Proposals",description:"Stores proposals and handles the voting machanism of the EffectDAO",account:"daoproposals",link:"https://bloks.io/account/daoproposals?loadContract=true&tab=Tables&account=daoproposals&scope=daoproposals&limit=100&table=proposal",source:"https://github.com/effectai/effect-network-eos/blob/proposals/contracts/effect-proposals/effect-proposals.cpp"},{name:"Effect.AI Token on NEO (legacy)",description:"Smart Contract on the NEO blockchain for the NEP5 EFX token",account:"acbc5...7e6f9",link:"https://neotracker.io/asset/acbc532904b6b51b5ea6d19b803d78af70e7e6f9",source:"https://github.com/effectai/effect-network-neo/blob/master/contracts/java/token/src/ai/effect/token/EffectToken.java"}],chartOptions:{cutoutPercentage:10}}},watch:{"$dao.cycleConfig":function(t){console.log("cycle config ready"),t&&(this.getTotalVoteWeight(),this.getNextCycleDate())}},computed:{lastCycleId:function(){return this.$dao.cycleConfig?this.$dao.cycleConfig.id-1:null},stats:function(){return[{name:"Members",description:"",value:this.totalMembers},{name:"Total Vote Weight Last Cycle",description:"",value:this.totalVoteWeight},{name:"Next Cycle",description:"",value:this.nextCycleStartDate},{name:"Distribution Strategy",description:"",value:"100% reward"},{name:"Recycle Strategy",description:"",value:"70% hold, 30% distribute"}]},chartData:function(){return{labels:["Liquid Supply","Stake Pool","Liquidity & Partnerships","Unswapped on NEO","Team Tokens","EffectDAO","Foundation"],datasets:[{name:"Token Map",backgroundColor:["#0dd925","#499166","#fce68d","#394dfa","#d6fca4","#7aa7ff","#A4B8BB","#7e8a8c"],weight:.55,meta:[{addressName:"effecttokens",link:"https://bloks.io/tokens/EFX-eos-effecttokens",description:null,balanceKey:"liquidBalance"},{addressName:"efxstakepool",locked:!0,link:"https://bloks.io/account/efxstakepool",description:"Staked EFX.",balanceKey:"stakeBalance"},{addressName:"bsc.efx",link:"https://bloks.io/account/bsc.efx",locked:!1,description:"Funds allocated for providing liquidity and partnership.",balanceKey:"liquidityBalance"},{addressName:"acbc532904b6b51b5ea6d19b803d78af70e7e6f9",link:"https://neotracker.io/asset/acbc532904b6b51b5ea6d19b803d78af70e7e6f9",description:"EFX tokens that did not swap to EOS yet.",balanceKey:"unswappedBalance"},{addressName:"AXRnUdHCY6W1G3mzYJ77mLj98Kv8MKqPno",locked:!0,link:"https://neotracker.io/address/AXRnUdHCY6W1G3mzYJ77mLj98Kv8MKqPno",description:null,balanceKey:"teamBalance"},{addressName:"treasury.efx",link:"https://bloks.io/account/treasury.efx",locked:!0,description:"Tokens governed by the DAO, from here proposals are funded.",balanceKey:"daoBalance"},{addressName:"efx",link:"https://bloks.io/account/efx",locked:!0,description:null,balanceKey:"foundationBalance"}],data:this.innerChartBalances,labels:["Liquid Supply","Stake Pool","Liquidity & Partnerships","Unswapped on NEO","Team Tokens","EffectDAO","Foundation"]}]}},chartBalances:function(){return[this.balances.liquidBalance+this.balances.liquidityBalance,this.balances.foundationBalance+this.balances.teamBalance+this.balances.stakeBalance+this.balances.daoBalance]},innerChartBalances:function(){return[this.balances.liquidBalance,this.balances.stakeBalance,this.balances.liquidityBalance,this.balances.unswappedBalance,this.balances.teamBalance,this.balances.daoBalance,this.balances.foundationBalance]}},mounted:function(){this.getBalances(),this.getTotalVoteWeight(),this.getNextCycleDate(),this.getDaoMembers()},methods:{getBalances:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingBalances=!0,e.t0=parseInt,e.next=4,fetch("https://www.api.bloks.io/tokens/EFX-eos-effecttokens").then((function(data){return data.json()}));case 4:return e.t1=e.sent[0].supply.circulating,n=(0,e.t0)(e.t1),e.t2=parseInt,e.next=9,t.$eos.rpc.get_currency_balance("effecttokens","treasury.efx","EFX");case 9:return e.t3=e.sent[0].replace(" EFX",""),t.balances.daoBalance=(0,e.t2)(e.t3),e.t4=parseInt,e.next=14,t.$eos.rpc.get_currency_balance("effecttokens","efxstakepool","EFX");case 14:e.t5=e.sent[0].replace(" EFX",""),t.balances.stakeBalance=(0,e.t4)(e.t5),t.balances.liquidBalance=n-t.balances.daoBalance-t.balances.stakeBalance-t.balances.liquidityBalance-t.balances.foundationBalance,t.balances.unswappedBalance=65e7-(t.balances.liquidBalance+t.balances.stakeBalance+t.balances.foundationBalance+t.balances.teamBalance+t.balances.liquidityBalance+t.balances.daoBalance),t.loadingBalances=!1;case 19:case"end":return e.stop()}}),e)})))()},getTotalVoteWeight:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$eos.rpc.get_table_rows({code:"daoproposals",scope:"daoproposals",table:"cycle",lower_bound:t.lastCycleId,upper_bound:t.lastCycleId});case 2:(n=e.sent)&&n.rows.length>0&&(t.totalVoteWeight=n.rows[0].total_vote_weight);case 4:case"end":return e.stop()}}),e)})))()},getNextCycleDate:function(){if(this.$dao.proposalConfig&&this.$dao.cycleConfig){var t=this.$dao.proposalConfig.cycle_duration_sec,e=new Date(this.$dao.cycleConfig.start_time);e.setSeconds(e.getSeconds()+t);this.nextCycleStartDate=e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}},getDaoMembers:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t.membersLowerBound){e.next=8;break}return e.next=3,t.$eos.rpc.get_table_rows({code:"theeffectdao",scope:"theeffectdao",table:"member",lower_bound:t.membersLowerBound,limit:100});case 3:(n=e.sent)&&n.rows.length>0&&(t.totalMembers+=n.rows.length),t.membersLowerBound=n.next_key.length>0?n.next_key:null,e.next=0;break;case 8:case"end":return e.stop()}}),e)})))()},hello:function(t){if(t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},r=(n(741),n(25)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title subtitle"},[t._v("\n      Token Map\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t._m(0),t._v(" "),n("tbody",t._l(t.chartData.datasets[0].labels,(function(label,e){return n("tr",{key:label},[n("td",[t._v("\n              "+t._s(label)+" "),t.chartData.datasets[0].meta[e].locked?n("span",{staticClass:"tag"},[t._v("locked")]):t._e(),t._v(" "),t.chartData.datasets[0].meta[e].description?n("span",{staticClass:"is-pulled-right",attrs:{"data-tooltip":t.chartData.datasets[0].meta[e].description}},[n("font-awesome-icon",{attrs:{icon:["fas","info-circle"]}})],1):t._e()]),t._v(" "),n("td",{staticClass:"has-text-right"},[t._v("\n              "+t._s(t.hello(t.balances[t.chartData.datasets[0].meta[e].balanceKey]))+" EFX\n            ")]),t._v(" "),n("td",{staticClass:"has-text-left"},[n("a",{attrs:{href:t.chartData.datasets[0].meta[e].link,target:"_blank"}},[t._v(t._s(t.chartData.datasets[0].meta[e].addressName))])])])})),0)])]),t._v(" "),t.loadingBalances?t._e():n("pie-chart",{attrs:{data:t.chartData,options:t.chartOptions}})],1),t._v(" "),n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title subtitle"},[t._v("\n      Smart Contracts\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t._m(1),t._v(" "),n("tbody",t._l(t.contracts,(function(e){return n("tr",{key:e.account},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.description))]),t._v(" "),n("td",[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.account))])]),t._v(" "),n("td",[n("a",{attrs:{href:e.source,target:"_blank"}},[t._v("view source")])])])})),0)])])]),t._v(" "),n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title subtitle"},[t._v("\n      Stats\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t._m(2),t._v(" "),n("tbody",t._l(t.stats,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.value))]),t._v(" "),n("td",[t._v(t._s(e.description))])])})),0)])])]),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",{staticClass:"has-text-centered"},[this._v("\n              Tokens\n            ")]),this._v(" "),e("th",{staticClass:"has-text-left"},[this._v("\n              Address\n            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Description")]),this._v(" "),e("th",[this._v("Address")]),this._v(" "),e("th",[this._v("Source")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Value")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title subtitle"},[t._v("\n      Other Resources\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[n("thead",[n("tr",[n("th",[t._v("Resource")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("a",{attrs:{href:"https://github.com/effectai/effect-network-eos/blob/master/constitution/constitution.md",target:"_blank"}},[t._v("The EffectDAO Constitution")])]),t._v(" "),n("td",[t._v("Github")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://docs.effect.ai/",target:"_blank"}},[t._v("The Effect Network Documentation")])]),t._v(" "),n("td",[t._v("Website")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/the-effect-dao-effect-staking-protocol-2-0-774dc5c2b857",target:"_blank"}},[t._v("Effect Staking Protocol 2.0")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/the-effect-dao-voting-adopt-to-survive-c17252a90a47",target:"_blank"}},[t._v("The EffectDAO Voting")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/the-effect-dao-the-guardians-of-the-galaxy-pool-cb7c671984a9",target:"_blank"}},[t._v("The Effect Guardians")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/effectdao-proposal-system-is-now-live-on-eos-mainnet-e05710b79d21",target:"_blank"}},[t._v("EffectDAO Proposal System")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://effect.ai/download/effect_whitepaper.pdf",target:"_blank"}},[t._v("The Effect Network\n                Whitepaper")])]),t._v(" "),n("td",[t._v("PDF")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PieChart:n(707).default})}}]);