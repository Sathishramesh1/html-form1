
var form=document.createElement("form")
form.setAttribute("class","formstyle")

function labels(tagname,attrname,attrvalue,content){

    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function input(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;
}
function linebrake(tagname){
    var br=document.createElement(tagname);
    return br;
}

var firstname = labels("label","for","firstname","firstname");
var br=linebrake("br");
var input0= input("input","type","text","name","fname","id","firstname");
var br1=linebrake("br");
var lastname = labels("label","for","lasttname","lasttname");
var br2=linebrake("br");
var input1=input("input","type","text","name","lname","id","lname");
var br3=linebrake("br");
var address= labels("label","for","address","address");
var br4=linebrake("br");
var input2= input("input","type","text","name","address","id","address");
var br5=linebrake("br");
var pincode = labels("label","for","pincode","pincode");
var br6=linebrake("br");
var input3= input("input","type","text","name","pincode","id","pincode");
var br7=linebrake("br");





document.body.append(form,firstname,br,input0,br1,lastname,br2,input1,br3,address,br4,input2,br5,pincode,br6,input3,br7);
var gend=labels("label","for","gender","Gender");
var br8=linebrake("br");
var gender = labels("label","for","gender","Male");
var gen=document.createElement("input");
gen.setAttribute("type","radio");
gen.setAttribute("name","gender");
gen.setAttribute("id","male");  
gen.setAttribute("value","male")
var gender1 = labels("label","for","gender","FEMale");
var GEN1= input("input","type","radio","name","gender","id","female");
GEN1.setAttribute("value","female");
var br9=linebrake("br");
var favfood=labels("label","for","favfood","FOOD");
var br10=linebrake("br");
var food1= input("input","type","checkbox","name","biriyani","id","biriyani");
food1.setAttribute("value","biriyani")
var biriyani=labels("label","for","biriyani","biriyani");
var br11=linebrake("br");
var food2= input("input","type","checkbox","name","biriyani","id","friedrice");
food2.setAttribute("value","friedrice")
var friedrice=labels("label","for","biriyani","friedrice");
var br12=linebrake("br");
var food3= input("input","type","checkbox","name","biriyani","id","chinese");
food3.setAttribute("value","chinese")
var chinese=labels("label","for","chinese","chinese");

document.body.append(gend,br8,gender,gen,gender1,GEN1,br9,favfood,br10,food1,biriyani,br11,food2,friedrice,br12,food3,chinese);

var submit=input("input","type","submit","name","submit","id","submit");
submit.setAttribute("onclick","foo1()")

var br13=linebrake("br");
document.body.append(submit,br13);


var div=document.createElement("div")
div.setAttribute("class","divclass")
var table=document.createElement("table");
table.setAttribute("id","shows")
table.innerHTML="<thead> <thead>";
var tr=document.getElementsByTagName("thead")
tr.innerHTML="<th>fiest</th>"
// table.setAttribute("class","data1")
// var tablehead=document.createElement("thead");
// tablehead.setAttribute("class","tbody")
// var tr=document.createElement("tr")
// tablehead.innerHTML= "<tr><th>state</th><th>last</th><th>firstname</th></tr>"
// var tablebody=document.createElement("tbody")
// tablebody.setAttribute("id","tb")
// tablehead.setAttribute("class","stg")
document.body.append(div,table,tablehead,tablebody);


function foo1(){

    var table=document.getElementById("try")
    var row=table.insertRow();
    var cel1=row.insertCell();
    var cel2=row.insertCell();
    var cel3=row.insertCell();
    var cel4=row.insertCell();
    var cel5=row.insertCell();
    var cel6=row.insertCell();
    var cel7=row.insertCell();
    cel1.innerHTML=document.getElementById("firstname").value
    cel2.innerHTML=document.getElementById("lname").value
    cel3.innerHTML=document.getElementById("address").value
    cel4.innerHTML=document.getElementById("pincode").value
    // cel5.innerHTML=document.getElementsByName("gender").value
    // cel6.innerHTML=document.getElementById("lname").value
    cel7.innerHTML=document.getElementById("lname").value




    function getdata(){
        var male=document.getElementById("male");
        var female=document.getElementById("female");
        if(male.checked){
            cel5.innerHTML=male.value;
        }
        else{
            cel5.innerHTML=female.value
        }
    }
    getdata()

    function favoritefood(){
        var bir=document.getElementsByName("biriyani")
        var fri=document.getElementById("friedrice")
        var chi=document.getElementById("chinese")
        var values=[];
        for(i=0;i<bir.length;i++){
            if(bir[i].checked==true){
                var x=bir[i].value
                values.push(bir[i].value)
            }
            cel6.innerHTML=values   
        }



        // if(bir.checked){
        //     cel6.innerHTML=bir.value

        // }
        // else if(fri.checked){
        //     cel6.innerHTML=fri.value
        // }
        // else(chi.checked) ;{
        //     cel6.innerHTML=chi.value
        // }
    
    }
    favoritefood()

}


