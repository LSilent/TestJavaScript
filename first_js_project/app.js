
function print(a)
{
    if(1 == arguments.length)
    {
        console.log(a);
        return;
    }
    var str = "";
    for(let i = 0; i < arguments.length; ++i)
    {
        if(arguments[i] != 0 && !arguments[i]) 
        {
            console.log(arguments[i]);
            continue;
        }
        str += arguments[i].toString();
        str += " ";
    }
    console.log(str);
}

var msg = "hello world";
var msg1
console.log(typeof msg);
console.log(typeof msg1);
console.log(typeof msg2);
console.log(typeof msg1 == typeof msg2);
console.log(typeof null);
console.log(msg.valueOf());
print(msg++);
print(0 && 2);
print(0 / 0);
print(1 / 0);

var num = 0;
outermost:
for (var i = 0; i < 10; ++i) 
{
    for(var j = 0; j < 10; ++j )
    {
        if(5 == i && 5 == j)
        {
            continue outermost;
        }
        ++num;
    }
}

print(num);
print(i);
print(j);
print(print());
if(!msg1);
print("msg1 is false");

for(let k = 0; k < 10; ++k)
{
    print(k);
}

//print(k);

var o = {
    "5" : true
};
print(o["5"], o[5]);

var o = new Array("1", "2", "3");
print(o[0], o["0"]);

o.unshift("-2", "-1", "0");

o.forEach((item, index, array) => {
    print(item)
});

var s = "cat, bat, sat, fat";
var pattern = /.at/;
var a = pattern.exec(s);
print(a.index);
print(a.input);
print(a[0]);
print(pattern.lastIndex);

a = pattern.exec(s);
print(a.index);
print(a.input);
print(a[0]);
print(pattern.lastIndex);

var pattern = /.at/g;
console.log(typeof (pattern));
var a = pattern.exec(s);
print(a.index);
print(a.input);
print(a[0]);
print(pattern.lastIndex);

a = pattern.exec(s);
print(a.index);
print(a.input);
print(a[0]);
print(pattern.lastIndex);

function outer()
{
    inner();
}

function inner()
{
    print(arguments.callee.caller);
}

outer();

var o = {
    "color" : "blue"
};

function printColor()
{
    print(this.color);
}

printColor()
printColor.call(this)
printColor.apply(o);
printColor.call(o);

var bindPrintColor = printColor.bind(o);
bindPrintColor();

console.log(printColor.valueOf());

function Person(name, sex, age)
{
    this.name = name;
    this.sex = sex;
    this.age = age;
}

Person.name2 = "functionname2";
Person.prototype.name1 = "prototypename1";
Person.prototype.sayName = function()
{
    print(this.name);
}

var p1 = new Person("p1", "man", 20);
p1.__proto__.sayName = function()
{
    print("wuhahaha");
};
var p2 = new Person("p2", "woman", 21);

p1.sayName();
p2.sayName();

var o1 = new Object();
print(Object.prototype == o1.__proto__);
print(Object.prototype.constructor == Object);
print(Object.constructor == Object);
print(o1.constructor == Object);

print(Person.prototype == p1.__proto__);//true
print(Person.prototype.constructor == Person);//true
print(Person.constructor == Person);//false
print(p1.constructor == Person);//true
print(p1.name1);
print(p1.__proto__.name1);
print(Person.prototype.name1);
print(Person.name1);
print(Person.name2);
console.log(typeof p1.__proto__);

print("=============================")
var Person2 = new Function();
print(typeof Person2);
print(Person2 instanceof Object);
print(Person2.prototype);
console.log(typeof Person2.__proto__);
print(Person2.prototype == Person2.__proto__);


print("==========================");
for (const k in p1) {
    //if (p1.hasOwnProperty(k)) {
        print(k);
    //}
}

print("===========================");
var person = new Person();
var op = new Object();
op.__proto__ = Person.prototype;
Person.call(op);


print("=============================");
function Base()
{
    this.nameBase = "Base";
}

Base.prototype.getNameBase = function()
{
    return this.nameBase;
}

function Derived()
{
    this.nameDerived = "Derived";
}

Derived.prototype = new Base();

Derived.prototype.getNameDerived = function() 
{
    return this.nameDerived;
}

var od = new Derived();
print(od.getNameBase());
print(od.getNameDerived());
print(od.constructor == Base);
print(od.__proto__.__proto__.constructor == Base);
print(od.__proto__.__proto__.__proto__.constructor == Object);


print("==================================");

function object(o)
{
    function F(){}
    F.prototype = o;
    return new F();
}

function inherit(d, b)
{
    var ptoto = object(b.prototype);
    d.constructor = b;
    d.prototype = ptoto;
}

function SuperType(name)
{
    this.name = name;
}

SuperType.prototype.getName = function()
{
    return this.name;
}

function SubType(name, age)
{
    SuperType.call(this, name);
    this.age = age;
}

inherit(SubType, SuperType);

SubType.prototype.getAge = function()
{
    return this.age;
}

var sub = new SubType("dog", 20);
print(sub.getName(), sub.getAge());


function test()
{
    var result = new Array();
    for(var i = 0; i < 10; ++i)
    {
        result[i] = function()
        {
            return i;
        };
    }
    return result;
}

var f = test();

for(var i = 0; i < 10; ++i)
{
    print(f[i]());
}

function test1()
{
    var result = new Array();
    for(var i = 0; i < 10; ++i)
    {
        result[i] = function(num)
        {
            return function(){return num;};
        }(i);
    }
    return result;
}

var f1 = test1();

for(var i = 0; i < 10; ++i)
{
    print(f1[i]());
}

function test2()
{
    var result = new Array();
    for(let i = 0; i < 10; ++i)
    {
        result[i] = function()
        {
            return i;
        };
    }
    return result;
}

var f2 = test2();

for(var i = 0; i < 10; ++i)
{
    print(f2[i]());
}

var f = function (){}();
(function(){})();
(function(){}());
(function a(){})();
(function a(){}());

var f3 = (function f4(){
    print("f3 or f4 ")
});

f3();


print("==================================")

function objectCreate(o)
{
    function F(){}
    F.prototype = o;
    return new F();
}

function derivedFrom(derivedType, baseType)
{
    var proto = objectCreate(BaseType.prototype);
    derivedType.constructor = baseType;
    derivedType.prototype = proto;
}

function BaseType(name)
{
    this.name = name;
}

BaseType.prototype.getName = function()
{
    return this.name;
}

function DerivedType(name, age)
{
    BaseType.call(this, name);
    this.age = age;
}

derivedFrom(DerivedType, BaseType);

DerivedType.prototype.getAge = function()
{
    return this.age;
}

var data = new DerivedType("liushuai", 28);
print(data.getName(), data.getAge());

print("=================");
let uniqe;


print("===================")

function defaultFunction(first, second = "default")
{
    print(first === arguments[0]);
    print(second === arguments[1]);

    first = "3";
    second = "4";

    print(first === arguments[0]);
    print(second === arguments[1]);
}

defaultFunction("1");


print("===============");

function Person(sex)
{
    this.sex = sex;
}


print("================")
/*
1: 每个function都有一个prototype属性，指向原型对象，原型对象是JS引擎对标识符名称查找的依据，当某个属性在对象实例内部查找不到的时候，
JS引擎会从对象的原型对象中去找，直到查找到原型链末端，原型对象中有一个constructor属性指回function本身，还有一个[[Prototype]]内部属性
默认指向Object原型对象，这也是原型链的末端。
2: 通过new运算符创建的对象实例的时候,会在内部创建一个[[Prototype]]内部属性指向原型对象。

寄生组合原型链继承的关键点在于:
1: ObjectCreate函数的目的就是创建一个剔除了无关属性的并且其原型指向base的对象实例new F();
2: 每个prototype指向的原型对象都是一个ObjectCreate对象

function ObjectCreate(base)
{
    function F(){}
    F.prototype = base;
    return new F();
}

function derivedFrom(derived, base)
{
    let o = ObjectCreate(base.prototype);
    o.constructor = derived;
    derived.prototype = o;
}

function Base(name) 
{
    this.name = name;
}

Base.prototype.getName = function()
{
    return this.name;
}

function Derived(name, age)
{
    Base.call(this, name);
    this.age = age;
}

derivedFrom(Derived, Base);

Derived.prototype.getAge = function()
{
    return this.age;
}

*/


class SuperClass 
{
    constructor(name)
    {
        this.name = name;
    }

    getName() 
    {
        return this.name;
    }
};

class DerivedClass extends SuperClass
{
    constructor(name, age)
    {
        super(name);
        this.age = age;
    }

    getAge()
    {
        return this.age;
    }
};
print("===============================================");

function Promise(executor)
{
    let self = this;
    self.status = "pending";
    self.data = undefined;
    self.resolveCallback = [];
    self.rejectCallback = [];

    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }

    function resolve(value)
    {   
        if(self.status == "pending")
        {
            self.status = "resolved";
            self.data = value;
            for(let i = 0; i < self.resolveCallback.length; ++i)
            {
                self.resolveCallback[i](value);
            }
        }
    }

    function reject(reason)
    {
        if(self.status == "pending")
        {
            self.status = "rejected";
            self.data = reason;
            for(let i = 0; i < self.rejectCallback.length; ++i)
            {
                self.rejectCallback[i](reason);
            }
        }
    }
}


Promise.prototype.then = function(onResolved, onRejected)
{
    let self = this;
    let promise2;

    if(self.status == "resolved")
    {
        return promise2 = new Promise(function(resolve, reject)
        {
            try 
            {
                let x = onResolved(self.data);
                if(x instanceof Promise)
                {
                    x.then(resolve, reject);
                }
                resolve(x);    
            } 
            catch (e) 
            {
                reject(e);
            }
        });
    }

    if(self.status == "rejected")
    {
        return promise2 = new Promise(function(resolve, reject)
        {
            try 
            {
                let x = onRejected(self.data);
                if(x instanceof Promise)
                {
                    x.then(resolve, reject);
                }
                reject(x);    
            } 
            catch (e) 
            {
                reject(e);
            }
        });
    }

    if(self.status == "pending")
    {
        return promise2 = new Promise(function(resolve, reject)
        {
            self.resolveCallback.push(function(value)
            {
                try 
                {
                    let x = onResolved(self.data);
                    if(x instanceof Promise)
                    {
                        x.then(resolve, reject);
                    }
                    resolve(x);    
                } 
                catch (e) 
                {
                    reject(e);
                }
            });
            self.rejectCallback.push(function(reason)
            {
                try 
                {
                    let x = onRejected(reason);
                    if(x instanceof Promise)
                    {
                        x.then(resolve, reject);
                    }
                    reject(x);    
                } 
                catch (e) 
                {
                    reject(e);
                }
            });
        });
    }
}
/*
//1、任何用var声明的变量都会被提升到函数顶部，在所有函数外部声明的变量会被提升到全局作用域顶部。
function f()
{
    console.log(a);// undefined，可以访问，但是值为undefined，如果没有下面的声明会报错，说明a确实被提升了
    var a = 1;
}


//2、以函数声明形式声明的函数会被提升到作用域顶部，所以函数声明形式声明的函数可以在声明之前调用，以函数表达式方式声明的函数不会被提升。
f();// "hello"
function f()
{
    console.log("hello");
}

f1();// error
var f1 = function()
{
     console.log("hello");
}


//3、ES6引入let和const声明用于声明具有块级作用域的变量，这种变量不会被提升，并且在声明之前不能进行包括typeof之内的任何访问操作，称为暂时性死区(TDZ)，ES6推荐在默认情况下始终使用const声明变量，仅在明确知道变量要修改的时候使用let。
function f()
{
    console.log(typeof a);//error TDZ
    let a = 1;
}


//4、对于全局变量的声明，var声明会将变量添加到全局对象中(在浏览器中是window对象，在node中是global，实验证明，在ES6中，以var声明的全局变量也不会被添加到全局对象中)，成为全局对象的一个属性，而let声明不会为全局对象添加属性，但会屏蔽全局对象中的同名属性。
var a = "hello";
console.log(a);// "hello"
console.log(global.a);// "hello"
let b = "hello";
console.log(b);// "hello"
console.log(global.b);// undefined
let RegExp = "hello";
console.log(RegExp );// "hello"
console.log(global.RegExp == RegExp);// false,屏蔽全局对象中的同名属性RegExp 

//5、关于块级函数，严格来说，ES6之前是不允许声明一个块级函数的，ES5的严格模式会对块级函数的声明报错，ES6引入了块级函数的声明，在严格模式下，以块级函数声明声明的块级函数会被提升到代码块顶部，以let函数表达式声明的块级函数不会被提升，并存在暂时性死区，在非严格模式下，块级函数的声明会被提升到所在函数或全局作用域的顶部。

//f1块级函数声明在ES6之前是一个语法错误，但是所有的浏览器都支持，ES5的严格模式会报错，ES6引入了块级函数的声明，在ES6严格模式下，以下代码声明了一个块级函数f1，并且会被提升到代码块顶部，但是以let(或者var)函数表达式声明的块级函数不会被提升，存在暂时性死区TDZ，ES6非严格模式下，f1会被提升到所在函数顶部，如果f1在所有函数之外声明，则会被提升到全局作用域顶部。

function f()
{
    if (true)
    {
        f1();// "hello"
        function f1()
        {
            console.log("hello");
        }

        f2();//error
        let f2 = function()//用var声明也一样
        {
            console.log("world");
        }
    }
}
*/


function testdelete()
{
    var a = 0;
    console.log(a);
    delete a;
    console.log(a);
    var o = {
        a : 1
    }

    console.log(o.a);
    delete o.a; 
    console.log(o.a);
}

testdelete();

//////////////////////////////////////
function objectCreate0529(o)
{
    function F(){}
    F.prototype = o;
    return new F();
}

function derivedFrom0529(superType, baseType)
{
    let o = objectCreate0529(baseType.prototype);
    o.constructor = superType;
    superType.prototype = o;
}
function BaseType0529(name)
{
    this.name = name;
}

BaseType0529.prototype.getName = function()
{
    return this.name;
}

function SuperType0529(name, age)
{
    BaseType.call(this, name);
    this.age = age;
}

derivedFrom0529(SuperType0529, BaseType0529);

SuperType0529.prototype.getAge = function()
{
    return this.age;
}


let o0529 = new SuperType();

