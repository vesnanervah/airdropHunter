type Blockchain = {
    name: string,
    iconUrl: string,
    description: string,
    expectedDrop: string,
    probability: string,
    tarrifs: Tariff[]
}

type Tariff = {
    accounts: number,
    cost: number,
    link: string
}

const blockchainsMockResponse: Blockchain [] = [
    {
        name: 'StarkNet',
        iconUrl: './img/tokens/starknet.png',
        description: 'Starknet is a decentralized Validity-Rollup (often referred to as ZK-Rollup). It operates as a Layer 2 network over Ethereum.',
        expectedDrop: '$500 - $5 000',
        probability: '65%',
        tarrifs: [
            {
                accounts: 5,
                cost: 150,
                link: '#'
            },
            {
                accounts: 10,
                cost: 300,
                link: '#'
            },
            {
                accounts: 15,
                cost: 450,
                link: '#'
            },
            {
                accounts: 20,
                cost: 600,
                link: '#'
            },
            {
                accounts: 25,
                cost: 750,
                link: '#'
            },
            {
                accounts: 30,
                cost: 900,
                link: '#'
            }
        ]
    },
    {
        name: 'Polygon zkEVM',
        iconUrl: './img/tokens/polygon-zk.png',
        description: 'Polygon zkEVM Beta is the leading ZK scaling solution that is equivalent to Ethereum Virtual Machine.',
        expectedDrop: '$500 - $5 000',
        probability: '65%',
        tarrifs: [
            {
                accounts: 5,
                cost: 150,
                link: '#'
            },
            {
                accounts: 10,
                cost: 300,
                link: '#'
            },
            {
                accounts: 15,
                cost: 450,
                link: '#'
            },
            {
                accounts: 20,
                cost: 600,
                link: '#'
            },
            {
                accounts: 25,
                cost: 750,
                link: '#'
            },
            {
                accounts: 30,
                cost: 900,
                link: '#'
            }
        ]
    },
    {
        name: 'LayerZero',
        iconUrl: './img/tokens/layer-zero.png',
        description: 'LayerZero is a User Application configurable on-chain endpoint that runs a ULN. LayerZero relies on two parties to transfer messages between on-chain endpoints: the Oracle and the Relayer.',
        expectedDrop: '$500 - $5 000',
        probability: '65%',
        tarrifs: [
            {
                accounts: 5,
                cost: 150,
                link: '#'
            },
            {
                accounts: 10,
                cost: 300,
                link: '#'
            },
            {
                accounts: 15,
                cost: 450,
                link: '#'
            },
            {
                accounts: 20,
                cost: 600,
                link: '#'
            },
            {
                accounts: 25,
                cost: 750,
                link: '#'
            },
            {
                accounts: 30,
                cost: 900,
                link: '#'
            }
        ]
    },
    {
        name: 'MetaMask',
        iconUrl: './img/tokens/metamask.png',
        description: 'MetaMask is the leading self-custodial wallet. The safe and simple way to access blockchain applications and web3. Trusted by millions of users worldwide.',
        expectedDrop: '$500 - $5 000',
        probability: '65%',
        tarrifs: [
            {
                accounts: 5,
                cost: 150,
                link: '#'
            },
            {
                accounts: 10,
                cost: 300,
                link: '#'
            },
            {
                accounts: 15,
                cost: 450,
                link: '#'
            },
            {
                accounts: 20,
                cost: 600,
                link: '#'
            },
            {
                accounts: 25,
                cost: 750,
                link: '#'
            },
            {
                accounts: 30,
                cost: 900,
                link: '#'
            }
        ]
    },
    {
        name: 'zkSync',
        iconUrl: './img/tokens/zksync.png',
        description: "zkSync Era is the layer 2 protocol that scales Ethereum's security and values through zero-knowledge cryptography. We believe that the single most impactful way we can make this world better is by increasing people’s freedom, and today, freedom relies on cryptography.",
        expectedDrop: '$500 - $5 000',
        probability: '65%',
        tarrifs: [
            {
                accounts: 5,
                cost: 150,
                link: '#'
            },
            {
                accounts: 10,
                cost: 300,
                link: '#'
            },
            {
                accounts: 15,
                cost: 450,
                link: '#'
            },
            {
                accounts: 20,
                cost: 600,
                link: '#'
            },
            {
                accounts: 25,
                cost: 750,
                link: '#'
            },
            {
                accounts: 30,
                cost: 900,
                link: '#'
            }
        ]
    },
    {
        name: 'Venom Foundation',
        iconUrl: './img/tokens/venom-foundation.png',
        description: "Venom Blockchain is built on the Threaded Virtual Machine (TVM). TVM provides a highly efficient and scalable way to handle account interactions in the Venom Blockchain. By utilizing the Actor model, TVM can isolate and parallelize actors, allowing for the efficient handling of complex distributed systems.",
        expectedDrop: '$500 - $5 000',
        probability: '65%',
        tarrifs: [
            {
                accounts: 5,
                cost: 150,
                link: '#'
            },
            {
                accounts: 10,
                cost: 300,
                link: '#'
            },
            {
                accounts: 15,
                cost: 450,
                link: '#'
            },
            {
                accounts: 20,
                cost: 600,
                link: '#'
            },
            {
                accounts: 25,
                cost: 750,
                link: '#'
            },
            {
                accounts: 30,
                cost: 900,
                link: '#'
            }
        ]
    },
];

export { Blockchain, blockchainsMockResponse };