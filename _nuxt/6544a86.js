(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{695:function(e,t){},722:function(e,t,o){var content=o(768);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(59).default)("e0067a74",content,!0,{sourceMap:!1})},767:function(e,t,o){"use strict";o(722)},768:function(e,t,o){(t=o(58)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),t.push([e.i,"@import url(https://use.typekit.net/kej5qyk.css);"]),t.push([e.i,".CodeMirror pre{margin-bottom:0!important}.CodeMirror-fullscreen,.editor-preview-side,.editor-toolbar.fullscreen{z-index:50}",""]),e.exports=t},790:function(e,t,o){"use strict";o.r(t);o(393),o(26),o(694),o(177),o(688),o(391),o(9),o(47);var l=o(3),r={components:{VueSimplemde:o(703).a},middleware:["authenticated"],filters:{formatBytes:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var o=1024,l=t<0?0:t,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(e)/Math.log(o));return parseFloat((e/Math.pow(o,i)).toFixed(l))+" "+r[i]}},head:function(){return{title:"Edit Proposal "+this.id}},data:function(){return{id:this.$route.params.id,advanced:!1,ipfsExplorer:"https://ipfs.effect.ai",loading:!1,success:!1,loadingProposal:!1,uploadingFile:!1,selectedFile:null,preview:!1,proposalIpfs:null,proposal:null,cachedFormData:null}},computed:{wallet:function(){return this.$wallet?this.$wallet.wallet:null},loggedIn:function(){return this.wallet&&this.wallet.auth},hasChanged:function(){return this.cachedFormData!==this.formDataForComparison()},myProposal:function(){return this.proposal&&this.wallet&&this.wallet.auth&&this.wallet.auth.accountName===this.proposal.author}},created:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getProposal(e.id);case 2:window.addEventListener("beforeunload",e.checkClose),e.cachedFormData=e.formDataForComparison();case 4:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){window.removeEventListener("beforeunload",this.checkClose)},beforeRouteLeave:function(e,t,o){this.checkClose()&&o()},methods:{getProposal:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function o(){var data,l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.loadingProposal=!0,o.prev=1,o.next=4,t.$eos.rpc.get_table_rows({code:"daoproposals",scope:"daoproposals",table:"proposal",lower_bound:e,limit:1});case 4:return data=o.sent,t.proposal=data.rows[0],t.$set(t.proposal,"reward",parseFloat(t.proposal.pay[0].field_0.quantity)),o.next=9,t.$dao.getIpfsContent(t.proposal.content_hash);case 9:l=o.sent,t.proposalIpfs=l,t.proposalIpfs.files||t.$set(t.proposalIpfs,"files",[]),o.next=17;break;case 14:o.prev=14,o.t0=o.catch(1),console.log(o.t0);case 17:t.loadingProposal=!1;case 18:case"end":return o.stop()}}),o,null,[[1,14]])})))()},getSelectedFile:function(){this.selectedFile=this.$refs.file.files[0]},uploadProposal:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var o,l,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.proposalIpfs.body||!e.proposalIpfs.title){t.next=24;break}if(o=new Blob([JSON.stringify(e.proposalIpfs)],{type:"text/json"}),(l=new FormData).append("file",o),!(o.size>1e7)){t.next=9;break}alert("Max file size allowed is 10 MB"),e.proposal.content_hash=null,t.next=24;break;case 9:return t.prev=9,t.next=12,fetch("".concat("https://ipfs.effect.ai","/api/v0/add?pin=true"),{method:"POST",body:l});case 12:return r=t.sent,t.next=15,r.json();case 15:n=t.sent,console.log(n),e.proposal.content_hash=n.Hash,t.next=24;break;case 20:t.prev=20,t.t0=t.catch(9),e.proposal.content_hash=null,console.log(t.t0);case 24:case"end":return t.stop()}}),t,null,[[9,20]])})))()},uploadFile:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var o,l,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.selectedFile){t.next=26;break}if(e.uploadingFile=!0,(o=new FormData).append("file",e.selectedFile),!(e.selectedFile.size>1e7)){t.next=10;break}alert("Max file size allowed is 10 MB"),e.selectedFile=null,e.$refs.file.value="",t.next=25;break;case 10:return t.prev=10,t.next=13,fetch("".concat("https://ipfs.effect.ai","/api/v0/add?pin=true"),{method:"POST",body:o});case 13:return l=t.sent,t.next=16,l.json();case 16:r=t.sent,e.proposalIpfs.files.push(r),e.selectedFile=null,e.$refs.file.value="",t.next=25;break;case 22:t.prev=22,t.t0=t.catch(10),console.log(t.t0);case 25:e.uploadingFile=!1;case 26:case"end":return t.stop()}}),t,null,[[10,22]])})))()},removeFile:function(e){this.proposalIpfs.files.splice(this.proposalIpfs.files.indexOf(e),1)},updateProposal:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.uploadProposal();case 3:if(!e.proposal.content_hash){t.next=16;break}return o=new Date,l=[{account:"daoproposals",name:"updateprop",authorization:[{actor:e.wallet.auth.accountName,permission:e.wallet.auth.permission}],data:{id:e.proposal.id,pay:[{field_0:{quantity:Number.parseFloat(e.proposal.reward).toFixed(4)+" EFX",contract:"effecttokens"},field_1:o.toISOString().slice(0,-1)}],content_hash:e.proposal.content_hash,category:parseInt(e.proposal.category),cycle:parseInt(e.proposal.cycle),transaction_hash:e.proposal.transaction_hash}}],t.prev=6,t.next=9,e.$wallet.handleTransaction(l);case 9:e.success=!0,e.$modal.show({color:"success",title:"Transaction Sent",persistent:!0,text:"Your transaction to edit proposal is sent!",onConfirm:function(){e.$router.push({path:"/proposals"})}}),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),e.$modal.show({color:"danger",title:"Error",persistent:!0,text:t.t0});case 16:e.loading=!1;case 17:case"end":return t.stop()}}),t,null,[[6,13]])})))()},formDataForComparison:function(){return JSON.stringify(this.proposal)},checkClose:function(e){if(this.hasChanged&&!this.loading&&!this.success){var t="You have unsaved changes. Are you sure you wish to leave?";return!!confirm(t)||(e.preventDefault(),e.returnValue=t,!1)}return!0}}},n=(o(767),o(25)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"box"},[o("h4",{staticClass:"box-title subtitle"},[e._v("\n      Edit Proposal "+e._s(e.id)+"\n    ")]),e._v(" "),e.loadingProposal?o("h5",{staticClass:"has-text-centered"},[e._v("\n      Loading proposal..\n    ")]):e.proposal&&e.proposalIpfs?o("form",{on:{submit:function(t){return t.preventDefault(),e.updateProposal(t)}}},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[e._v("Title")]),e._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.proposalIpfs.title,expression:"proposalIpfs.title"}],staticClass:"input",attrs:{required:"",type:"text",placeholder:"My Proposal Title"},domProps:{value:e.proposalIpfs.title},on:{input:function(t){t.target.composing||e.$set(e.proposalIpfs,"title",t.target.value)}}})])]),e._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[e._v("Description")]),e._v(" "),o("div",{staticClass:"tabs",staticStyle:{"margin-bottom":"0"}},[o("ul",[o("li",{class:{"is-active":!e.preview}},[o("a",{on:{click:function(t){t.preventDefault(),e.preview=!1}}},[e._v("Edit")])]),e._v(" "),o("li",{class:{"is-active":e.preview}},[o("a",{on:{click:function(t){t.preventDefault(),e.preview=!0}}},[e._v("Preview")])])])]),e._v(" "),e.preview?o("div",{staticClass:"p-2"},[o("div",{domProps:{innerHTML:e._s(e.$md.render(e.proposalIpfs.body))}})]):o("div",{staticClass:"control"},[o("vue-simplemde",{ref:"markdownEditor",attrs:{required:"",configs:{promptURLs:!0,spellChecker:!1}},model:{value:e.proposalIpfs.body,callback:function(t){e.$set(e.proposalIpfs,"body",t)},expression:"proposalIpfs.body"}})],1)]),e._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[e._v("Attachments")]),e._v(" "),o("div",{staticClass:"control"},[o("div",{staticClass:"file has-name is-fullwidth"},[o("label",{staticClass:"file-label"},[o("input",{ref:"file",staticClass:"file-input",attrs:{id:"file",type:"file"},on:{change:e.getSelectedFile}}),e._v(" "),e._m(0),e._v(" "),o("span",{staticClass:"file-name"},[e.selectedFile?o("span",[e._v(e._s(e.selectedFile.name))]):e._e()]),e._v(" "),o("span",[o("button",{staticClass:"button is-primary",class:{"is-loading":e.uploadingFile},attrs:{disabled:!e.selectedFile},on:{click:function(t){return t.preventDefault(),e.uploadFile(t)}}},[e._v("Upload File")])])])])]),e._v(" "),o("table",{staticClass:"table"},[e.proposalIpfs.files.length>0?o("tbody",e._l(e.proposalIpfs.files,(function(t){return o("tr",{key:t.Hash},[o("td",[o("a",{attrs:{href:e.ipfsExplorer+"/ipfs/"+t.Hash,target:"_blank"}},[e._v(e._s(t.Name))])]),e._v(" "),o("td",[e._v(e._s(e._f("formatBytes")(t.Size)))]),e._v(" "),o("td",{staticClass:"has-text-right"},[o("button",{staticClass:"button is-danger is-small",on:{click:function(o){return o.preventDefault(),e.removeFile(t)}}},[e._v("\n                  Remove\n                ")])])])})),0):o("tbody",[e._m(1)])])]),e._v(" "),o("div",{staticClass:"columns"},[o("div",{staticClass:"column"},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[e._v("Reward")]),e._v(" "),o("div",{staticClass:"control has-icons-right"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.proposal.reward,expression:"proposal.reward"}],staticClass:"input",attrs:{step:"0.0001",type:"number",min:"0",placeholder:"100"},domProps:{value:e.proposal.reward},on:{input:function(t){t.target.composing||e.$set(e.proposal,"reward",t.target.value)}}}),e._v(" "),o("span",{staticClass:"icon is-small is-right"},[e._v("\n                EFX\n              ")])])])]),e._v(" "),o("div",{staticClass:"column is-one-third"},[o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[e._v("Category")]),e._v(" "),o("div",{staticClass:"control"},[o("div",{staticClass:"select",staticStyle:{width:"100%"}},[o("select",{directives:[{name:"model",rawName:"v-model",value:e.proposal.category,expression:"proposal.category"}],staticStyle:{width:"100%"},attrs:{required:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.proposal,"category",t.target.multiple?o:o[0])}}},[o("option",{attrs:{disabled:""},domProps:{value:0}},[e._v("\n                    Governance Proposal\n                  ")]),e._v(" "),o("option",{domProps:{value:1}},[e._v("\n                    Marketing\n                  ")]),e._v(" "),o("option",{domProps:{value:2}},[e._v("\n                    Design\n                  ")]),e._v(" "),o("option",{domProps:{value:3}},[e._v("\n                    Technical\n                  ")]),e._v(" "),o("option",{domProps:{value:4}},[e._v("\n                    Other\n                  ")])])])])])])]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"has-text-centered"},[o("button",{staticClass:"button is-outlined is-small",attrs:{disabled:""},on:{click:function(e){e.preventDefault()}}},[e._v("\n          + Add another reward\n        ")]),e._v(" "),e._m(2)]),e._v(" "),o("fieldset",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"collapsible",class:{"is-expanded":e.advanced}},[o("legend",{staticClass:"has-text-weight-bold"},[o("a",{on:{click:function(t){t.preventDefault(),e.advanced=!e.advanced}}},[e._v("Advanced")])]),e._v(" "),o("div",{staticClass:"field"},[o("label",{staticClass:"label"},[e._v("Cycle")]),e._v(" "),o("div",{staticClass:"control"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.proposal.cycle,expression:"proposal.cycle"}],staticClass:"input",attrs:{required:"",type:"number",min:"0"},domProps:{value:e.proposal.cycle},on:{input:function(t){t.target.composing||e.$set(e.proposal,"cycle",t.target.value)}}})])])]),e._v(" "),o("div",{staticClass:"field is-grouped is-grouped-right mt-4"},[o("div",{staticClass:"control"},[o("nuxt-link",{staticClass:"button is-light",attrs:{to:"/proposals"}},[e._v("\n            Cancel\n          ")])],1),e._v(" "),o("div",{staticClass:"control"},[o("button",{staticClass:"button is-primary is-wide",class:{"is-loading":e.loading},attrs:{type:"submit",disabled:!e.loggedIn||!e.myProposal}},[e._v("\n            Save Proposal\n          ")])])])]):o("h5",{staticClass:"has-text-centered"},[e._v("\n      Could not retrieve proposal\n    ")])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"file-cta"},[t("span",{staticClass:"file-icon"},[t("i",{staticClass:"fa fa-upload"})]),this._v(" "),t("span",{staticClass:"file-label"},[this._v("\n                  Choose a file…\n                ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",{attrs:{colspan:"3"}},[this._v("\n                No files uploaded\n              ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("small",{staticClass:"is-size-7"},[t("i",[this._v("coming soon")])])])}],!1,null,null,null);t.default=component.exports}}]);