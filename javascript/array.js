let a = [1,2,3,4,5,434,353,35] >>> Array of Number
let b = ["hii","Hello","test","try"] >>> Array of String
let c = [true,false,false,true] >>> Array of boolean

Array is a collection of homogenious as well as hetriogenious datatype

let d = [1,2,3,"dgd","gdf",true,34,"Dgfd"]


let city = ["Delhi","London","Amsterdam","Helsinki"]
undefined
city.length
4

city[0]
'Delhi'
city[1]
'London'
city[city.length-1]
'Helsinki'


city
(4) ['Delhi', 'London', 'Amsterdam', 'Helsinki']
city.push('Boston')
5
city
(5) ['Delhi', 'London', 'Amsterdam', 'Helsinki', 'Boston']
city.push('Venice')
6
city
(6) ['Delhi', 'London', 'Amsterdam', 'Helsinki', 'Boston', 'Venice']
city.pop()
'Venice'

['Delhi', 'London', 'Amsterdam', 'Helsinki', 'Boston']
city.pop(2)

city
(4) ['Delhi', 'London', 'Amsterdam', 'Helsinki']
city.push('Boston')
5
city
(5) ['Delhi', 'London', 'Amsterdam', 'Helsinki', 'Boston']
city.push('Venice')
6
city
(6) ['Delhi', 'London', 'Amsterdam', 'Helsinki', 'Boston', 'Venice']
city.pop()
'Venice'
city
(5) ['Delhi', 'London', 'Amsterdam', 'Helsinki', 'Boston']
city.pop(2)
'Boston'
city
(4) ['Delhi', 'London', 'Amsterdam', 'Helsinki']
city.pop(100)
'Helsinki'

city
(3) ['Delhi', 'London', 'Amsterdam']
city.unshift('Mumbai')
4
city
(4) ['Mumbai', 'Delhi', 'London', 'Amsterdam']
city.shift()
'Mumbai'

push > add in the end of the array
pop > remove last value from the array
shift > remove first value from the array
unshift > add as a first value to array

city.slice(1)
(6) ['Mumbai', 'Hongkong', 'Delhi', 'Indore', 'Innsburg', 'Amsterdam']
city
(7) ['Venice', 'Mumbai', 'Hongkong', 'Delhi', 'Indore', 'Innsburg', 'Amsterdam']
city.slice(2)
(5) ['Hongkong', 'Delhi', 'Indore', 'Innsburg', 'Amsterdam']
city.slice(2,5)
(3) ['Hongkong', 'Delhi', 'Indore']

splice(indexNumber, deleteCount, values)


city
(5) ['Venice', 'Mumbai', 'Delhi', 'London', 'Amsterdam']
(do not remove the value but add 2 value on index 2)
city.splice(2,0,'Hongkong','Paris')
[]
city
(7) ['Venice', 'Mumbai', 'Hongkong', 'Paris', 'Delhi', 'London', 'Amsterdam']

city.splice(3,1)
(do not add but remove 1 value from index 3)
['Paris']
city
(6) ['Venice', 'Mumbai', 'Hongkong', 'Delhi', 'London', 'Amsterdam']

(remove 1 value form index 4 and add 2 values)
city.splice(4,1,'Indore','Innsburg')
['London']
city
(7) ['Venice', 'Mumbai', 'Hongkong', 'Delhi', 'Indore', 'Innsburg', 'Amsterdam']


city
(7) ['Venice', 'Mumbai', 'Hongkong', 'Delhi', 'Indore', 'Innsburg', 'Amsterdam']
city.indexOf('Venice')
0
city.indexOf('Indore')
4
city.indexOf('London')
-1
city.indexOf('Boston')
-1


city
(7) ['Venice', 'Mumbai', 'Hongkong', 'Delhi', 'Indore', 'Innsburg', 'Amsterdam']
city.splice(2,0,'Paris')
[]
city
(8) ['Venice', 'Mumbai', 'Paris', 'Hongkong', 'Delhi', 'Indore', 'Innsburg', 'Amsterdam']
city.splice(5,2)
(2) ['Indore', 'Innsburg']
city
(6) ['Venice', 'Mumbai', 'Paris', 'Hongkong', 'Delhi', 'Amsterdam']