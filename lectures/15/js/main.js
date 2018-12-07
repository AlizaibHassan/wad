
var AccountData = {

    Title: "Alizaib Hassan",
    Balance: 1000,
    Currency: "PKRS",
    Ibn: "PAN9356783"
};

function getData() {
    document.getElementById("title").innerHTML = AccountData.Title;
    document.getElementById("balance").innerHTML = AccountData.Balance;
    document.getElementById("currency").innerHTML = AccountData.Currency;
    document.getElementById("IBAN").innerHTML = AccountData.Ibn;
}



function Validate(event,dval){
    var text;

if(event.keyCode==13){

    var tabledata = document.getElementById("transaction-table").insertRow(0);


    if (isNaN(dval)){
        text = "Enter Valid Account";
        document.getElementById("deposit-msg").innerHTML = text;
        document.getElementById("deposit").value = null;
    }else{
        AccountData.Balance = AccountData.Balance + parseInt(dval);
        document.getElementById("balance").innerHTML = AccountData.Balance;
        document.getElementById("deposit").value = null;
        text="";
        document.getElementById("deposit-msg").innerHTML = text;

        var y = tabledata.insertCell(0);
        var z = tabledata.insertCell(1);
        var w = tabledata.insertCell(2);
        y.innerHTML=Date();
        z.innerHTML="Credit";
        w.innerHTML=dval;

    }
document.getElementById("deposit").value = null;

}

}

function ValidateW(event,wval){
    var text;

    if(event.keyCode==13){

        var tabledata = document.getElementById("transaction-table").insertRow(0);

        if (isNaN(wval)){
            text = "Enter Valid Account"
            document.getElementById("withdraw-msg").innerHTML = text;
            document.getElementById("withdraw").value = null;
            return ;
        }
        if(document.getElementById("balance").innerHTML < parseInt(wval)){
            text = "You Don't Have enough Money";
            document.getElementById("withdraw-msg").innerHTML = text;
            return ;
        }else{

            AccountData.Balance = AccountData.Balance - parseInt(wval);
            document.getElementById("balance").innerHTML = AccountData.Balance;
            document.getElementById("withdraw").value = null;
            text="";
            document.getElementById("withdraw-msg").innerHTML = text;

            var y = tabledata.insertCell(0);
            var z = tabledata.insertCell(1);
            var w = tabledata.insertCell(2);
            y.innerHTML=Date();
            z.innerHTML="Debit";
            w.innerHTML=wval;


        }
        document.getElementById("deposit").value = null;


    }

}

getData();


