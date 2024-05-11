const list=document.getElementById("list");
const add=document.getElementById("add");
const inpt=document.getElementById("inpt");

add.addEventListener
('click',function()
{
    const newitem= inpt.value;
    if(newitem!=="")
    {
        const item = document.createElement("li");
        item.innerText= newitem;

        const deletebtn =document.createElement("button");
        deletebtn.innerText="X";

        deletebtn.classList.add("delbtn");
        deletebtn.addEventListener("click",function(){
            item.remove();
        });

        item.appendChild(deletebtn);

        list.appendChild(item);

        inpt.value="";
    }
}
)