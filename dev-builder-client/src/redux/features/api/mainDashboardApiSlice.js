import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const mainDashboardApiSlice = createApi({
    reducerPath: 'MainDashboard',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => '/main/dashboard/data'
        }),
        getFooter: builder.query({
            query: () => '/dashboard/footer/data'
        }),
        getProfitLoss: builder.query({
            query: () => '/dashboard/profit-loss/data'
        }),
        getCostInOut: builder.query({
            query: () => '/dashboard/cost-in-and-out/data/'
        }),
        getSalesAnalytics: builder.query({
            query: () => '/dashboard/sales-analytics/data'
        }),
        getPurchaseReport: builder.query({
            query: () => '/dashboard/purchase/report/'
        }),
        getRevenueReport: builder.query({
            query: () => '/dashboard/revenue/report/'
        }),
        getRevenueReport: builder.query({
            query: () => '/dashboard/revenue/report/'
        }),
    })
})


export const {
    useGetDataQuery,
    useGetFooterQuery,
    useGetProfitLossQuery,
    useGetCostInOutQuery,
    useGetSalesAnalyticsQuery,
    useGetPurchaseReportQuery,
    useGetRevenueReportQuery
} = mainDashboardApiSlice;

export default mainDashboardApiSlice;