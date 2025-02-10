import Breadcrumb from "../../../components/breadcrumb/Breadcrumb";
import AssetTopCard from "./section/AssetTopCard";
import BankTransactionDetails from "./section/BankTransactionDetails";
import TotalLeisure from "./section/TotalLeisure";


const AssetDashboard = () => {
    return (
        <>
            <Breadcrumb section="Dashboard" title="Asset Dashboard" />
            <AssetTopCard />
            <div className="row gy-4 mt-1">
                <TotalLeisure />
                <BankTransactionDetails />
            </div>
        </>
    );
};

export default AssetDashboard;
