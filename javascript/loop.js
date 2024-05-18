for
while
do while
for of >>> Array
for in >>> Object

////////////////
> Iterate over the array and can also generate 
the series of value

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var a = ['Venice', 'Mumbai', 'Hongkong', 'Delhi', 'Indore', 'Innsburg', 'Amsterdam']
for(i=0;i<a.length;i++){
    console.log(a[i])
}


let i =10
while(i<5){
    console.log(i);
    i++
}

let i = 10;
do{
    console.log(i);
    i++;
} while(i<5)

///
var city = ['Venice', 'Mumbai', 'Hongkong', 'Delhi', 'Indore', 'Innsburg', 'Amsterdam']
for(mycity of city){
    console.log(mycity)
}


var movie = {
    name:"Jab We Met",
    rating:4.7,
    ind:"Bollywood"
}
for(let key in movie){
    console.log(key)
}
name
rating
ind

for(let key in movie){
    console.log(movie[key])
}


var movies = [
    {
        name:"Jab We Met",
        rating:4.7,
        ind:"Bollywood"
    },
    {
        name:"Avengers",
        rating:4.2,
        ind:"Hollywood"
    }
]

for(myMovie of movies){
    console.log(myMovie.name)
}
