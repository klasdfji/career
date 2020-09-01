(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{181:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("参考文章"),n("a",{attrs:{href:"https://juejin.im/post/6844903854882947080",target:"_blank",rel:"noopener noreferrer"}},[t._v("你真的掌握变量和类型了吗"),n("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._m(5),t._v(" "),n("p",[t._v("参考文章"),n("a",{attrs:{href:"https://juejin.im/post/6844903854882947080#heading-23",target:"_blank",rel:"noopener noreferrer"}},[t._v("你真的掌握变量和类型了吗"),n("OutboundLink")],1)]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),n("p",{attrs:{align:"center"}},[n("img",{attrs:{src:t.$withBase("/js/typeswitch.jpg"),alt:"",width:"800px"}})]),t._v(" "),t._m(11),t._v(" "),n("p",{attrs:{align:"center"}},[n("img",{attrs:{src:t.$withBase("/js/type.jpg"),alt:"",width:"800px"}})]),t._v(" "),t._m(12)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[this._v("#")]),this._v(" Javascript")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"数据类型、变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型、变量"}},[this._v("#")]),this._v(" 数据类型、变量")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("基本数据类型"),n("code",[t._v("7种")]),t._v(",包括"),n("code",[t._v("Null,Undefined,Symbol,Number,String,Boolean,BigInt")])]),t._v(" "),n("li",[t._v("对象类型,"),n("code",[t._v("Object,Array,Function,Date,RegExp...")])]),t._v(" "),n("li",[t._v("基本数据类型存储在栈内存，引用类型存储在堆内存")]),t._v(" "),n("li",[t._v("函数参数，值传递")]),t._v(" "),n("li",[t._v("null 代表对象为空，装换为数值为 0")]),t._v(" "),n("li",[t._v("undefined 代表未定义，装换数值为 NaN，存在是因为 JavaScript 是动态类型语言")]),t._v(" "),n("li",[t._v("Symbol 创建唯一变量，"),n("code",[t._v("Symbol.for")]),t._v("可创建相等变量，作为对象属性不可枚举")]),t._v(" "),n("li",[t._v("获取 Symbol 属性调用"),n("code",[t._v("Object.getOwnPropertySymbols()")])]),t._v(" "),n("li",[t._v("Symbol 应用，防止 XSS,对象私有属性（不可枚举），防止属性重名")]),t._v(" "),n("li",[t._v("Number（64 位双精度）类型精度失准，存储二进制，转换十进制")]),t._v(" "),n("li",[t._v("精度失准解决方法，"),n("code",[t._v("node-bignum,node-bigint")]),t._v(","),n("code",[t._v("es10中的bigInt")])]),t._v(" "),n("li",[t._v("原始类型与包装类型，拆箱装箱操作")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//call()的实现,symbol防止属性重名")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("myCall")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'function'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于防止 Function.prototype.myCall() 直接调用")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  context "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" window\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" args "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//拆箱，引用类型转为基本类型")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//从引用类型到基本类型的转换，也就是拆箱的过程中，会遵循ECMAScript规范规定的toPrimitive原则")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引用类型转换为Number类型，先调用valueOf，没有再调用toString")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引用类型转换为String类型，先调用toString，没有再调用valueOf")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("valueOf")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'valueOf'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'toString'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ConardLi'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// valueOf   122")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("obj"),n("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("ConardLi")]),n("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// toString  ConardLiConardLi")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Symbol"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toPrimitive"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'toPrimitive'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// valueOf   122")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("valueOf")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'valueOf'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("toString")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'toString'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj3 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// valueOf")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// toString")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeError")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"类型转换-⭐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类型转换-⭐"}},[this._v("#")]),this._v(" 类型转换 ⭐")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("类型转换，隐式转换、强制转换，隐式转换规则如下：")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("if 语句、逻辑语句，转换为 Boolean")]),t._v(" "),n("li",[t._v("数据运算符"),n("code",[t._v("-,*,/")]),t._v(",转换为 Number")]),t._v(" "),n("li",[n("code",[t._v("+")]),t._v("运算符处理与其他不一样：\n"),n("ul",[n("li",[t._v("当一侧为"),n("code",[t._v("String")]),t._v("类型，被识别为字符串拼接，并会优先将另一侧转换为字符串类型。")]),t._v(" "),n("li",[t._v("当一侧为"),n("code",[t._v("Number")]),t._v("类型，另一侧为原始类型，则将原始类型转换为"),n("code",[t._v("Number")]),t._v("类型。")]),t._v(" "),n("li",[t._v("当一侧为"),n("code",[t._v("Number")]),t._v("类型，另一侧为引用类型，将引用类型和"),n("code",[t._v("Number")]),t._v("类型转换成字符串后拼接。")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("p",[n("code",[t._v("==")]),t._v("运算符，使用"),n("code",[t._v("==")]),t._v("时，若两侧类型相同，则比较结果和"),n("code",[t._v("===")]),t._v("相同，否则会发生隐式转换，使用"),n("code",[t._v("==")]),t._v("时发生的转换可以分为几种不同的情况（只考虑两侧类型不同）：")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ol",[n("li",[t._v("NaN 和其他任何类型比较永远返回 false(包括和他自己)。")]),t._v(" "),n("li",[t._v("Boolean 和其他任何类型比较，Boolean 首先被转换为 Number 类型。")]),t._v(" "),n("li",[t._v("String 和 Number 比较，先将 String 转换为 Number 类型。")]),t._v(" "),n("li",[t._v("null == undefined 比较结果是 true，除此之外，null、undefined 和其他任何结果的比较值都为 false。")]),t._v(" "),n("li",[t._v("当原始类型和引用类型做比较时，对象类型会依照 ToPrimitive 规则转换为原始类型:\n"),n("ul",[n("li",[n("code",[t._v("[] == ![] // true")]),t._v(",根据数组的 ToPrimitive 规则，数组元素为 null 或 undefined 时，该元素被当做空字符串处理，所以[null]、[undefined]都会被转换为 0。")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//a == 1 && a == 2 && a == 3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("valueOf")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("判断类型的方法，"),s("code",[this._v("typeof,instanceof")]),this._v(","),s("code",[this._v("Object.prototype.toString.call()")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"this-指向，call、apply、bind-原理与区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this-指向，call、apply、bind-原理与区别"}},[this._v("#")]),this._v(" this 指向，call、apply、bind 原理与区别")])}],!1,null,null,null);s.default=e.exports}}]);