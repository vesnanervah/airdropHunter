type NewsData = {
    date: NewsDate,
    header: string,
    text: string
}

type NewsDate = {
    day: string,
    time: string
}

const newsMockResponse: NewsData[] = [
    {
        date: {
            day: 'Today',
            time: '15:24'
        },
        header: 'Starknet is a decentralized Validy-Rollup often reffered',
        text: 'Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup'
    },
    {
        date: {
            day: 'Yesterday',
            time: '18:40'
        },
        header: 'Starknet is a decentralized Validy-Rollup often reffered',
        text: 'Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup'
    },
    {
        date: {
            day: '24.10',
            time: '15:24'
        },
        header: 'Starknet is a decentralized Validy-Rollup often reffered',
        text: 'Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum. Starknet is a decentralized Validity-Rollup'
    }
];

export { newsMockResponse, NewsData };