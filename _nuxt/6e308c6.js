(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1028:function(t,e){},1117:function(t,e,n){"use strict";n(827)},1118:function(t,e,n){(e=n(58)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),e.push([t.i,"@import url(https://use.typekit.net/kej5qyk.css);"]),e.push([t.i,"table{font-size:.7em}table .tag{font-size:.9em;height:inherit}",""]),t.exports=e},1159:function(t,e,n){"use strict";n.r(e);n(9),n(34),n(16),n(153),n(47);var o=n(3),c=n(870),r=n.n(c),l={components:{},head:function(){return{title:"Token"}},data:function(){return{loadingBalances:!1,totalVoteWeight:0,totalMembers:300,nextCycleStartDate:"...",membersLowerBound:"13528614985990483600",balances:{daoBalance:0,liquidBalance:0,liquidBalanceBsc:0,stakeBalance:0,unswappedBalance:0,foundationBalance:1e8,liquidityBalance:88447533,communityBalance:5e6,maxSupply:65e7},contracts:[{name:"Effect Tokens",description:"Contract managing the EFX and NFX tokens",account:"effecttokens",link:"https://bloks.io/account/effecttokens?loadContract=true&tab=Tables&table=stat&account=effecttokens&scope=EFX&limit=100",source:"https://github.com/effectai/effect-network/tree/master/contracts/token"},{name:"Effect Staking Protocol",description:"Implemetation of the Effect Staking Protocol 2.0",account:"efxstakepool",link:"https://bloks.io/account/efxstakepool?loadContract=true&tab=Tables&account=efxstakepool&scope=efxstakepool&limit=100",source:"https://github.com/effectai/effect-network-eos/blob/master/contracts/stake/stake.cpp"},{name:"Token Swap",description:"Verifies NEO transactions with an Oracle and issues EFX tokens on EOS",account:"efxtokenswap",link:"https://bloks.io/account/efxtokenswap?loadContract=true&tab=ABI&account=efxtokenswap&scope=efxtokenswap&limit=100&table=nep5",source:"https://github.com/effectai/effect-network-eos/blob/master/contracts/swap/swap.cpp"},{name:"EffectDAO",description:"Holds the registry of the members and guardians of the EffectDAO",account:"theeffectdao",link:"https://bloks.io/account/theeffectdao?loadContract=true&tab=Tables&account=theeffectdao&scope=theeffectdao&limit=100&table=member",source:"https://github.com/effectai/effect-network/blob/master/contracts/dao/dao.cpp"},{name:"Effect Proposals",description:"Stores proposals and handles the voting machanism of the EffectDAO",account:"daoproposals",link:"https://bloks.io/account/daoproposals?loadContract=true&tab=Tables&account=daoproposals&scope=daoproposals&limit=100&table=proposal",source:"https://github.com/effectai/effect-network-eos/blob/proposals/contracts/effect-proposals/effect-proposals.cpp"},{name:"Effect.AI Token on BSC",description:"Smart contract on the BSC blockchain",account:"0xC51...5aD0",link:"https://bscscan.com/token/0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0",source:null}]}},watch:{"$dao.cycleConfig":function(t){console.log("cycle config ready"),t&&(this.getTotalVoteWeight(),this.getNextCycleDate())}},computed:{lastCycleId:function(){return this.$dao.cycleConfig?this.$dao.cycleConfig.id-1:null},stats:function(){return[{name:"Members",description:"",value:this.totalMembers},{name:"Total Vote Weight Last Cycle",description:"",value:this.totalVoteWeight},{name:"Next Cycle",description:"",value:this.nextCycleStartDate},{name:"Distribution Strategy",description:"",value:"100% reward"},{name:"Recycle Strategy",description:"",value:"70% hold, 30% distribute"}]},chartData:function(){return{labels:["Liquid Supply (EOS)","Liquid Supply (BSC)","Stake Pool","Liquidity & Partnerships","EffectDAO","Foundation"],datasets:[{name:"Token Map",backgroundColor:["#0dd925","#499166","#fce68d","#394dfa","#d6fca4","#7aa7ff","#A4B8BB","#7e8a8c"],weight:.55,meta:[{addressName:"effecttokens",link:"https://bloks.io/tokens/EFX-eos-effecttokens",description:null,balanceKey:"liquidBalance"},{addressName:"0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0",link:"https://bscscan.com/token/0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0",description:null,balanceKey:"liquidBalanceBsc"},{addressName:"efxstakepool",locked:!0,link:"https://bloks.io/account/efxstakepool",description:"Staked EFX.",balanceKey:"stakeBalance"},{addressName:"bsc.efx",link:"https://bloks.io/account/bsc.efx",locked:!1,description:"Funds allocated for providing liquidity and partnership.",balanceKey:"liquidityBalance"},{addressName:"treasury.efx",link:"https://bloks.io/account/treasury.efx",locked:!0,description:"Tokens governed by the DAO, from here proposals are funded.",balanceKey:"daoBalance"},{addressName:"efx",link:"https://bloks.io/account/efx",locked:!0,description:null,balanceKey:"foundationBalance"}],data:this.innerChartBalances,labels:["Liquid Supply (EOS)","Liquid Supply (BSC)","Stake Pool","Liquidity & Partnerships","EffectDAO","Foundation"]}]}},chartBalances:function(){return[this.balances.liquidBalance+this.balances.liquidityBalance,this.balances.foundationBalance+this.balances.stakeBalance+this.balances.daoBalance]},innerChartBalances:function(){return[this.balances.liquidBalance,this.balances.stakeBalance,this.balances.liquidityBalance,this.balances.unswappedBalance,this.balances.daoBalance,this.balances.foundationBalance]}},mounted:function(){this.getBscBalance(),this.getBalances(),this.getTotalVoteWeight(),this.getNextCycleDate(),this.getDaoMembers()},methods:{getBscBalance:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://bsc-dataseed.binance.org/","0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0",e=[{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],n=new r.a("https://bsc-dataseed.binance.org/"),o=new n.eth.Contract(e,"0xC51Ef828319b131B595b7ec4B28210eCf4d05aD0"),t.next=7,o.methods.totalSupply().call().catch(console.log);case 7:return c=t.sent,l=n.utils.fromWei(c),console.log(l),t.abrupt("return",l);case 11:case"end":return t.stop()}}),t)})))()},getBalances:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loadingBalances=!0,e.t0=parseInt,e.next=4,fetch("https://www.api.bloks.io/tokens/EFX-eos-effecttokens").then((function(data){return data.json()}));case 4:return e.t1=e.sent[0].supply.circulating,n=(0,e.t0)(e.t1),e.t2=parseInt,e.next=9,t.getBscBalance();case 9:return e.t3=e.sent,t.balances.liquidBalanceBsc=(0,e.t2)(e.t3),e.t4=parseInt,e.next=14,t.$eos.rpc.get_currency_balance("effecttokens","treasury.efx","EFX");case 14:return e.t5=e.sent[0].replace(" EFX",""),t.balances.daoBalance=(0,e.t4)(e.t5),e.t6=parseInt,e.next=19,t.$eos.rpc.get_currency_balance("effecttokens","efxstakepool","EFX");case 19:e.t7=e.sent[0].replace(" EFX",""),t.balances.stakeBalance=(0,e.t6)(e.t7),t.balances.liquidBalance=n-t.balances.daoBalance-t.balances.stakeBalance-t.balances.liquidityBalance-t.balances.foundationBalance-t.balances.liquidBalanceBsc,t.balances.unswappedBalance=65e7-(t.balances.liquidBalance+t.balances.stakeBalance+t.balances.foundationBalance+t.balances.liquidityBalance+t.balances.daoBalance),t.loadingBalances=!1;case 24:case"end":return e.stop()}}),e)})))()},getTotalVoteWeight:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$eos.rpc.get_table_rows({code:"daoproposals",scope:"daoproposals",table:"cycle",lower_bound:t.lastCycleId,upper_bound:t.lastCycleId});case 2:(n=e.sent)&&n.rows.length>0&&(t.totalVoteWeight=n.rows[0].total_vote_weight);case 4:case"end":return e.stop()}}),e)})))()},getNextCycleDate:function(){if(this.$dao.proposalConfig&&this.$dao.cycleConfig){var t=this.$dao.proposalConfig.cycle_duration_sec,e=new Date(this.$dao.cycleConfig.start_time);e.setSeconds(e.getSeconds()+t);this.nextCycleStartDate=e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})}},getDaoMembers:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t.membersLowerBound){e.next=8;break}return e.next=3,t.$eos.rpc.get_table_rows({code:"theeffectdao",scope:"theeffectdao",table:"member",lower_bound:t.membersLowerBound,limit:100});case 3:(n=e.sent)&&n.rows.length>0&&(t.totalMembers+=n.rows.length),t.membersLowerBound=n.next_key.length>0?n.next_key:null,e.next=0;break;case 8:case"end":return e.stop()}}),e)})))()},hello:function(t){if(t)return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},d=(n(1117),n(25)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title subtitle"},[t._v("\n      Token Map\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t._m(1),t._v(" "),n("tbody",t._l(t.chartData.datasets[0].labels,(function(label,e){return n("tr",{key:label},[n("td",[t._v("\n              "+t._s(label)+"\n              "),t.chartData.datasets[0].meta[e].description?n("span",{staticClass:"is-pulled-right",attrs:{"data-tooltip":t.chartData.datasets[0].meta[e].description}},[n("font-awesome-icon",{attrs:{icon:["fas","info-circle"]}})],1):t._e()]),t._v(" "),n("td",{staticClass:"has-text-right"},[t._v("\n              "+t._s(t.hello(t.balances[t.chartData.datasets[0].meta[e].balanceKey]))+" EFX\n            ")]),t._v(" "),n("td",{staticClass:"has-text-left"},[n("a",{attrs:{href:t.chartData.datasets[0].meta[e].link,target:"_blank"}},[t._v(t._s(t.chartData.datasets[0].meta[e].addressName))])])])})),0)])])]),t._v(" "),n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title subtitle"},[t._v("\n      Stats\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t._m(2),t._v(" "),n("tbody",t._l(t.stats,(function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.value))]),t._v(" "),n("td",[t._v(t._s(e.description))])])})),0)])])]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title subtitle"},[t._v("\n      Smart Contracts\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[t._m(4),t._v(" "),n("tbody",t._l(t.contracts,(function(e){return n("tr",{key:e.account},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.description))]),t._v(" "),n("td",[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v(t._s(e.account))])]),t._v(" "),n("td",[n("a",{attrs:{href:e.source,target:"_blank"}},[t._v("view source")])])])})),0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("h4",{staticClass:"box-title subtitle"},[this._v("DAO Agenda Form")]),this._v(" "),e("div",{staticClass:"has-text-centered"},[e("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLSfeYTVK1aFkoIO8G7Di540-cf7bS4O98KzSfMAwjRNf_I2uvg/viewform",target:"_blank"}},[this._v("Add topic to DAO Agenda for biweekly DAO meetings.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",{staticClass:"has-text-centered"},[this._v("\n              Tokens\n            ")]),this._v(" "),e("th",{staticClass:"has-text-left"},[this._v("\n              Address\n            ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Value")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box"},[n("h4",{staticClass:"box-title subtitle"},[t._v("\n      Resources\n    ")]),t._v(" "),n("div",{staticClass:"table-container"},[n("table",{staticClass:"table is-striped is-hoverable is-fullwidth"},[n("thead",[n("tr",[n("th",[t._v("Resource")]),t._v(" "),n("th",[t._v("Type")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("a",{attrs:{href:"https://github.com/effectai/effect-network-eos/blob/master/constitution/constitution.md",target:"_blank"}},[t._v("The EffectDAO Constitution")])]),t._v(" "),n("td",[t._v("Github")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://docs.effect.ai/",target:"_blank"}},[t._v("The Effect Network Documentation")])]),t._v(" "),n("td",[t._v("Website")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/the-effect-dao-effect-staking-protocol-2-0-774dc5c2b857",target:"_blank"}},[t._v("Effect Staking Protocol 2.0")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/the-effect-dao-voting-adopt-to-survive-c17252a90a47",target:"_blank"}},[t._v("The EffectDAO Voting")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/the-effect-dao-the-guardians-of-the-galaxy-pool-cb7c671984a9",target:"_blank"}},[t._v("The Effect Guardians")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://medium.com/effect-ai/effectdao-proposal-system-is-now-live-on-eos-mainnet-e05710b79d21",target:"_blank"}},[t._v("EffectDAO Proposal System")])]),t._v(" "),n("td",[t._v("Blog")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://effect.ai/download/effect_whitepaper.pdf",target:"_blank"}},[t._v("The Effect Network\n                Whitepaper")])]),t._v(" "),n("td",[t._v("PDF")])]),t._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://effect-dao-docs.gitbook.io/effectdaocc/",target:"_blank"}},[t._v("The Effect Network\n                Community Documentation")])]),t._v(" "),n("td",[t._v("Website")])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Description")]),this._v(" "),e("th",[this._v("Address")]),this._v(" "),e("th",[this._v("Source")])])])}],!1,null,null,null);e.default=component.exports},827:function(t,e,n){var content=n(1118);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(59).default)("d11d8666",content,!0,{sourceMap:!1})},880:function(t,e){},882:function(t,e){},884:function(t,e){},889:function(t,e){},937:function(t,e){},939:function(t,e){}}]);