(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{707:function(t,e,n){"use strict";n.r(e);n(736);var o=n(771);e.default={extends:o.a,props:["data","options"],mounted:function(){this.renderChart(this.data,{responsive:!0,maintainAspectRatio:!1,onClick:this.clickHandle,legend:{onClick:function(){}},tooltips:{callbacks:{label:function(t,data){var e=data.datasets[t.datasetIndex],n=t.index;return e.labels[n]+": "+e.data[n]}}}})},methods:{clickHandle:function(t,e){var n=e[0];n&&window.open(this.data.datasets[n._datasetIndex].meta[n._index].link,"_blank")}}}},708:function(t,e,n){var content=n(741);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("d11d8666",content,!0,{sourceMap:!1})},740:function(t,e,n){"use strict";n(708)},741:function(t,e,n){(e=n(57)(!1)).push([t.i,"table{font-size:.7em}table .tag{font-size:.9em;height:inherit}",""]),t.exports=e},776:function(t,e,n){"use strict";n.r(e);n(9),n(37),n(18),n(152),n(44);var o=n(3),c={components:{PieChart:n(707).default},data:function(){return{loading:!0,balances:{daoBalance:0,proposalBalance:0,liquidBalance:0,stakeBalance:0,feepoolBalance:0,unswappedBalance:56459627,foundationBalance:195375e3,teamBalance:32125e3,maxSupply:65e7},stats:[{name:"Members",description:"",value:296},{name:"Guardians",description:"",value:97},{name:"Total Vote Weight",description:"",value:"443"},{name:"Next Cycle",description:"",value:"29-1-2021"},{name:"Distribution Strategy",description:"",value:"100% reward"},{name:"Recycle Strategy",description:"",value:"100% hold"}],contracts:[{name:"Effect Tokens",description:"Contract managing the EFX and NFX tokens",account:"effecttokens",link:"https://bloks.io/account/effecttokens?loadContract=true&tab=Tables&table=stat&account=effecttokens&scope=EFX&limit=100",source:"https://github.com/effectai/effect-network-eos/tree/master/contracts/effect-token"},{name:"Effect Staking Protocol",description:"Implemetation of the Effect Staking Protocol 2.0",account:"efxstakepool",link:"https://bloks.io/account/efxstakepool?loadContract=true&tab=Tables&account=efxstakepool&scope=efxstakepool&limit=100",source:"https://github.com/effectai/effect-network-eos/blob/master/contracts/stake/stake.cpp"},{name:"Token Swap",description:"Verifies NEO transactions with an Oracle and issues EFX tokens on EOS",account:"efxtokenswap",link:"https://bloks.io/account/efxtokenswap?loadContract=true&tab=ABI&account=efxtokenswap&scope=efxtokenswap&limit=100&table=nep5",source:"https://github.com/effectai/effect-network-eos/blob/master/contracts/swap/swap.cpp"},{name:"Effect DAO",description:"Holds the registry of the members and guardians of the EffectDAO",account:"theeffectdao",link:"https://bloks.io/account/theeffectdao?loadContract=true&tab=Tables&account=theeffectdao&scope=theeffectdao&limit=100&table=member",source:"https://github.com/effectai/effect-network-eos/blob/master/contracts/effect-dao/effect-dao.cpp"},{name:"Effect Proposals",description:"Stores proposals and handles the voting machanism of the EffectDAO",account:"daoproposals",link:"https://bloks.io/account/daoproposals?loadContract=true&tab=Tables&account=daoproposals&scope=daoproposals&limit=100&table=proposal",source:"https://github.com/effectai/effect-network-eos/blob/proposals/contracts/effect-proposals/effect-proposals.cpp"},{name:"Effect.AI Token on NEO (legacy)",description:"Smart Contract on the NEO blockchain for the NEP5 EFX token",account:"acbc5...7e6f9",link:"https://neotracker.io/asset/acbc532904b6b51b5ea6d19b803d78af70e7e6f9",source:"https://github.com/effectai/effect-network/blob/master/contracts/java/token/src/ai/effect/token/EffectToken.java"}],chartOptions:{}}},computed:{chartData:function(){return{labels:["Circulating Supply","Locked Supply"],datasets:[{name:"Token Map",backgroundColor:["#41B883","#E46651"],weight:.9,meta:[{addressName:"treasury.efx",link:"https://bloks.io/account/treasury.efx",locked:!0},{addressName:"effecttokens",link:"https://bloks.io/tokens/EFX-eos-effecttokens"},{addressName:"acbc532904b6b51b5ea6d19b803d78af70e7e6f9",link:"https://neotracker.io/asset/acbc532904b6b51b5ea6d19b803d78af70e7e6f9"},{addressName:"AXRnUdHCY6W1G3mzYJ77mLj98Kv8MKqPno",link:"https://neotracker.io/address/AXRnUdHCY6W1G3mzYJ77mLj98Kv8MKqPno",locked:!0},{addressName:"AXRnUdHCY6W1G3mzYJ77mLj98Kv8MKqPno",locked:!0,link:"https://neotracker.io/address/AXRnUdHCY6W1G3mzYJ77mLj98Kv8MKqPno"}],data:this.chartBalances,labels:["Circulating Supply","Locked Supply"]},{name:"Token Map",backgroundColor:["#0dd925","#499166","29ab5d","#394dfa","#d6fca4","#7aa7ff","#A4B8BB","#7e8a8c"],weight:.7,meta:[{addressName:"effecttokens",link:"https://bloks.io/tokens/EFX-eos-effecttokens",description:"Current supply in circulation and not locked in any staking or timelock.",balanceKey:"liquidBalance"},{addressName:"acbc532904b6b51b5ea6d19b803d78af70e7e6f9",link:"https://neotracker.io/asset/acbc532904b6b51b5ea6d19b803d78af70e7e6f9",description:"EFX tokens that did not swap to EOS yet.",balanceKey:"unswappedBalance"},{addressName:"fees.efx",link:"https://bloks.io/account/fees.efx",description:"Collected fees, claimable by network contributors.",balanceKey:"feepoolBalance"},{addressName:"treasury.efx",link:"https://bloks.io/account/treasury.efx",locked:!0,description:"Tokens governed by the DAO, from here proposals are funded.",balanceKey:"daoBalance"},{addressName:"daoproposals",link:"https://bloks.io/account/daoproposals",locked:!0,description:"The funds reserved for the scheduled cycles.",balanceKey:"proposalBalance"},{addressName:"efxstakepool",locked:!0,link:"https://bloks.io/account/efxstakepool",description:"Staked EFX.",balanceKey:"stakeBalance"},{addressName:"AXRnUdHCY6W1G3mzYJ77mLj98Kv8MKqPno",locked:!0,link:"https://neotracker.io/address/AXRnUdHCY6W1G3mzYJ77mLj98Kv8MKqPno",description:"EFX locked by the team on NEO until 2021-04.",balanceKey:"teamBalance"},{addressName:"AXRnUdHCY6W1G3mzYJ77mLj98Kv8MKqPno",link:"https://neotracker.io/address/AXRnUdHCY6W1G3mzYJ77mLj98Kv8MKqPno",locked:!0,description:"EFX locked by the foundation until 2021-09.",balanceKey:"foundationBalance"}],data:this.innerChartBalances,labels:["Liquid Supply","Unswapped on NEO","Feepool","Effect DAO","Proposal Funds","Stake Pool","Team Tokens","Foundation Tokens"]}]}},chartBalances:function(){return[this.balances.liquidBalance+this.balances.unswappedBalance+this.balances.feepoolBalance,this.balances.foundationBalance+this.balances.teamBalance+this.balances.stakeBalance+this.balances.daoBalance+this.balances.proposalBalance]},innerChartBalances:function(){return[this.balances.liquidBalance,this.balances.unswappedBalance,this.balances.feepoolBalance,this.balances.daoBalance,this.balances.proposalBalance,this.balances.stakeBalance,this.balances.teamBalance,this.balances.foundationBalance]}},mounted:function(){this.getBalances()},methods:{getBalances:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=parseInt,e.next=3,fetch("https://www.api.bloks.io/tokens/EFX-eos-effecttokens").then((function(data){return data.json()}));case 3:return e.t1=e.sent[0].supply.circulating,n=(0,e.t0)(e.t1),e.t2=parseInt,e.next=8,t.$eos.rpc.get_currency_balance("effecttokens","treasury.efx","EFX");case 8:return e.t3=e.sent[0].replace(" EFX",""),t.balances.daoBalance=(0,e.t2)(e.t3),e.t4=parseInt,e.next=13,t.$eos.rpc.get_currency_balance("effecttokens","daoproposals","EFX");case 13:return e.t5=e.sent[0].replace(" EFX",""),t.balances.proposalBalance=(0,e.t4)(e.t5),e.t6=parseInt,e.next=18,t.$eos.rpc.get_currency_balance("effecttokens","efxstakepool","EFX");case 18:e.t7=e.sent[0].replace(" EFX",""),t.balances.stakeBalance=(0,e.t6)(e.t7),t.balances.liquidBalance=n-t.balances.daoBalance-t.balances.stakeBalance,t.loading=!1;case 22:case"end":return e.stop()}}),e)})))()},hello:function(t){if(t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},l=(n(740),n(21)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title"},[t._v("\n      Token Map\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t._m(0),t._v(" "),n("tbody",t._l(t.chartData.datasets[1].labels,(function(label,e){return n("tr",{key:label},[n("td",[t._v("\n              "+t._s(label)+" "),t.chartData.datasets[1].meta[e].locked?n("span",{staticClass:"tag"},[t._v("locked")]):t._e(),t._v(" "),n("span",{staticClass:"is-pulled-right",attrs:{"data-tooltip":t.chartData.datasets[1].meta[e].description}},[n("font-awesome-icon",{attrs:{icon:["fas","info-circle"]}})],1)]),t._v(" "),n("td",{staticClass:"has-text-right"},[t._v("\n              "+t._s(t.hello(t.balances[t.chartData.datasets[1].meta[e].balanceKey]))+" EFX\n            ")]),t._v(" "),n("td",{staticClass:"has-text-left"},[n("a",{attrs:{href:t.chartData.datasets[1].meta[e].link,target:"_blank"}},[t._v(t._s(t.chartData.datasets[1].meta[e].addressName))])])])})),0)])]),t._v(" "),t.loading?t._e():n("pie-chart",{attrs:{data:t.chartData,options:t.chartOptions}})],1),t._v(" "),n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title"},[t._v("\n      Smart Contracts\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t._m(1),t._v(" "),n("tbody",t._l(t.contracts,(function(e){return n("tr",{key:e.account},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.description))]),t._v(" "),n("td",[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.account))])]),t._v(" "),n("td",[n("a",{attrs:{href:e.source,target:"_blank"}},[t._v("view source")])])])})),0)])])]),t._v(" "),n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title"},[t._v("\n      Stats\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t._m(2),t._v(" "),n("tbody",t._l(t.stats,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.value))]),t._v(" "),n("td",[t._v(t._s(e.description))])])})),0)])])]),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",{staticClass:"has-text-centered"},[this._v("\n              Tokens\n            ")]),this._v(" "),e("th",{staticClass:"has-text-left"},[this._v("\n              Address\n            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Description")]),this._v(" "),e("th",[this._v("Address")]),this._v(" "),e("th",[this._v("Source")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Value")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title"},[t._v("\n      Other Resources\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[n("thead",[n("tr",[n("th",[t._v("Resource")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("a",{attrs:{href:"https://github.com/effectai/effect-network-eos/blob/master/constitution/constitution.md",target:"_blank"}},[t._v("The EffectDAO Constitution")])]),t._v(" "),n("td",[t._v("Github")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://docs.effect.ai/",target:"_blank"}},[t._v("The Effect Network Documentation")])]),t._v(" "),n("td",[t._v("Website")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/the-effect-dao-effect-staking-protocol-2-0-774dc5c2b857",target:"_blank"}},[t._v("Effect Staking Protocol 2.0")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/the-effect-dao-voting-adopt-to-survive-c17252a90a47",target:"_blank"}},[t._v("The Effect DAO Voting")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/the-effect-dao-the-guardians-of-the-galaxy-pool-cb7c671984a9",target:"_blank"}},[t._v("The Effect Guardians")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/effectdao-proposal-system-is-now-live-on-eos-mainnet-e05710b79d21",target:"_blank"}},[t._v("EffectDAO Proposal System")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://effect.ai/download/effect_whitepaper.pdf",target:"_blank"}},[t._v("The Effect Network\n                Whitepaper")])]),t._v(" "),n("td",[t._v("PDF")])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PieChart:n(707).default})}}]);