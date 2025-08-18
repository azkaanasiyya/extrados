import eth from "@/assets/overview/ethereum.png"
import btc from "@/assets/portfolio/bitcoin.png"
import usd from "@/assets/overview/usd.png"

export const TransactionData = [
    {
        action: "Sell",
        date: "Nov 12, 2024, 04.32 PM",
        asset: {
        name: "Ethereum",
        image: eth,
        symbol: "ETH"
        },
        price: "$2,553.84",
        amount: "25.833271184902 ETH",
        fees: "$0.05",
        actionColor: "text-danger-500",
    },
    {
        action: "Buy",
        date: "Nov 12, 2024, 02.12 PM",
        asset: {
        name: "Bitcoin",
        image: btc,
        symbol: "BTC"
        },
        price: "$2,553.84",
        amount: "0.000018490263 BTC",
        fees: "$0.05",
        actionColor: "text-success-500",
    },
    {
        action: "Buy",
        date: "Nov 11, 2024, 02.32 AM",
        asset: {
        name: "USD Coin",
        image: usd,
        symbol: "USDC"
        },
        price: "$2,553.84",
        amount: "2.833271184996 USDC",
        fees: "$0.05",
        actionColor: "text-success-500",
    },
    {
        action: "Sell",
        date: "Nov 10, 2024, 09.32 AM",
        asset: {
        name: "Ethereum",
        image: eth,
        symbol: "ETH"
        },
        price: "$2,553.84",
        amount: "5.833928393902 ETH",
        fees: "$0.05",
        actionColor: "text-danger-500",
    },
    {
        action: "Buy",
        date: "Nov 09, 2024, 02.22 PM",
        asset: {
        name: "Bitcoin",
        image: btc,
        symbol: "BTC"
        },
        price: "$2,553.84",
        amount: "0.833271849026 BTC",
        fees: "$0.05",
        actionColor: "text-success-500",
    },
]