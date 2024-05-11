const add_btn=document.querySelector('.add-btn');
const list=document.querySelector('.list');
const totalexp=document.querySelector('.totalexp');

let expenses=[];
let total=0;

function renderExp() {//this funaction is used for displaying the output on window
    let html = "";//initially defining lank else it might continue with previos values ehich might not update the output properly.
    expenses.forEach(exp => {//just like for loop it will go through all the values present in expense obj and print
        html += `
            <div class="exp-item">
                <div class="exp-desc">${exp.desc}</div>
                <div class="exp-amt">Rs ${exp.amt}</div>
                <button class="del-exp-btn">&times;</button>
            </div>
        `;
    });
    list.innerHTML = html;//since we are changing the HTML code so this always updates the html and displays 
    totalexp.innerText = `Total Expenses : Rs${total}`;
}
function addExp(){//evey time this function is called once the "ADD EXPENSE" button is clicked
    const desc=prompt("Enter Description : ");
    const amt=parseFloat(prompt("Enter Expense : "));

    if(desc && amt)
    {
        const expense={
            desc:desc,
            amt:amt
        }
        expenses.push(expense);
        total+=amt;

        renderExp();
    }
}
add_btn.addEventListener('click',addExp);

function delExp(index){//passing index parameter to delete that particular item
    total-=expenses[index].amt;//in expense obj we 1st go to index position then from that position since expense is obj we ask for amt then minus it from total
    expenses.splice(index,1) //function splice is use to remove certain element 'splice(position,no. of elements from that position to remove)'
    renderExp();
}

list.addEventListener('click',function(event){
    if(event.target.classList.contains("del-exp-btn"))
    {
        const index=Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);//If the clicked element is a delete button, this code calculates the index of the parent container of that delete button within the list. This is done by accessing the parent node (event.target.parentNode) twice because it assumes a specific structure where you have nested elements.
        delExp(index);
    }
})
