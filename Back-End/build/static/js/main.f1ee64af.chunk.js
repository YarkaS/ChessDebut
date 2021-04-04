(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(20),i=n.n(r),a=n(8),c=n(9),o=n(11),u=n(10),l=n(13),h=n(2),d=n(1),j=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Chess Debuts 2.0"}),Object(d.jsx)("p",{children:"Take a quiz or learn more about major chess openings."}),Object(d.jsx)("p",{children:'"Every chess master was once a beginner." - Irving Chernev'})]})}}]),n}(s.Component),p=n(15),b=n(21),O=n(14),f=[{question:"Given the Ruy Lopez. What is the Correct move order",answers:[{type:"correct",content:"e2e4 e7e5 g1f3 b8c6 f1b5"},{type:"incorrect",content:"g1f3 g8f6 g2g3 d7d5"},{type:"wrong",content:"b2b3"}]},{question:"You want to play the Benoni Defense. What are the first moves?",answers:[{type:"correct",content:"d2d4"},{type:"incorrect",content:"d2d4"},{type:"wrong",content:"e2e4"}]},{question:"What is this opening? e2e4 e7e5 g1f3 b8c6 f1b5",answers:[{type:"correct",content:"Ruy Lopez"},{type:"incorrect",content:"Caro-Kann Defense"},{type:"wrong",content:"Sicilian defense "}]},{question:"Given the Catalan Opening. What is the Correct move order",answers:[{type:"correct",content:"d2d4 g8f6 c2c4 e7e6 g2g3"},{type:"incorrect",content:"e2e4 e7e5 g1f3 b8c6 "},{type:"wrong",content:"g1f3 g8f6 g2g3 d7d5"}]},{question:"You want to play the Amar Opening. What are the first moves?",answers:[{type:"correct",content:"g1h3"},{type:"incorrect",content:"g1h3"},{type:"wrong",content:"b2b3"}]}],w=n(16);var y=function(e){return Object(d.jsx)("h2",{className:"question",children:e.content})};var m=function(e){return Object(d.jsxs)("div",{className:"questionCount",children:["Question ",Object(d.jsx)("span",{children:e.counter})," of ",Object(d.jsx)("span",{children:e.total})]})};var v=function(e){return Object(d.jsxs)("li",{className:"answerOption",children:[Object(d.jsx)("input",{type:"radio",className:"radioCustomButton",name:"radioGroup",checked:e.answerType===e.answer,id:e.answerType,value:e.answerType,disabled:e.answer,onChange:e.onAnswerSelected}),Object(d.jsx)("label",{className:"radioCustomLabel",htmlFor:e.answerType,children:e.answerContent})]})};var x=function(e){return Object(d.jsx)(w.CSSTransitionGroup,{className:"container",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500,children:Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{counter:e.questionId,total:e.questionTotal}),Object(d.jsx)(y,{content:e.question}),Object(d.jsx)("ul",{className:"answerOptions",children:e.answerOptions.map((function(t){return Object(d.jsx)(v,{answerContent:t.content,answerType:t.type,answer:e.answer,questionId:e.questionId,onAnswerSelected:e.onAnswerSelected},t.content)}))})]},e.questionId)})};var g=function(e){return Object(d.jsx)(w.CSSTransitionGroup,{className:"container result",component:"div",transitionName:"fade",transitionEnterTimeout:800,transitionLeaveTimeout:500,transitionAppear:!0,transitionAppearTimeout:500,children:Object(d.jsxs)("div",{children:["You are mainly ",Object(d.jsx)("strong",{children:e.quizResult}),"!"]})})},q=n.p+"static/media/logo.cc18e3dd.svg",C=(n(27),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",answersCount:{},result:""},s.handleAnswerSelected=s.handleAnswerSelected.bind(Object(O.a)(s)),s}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=f.map((function(t){return e.shuffleArray(t.answers)}));this.setState({question:f[0].question,answerOptions:t[0]})}},{key:"shuffleArray",value:function(e){for(var t,n,s=e.length;0!==s;)n=Math.floor(Math.random()*s),t=e[s-=1],e[s]=e[n],e[n]=t;return e}},{key:"handleAnswerSelected",value:function(e){var t=this;this.setUserAnswer(e.currentTarget.value),this.state.questionId<f.length?setTimeout((function(){return t.setNextQuestion()}),300):setTimeout((function(){return t.setResults(t.getResults())}),300)}},{key:"setUserAnswer",value:function(e){this.setState((function(t){return{answersCount:Object(b.a)(Object(b.a)({},t.answersCount),{},Object(p.a)({},e,(t.answersCount[e]||0)+1)),answer:e}}))}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.setState({counter:e,questionId:t,question:f[e].question,answerOptions:f[e].answers,answer:""})}},{key:"getResults",value:function(){var e=this.state.answersCount,t=Object.keys(e),n=t.map((function(t){return e[t]})),s=Math.max.apply(null,n);return t.filter((function(t){return e[t]===s}))}},{key:"setResults",value:function(e){1===e.length?this.setState({result:e[0]}):this.setState({result:"Undetermined"})}},{key:"renderQuiz",value:function(){return Object(d.jsx)(x,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,questionTotal:f.length,onAnswerSelected:this.handleAnswerSelected})}},{key:"renderResult",value:function(){return Object(d.jsx)(g,{quizResult:this.state.result})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Play",children:[Object(d.jsxs)("div",{className:"Play-header",children:[Object(d.jsx)("img",{src:q,className:"App-logo",alt:"logo"}),Object(d.jsx)("h2",{children:"Take a quiz!"})]}),this.state.result?this.renderResult():this.renderQuiz()]})}}]),n}(s.Component)),k=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"The dictionary"}),Object(d.jsxs)("p",{children:["List of chess ",Object(d.jsx)("a",{href:"https://en.wikipedia.org/wiki/List_of_chess_openings",children:"openings"}),"."]})]})}}]),n}(s.Component),T=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Chess Debuts 2.0"}),Object(d.jsxs)("ul",{className:"header",children:[Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{exact:!0,to:"/",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/play",children:"Play"})}),Object(d.jsx)("li",{children:Object(d.jsx)(l.b,{to:"/dictionary",children:"Dictionary"})})]}),Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)(h.a,{exact:!0,path:"/",component:j}),Object(d.jsx)(h.a,{path:"/play",component:C}),Object(d.jsx)(h.a,{path:"/dictionary",component:k})]})]})})}}]),n}(s.Component);i.a.render(Object(d.jsx)(T,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f1ee64af.chunk.js.map