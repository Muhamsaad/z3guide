"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6414],{3174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(3117),r=(t(7294),t(3905)),s=t(504),i=t.n(s);const o={title:"Arithmetic",sidebar_position:5},l=void 0,c={unversionedId:"theories/Arithmetic",id:"theories/Arithmetic",title:"Arithmetic",description:"Z3 supports the theory of arithmetic described in the following places.",source:"@site/docs-smtlib/02 - theories/05 - Arithmetic.md",sourceDirName:"02 - theories",slug:"/theories/Arithmetic",permalink:"/z3guide/docs/theories/Arithmetic",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-smtlib/02 - theories/05 - Arithmetic.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Arithmetic",sidebar_position:5},sidebar:"smtlibSidebar",previous:{title:"Conclusion",permalink:"/z3guide/docs/logic/Conclusion"},next:{title:"Bitvectors",permalink:"/z3guide/docs/theories/Bitvectors"}},d={},u=[{value:"Basics",id:"basics",level:2},{value:"Non-linear arithmetic",id:"non-linear-arithmetic",level:2},{value:"Division",id:"division",level:2}],m={toc:u};function h(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Z3 supports the theory of arithmetic described in the following places."),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"}," ",(0,r.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-Ints.shtml"},(0,r.kt)("strong",{parentName:"a"},"SMTLIB2")," standard Integers"))),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"}," ",(0,r.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-Reals.shtml"},(0,r.kt)("strong",{parentName:"a"},"SMTLIB2")," standard Reals"))),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"}," ",(0,r.kt)("a",{parentName:"p",href:"http://smtlib.cs.uiowa.edu/theories-Reals_Ints.shtml"},(0,r.kt)("strong",{parentName:"a"},"SMTLIB2")," standard Mixed Int Reals"))))),(0,r.kt)("h2",{id:"basics"},"Basics"),(0,r.kt)("p",null,"Z3 has builtin support for integer and real constants. This two types should not be confused with machine integers (32-bit or 64-bit) and floating point numbers. These two types (sorts) represent the mathematical integers and reals. The command declare-const is used to declare integer and real constants."),(0,r.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(declare-const d Real)\n(declare-const e Real)",result:{output:"",error:"",status:"z3-ran",hash:"839f1bd99035fdf07051d7c11a08797852326a3d"},githubRepo:"Z3Prover/z3"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"After constants are declared, the user can assert.smt formulas containing these constants. The formulas contain arithmetic operators such as +, -, *, and so on. The command check-sat will instruct Z3 to try to find an interpretation for the declared constants that makes all formulas true. The interpretation is basically assigning a number to each constant. If such interpretation exists, we say it is a model for the asserted formulas. The command get-model displays the model built by Z3."),(0,r.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(declare-const d Real)\n(declare-const e Real)\n(assert (< a (+ b 2)))\n(assert (= a (+ (* 2 c) 10)))\n(assert (= (+ c b) 1000))\n(assert (= d e))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun b () Int\n    670)\n  (define-fun e () Real\n    0.0)\n  (define-fun d () Real\n    0.0)\n  (define-fun a () Int\n    670)\n  (define-fun c () Int\n    330)\n)\n",error:"",status:"z3-ran",hash:"367aee67879a5bc1678b15fbf3ea4d7aec8630fe"},githubRepo:"Z3Prover/z3"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"Real constants should contain a decimal point. Unlike most programming languages, Z3 will not convert automatically integers into reals and vice-versa. The function to-real can be used to convert an integer expression into a real one."),(0,r.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(declare-const d Real)\n(declare-const e Real)\n(assert (< e (+ (to_real (+ a b)) 2.0)))\n(assert (= d (+ (to_real c) 0.5)))\n(assert (< a b))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun e () Real\n    2.0)\n  (define-fun b () Int\n    1)\n  (define-fun a () Int\n    0)\n  (define-fun c () Int\n    0)\n  (define-fun d () Real\n    (/ 1.0 2.0))\n)\n",error:"",status:"z3-ran",hash:"e3394974bd34a29bb3474d415f9818809eea4306"},githubRepo:"Z3Prover/z3"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"Some operators are chainable. This includes comparison operators such as ",(0,r.kt)("inlineCode",{parentName:"p"},"<")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<="),". "),(0,r.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Int)\n(declare-const b Int)\n(declare-const c Int)\n(assert (< a b c))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun c () Int\n    1)\n  (define-fun a () Int\n    (- 1))\n  (define-fun b () Int\n    0)\n)\n",error:"",status:"z3-ran",hash:"f0ff07ba39f520e93984a8ddc788ddde67d1ff20"},githubRepo:"Z3Prover/z3"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h2",{id:"non-linear-arithmetic"},"Non-linear arithmetic"),(0,r.kt)("p",null,"We say a formula is nonlinear if it contains expressions of the form (* t s) where t and s are not numbers. Nonlinear real arithmetic is very expensive, and Z3 is not complete for this kind of formula. The command check-sat may return unknown or loop. Nonlinear integer arithmetic is undecidable there is no procedure that is correct and terminates (for every input) with a sat or unsat answer. Yes, it is impossible to build such procedure. Note that, this does not prevent Z3 from returning an answer for many nonlinear problems. The real limit is that there will always be a nonlinear integer arithmetic formula that it will fail produce an answer."),(0,r.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:'(declare-const a Int)\n(assert (< (* a a) 3))\n(check-sat)\n(get-model)\n\n(echo "Z3 does not always find solutions to non-linear problems")\n(declare-const b Real)\n(declare-const c Real)\n(assert (= (+ (* b b b) (sin (* b c))) 7))\n(check-sat)\n\n(echo "yet it can show unsatisfiabiltiy for some nontrivial nonlinear problems...")\n(declare-const x Real)\n(declare-const y Real)\n(declare-const z Real)\n(assert (= (* x x) (+ x 2.0)))\n(assert (= (* x y) x))\n(assert (= (* (- y 1.0) z) 1.0))\n(check-sat)\n\n(reset)\n(echo "When presented only non-linear polynomial constraints over reals, Z3 uses a specialized complete solver")\n(declare-const b Real)\n(declare-const c Real)\n(assert (= (+ (* b b b) (* b c)) 3.0))\n(check-sat)\n(get-model)',result:{output:"sat\n(\n  (define-fun a () Int\n    0)\n)\nZ3 does not always find solutions to non-linear problems\nunknown\nyet it can show unsatisfiabiltiy for some nontrivial nonlinear problems...\nunsat\nWhen presented only non-linear polynomial constraints over reals, Z3 uses a specialized complete solver\nsat\n(\n  (define-fun b () Real\n    (/ 1.0 8.0))\n  (define-fun c () Real\n    (/ 1535.0 64.0))\n)\n",error:"",status:"z3-ran",hash:"f58b1d3592ae15b58c71f2b22a65642b31009a9e"},githubRepo:"Z3Prover/z3"},mdxType:"CustomCodeBlock"}),(0,r.kt)("h2",{id:"division"},"Division"),(0,r.kt)("p",null,"Z3 also has support for division, integer division, modulo and remainder operators. Internally, they are all mapped to multiplication."),(0,r.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Int)\n(declare-const r1 Int)\n(declare-const r2 Int)\n(declare-const r3 Int)\n(declare-const r4 Int)\n(declare-const r5 Int)\n(declare-const r6 Int)\n(assert (= a 10))\n(assert (= r1 (div a 4))) ; integer division\n(assert (= r2 (mod a 4))) ; mod\n(assert (= r3 (rem a 4))) ; remainder\n(assert (= r4 (div a (- 4)))) ; integer division\n(assert (= r5 (mod a (- 4)))) ; mod\n(assert (= r6 (rem a (- 4)))) ; remainder\n(declare-const b Real)\n(declare-const c Real)\n(assert (= b (/ c 3.0)))\n(assert (= c 20.0))\n(check-sat)\n(get-model)",result:{output:"sat\n(\n  (define-fun c () Real\n    20.0)\n  (define-fun b () Real\n    (/ 20.0 3.0))\n  (define-fun r6 () Int\n    (- 2))\n  (define-fun r5 () Int\n    2)\n  (define-fun r4 () Int\n    (- 2))\n  (define-fun r3 () Int\n    2)\n  (define-fun r2 () Int\n    2)\n  (define-fun r1 () Int\n    2)\n  (define-fun a () Int\n    10)\n)\n",error:"",status:"z3-ran",hash:"c57917b16a70fb8c13ce7a87cd3f52b4aaf2b9b9"},githubRepo:"Z3Prover/z3"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"In Z3, division by zero is allowed, but the result is not specified. Division is not a partial function. Actually, in Z3 all functions are total, although the result may be under-specified in some cases like division by zero."),(0,r.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"(declare-const a Real)\n; The following formula is satisfiable since division by zero is not specified.\n(assert (= (/ a 0.0) 10.0)) \n(check-sat)\n(get-model)\n\n; Although division by zero is not specified, division is still a function.\n; So, (/ a 0.0) cannot evaluated to 10.0 and 2.0.\n(assert (= (/ a 0.0) 2.0)) \n(check-sat)",result:{output:"sat\n(\n  (define-fun a () Real\n    38.0)\n  (define-fun /0 ((x!0 Real) (x!1 Real)) Real\n    10.0)\n)\nunsat\n",error:"",status:"z3-ran",hash:"1391466e05b381feadbbff7834a6ea03b4104789"},githubRepo:"Z3Prover/z3"},mdxType:"CustomCodeBlock"}),(0,r.kt)("p",null,"If you are not happy with this behavior, you may use ite (if-then-else) operator to guard every division, and assign whatever interpretation you like to the division by zero. This example uses define-fun constructor to create a new operator mydiv. This is essentially a macro, and Z3 will expand its definition for every application of mydiv."),(0,r.kt)(i(),{input:{lang:"z3",highlight:"lisp",statusCodes:{success:"z3-ran",timeout:"z3-timed-out",runError:"z3-failed",runtimeError:"z3-runtime-error"},code:"; defining my own division operator where x0.0 == 0.0 for every x.\n(define-fun mydiv ((x Real) (y Real)) Real\n  (if (not (= y 0.0))\n      (/ x y)\n      0.0))\n(declare-const a Real)\n(declare-const b Real)\n(assert (= (mydiv a b) 1.0))\n(assert (= b 0.0))\n(check-sat)",result:{output:"unsat\n",error:"",status:"z3-ran",hash:"c1c5c7cead09156bfdf1fd358e3ca03be526de90"},githubRepo:"Z3Prover/z3"},mdxType:"CustomCodeBlock"}))}h.isMDXComponent=!0}}]);