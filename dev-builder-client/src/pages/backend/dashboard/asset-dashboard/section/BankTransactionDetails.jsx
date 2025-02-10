

const BankTransactionDetails = () => {
    const transactions = [
        {
            bankName: "UCB",
            date: "June 16 2023 at 16:42",
            amount: "20,000.00 Tk", // Replace with the actual path to the bank logo
        },
        {
            bankName: "City Bank Ltd.",
            date: "June 12 2023 at 10:16",
            amount: "56,000.00 Tk", // Replace with the actual path to the bank logo
        },
        {
            bankName: "EBL Bank",
            date: "June 08 2023 at 23:55",
            amount: "69,000.00 Tk", // Replace with the actual path to the bank logo
        },
        {
            bankName: "Islami Bank Ltd.",
            date: "June 02 2023 at 09:15",
            amount: "35,000.00 Tk", // Replace with the actual path to the bank logo
        },
    ];


    return (
        <div className="col-md-5 col-sm-12">
            <div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-3">Bank Transaction Details</h6>
                        <hr />
                        <ul
                            className="list-group list-group-flush"
                            style={{ backgroundColor: "#f5f5f5" }}
                        >
                            {transactions.map((transaction, index) => (
                                <li
                                    key={index}
                                    className="list-group-item d-flex align-items-center justify-content-between"
                                    style={{ padding: "0.8rem 0" }}
                                >
                                    <div className="d-flex align-items-center">
                                        {/* <img
                                            src={transaction.logo}
                                            alt={`${transaction.bankName} logo`}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                marginRight: "10px",
                                            }}
                                        /> */}
                                        {/* <Icon
                                            icon={transaction.logo || "gridicons:multiple-users"}
                                            className=" text-2xl mb-0"
                                        /> */}
                                        <div>
                                            <p className="mb-0">
                                                {transaction.bankName}
                                            </p>
                                            <small className="text-muted">
                                                {transaction.date}
                                            </small>
                                        </div>
                                    </div>
                                    <hp className="mb-0 text-primary">
                                        {transaction.amount}
                                    </hp>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankTransactionDetails;
