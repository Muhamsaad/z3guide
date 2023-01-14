"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3340],{9595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>m,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var n=a(7462),s=(a(7294),a(3905));a(7634);const i={title:"Formula Simplification",sidebar_position:4},m=void 0,r={unversionedId:"Example Programs/Formula Simplification",id:"Example Programs/Formula Simplification",title:"Formula Simplification",description:"Different applications vary in the requirements for formula simplification.",source:"@site/docs-programming/03 - Example Programs/04 - Formula Simplification.md",sourceDirName:"03 - Example Programs",slug:"/Example Programs/Formula Simplification",permalink:"/z3guide/programming/Example Programs/Formula Simplification",draft:!1,editUrl:"https://github.com/microsoft/z3guide/tree/main/website/docs-programming/03 - Example Programs/04 - Formula Simplification.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Formula Simplification",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"SPACER",permalink:"/z3guide/programming/Example Programs/SPACER"},next:{title:"MBQI",permalink:"/z3guide/programming/Example Programs/MBQI"}},l={},o=[{value:"Built-in simplification",id:"built-in-simplification",level:2},{value:"Developing simplification using Z3",id:"developing-simplification-using-z3",level:2},{value:"Subterm simplification",id:"subterm-simplification",level:2}],p={toc:o};function c(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Different applications vary in the requirements for formula simplification.\nZ3 exposes a few built-in methods that can be used for simple algebraic simplification.\nThere are no methods based on z3 that ensure that expressions are simplified to a unique canonical form\n(which is a characteristic of simplifying propositional formulas using BDDs), but you can use z3\nto simplify subformulas using different criteria. "),(0,s.kt)("h2",{id:"built-in-simplification"},"Built-in simplification"),(0,s.kt)("p",null,"Z3 exposes some built-in methods for formula simplification"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Method from SMTLIB"),(0,s.kt)("th",{parentName:"tr",align:null},"Method from Python"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"simplify")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"simplify(..)")),(0,s.kt)("td",{parentName:"tr",align:null},"performs rewriting simplification")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(apply ctx-simplify)")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Tactic('ctx-simplify').apply(..)")),(0,s.kt)("td",{parentName:"tr",align:null},"maintains Boolean skeleton of formula but removes sub-formulas that are subsumed by context. It uses a syntactic equality check on expressions to determine subsumption.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"(apply ctx-solver-simplify)")),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"Tactic('ctx-solver-simplify').apply(..)")),(0,s.kt)("td",{parentName:"tr",align:null},"uses solver calls to determine context subsumption.")))),(0,s.kt)("h2",{id:"developing-simplification-using-z3"},"Developing simplification using Z3"),(0,s.kt)("p",null,"In the following we outline a procedure for extracting a simplified\nCNF representation of a formula."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom z3 import *\n\ndef is_atom(t):\n    if not is_bool(t):\n        return False\n    if not is_app(t):\n        return False\n    k = t.decl().kind()\n    if k == Z3_OP_AND or k == Z3_OP_OR or k == Z3_OP_IMPLIES:\n        return False\n    if k == Z3_OP_EQ and t.arg(0).is_bool():\n        return False\n    if k == Z3_OP_TRUE or k == Z3_OP_FALSE or k == Z3_OP_XOR or k == Z3_OP_NOT:\n        return False\n    return True\n\ndef atoms(fml):\n    visited = set([])\n    atms = set([])\n    def atoms_rec(t, visited, atms):\n        if t in visited:\n            return\n        visited |= { t }\n        if is_atom(t):\n            atms |= { t }\n        for s in t.children():\n            atoms_rec(s, visited, atms)\n    atoms_rec(fml, visited, atms)\n    return atms\n\ndef atom2literal(m, a):\n    if is_true(m.eval(a)):\n        return a\n    return Not(a)\n\n")),(0,s.kt)("p",null,"Extract subset of atoms used to satisfy the negation\nof a formula."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"snot is a solver for Not(fml)"),(0,s.kt)("li",{parentName:"ul"},"s    is a solver for fml"),(0,s.kt)("li",{parentName:"ul"},"m    is a model for Not(fml)")),(0,s.kt)("p",null,"evaluate each atom in ",(0,s.kt)("inlineCode",{parentName:"p"},"fml")," using ",(0,s.kt)("inlineCode",{parentName:"p"},"m")," and create\nliterals corresponding to the sign of the evaluation.\nIf the model evaluates atoms to false, the literal is\nnegated."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def implicant(atoms, s, snot):\n    m = snot.model()\n    lits = [atom2literal(m, a) for a in atoms]\n    is_sat = s.check(lits)\n    assert is_sat == unsat\n    core = s.unsat_core()\n    return Or([mk_not(c) for c in core])\n\n")),(0,s.kt)("p",null,"Extract a CNF representation of ",(0,s.kt)("inlineCode",{parentName:"p"},"fml"),"\nThe procedure uses two solvers\nEnumerate models for ",(0,s.kt)("inlineCode",{parentName:"p"},"Not(fml)"),"\nUse the enumerated model to identify literals\nthat imply ",(0,s.kt)("inlineCode",{parentName:"p"},"Not(fml)"),"\nThe CNF of ",(0,s.kt)("inlineCode",{parentName:"p"},"fml")," is a conjunction of the\nnegation of these literals."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"\ndef to_cnf(fml):\n    atms = atoms(fml)\n    s = Solver()\n    snot = Solver()\n    snot.add(Not(fml))\n    s.add(fml)\n\n    while sat == snot.check():\n        clause = implicant(atms, s, snot)\n        yield clause\n        snot.add(clause)\n\n        \na, b, c, = Bools('a b c')\nfml = Or(And(a, b), And(Not(a), c))\n\nfor clause in to_cnf(fml):\n    print(clause)\n    \n")),(0,s.kt)("h2",{id:"subterm-simplification"},"Subterm simplification"),(0,s.kt)("p",null,"The simplification routine exposed by Z3 performs only\nrudimentary algebraic simplifications. It also does not\nuse contextual information into account. In the following\nexample we develop a custom simplifier ",(0,s.kt)("inlineCode",{parentName:"p"},"simplify"),"\nthat uses the current context to find subterms that are\nequal to the term being considered. In the example below,\nthe term ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mn",{parentName:"mrow"},"4"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"H"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"4 + 4((H-1)/2/2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"4"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"(("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.08125em"}},"H"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mord"},"/2/2"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))," is equal to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"H")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"H")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.08125em"}},"H"))))),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"H = Int('H')\ns = Solver()\nt = 4 + 4 * (((H - 1) / 2) / 2)\ns.add(H % 4 == 0)\ns.check()\nm = s.model()\nprint(t, \"--\x3e\", simplify(s, m, t))\n")),(0,s.kt)("p",null,"To extract set of subterms it is useful to avoid traversing\nthe same term twice."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"\ndef subterms(t):\n    seen = {}\n    def subterms_rec(t):\n        if is_app(t):\n            for ch in t.children():\n                if ch in seen:\n                    continue\n                seen[ch] = True\n                yield ch\n                yield from subterms_rec(ch)\n    return { s for s in subterms_rec(t) }\n")),(0,s.kt)("p",null,"We can then define the simplification routine:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def are_equal(s, t1, t2):\n    s.push()\n    s.add(t1 != t2)\n    r = s.check()\n    s.pop()\n    return r == unsat\n\ndef simplify(slv, mdl, t):\n    subs = subterms(t)\n    values = { s : mdl.eval(s) for s in subs }\n    values[t] = mdl.eval(t)\n    def simplify_rec(t):        \n        subs = subterms(t)\n        for s in subs:\n            if s.sort().eq(t.sort()) and values[s].eq(values[t]) and are_equal(slv, s, t):\n                return simplify_rec(s)\n        chs = [simplify_rec(ch) for ch in t.children()]\n        return t.decl()(chs)\n    return simplify_rec(t)\n")))}c.isMDXComponent=!0}}]);