id
class
tagName

document.getElementsByTagName('a')
document.getElementsByClassName('a')
document.getElementById('a')


document.getElementsByTagName('a')

document.getElementsByTagName('a')[0]
<a href=​"https:​/​/​www.facebook.com/​aakash.handa.14" target=​"_blank">​…​</a>​
document.getElementsByClassName('scroll')
HTMLCollection(5) [a.scroll, a.scroll, a.scroll, a.scroll, a.scroll]
document.getElementsByClassName('scroll')[0]
<a href=​"#skills" class=​"scroll">​Skills​</a>​
document.getElementsByClassName('scroll')[1].innerText = "Video"
'Video'

document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText = "I am From Developer Funnel"
'I am From Developer Funnel'
document.getElementsByTagName('h1')[0].style.color = "red"
'red'
document.getElementsByTagName('h1')[0].style.visibility= "hidden"
'hidden'
document.getElementsByTagName('h1')[0].style.visibility= "visibile"
'visibile'
document.getElementsByTagName('h1')[0].style.visibility= "visible"
'visible'