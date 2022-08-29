var pr=JSON.parse(localStorage.getItem("profpic"))
console.log(pr)
var act=JSON.parse(localStorage.getItem('activity'))
console.log(act)
var indstr=JSON.parse(localStorage.getItem('industry'))
console.log(indstr)
var loc=JSON.parse(localStorage.getItem("location"))
console.log(loc)
var funding=JSON.parse(localStorage.getItem("fund"))
console.log(funding)
var mobile=JSON.parse(localStorage.getItem("mobile"))
console.log(mobile)
var zip=JSON.parse(localStorage.getItem("zipno"))
console.log(zip)
var companyName=JSON.parse(localStorage.getItem("cname"))
console.log(companyName)
var skill=JSON.parse(localStorage.getItem("skill"))
console.log(skill)

var img=document.getElementById("beta")
img.src=pr
var det1=document.getElementById("detai1")
det1.innerText=act
var det2=document.getElementById("detail2")
det2.innerText=indstr

var det3=document.getElementById("detail3")
det3.innerText=loc
var det4=document.getElementById("detail4")
det4.innerText=funding
var det5=document.getElementById("detail5")
var det6=document.getElementById("detail6")
det6.innerText=mobile
var det7=document.getElementById("detail7")
det7.innerText=zip
var det8=document.getElementById("detail8")
det8.innerText=companyName
var det9=document.getElementById("detail9")
det9.innerText=skill
var edit=document.getElementById("edit")
function clickHandler(){
    window.location.href="./index.html"
}
edit.addEventListener("click",clickHandler)

