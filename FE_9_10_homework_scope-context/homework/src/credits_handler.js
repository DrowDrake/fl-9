function userCard(key){
    const options = {
        key: key,
        balance: 100,
        transactionLimit: 100,
        historyLogs: []
    };

   function getCardOptions() {

        return options;
    }

   function putCredits(amount){
        options.balance += amount;

        options.historyLogs.push({
            operationType: 'Received credits',
            credits: amount,
            operationTime: new Date().toLocaleString('en-GB')
        });
    }

   function takeCredits(amount) {
        if (amount >= options.balance) {
            console.log(`not enough cash, your balance is ${options.balance}`)
        } else {
            options.balance -= amount;
        }

        options.historyLogs.push({
            operationType: 'Withdrawal of credits',
            credits: amount,
            operationTime: new Date().toLocaleString('en-GB')
        });
    }

  function setTransactionLimit(amount) {
        options.transactionLimit = amount;

        options.historyLogs.push({
            operationType: 'Transaction limit change',
            credits: amount,
            operationTime: new Date().toLocaleString('en-GB')
        });
    }

    function transferCredits(amount, card) {
        const tax = 0.5, hundredPercent = 100;
        if (amount <= options.balance || amount <= options.transactionLimit) {
            const creditTransfer = amount - amount * tax / hundredPercent;
            this.takeCredits(amount);
            card.putCredits(creditTransfer);
        } else {
            console.log('not enough credits');
        }
    }

    return {getCardOptions, putCredits, takeCredits, setTransactionLimit, transferCredits};
}


function UserAccount(name) {

    const properties = {
        name: name,
        cards: []
    };

    function addCard() {
        properties.cards.push(getCardByKey);
        const maxCardsNumber = 3;
        if (properties.cards.length > maxCardsNumber) {
            console.log('Error');
        }
    }

   function getCardByKey(key) {

        return userCard(key);
    }

    return {addCard, getCardByKey};
}
