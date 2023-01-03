 let name=document.getElementById('name');
 let price =document.getElementById('price');
 let taxes=document.getElementById('taxes');
 let ads=document.getElementById('ads');
 let dicount=document.getElementById('dicount');
 let count=document.getElementById('count');
 let catg=document.getElementById('catg');
 let creat=document.getElementById('bttn');
 let total=document.getElementById('total');
let mood='creat';
let tmp;


 //  get total
    
    function gettotal(){
if(price.value!=''){
    let totalprice=(+price.value+ +taxes.value+ +ads.value)-(+dicount.value);
           total.innerHTML=totalprice;
      total.style.background='#040';


}else{
    total.innerHTML='';
                 total.style.background='#a00d02';
        

}


    }

// creat function  json for make integer to string
let product;
if(localStorage.product!=null){
product=JSON.parse(localStorage.product);

}
else{
    product=[];
}
// let product=[];
creat.onclick=function(){
let newpro ={
    name: name.value,
    price:price.value,
taxes:taxes.value,
ads:ads.value,
dicount:dicount.value,
count:count.value,
catg:catg.value,
total:total.innerHTML,

};

    if(mood==='creat'){
    if(product.count>1){
    for(let i=0;i<product.count;i++){
    product.push(newpro);

    } 

    }else {
        product.push(newpro);


    }




    }
    else{
        product[tmp]=newpro;
        creat.innerHTML='creat';
        count.style.display='block';
        


    }


product.push(newpro);
localStorage.setItem('product',JSON.stringify(product));
console.log(product);

clear()
tablelem()
}
// clear function
function clear(){
name.value='';
price.value='';
ads.value='';
taxes.value='';
dicount.value='';
count.value='';
catg.value='';
total.innerHTML='';
}
// table fun
function tablelem(){
    let table='';
    for(let i=0;i<product.length;i++){
table+=`
<tr>
<td>${i}</td>
<td>${product[i].name}</td>
<td>${product[i].price}</td>
<td>${product[i].ads}</td>
<td>${product[i].dicount}</td>
<td>${product[i].taxes}</td>
<td>${product[i].total}</td>
<td>${product[i].catg}</td>
<td><button id="delete" onclick="deletepro(${i})" >delete</button></td>
<td><button  id="update" onclick="updatefun(${i})" >update</button></td>


</tr>


`


    }
document.getElementById('tbody').innerHTML=table;
let deletvar=document.getElementById('delbtn');
if(product.length>0){
deletvar.innerHTML=`
<button onclick="deletall()">delet all</button>
`
;
}else{
    deletvar.innerHTML='';
}


}

//  delte function
function deletepro (i){
product.splice(i,1);
localStorage.product=JSON.stringify(product);
tablelem();

}


tablelem();
// delete all fun
function deletall(){
localStorage.clear();
product.splice(0);
tablelem();

}
function updatefun(i){
name.value=product[i].name;
price.value=product[i].price;
catg.value=product[i].catg;
taxes.value=product[i].taxes;
ads.value=product[i].ads;
dicount.value=product[i].dicount;
count.style.display='none'
gettotal();
creat.innerHTML='update';
mood='update';
tmp=i;
}







