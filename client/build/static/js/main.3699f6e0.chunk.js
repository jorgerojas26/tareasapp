(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(43)},30:function(e,t,a){},31:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(13),i=a.n(o),l=(a(30),a(7)),c=a(8),s=a(11),d=a(9),m=a(12),u=(a(31),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("span",{className:"text-white"},"Tasks ",r.a.createElement("span",{className:"badge badge-light"},this.props.priority)))}}]),t}(n.Component)),p=a(14),h=a(3),b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={title:"",responsible:"",description:"",priority:"High"},e.handleInput=e.handleInput.bind(Object(h.a)(Object(h.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleInput",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(p.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addTodo(this.state)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},"Formulario de Registro de Tareas")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",name:"title",placeholder:"T\xedtulo",onChange:this.handleInput,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",name:"responsible",placeholder:"Responsible",onChange:this.handleInput,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",name:"description",placeholder:"Description",onChange:this.handleInput,required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",name:"priority",onChange:this.handleInput},r.a.createElement("option",null,"High"),r.a.createElement("option",null,"Medium"),r.a.createElement("option",null,"Low"))),r.a.createElement("hr",null),r.a.createElement("input",{className:"btn btn-primary form-control",type:"submit",value:"Enviar"}))))))}}]),t}(n.Component),E=a(15),f=a.n(E),v=a(16),g=a(52),y=a(45),j=a(46),O=a(47),T=a(48),N=a(49),k=a(50),w=a(51),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={_id:a.props.elemToEdit._id,title:a.props.elemToEdit.title,responsible:a.props.elemToEdit.responsible,description:a.props.elemToEdit.description,priority:a.props.elemToEdit.priority},a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a.handleInput=a.handleInput.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.update(this.state),this.props.toggle()}},{key:"handleInput",value:function(){var e=Object(v.a)(f.a.mark(function e(t){var a,n,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target,n=a.name,r=a.value,e.next=3,this.setState(Object(p.a)({},n,r));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,{isOpen:this.props.modal,toggle:this.props.toggle,className:this.props.className},r.a.createElement(y.a,{toggle:this.props.toggle},"Modal title"),r.a.createElement(j.a,{onSubmit:this.handleSubmit},r.a.createElement(O.a,null,r.a.createElement(T.a,null,r.a.createElement(N.a,{type:"text",name:"title",placeholder:"Title",defaultValue:this.props.elemToEdit.title,onChange:this.handleInput,required:!0})),r.a.createElement(T.a,null,r.a.createElement(N.a,{type:"text",name:"responsible",placeholder:"Responsible",defaultValue:this.props.elemToEdit.responsible,onChange:this.handleInput,required:!0})),r.a.createElement(T.a,null,r.a.createElement(N.a,{type:"text",name:"description",placeholder:"Description",defaultValue:this.props.elemToEdit.description,onChange:this.handleInput,required:!0})),r.a.createElement(T.a,null,r.a.createElement(N.a,{type:"select",name:"priority",defaultValue:this.props.elemToEdit.priority,onChange:this.handleInput},r.a.createElement("option",null,"High"),r.a.createElement("option",null,"Medium"),r.a.createElement("option",null,"Low")))),r.a.createElement(k.a,null,r.a.createElement(w.a,{type:"submit",color:"primary"},"Edit")," ",r.a.createElement(w.a,{color:"secondary",onClick:this.props.toggle},"Cancel")))))}}]),t}(r.a.Component),S=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={modal:!1,elem:{}},e.toggleEditModal=e.toggleEditModal.bind(Object(h.a)(Object(h.a)(e))),e.updateTodo=e.updateTodo.bind(Object(h.a)(Object(h.a)(e))),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"toggleEditModal",value:function(){var e=Object(v.a)(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState(function(e){return{modal:!e.modal,elem:t}});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateTodo",value:function(e){this.props.update(e)}},{key:"renderModal",value:function(){if(this.state.modal)return r.a.createElement(C,{modal:this.state.modal,toggle:this.toggleEditModal,elemToEdit:this.state.elem,update:this.updateTodo})}},{key:"render",value:function(){var e=this,t=this.renderModal(),a=this.props.state.map(function(t,a){var n;return n="High"===t.priority?r.a.createElement("span",{className:"badge badge-danger"},t.priority):"Medium"===t.priority?r.a.createElement("span",{className:"badge badge-warning"},t.priority):r.a.createElement("span",{className:"badge badge-secondary"},t.priority),r.a.createElement("div",{className:"col-md-4",key:t._id},r.a.createElement("div",{className:"card ml-2 mb-2"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h5",{className:"card-title"},t.title),n),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,t.description),r.a.createElement("p",null,r.a.createElement("mark",null,t.responsible))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("button",{className:"btn btn-danger m-1",onClick:e.props.remove.bind(e,t._id)},"Delete"),r.a.createElement("button",{className:"btn btn-primary m-1",onClick:function(){return e.toggleEditModal(t)}},"Update")))))});return r.a.createElement("div",{className:"row"},a,t)}}]),t}(n.Component),I=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(d.a)(t).call(this))).state={todos:[]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getTaskList()}},{key:"getTaskList",value:function(){var e=this;fetch("/api/getTodoList").then(function(e){return e.json()}).then(function(t){e.setState({todos:t})}).catch(function(e){console.error(e)})}},{key:"addTodo",value:function(e){var t=this;fetch("/api/addTodo",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(){t.getTaskList()}).catch(function(e){console.error(e)})}},{key:"updateTodo",value:function(e){var t=this;fetch("/api/updateTodo/"+e._id,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(){t.getTaskList()}).catch(function(e){console.error(e)})}},{key:"removeTodo",value:function(e){var t=this;fetch("/api/removeTodo/"+e,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(){t.setState({todos:t.state.todos.filter(function(t){return t._id!==e})})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,{priority:this.state.todos.length}),r.a.createElement("div",{className:"row mt-4 justify-content-center"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(b,{addTodo:this.addTodo.bind(this)})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement(S,{state:this.state.todos,remove:this.removeTodo.bind(this),update:this.updateTodo.bind(this)}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.3699f6e0.chunk.js.map