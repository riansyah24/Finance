let totalBudgetHTML = document.getElementById("totalBudget")
let totalExpenseHTML = document.getElementById("totalExpense")
let totalAmountHTML = document.getElementById("totalAmount")
let inputBudget = document.getElementById("budget")
let inputCostExpense = document.getElementById("costExpense")
let inputTextExpense = document.getElementById("textExpense")
let list = document.getElementById("list")

let budget = 0
let expense = 0
let amount = 0

// Budget
const hitungBudget = () => {
  // Menambah budget
  budget+=parseInt(inputBudget.value)
  totalBudgetHTML.innerText = budget
  // Kalkulasi total
  amount+=parseInt(inputBudget.value)
  totalAmountHTML.innerText = amount
  inputBudget.value = ""
}

//Expense
const hitungExpense = () => {
  if(inputCostExpense.value == "" || inputTextExpense.value == "") {
    alert("Masukkan kolom yang kosong")
  }
  else {
  // Menambah beban
  expense+=parseInt(inputCostExpense.value)
  totalExpenseHTML.innerText = expense
  // Kalkulasi total
  amount-=parseInt(inputCostExpense.value)
  totalAmountHTML.innerText = amount

  //List 
  let ul = document.createElement("ul")
  ul.className = "w-full flex justify-between items-center"
  list.appendChild(ul)
  //Liexpense expense
  let liText = document.createElement("li")
  liText.innerText = inputTextExpense.value
  liText.className = "text-green-600"
  ul.appendChild(liText)
  liText.value = ""
  inputTextExpense.value = ""
  //List cost expense
  let liCost = document.createElement("li")
  liCost.innerText = inputCostExpense.value
  liCost.className = "text-green-600"
  ul.appendChild(liCost)
  inputCostExpense.value = ""
  //Remove
  let remove = document.createElement("button")
  remove.className="text-red-600 font-bold p-2"
  remove.innerText = "X"
  ul.appendChild(remove)
  remove.addEventListener("click",() => {
    list.removeChild(ul)
    expense-=parseInt(liCost.innerText)
    totalExpenseHTML.innerText = expense
    amount+=parseInt(liCost.innerText)
    totalAmountHTML.innerText = amount
  })
  }
}
