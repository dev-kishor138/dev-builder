import { useGetAssetTopCardQuery } from "../../../../redux/features/api/assetDashboardApiSlice";



const AssetTopCard = () => {

    const { data, isLoading, error } = useGetAssetTopCardQuery();
    console.log(data || []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error?.error ? error?.error : error?.message}</p>;

    return (
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-4">
            <h2>{data.bank ?? 0}</h2>
        </div>
    );
};

export default AssetTopCard;
