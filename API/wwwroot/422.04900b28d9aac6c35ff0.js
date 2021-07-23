(self.webpackChunkclient=self.webpackChunkclient||[]).push([[422],{3422:(t,e,r)=>{"use strict";r.r(e),r.d(e,{AccountModule:()=>A});var i=r(1116),n=r(8709),o=r(1462),s=r(7368),l=r(3230),a=r(3722);let u=(()=>{class t{constructor(t,e,r){this.accountService=t,this.router=e,this.activatedRoute=r}ngOnInit(){this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop",this.createLoginForm()}createLoginForm(){this.loginForm=new o.cw({email:new o.NI("",[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]),password:new o.NI("",o.kI.required)})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>{this.router.navigateByUrl(this.returnUrl)},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(l.B),s.Y36(n.F0),s.Y36(n.gz))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-login"]],decls:22,vars:12,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"],[1,"col-4"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"form",2),s.NdJ("ngSubmit",function(){return e.onSubmit()}),s.TgZ(3,"div",3),s.TgZ(4,"h1",4),s._uU(5,"Login"),s.qZA(),s.qZA(),s._UZ(6,"app-text-input",5),s._UZ(7,"app-text-input",6),s.TgZ(8,"button",7),s._uU(9,"Sign in"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(10,"div",8),s.TgZ(11,"p"),s._uU(12),s.qZA(),s.TgZ(13,"p"),s._uU(14),s.qZA(),s.TgZ(15,"p"),s._uU(16),s.qZA(),s.TgZ(17,"p"),s._uU(18),s.qZA(),s.TgZ(19,"pre"),s._uU(20),s.ALo(21,"json"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(2),s.Q6J("formGroup",e.loginForm),s.xp6(4),s.Q6J("label","Email Address"),s.xp6(1),s.Q6J("label","Password")("type","password"),s.xp6(1),s.Q6J("disabled",e.loginForm.invalid),s.xp6(4),s.hij("Form Status: ",e.loginForm.status,""),s.xp6(2),s.hij("Email Status: ",e.loginForm.get("email").status,""),s.xp6(2),s.hij("Email Touched: ",e.loginForm.get("email").touched,""),s.xp6(2),s.hij("Email Dirty: ",e.loginForm.get("email").dirty,""),s.xp6(2),s.Oqu(s.lcZ(21,10,e.loginForm.value)))},directives:[o._Y,o.JL,o.sg,a.t,o.JJ,o.u],pipes:[i.Ts],styles:[""]}),t})();var c=r(8318),p=r(8569),m=r(8470);function g(t){return!(0,m.k)(t)&&t-parseFloat(t)+1>=0}var d=r(6163);function b(t){const{index:e,period:r,subscriber:i}=t;if(i.next(e),!i.closed){if(-1===r)return i.complete();t.index=e+1,this.schedule(t,r)}}var h=r(878),f=r(4689),Z=r(9996);function x(t,e){if(1&t&&(s.TgZ(0,"li"),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.hij(" ",t," ")}}function v(t,e){if(1&t&&(s.TgZ(0,"ul",10),s.YNc(1,x,2,1,"li",11),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngForOf",t.errors)}}const w=[{path:"login",component:u},{path:"register",component:(()=>{class t{constructor(t,e,r){this.fb=t,this.accountService=e,this.router=r}ngOnInit(){this.createRegisterForm()}createRegisterForm(){this.registerForm=this.fb.group({displayName:[null,[o.kI.required]],email:[null,[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],[this.validateEmailNotTaken()]],password:[null,[o.kI.required]]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(t=>{this.router.navigateByUrl("/shop")},t=>{console.log(t),this.errors=t.errors})}validateEmailNotTaken(){return t=>function(t=0,e,r){let i=-1;return g(e)?i=Number(e)<1?1:Number(e):(0,d.K)(e)&&(r=e),(0,d.K)(r)||(r=p.P),new c.y(e=>{const n=g(t)?t:+t-r.now();return r.schedule(b,n,{index:0,period:i,subscriber:e})})}(500).pipe((0,f.w)(()=>t.value?this.accountService.checkEmailExists(t.value).pipe((0,Z.U)(t=>t?{emailExists:!0}:null)):(0,h.of)(null)))}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(o.qu),s.Y36(l.B),s.Y36(n.F0))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-register"]],decls:12,vars:7,consts:[[1,"d-flex","justify-content-center","mt-5"],[1,"col-3"],[3,"formGroup","ngSubmit"],[1,"text-center","mb-4"],[1,"h3","mb-3","font-weight-normal"],["formControlName","displayName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],["class","text-danger list-unstyled",4,"ngIf"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block",3,"disabled"],[1,"text-danger","list-unstyled"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"form",2),s.NdJ("ngSubmit",function(){return e.onSubmit()}),s.TgZ(3,"div",3),s.TgZ(4,"h1",4),s._uU(5,"Register"),s.qZA(),s.qZA(),s._UZ(6,"app-text-input",5),s._UZ(7,"app-text-input",6),s._UZ(8,"app-text-input",7),s.YNc(9,v,2,1,"ul",8),s.TgZ(10,"button",9),s._uU(11,"Register"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(2),s.Q6J("formGroup",e.registerForm),s.xp6(4),s.Q6J("label","Display Name"),s.xp6(1),s.Q6J("label","Email Address"),s.xp6(1),s.Q6J("label","Password")("type","password"),s.xp6(1),s.Q6J("ngIf",e.errors),s.xp6(1),s.Q6J("disabled",e.registerForm.invalid))},directives:[o._Y,o.JL,o.sg,a.t,o.JJ,o.u,i.O5,i.sg],styles:[""]}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.Bz.forChild(w)],n.Bz]}),t})();var y=r(5425);let A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.ez,q,y.m]]}),t})()}}]);