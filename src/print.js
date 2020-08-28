function calculateOutStanding(invoice) {
    let outstanding = 0;
    for (const o of invoice.borderSpacing) {
        outstanding += o.amount;
    }
    return outstanding;
}

function printOwing(invoice) {
    let result = `***********************\n**** Customer Owes ****\n***********************\n`
    let outstanding = calculateOutStanding(invoice);

    const today = new Date();
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    result += `name: ${invoice.customer}\n`;
    result += `amount: ${outstanding}\n`;
    result += `amount: ${invoice.dueDate.toLocaleDateString()}`;
    return result;
}

module.exports = {printOwing};