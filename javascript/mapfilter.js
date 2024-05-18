Map
> Map help to iterate over the Array
>it always return the same length of output
as input
> it is use to apply the logics

a.map()

var a = [4,5,23,12,24,3,7,34]
a.map((data)=> {return data *2})
[8, 10, 46, 24, 48, 6, 14, 68]

var a = [4,5,23,12]
a.map((data)=> {return `<p>${data*2}</p>`})
['<p>8</p>', '<p>10</p>', '<p>46</p>', '<p>24</p>']


Filter
> help to filter out the value
> it may or may not return same length of output
> it only return those value for which condition or output is true

var a = [4,5,23,12,24,3,7,34]
a.filter((data)=> {return data>10})
[23, 12, 24, 34]


var a = [4,5,23,12,24,3,7,34]
a.map((data)=> {return data>10})
[false, false, true, true, true, false, false, true]

var a = [0,1,2,3]
a.map((data) => {return data*2})
[0,2,4,6]

var a = [0,1,2,3]
a.filter((data) => {return data*2})
[1, 2, 3]


