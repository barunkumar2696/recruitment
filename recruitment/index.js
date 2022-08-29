var rec=document.getElementById("recruit")


function onSubmitHandler(e){
    e.preventDefault()
    window.location.href="./ui.html"
}
rec.addEventListener("submit",onSubmitHandler)
const fileSelector = document.getElementById('file-selector');
  fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
    localStorage.setItem("profpic",JSON.stringify(fileList))
    
}) 
    

    function getValue() {
        var checkboxes = 
            document.getElementsByName('activities');

        var result = [];

        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                result.push(checkboxes[i].value) ;
            }
        }
        console.log(result );
        localStorage.setItem("activity",JSON.stringify(result))
var industries=[]
selectElement=document.getElementById('select1')
        output = selectElement.value;
        industries.push(output);
        console.log(industries)
localStorage.setItem("industry",JSON.stringify(industries))
        var location=[]
        selectElement2 = document.querySelector('#select2');
        output2 = selectElement2.value;
        location.push(output2);
        console.log(location)
        localStorage.setItem("location",JSON.stringify(location))
var funding=[]
        var ele = document.getElementsByName('fund');
              
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked)
                funding.push(ele[i].value);
            }
            console.log(funding)
            localStorage.setItem("fund",JSON.stringify(funding))
            var phno=document.getElementById("cell").value
            console.log(phno)
            localStorage.setItem("mobile",JSON.stringify(phno))
            var zip=document.getElementById("zip").value
            console.log(zip)
            localStorage.setItem("zipno",JSON.stringify(zip))
            var companyName=document.getElementById("cname").value
            console.log(companyName)
localStorage.setItem("cname",JSON.stringify(companyName))
            var skill=[]
        selectElement3 = document.querySelector('#select3');
        output3 = selectElement3.value;
        skill.push(output3);
        console.log(skill)
        localStorage.setItem("skill",JSON.stringify(skill))
        }
    
       