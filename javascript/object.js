var a = [] //array
var b = {} //object


var moviename = "Jab We met"
var movieraring = 4.7
var movieInd = "Bollywood"

var moviename1 = "Avengers"
var movieraring1 = 4.2
var movieInd1 = "Hollywood"

var movie = {
    name:"Jab We Met",
    rating:4.7,
    ind:"Bollywood"
}

movie.name
'Jab We Met'
movie.rating
4.7
movie.type="Romantic"
'Romantic'
movie
{name: 'Jab We Met', rating: 4.7, ind: 'Bollywood', type: 'Romantic'}
movie.rating = 4.5
4.5
movie
{name: 'Jab We Met', rating: 4.5, ind: 'Bollywood', type: 'Romantic'}
delete movie.ind
true


movie['name']
'Jab We Met'
movie['rating'] = 4.9
4.9
movie['type']="Romatic"
'Romatic'
movie
{name: 'Jab We Met', rating: 4.9, ind: 'Bollywood', type: 'Romatic'}


JSON
>Javascript Object notation
* Array of Object
* Key value pair of data

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

movies[1].name
'Avengers'
movies[0].ind
'Bollywood'