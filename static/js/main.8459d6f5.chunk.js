(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{16:function(e,c,n){},17:function(e,c,n){},24:function(e,c,n){"use strict";n.r(c);var r,t=n(1),a=(n(0),n(5)),u=n.n(a),i=(n(16),n(17),n(3));!function(e){e.CHANGE_CURRENCY_FIELD_TYPE="currency/redux/actions/CHANGE_CURRENCY_FIELD_TYPE",e.CHANGE_CHANGE_ACTION="currency/redux/actions/CHANGE_CHANGE_ACTION",e.CHANGE_CURRENT_CURRENCY="currency/redux/actions/CHANGE_CURRENT_CURRENCY"}(r||(r={}));var s=function(e,c){return{type:r.CHANGE_CURRENCY_FIELD_TYPE,payload:{amountOfBYN:e,amountOfCurrency:c}}},o=function(e){return{type:r.CHANGE_CHANGE_ACTION,payload:{isBuying:e}}};var l=function(e){return e.currency},y=function(e){var c=e.currenciesName,n=e.currentCurrency,r=e.currencyRate,a=e.isBuying,u=e.amountOfBYN,i=e.amountOfCurrency,s=e.changeCurrencyField,o=e.changeAction,l=e.changeCurrentCurrency,y=a?Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("label",{children:["You give the next amount of BYN:",Object(t.jsx)("input",{value:u,"data-currency":"byn",onChange:s})]}),Object(t.jsxs)("label",{children:["You get the next amount of ",n,":",Object(t.jsx)("input",{value:i,"data-currency":"currency",onChange:s})]})]}):Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("label",{children:["You give the next amount of ",n,":",Object(t.jsx)("input",{value:i,"data-currency":"currency",onChange:s})]}),Object(t.jsxs)("label",{children:["You get the next amount of BYN:",Object(t.jsx)("input",{value:u,"data-currency":"byn",onChange:s})]})]});return Object(t.jsxs)("div",{className:"currency",children:[Object(t.jsx)("h2",{children:"Currency exchange"}),Object(t.jsxs)("div",{className:"currency-names",children:[Object(t.jsx)("p",{children:"Current currency:"}),Object(t.jsx)("ul",{children:c.map((function(e,c){return Object(t.jsx)("li",{className:"currencies ".concat(n===e?"activeCurrency":null),onClick:l,"data-currency":e,children:e},"".concat(c,"-").concat(e))}))})]}),Object(t.jsxs)("div",{className:"currency-action",children:[Object(t.jsx)("span",{className:a?"active":"","data-action":"buy",onClick:o,children:"Buy"}),Object(t.jsx)("span",{className:a?"":"active","data-action":"sell",onClick:o,children:"Sell"})]}),Object(t.jsxs)("div",{className:"fields",children:[Object(t.jsxs)("p",{children:["Currency rate: ",r]}),y]})]})},C=function(){var e=function(){var e=Object(i.b)();return function(c){return e(c)}}(),c=0,n=Object(i.c)(l),a=n.currencies,u=n.currentCurrency,C=n.isBuying,j=n.amountOfBYN,d=n.amountOfCurrency,N=a.map((function(e){return e.currencyName===u&&(c=C?e.buyRate:e.sellRate),e.currencyName}));return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(y,{currenciesName:N,currentCurrency:u,currencyRate:c,isBuying:C,amountOfBYN:j,amountOfCurrency:d,changeCurrencyField:function(n){var r=n.currentTarget.value;if(isFinite(+r)&&n.currentTarget.dataset.currency){var t=n.currentTarget.dataset.currency;e("byn"===t?s(r,""===r?r:(+Number(r).toFixed(2)/c).toFixed(2)):s(""===r?r:(+Number(r).toFixed(2)*c).toFixed(2),r))}},changeAction:function(c){"buy"===c.currentTarget.dataset.action?e(o(!0)):e(o(!1))},changeCurrentCurrency:function(c){c.currentTarget.dataset.currency&&e(function(e){return{type:r.CHANGE_CURRENT_CURRENCY,payload:{currentCurrency:e}}}(c.currentTarget.dataset.currency))}})})};var j=function(){return Object(t.jsx)("div",{className:"container",children:Object(t.jsx)(C,{})})},d=n(4),N=n(2),b={currencies:[{currencyName:"USD",buyRate:2.62,sellRate:2.58},{currencyName:"EUR",buyRate:3.1,sellRate:3.06},{currencyName:"RUR",buyRate:.0345,sellRate:.0341}],currentCurrency:"USD",isBuying:!0,amountOfBYN:"",amountOfCurrency:""},O=Object(d.b)({currency:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case r.CHANGE_CURRENT_CURRENCY:case r.CHANGE_CHANGE_ACTION:return Object(N.a)(Object(N.a)(Object(N.a)({},e),c.payload),{},{amountOfBYN:"",amountOfCurrency:""});case r.CHANGE_CURRENCY_FIELD_TYPE:return Object(N.a)(Object(N.a)({},e),c.payload);default:return e}}}),h=Object(d.c)(O);u.a.render(Object(t.jsx)(i.a,{store:h,children:Object(t.jsx)(j,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.8459d6f5.chunk.js.map