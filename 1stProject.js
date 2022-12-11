
let list = document.getElementById('list');
let form = document.getElementById('form');
let button = document.getElementById('btn');
let amount = document.getElementById('amount');
let description = document.getElementById('description');
let category = document.getElementById('category');

button.addEventListener('click',addExpense);

function addExpense(e)
{
    e.preventDefault();

    let obj ={
        amount: amount.value,
        description: description.value,
        category: category.value 
    }

    let conObj = JSON.stringify(obj);
    localStorage.setItem(amount.value,conObj);
    
    showOnScreen(obj);
}

function showOnScreen(user)
{
    amount.value = '';
    description.value = '';
    category.value = '';

    let child = `<li class='list-group-item' id=${user.amount}> ${user.amount} - ${user.description} - ${user.category}
                 <button onclick=deleteExpense('${user.amount}')>Delete Expense</button>
                 <button onclick=editExpense('${user.amount}','${user.description}','${user.category}')>Edit Expense</button></li>`

    list.innerHTML = list.innerHTML + child;             
}

function editExpense(amount,description,category)
{
    document.getElementById('amount').value = amount;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;
    deleteExpense(amount);
}

function deleteExpense(amount)
{
    localStorage.removeItem(amount);
    removeFromScreen(amount);
}

function removeFromScreen(amount)
{
    let childNode = document.getElementById(amount);
    if(childNode)
    {
        list.removeChild(childNode);
    }
}