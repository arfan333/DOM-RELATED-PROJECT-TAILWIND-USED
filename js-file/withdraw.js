// step-1: add the event handler
// step-2: get the withdraw amount
// step-3: also make sure to convert input string to number by using parsfloat
// step-4: get the previous withdraw 
// step-5: calculate withdraw 
// step-6: set withdraw
// step-7: get the balance


// step-1
const myWithdraw = document.getElementById("btn-withdraw").addEventListener('click', function(){
    // step-2
    const WithdrawField = document.getElementById('user-withdraw')
    const newWithdrawField = WithdrawField.value
    // step-3 
    const newWithdrawFieldNumber = parseFloat(newWithdrawField)
    WithdrawField.value = "" 
    if (isNaN(newWithdrawFieldNumber)) {
        alert("provide number")
        return
      }
    // step-4
    const firstWithdrawAmount = document.getElementById("my-withdraw")
    const firstWithdrawAmountString =firstWithdrawAmount.innerText
    const getWithdrawAmountNumber = parseFloat(firstWithdrawAmountString)

    // step-7
    const previousBalance = document.getElementById('get-balance')
    const previousBalanceString = previousBalance.innerText
    const previousBalanceNumber = parseFloat(previousBalanceString)
// onno ekta step
    if (newWithdrawFieldNumber > previousBalanceNumber) {
    alert("eto taka poisha nai");
    return
}
 // step-5
 const currentWithdrawAmount = newWithdrawFieldNumber + getWithdrawAmountNumber
 // step-6
 firstWithdrawAmount.innerText = currentWithdrawAmount

    // main step: calculate main balance after withdraw 
    const newMainBalance = previousBalanceNumber - newWithdrawFieldNumber
    previousBalance.innerText = newMainBalance
    
})