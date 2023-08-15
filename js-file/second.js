// first step: add event handler on the click site
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2:get the deposit input field
    const inputFieldDeposit = document.getElementById('user-deposit')
    const newDepositAmount = inputFieldDeposit.value 
    // note: change input string to number
    const mainDeposit = parseFloat(newDepositAmount)
   
    // clear deposit input field
    inputFieldDeposit.value = ""

    // step-3: get the current deposit 
    //  eti input tag na
    const currentDeposit = document.getElementById('current-deposit')
    const totalDeposit = currentDeposit.innerText
    const getTotalDeposit = parseFloat(totalDeposit)
//  step-4: add numbers to set the total all deposit
    const allTotalDepositAmount = getTotalDeposit + mainDeposit
    currentDeposit.innerText = allTotalDepositAmount
    
    // step-5: increasing main balance with deposit amount
    const myBalance = document.getElementById('get-balance')
    const mainBalanceString = myBalance.innerText
    const  mainBalanceNumber = parseFloat(mainBalanceString)
    
    // step-6: calculate my all balance
    const calculateBalance = mainBalanceNumber + mainDeposit
    myBalance.innerText = calculateBalance
})