"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[333],{4333:(K,m,r)=>{r.r(m),r.d(m,{ShopModule:()=>G});var c=r(6895),x=r(4466),u=r(9838),C=r(5698),t=r(1571),g=r(529),h=r(9646),l=r(4004),b=r(2340);class _{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6,this.search=""}}let f=(()=>{class o{constructor(e){this.http=e,this.baseUrl=b.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.shopParams=new _,this.productCache=new Map}getProducts(e=!0){if(e||(this.productCache=new Map),this.productCache.size>0&&e&&this.productCache.has(Object.values(this.shopParams).join("-"))&&(this.pagination=this.productCache.get(Object.values(this.shopParams).join("-")),this.pagination))return(0,h.of)(this.pagination);let n=new g.LE;return this.shopParams.brandId>0&&(n=n.append("brandId",this.shopParams.brandId)),this.shopParams.typeId&&(n=n.append("typeId",this.shopParams.typeId)),n=n.append("sort",this.shopParams.sort),n=n.append("pageIndex",this.shopParams.pageNumber),n=n.append("pageSize",this.shopParams.pageSize),this.shopParams.search&&(n=n.append("search",this.shopParams.search)),this.http.get(this.baseUrl+"products",{params:n}).pipe((0,l.U)(s=>(this.productCache.set(Object.values(this.shopParams).join("-"),s),this.pagination=s,s)))}setShopParams(e){this.shopParams=e}getShopParams(){return this.shopParams}getProduct(e){const n=[...this.productCache.values()].reduce((s,i)=>({...s,...i.data.find(p=>p.id===e)}),{});return 0!==Object.keys(n).length?(0,h.of)(n):this.http.get(this.baseUrl+"products/"+e)}getBrands(){return this.brands.length>0?(0,h.of)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe((0,l.U)(e=>this.brands=e))}getTypes(){return this.types.length>0?(0,h.of)(this.types):this.http.get(this.baseUrl+"products/types").pipe((0,l.U)(e=>this.types=e))}static#t=this.\u0275fac=function(n){return new(n||o)(t.LFG(g.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var P=r(8909),v=r(5866);function y(o,a){if(1&o&&(t.TgZ(0,"h5",14),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" You have ",e.quantityInBasket," of this item in your basket ")}}function S(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",5)(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p",6),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.YNc(9,y,2,1,"h5",7),t.TgZ(10,"div",8)(11,"i",9),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.decrementQuantity())}),t.qZA(),t.TgZ(12,"span",10),t._uU(13),t.qZA(),t.TgZ(14,"i",11),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.incrementQuantity())}),t.qZA(),t.TgZ(15,"button",12),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.updateBasket())}),t._uU(16),t.qZA()(),t.TgZ(17,"div",13)(18,"h4"),t._uU(19,"Description"),t.qZA(),t.TgZ(20,"p"),t._uU(21),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.lcZ(8,9,e.product.price)),t.xp6(2),t.Q6J("ngIf",e.quantityInBasket>0),t.xp6(4),t.hij(" ",e.quantity," "),t.xp6(2),t.Q6J("disabled",e.quantity===e.quantityInBasket),t.xp6(1),t.Oqu(e.buttonText),t.xp6(5),t.Oqu(e.product.description)}}let T=(()=>{class o{constructor(e,n,s,i){this.shopService=e,this.activatedRoute=n,this.bcService=s,this.basketService=i,this.quantity=1,this.quantityInBasket=0,this.bcService.set("@productDetails"," ")}ngOnInit(){this.loadProduct()}loadProduct(){const e=this.activatedRoute.snapshot.paramMap.get("id");e&&this.shopService.getProduct(+e).subscribe({next:n=>{this.product=n,this.bcService.set("@productDetails",n.name),this.basketService.basketSource$.pipe((0,C.q)(1)).subscribe({next:s=>{const i=s?.items.find(p=>p.id===+e);i&&(this.quantity=i.quantity,this.quantityInBasket=i.quantity)}})},error:n=>console.log(n)})}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity--}updateBasket(){if(this.product)if(this.quantity>this.quantityInBasket){const e=this.quantity-this.quantityInBasket;this.quantityInBasket+=e,this.basketService.addItemToBasket(this.product,e)}else{const e=this.quantityInBasket-this.quantity;this.quantityInBasket-=e,this.basketService.removeItemFromBasket(this.product.id,e)}}get buttonText(){return 0===this.quantityInBasket?"Add to basket":"Update basket"}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(f),t.Y36(u.gz),t.Y36(P.pm),t.Y36(v.v))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"w-100",3,"src","alt"],[1,"col-6","mt-5"],[2,"font-size","2em"],["class","text-primary mb-3",4,"ngIf"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","me-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em"],[1,"fa","fa-plus-circle","text-warning","ms-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"btn","btn-outline-primary","ms-4",3,"disabled","click"],[1,"row","mt-4"],[1,"text-primary","mb-3"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.YNc(1,S,22,11,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",s.product))},dependencies:[c.O5,c.H9]})}return o})();function Z(o,a){if(1&o&&(t.TgZ(0,"span"),t._uU(1,"Showing "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," of "),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t._uU(7," Results"),t.qZA()),2&o){const e=t.oxw(2);t.xp6(3),t.AsE(" ",(e.pageNumber-1)*e.pageSize+1," - ",e.pageNumber*e.pageSize>e.totalCount?e.totalCount:e.pageNumber*e.pageSize," "),t.xp6(3),t.Oqu(e.totalCount)}}function k(o,a){1&o&&(t.TgZ(0,"span"),t._uU(1,"There are "),t.TgZ(2,"strong"),t._uU(3,"0"),t.qZA(),t._uU(4," results for this filter"),t.qZA())}function q(o,a){if(1&o&&(t.TgZ(0,"header"),t.YNc(1,Z,8,3,"span",0),t.YNc(2,k,5,0,"span",0),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.totalCount>0),t.xp6(1),t.Q6J("ngIf",0===e.totalCount)}}let I=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:1,vars:1,consts:[[4,"ngIf"]],template:function(n,s){1&n&&t.YNc(0,q,3,2,"header",0),2&n&&t.Q6J("ngIf",s.totalCount&&s.pageNumber&&s.pageSize)},dependencies:[c.O5]})}return o})();var A=r(2521),d=r(433);function N(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"pagination",1),t.NdJ("pageChanged",function(s){t.CHM(e);const i=t.oxw();return t.KtG(i.onPagerChanged(s))}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("boundaryLinks",!0)("totalItems",e.totalCount)("itemsPerPage",e.pageSize)("maxSize",10)("ngModel",e.pageNumber)}}let w=(()=>{class o{constructor(){this.pageChanged=new t.vpe}onPagerChanged(e){this.pageChanged.emit(e.page)}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:1,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","maxSize","ngModel","pageChanged",4,"ngIf"],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"boundaryLinks","totalItems","itemsPerPage","maxSize","ngModel","pageChanged"]],template:function(n,s){1&n&&t.YNc(0,N,1,5,"pagination",0),2&n&&t.Q6J("ngIf",s.totalCount&&s.pageSize)},dependencies:[c.O5,A.Qt,d.JJ,d.On]})}return o})();function O(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2),t._UZ(2,"img",3),t.TgZ(3,"div",4)(4,"button",5),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.addItemToBasket())}),t.qZA(),t.TgZ(5,"button",6),t._uU(6,"View"),t.qZA()()(),t.TgZ(7,"div",7)(8,"a",8)(9,"h6",9),t._uU(10),t.qZA()(),t.TgZ(11,"span",10),t._uU(12),t.ALo(13,"currency"),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(3),t.MGl("routerLink","/shop/",e.product.id,""),t.xp6(5),t.hij(" ",e.product.name," "),t.xp6(2),t.Oqu(t.lcZ(13,5,e.product.price))}}let U=(()=>{class o{constructor(e){this.basketService=e}addItemToBasket(){this.product&&this.basketService.addItemToBasket(this.product)}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(v.v))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-item"]],inputs:{product:"product"},decls:1,vars:1,consts:[["class","card h-100 shadow-sm",4,"ngIf"],[1,"card","h-100","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],[1,"img-fluid","bg-info",3,"src","alt"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],[1,"btn","btn-primary","fa","fa-shopping-cart","me-2",3,"click"],[1,"btn","btn-primary",3,"routerLink"],[1,"card-body","d-flex","flex-column"],["href","",1,"text-decoration-none"],[1,"text-uppercase"],[1,"mb-2"]],template:function(n,s){1&n&&t.YNc(0,O,14,7,"div",0),2&n&&t.Q6J("ngIf",s.product)},dependencies:[c.O5,u.rH,c.H9],styles:[".btn[_ngcontent-%COMP%]{width:30%;height:40px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{transform:none;opacity:1}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(255,255,255,.5);opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlay[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}"]})}return o})();const M=["search"];function J(o,a){if(1&o&&(t.TgZ(0,"option",20),t._uU(1),t.qZA()),2&o){const e=a.$implicit,n=t.oxw(2);t.Q6J("selected",n.shopParams.sort===e.value)("value",e.value),t.xp6(1),t.hij(" ",e.name," ")}}function B(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"li",21),t.NdJ("click",function(){const i=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.onBrandSelected(i.id))}),t._uU(1),t.qZA()}if(2&o){const e=a.$implicit,n=t.oxw(2);t.ekj("active",e.id===n.shopParams.brandId),t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function z(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"li",21),t.NdJ("click",function(){const i=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.onTypeSelected(i.id))}),t._uU(1),t.qZA()}if(2&o){const e=a.$implicit,n=t.oxw(2);t.ekj("active",e.id===n.shopParams.typeId),t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function Q(o,a){if(1&o&&(t.TgZ(0,"div",22),t._UZ(1,"app-product-item",23),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.Q6J("product",e)}}function F(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",24)(1,"app-pager",25),t.NdJ("pageChanged",function(s){t.CHM(e);const i=t.oxw(2);return t.KtG(i.onPageChanged(s))}),t.qZA()()}if(2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber)}}function H(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",2)(1,"section",3)(2,"h5",4),t._uU(3,"Sort"),t.qZA(),t.TgZ(4,"select",5),t.NdJ("change",function(s){t.CHM(e);const i=t.oxw();return t.KtG(i.onSortSelected(s))}),t.YNc(5,J,2,3,"option",6),t.qZA(),t.TgZ(6,"h5",4),t._uU(7,"Brands"),t.qZA(),t.TgZ(8,"ul",7),t.YNc(9,B,2,4,"li",8),t.qZA(),t.TgZ(10,"h5",4),t._uU(11,"Types"),t.qZA(),t.TgZ(12,"ul",7),t.YNc(13,z,2,4,"li",8),t.qZA()(),t.TgZ(14,"section",9)(15,"div",10),t._UZ(16,"app-paging-header",11),t.TgZ(17,"div",12)(18,"input",13,14),t.NdJ("keyup.enter",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onSearch())}),t.qZA(),t.TgZ(20,"button",15),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onSearch())}),t._uU(21,"Search"),t.qZA(),t.TgZ(22,"button",16),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.onReset())}),t._uU(23,"Reset"),t.qZA()()(),t.TgZ(24,"div",17),t.YNc(25,Q,2,1,"div",18),t.qZA(),t.YNc(26,F,2,3,"div",19),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(5),t.Q6J("ngForOf",e.sortOptions),t.xp6(4),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types),t.xp6(3),t.Q6J("totalCount",e.totalCount)("pageNumber",e.shopParams.pageNumber)("pageSize",e.shopParams.pageSize),t.xp6(9),t.Q6J("ngForOf",e.products),t.xp6(1),t.Q6J("ngIf",e.totalCount>0)}}const Y=[{path:"",component:(()=>{class o{constructor(e){this.shopService=e,this.products=[],this.brands=[],this.types=[],this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to high",value:"priceAsc"},{name:"Price: High to low",value:"priceDesc"}],this.totalCount=0,this.shopParams=e.getShopParams()}ngOnInit(){this.getProducts(),this.getBrands(),this.getTypes()}getProducts(){this.shopService.getProducts().subscribe({next:e=>{this.products=e.data,this.totalCount=e.count},error:e=>console.log(e)})}getBrands(){this.shopService.getBrands().subscribe({next:e=>this.brands=[{id:0,name:"All"},...e],error:e=>console.log(e)})}getTypes(){this.shopService.getTypes().subscribe({next:e=>this.types=[{id:0,name:"All"},...e],error:e=>console.log(e)})}onBrandSelected(e){const n=this.shopService.getShopParams();n.brandId=e,n.pageNumber=1,this.shopService.setShopParams(n),this.shopParams=n,this.getProducts()}onTypeSelected(e){const n=this.shopService.getShopParams();n.typeId=e,n.pageNumber=1,this.shopService.setShopParams(n),this.shopParams=n,this.getProducts()}onSortSelected(e){const n=this.shopService.getShopParams();n.sort=e.target.value,this.shopService.setShopParams(n),this.shopParams=n,this.getProducts()}onPageChanged(e){const n=this.shopService.getShopParams();n.pageNumber!==e&&(n.pageNumber=e,this.shopService.setShopParams(n),this.shopParams=n,this.getProducts())}onSearch(){const e=this.shopService.getShopParams();e.search=this.searchTerm?.nativeElement.value,e.pageNumber=1,this.shopService.setShopParams(e),this.shopParams=e,this.getProducts()}onReset(){this.searchTerm&&(this.searchTerm.nativeElement.value=""),this.shopParams=new _,this.shopService.setShopParams(this.shopParams),this.getProducts()}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(f))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-shop"]],viewQuery:function(n,s){if(1&n&&t.Gf(M,5),2&n){let i;t.iGM(i=t.CRH())&&(s.searchTerm=i.first)}},decls:2,vars:1,consts:[[1,"container"],["class","row",4,"ngIf"],[1,"row"],[1,"col-3"],[1,"text-warning","ms-3"],[1,"form-select","mb-4",3,"change"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-items-center","pb-2"],[3,"totalCount","pageNumber","pageSize"],[1,"d-flex","mt-2"],["type","text","placeholder","Search",1,"form-control","me-2",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","mx-2",3,"click"],[1,"btn","btn-outline-success",3,"click"],[1,"row","row-cols-3","g-3","mb-4"],["class","col",4,"ngFor","ngForOf"],["class","d-flex justify-content-center",4,"ngIf"],[3,"selected","value"],[1,"list-group-item",3,"value","click"],[1,"col"],[3,"product"],[1,"d-flex","justify-content-center"],[3,"totalCount","pageSize","pageNumber","pageChanged"]],template:function(n,s){1&n&&(t.TgZ(0,"div",0),t.YNc(1,H,27,8,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngIf",s.types.length>0&&s.brands.length>0))},dependencies:[c.sg,c.O5,I,w,d.YN,d.Kr,U],styles:[".list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item.active[_ngcontent-%COMP%]{border-radius:10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#e95420b3;border-radius:10px}"]})}return o})()},{path:":id",component:T,data:{breadcrumb:{alias:"productDetails"}}}];let j=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(Y),u.Bz]})}return o})(),G=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[c.ez,x.m,j]})}return o})()}}]);