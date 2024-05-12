var a = "10"
var b = "5"
//parseInt(a)+parseInt(b)
console.log(a+b)
console.log(parseInt(a)+parseInt(b))


var a = "10.11"
var b = "1.5"
console.log(parseFloat(a)+parseFloat(b))

var a = "10676a11"
console.log(parseInt(a))


var a = "10.8"
var b = "5.876"
console.log(Number(a)+Number(b))


var a = "10676a11"
console.log(Number(a))


** All the conditional Operator will return boolean output
 
= // assignment
== // compare the data
=== // compare the data and datatype

var a = 10
var b = "10"
var c = 20

a == b // compare the data
true
a === b // compare the data and datatype
false

a == c  // data does not match
false

//case senstive
var a = "hi"
var b = "Hi"
a == b
false


var a  = 20
var b = 10

a>b
true
a<b
false
a !== b
true
a >= b
true
a <= b
false


//negation
var a = true
!a
false

var a = false
!a
true

var a = 0
!a
true

var a = 1
!a
false

var a = "hii"
!a
false

var a = -1
!a
false

var a = null
!a
true

truthy > Any number except 0 weather +ve or -ve, true, any string
falsy > 0, false,null, undefined