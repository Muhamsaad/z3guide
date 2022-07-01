"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"category","label":"fixedpoints","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Introduction","href":"/rise4fun/docs/fixedpoints/intro","docId":"fixedpoints/intro"},{"type":"link","label":"Basic Datalog","href":"/rise4fun/docs/fixedpoints/basicdatalog","docId":"fixedpoints/basicdatalog"},{"type":"link","label":"Engine for Property Directed Reachability","href":"/rise4fun/docs/fixedpoints/engineforpdr","docId":"fixedpoints/engineforpdr"}]},{"type":"category","label":"guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Z3 Guide Introduction","href":"/rise4fun/docs/guide/intro","docId":"guide/intro"},{"type":"link","label":"Propositional Logic","href":"/rise4fun/docs/guide/propositional-logic","docId":"guide/propositional-logic"},{"type":"link","label":"Uninterpreted Functions and Constants","href":"/rise4fun/docs/guide/Uninterpreted-functions-and-constants","docId":"guide/Uninterpreted-functions-and-constants"},{"type":"category","label":"Arithmetic","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Basics","href":"/rise4fun/docs/guide/Arithmetic/Basics","docId":"guide/Arithmetic/Basics"},{"type":"category","label":"Basic Commands","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Basic Commands","href":"/rise4fun/docs/guide/Arithmetic/basic-commands.md/basic-commands","docId":"guide/Arithmetic/basic-commands.md/basic-commands"},{"type":"link","label":"Using Scopes","href":"/rise4fun/docs/guide/Arithmetic/basic-commands.md/using-scopes","docId":"guide/Arithmetic/basic-commands.md/using-scopes"},{"type":"link","label":"Configuration","href":"/rise4fun/docs/guide/Arithmetic/basic-commands.md/configuration","docId":"guide/Arithmetic/basic-commands.md/configuration"}],"href":"/rise4fun/docs/category/basic-commands"},{"type":"link","label":"Nonlinear Arithmetic","href":"/rise4fun/docs/guide/Arithmetic/nonlinear-arithmetic","docId":"guide/Arithmetic/nonlinear-arithmetic"},{"type":"link","label":"Division","href":"/rise4fun/docs/guide/Arithmetic/division","docId":"guide/Arithmetic/division"}],"href":"/rise4fun/docs/category/arithmetic"},{"type":"link","label":"Bitvectors","href":"/rise4fun/docs/guide/Bitvectors","docId":"guide/Bitvectors"},{"type":"link","label":"Arrays","href":"/rise4fun/docs/guide/arrays","docId":"guide/arrays"},{"type":"link","label":"Datatypes","href":"/rise4fun/docs/guide/Datatypes","docId":"guide/Datatypes"},{"type":"link","label":"Strings and Sequences","href":"/rise4fun/docs/guide/Sequences","docId":"guide/Sequences"},{"type":"link","label":"Regular Expressions","href":"/rise4fun/docs/guide/Regular Expressions","docId":"guide/Regular Expressions"},{"type":"link","label":"Quantifiers","href":"/rise4fun/docs/guide/Quantifiers","docId":"guide/Quantifiers"},{"type":"link","label":"Conclusion","href":"/rise4fun/docs/guide/Conclusion","docId":"guide/Conclusion"}]}]},"docs":{"fixedpoints/basicdatalog":{"id":"fixedpoints/basicdatalog","title":"Basic Datalog","description":"The default fixed-point engine is a bottom-up Datalog engine. It works with finite relations and uses finite table representations as hash tables as the default way to represent finite relations.","sidebar":"tutorialSidebar"},"fixedpoints/engineforpdr":{"id":"fixedpoints/engineforpdr","title":"Engine for Property Directed Reachability","description":"A different underlying engine for fixed-points is based on an algorithm for Property Directed Reachability (PDR). The PDR engine is used by default for relations over integers, reals and algebraic data-types. The version in Z3 applies to Horn clauses with arithmetic and Boolean domains. The engine also works with domains using algebraic data-types and bit-vectors, although it is currently not overly tuned for either. The PDR engine is targeted at applications from symbolic model checking of software. The systems may be infinite state. The following examples also serve a purpose of showing how software model checking problems (of safety properties) can be embedded into Horn clauses and solved using PDR.","sidebar":"tutorialSidebar"},"fixedpoints/intro":{"id":"fixedpoints/intro","title":"Introduction","description":"Z3 contains an extension called muZ with fixed-point constraints. This tutorial includes some examples that demonstrate features of this engine. The following papers \u03bcZ - An Efficient Engine for Fixed-Points with Constraints. (CAV 2011) and Generalized Property Directed Reachability, IC3/PDR, (SAT 2012) describe some of the main features of the engine. The IC3 engine is now based on SPACER.","sidebar":"tutorialSidebar"},"guide/Arithmetic/basic-commands.md/basic-commands":{"id":"guide/Arithmetic/basic-commands.md/basic-commands","title":"Basic Commands","description":"The Z3 input format is an extension of the one defined by the SMT-LIB 2.0 standard. A Z3 script is a sequence of commands. The help command displays a list of all available commands. The command echo displays a message. Internally, Z3 maintains a stack of user provided formulas and declarations. We say these are the assertions provided by the user. The command declare-const declares a constant of a given type (aka sort). The command declare-fun declares a function. In the following example, we declared a function that receives an integer and a boolean, and returns an integer.","sidebar":"tutorialSidebar"},"guide/Arithmetic/basic-commands.md/configuration":{"id":"guide/Arithmetic/basic-commands.md/configuration","title":"Configuration","description":"The command set-option is used to configure Z3. Z3 has several options to control its behavior. Some of these options (e.g., produce-proofs) can only be set before any declaration or assertion. We use the reset command to erase all assertions and declarations. After the reset command, all configuration options can be set.","sidebar":"tutorialSidebar"},"guide/Arithmetic/basic-commands.md/using-scopes":{"id":"guide/Arithmetic/basic-commands.md/using-scopes","title":"Using Scopes","description":"In some applications, we want to explore several similar problems that share several definitions and assertions. We can use the commands push and pop for doing that. Z3 maintains a global stack of declarations and assertions. The command push creates a new scope by saving the current stack size. The command pop removes any assertion or declaration performed between it and the matching push. The check-sat and get-assertions commands always operate on the content of the global stack.","sidebar":"tutorialSidebar"},"guide/Arithmetic/Basics":{"id":"guide/Arithmetic/Basics","title":"Basics","description":"Z3 has builtin support for integer and real constants. This two types should not be confused with machine integers (32-bit or 64-bit) and floating point numbers. These two types (sorts) represent the mathematical integers and reals. The command declare-const is used to declare integer and real constants.","sidebar":"tutorialSidebar"},"guide/Arithmetic/division":{"id":"guide/Arithmetic/division","title":"Division","description":"Z3 also has support for division, integer division, modulo and remainder operators. Internally, they are all mapped to multiplication.","sidebar":"tutorialSidebar"},"guide/Arithmetic/nonlinear-arithmetic":{"id":"guide/Arithmetic/nonlinear-arithmetic","title":"Nonlinear Arithmetic","description":"We say a formula is nonlinear if it contains expressions of the form ( t s) where t and s are not numbers. Nonlinear real arithmetic is very expensive, and Z3 is not complete for this kind of formula. The command check-sat may return unknown or loop. Nonlinear integer arithmetic is undecidable there is no procedure that is correct and terminates (for every input) with a sat or unsat answer. Yes, it is impossible to build such procedure. Note that, this does not prevent Z3 from returning an answer for many nonlinear problems. The real limit is that there will always be a nonlinear integer arithmetic formula that it will fail produce an answer.","sidebar":"tutorialSidebar"},"guide/arrays":{"id":"guide/arrays","title":"Arrays","description":"As part of formulating a programme of a mathematical theory of computation McCarthy proposed a basic theory of arrays as characterized by the select-store axioms. The expression (select a i) returns the value stored at position i of the array a; and (store a i v) returns a new array identical to a, but on position i it contains the value v.","sidebar":"tutorialSidebar"},"guide/Bitvectors":{"id":"guide/Bitvectors","title":"Bitvectors","description":"Modern CPUs and main-stream programming languages use arithmetic over fixed-size bit-vectors. The theory of bit-vectors allows modeling the precise semantics of unsigned and of signed two-complements arithmetic. There are a large number of supported functions and relations over bit-vectors. They are summarized on Z3\'s documentation link here! of the binary APIs and they are summarized on the SMT-LIB link here!  web-site. We will not try to give a comprehensive overview here, but touch on some of the main features.","sidebar":"tutorialSidebar"},"guide/Conclusion":{"id":"guide/Conclusion","title":"Conclusion","description":"Z3 is an efficient theorem prover used in many software testing, analysis and verification applications. In this tutorial, we covered its main capabilities using the textual interface. However, most applications use the Z3 programmatic API to access these features.","sidebar":"tutorialSidebar"},"guide/Datatypes":{"id":"guide/Datatypes","title":"Datatypes","description":"Algebraic datatypes, known from programming languages such as ML, offer a convenient way for specifying common data structures. Records and tuples are special cases of algebraic datatypes, and so are scalars (enumeration types). But algebraic datatypes are more general. They can be used to specify finite lists, trees and other recursive structures.","sidebar":"tutorialSidebar"},"guide/intro":{"id":"guide/intro","title":"Z3 Guide Introduction","description":"Z3 is a state-of-the art theorem prover from Microsoft Research. It can be used to check the satisfiability of logical formulas over one or more theories. Z3 offers a compelling match for software analysis and verification tools, since several common software constructs map directly into supported theories.","sidebar":"tutorialSidebar"},"guide/propositional-logic":{"id":"guide/propositional-logic","title":"Propositional Logic","description":"The pre-defined sort Bool is the sort (type) of all Boolean propositional expressions. Z3 supports the usual Boolean operators and, or, xor, not, = (implication), ite (if-then-else). Bi-implications are represented using equatity =. The following example shows how to prove that if p implies q and q implies r, then p implies r. We accomplish that by showing that the negation is unsatisfiable. The command define-fun is used to define a macro (aka alias). In this example, conjecture is an alias for the conjecture we want to prove.","sidebar":"tutorialSidebar"},"guide/Quantifiers":{"id":"guide/Quantifiers","title":"Quantifiers","description":"Z3 is a decision procedure for the combination of the previous quantifier-free theories. That is, it can answer whether a quantifier-free formula, modulo the theories referenced by the formula, is satisfiable or whether it is unsatisfiable. Z3 also accepts and can work with formulas that use quantifiers. It is no longer a decision procedure for such formulas in general (and for good reasons, as there can be no decision procedure for first-order logic).","sidebar":"tutorialSidebar"},"guide/Regular Expressions":{"id":"guide/Regular Expressions","title":"Regular Expressions","description":"The sort constructor RegEx takes as argument a sequence type.","sidebar":"tutorialSidebar"},"guide/Sequences":{"id":"guide/Sequences","title":"Strings and Sequences","description":"Introduction","sidebar":"tutorialSidebar"},"guide/Uninterpreted-functions-and-constants":{"id":"guide/Uninterpreted-functions-and-constants","title":"Uninterpreted Functions and Constants","description":"The basic building blocks of SMT formulas are constants and functions. Constants are just functions that take no arguments. So everything is really just a function.","sidebar":"tutorialSidebar"}}}')}}]);