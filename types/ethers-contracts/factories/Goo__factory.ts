/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Goo, GooInterface } from "../Goo";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_artGobblers",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pages",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "artGobblers",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnForGobblers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnForPages",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintForGobblers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pages",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b506040516200137538038062001375833981016040819052620000359162000231565b60405180604001604052806003815260200162476f6f60e81b81525060405180604001604052806003815260200162474f4f60e81b81525060128260009080519060200190620000879291906200016e565b5081516200009d9060019060208501906200016e565b5060ff81166080524660a052620000b3620000d2565b60c0525050506001600160a01b0391821660e052166101005262000348565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001069190620002a5565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8280546200017c9062000269565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b80516001600160a01b03811681146200022c57600080fd5b919050565b600080604083850312156200024557600080fd5b620002508362000214565b9150620002606020840162000214565b90509250929050565b600181811c908216806200027e57607f821691505b6020821081036200029f57634e487b7160e01b600052602260045260246000fd5b50919050565b600080835481600182811c915080831680620002c257607f831692505b60208084108203620002e257634e487b7160e01b86526022600452602486fd5b818015620002f957600181146200030b576200033a565b60ff198616895284890196506200033a565b60008a81526020902060005b86811015620003325781548b82015290850190830162000317565b505084890196505b509498975050505050505050565b60805160a05160c05160e05161010051610fd3620003a26000396000818161023201526106b401526000818161017d015281816105bb015261063a0152600061059701526000610562015260006101dc0152610fd36000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806366be185f116100b257806380457cfa11610081578063a9059cbb11610066578063a9059cbb146102c2578063d505accf146102d5578063dd62ed3e146102e857600080fd5b806380457cfa146102a757806395d89b41146102ba57600080fd5b806366be185f1461022d57806370a082311461025457806373a98eb8146102745780637ecebe001461028757600080fd5b806323b872dd116100ee57806323b872dd146101c4578063313ce567146101d75780633644e515146102105780635f5a347d1461021857600080fd5b806306fdde0314610120578063095ea7b31461013e57806318160ddd146101615780631d1c9e5914610178575b600080fd5b610128610313565b6040516101359190610c79565b60405180910390f35b61015161014c366004610d15565b6103a1565b6040519015158152602001610135565b61016a60025481565b604051908152602001610135565b61019f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610135565b6101516101d2366004610d3f565b61041a565b6101fe7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610135565b61016a61055e565b61022b610226366004610d15565b6105b9565b005b61019f7f000000000000000000000000000000000000000000000000000000000000000081565b61016a610262366004610d7b565b60036020526000908152604090205481565b61022b610282366004610d15565b610638565b61016a610295366004610d7b565b60056020526000908152604090205481565b61022b6102b5366004610d15565b6106b2565b610128610722565b6101516102d0366004610d15565b61072f565b61022b6102e3366004610d9d565b6107b4565b61016a6102f6366004610e10565b600460209081526000928352604080842090915290825290205481565b6000805461032090610e43565b80601f016020809104026020016040519081016040528092919081815260200182805461034c90610e43565b80156103995780601f1061036e57610100808354040283529160200191610399565b820191906000526020600020905b81548152906001019060200180831161037c57829003601f168201915b505050505081565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104099086815260200190565b60405180910390a350600192915050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526004602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146104ae5761047c8382610ec5565b73ffffffffffffffffffffffffffffffffffffffff861660009081526004602090815260408083203384529091529020555b73ffffffffffffffffffffffffffffffffffffffff8516600090815260036020526040812080548592906104e3908490610ec5565b909155505073ffffffffffffffffffffffffffffffffffffffff808516600081815260036020526040908190208054870190555190918716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061054b9087815260200190565b60405180910390a3506001949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146105945761058f610ad8565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f00000000000000000000000000000000000000000000000000000000000000003373ffffffffffffffffffffffffffffffffffffffff821614610629576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106338383610b72565b505050565b7f00000000000000000000000000000000000000000000000000000000000000003373ffffffffffffffffffffffffffffffffffffffff8216146106a8576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106338383610c08565b7f00000000000000000000000000000000000000000000000000000000000000003373ffffffffffffffffffffffffffffffffffffffff821614610629576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001805461032090610e43565b33600090815260036020526040812080548391908390610750908490610ec5565b909155505073ffffffffffffffffffffffffffffffffffffffff8316600081815260036020526040908190208054850190555133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104099086815260200190565b42841015610823576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064015b60405180910390fd5b6000600161082f61055e565b73ffffffffffffffffffffffffffffffffffffffff8a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e0830190915280519201919091207f190100000000000000000000000000000000000000000000000000000000000061010083015261010282019290925261012281019190915261014201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610981573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116158015906109fc57508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610a62576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f494e56414c49445f5349474e4552000000000000000000000000000000000000604482015260640161081a565b73ffffffffffffffffffffffffffffffffffffffff90811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051610b0a9190610edc565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b73ffffffffffffffffffffffffffffffffffffffff821660009081526003602052604081208054839290610ba7908490610ec5565b909155505060028054829003905560405181815260009073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a35050565b8060026000828254610c1a9190610fae565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610bfc565b600060208083528351808285015260005b81811015610ca657858101830151858201604001528201610c8a565b81811115610cb8576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610d1057600080fd5b919050565b60008060408385031215610d2857600080fd5b610d3183610cec565b946020939093013593505050565b600080600060608486031215610d5457600080fd5b610d5d84610cec565b9250610d6b60208501610cec565b9150604084013590509250925092565b600060208284031215610d8d57600080fd5b610d9682610cec565b9392505050565b600080600080600080600060e0888a031215610db857600080fd5b610dc188610cec565b9650610dcf60208901610cec565b95506040880135945060608801359350608088013560ff81168114610df357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610e2357600080fd5b610e2c83610cec565b9150610e3a60208401610cec565b90509250929050565b600181811c90821680610e5757607f821691505b602082108103610e90577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015610ed757610ed7610e96565b500390565b600080835481600182811c915080831680610ef857607f831692505b60208084108203610f30577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b818015610f445760018114610f7357610fa0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528489019650610fa0565b60008a81526020902060005b86811015610f985781548b820152908501908301610f7f565b505084890196505b509498975050505050505050565b60008219821115610fc157610fc1610e96565b50019056fea164736f6c634300080d000a";

type GooConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GooConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Goo__factory extends ContractFactory {
  constructor(...args: GooConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _artGobblers: PromiseOrValue<string>,
    _pages: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Goo> {
    return super.deploy(_artGobblers, _pages, overrides || {}) as Promise<Goo>;
  }
  override getDeployTransaction(
    _artGobblers: PromiseOrValue<string>,
    _pages: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_artGobblers, _pages, overrides || {});
  }
  override attach(address: string): Goo {
    return super.attach(address) as Goo;
  }
  override connect(signer: Signer): Goo__factory {
    return super.connect(signer) as Goo__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GooInterface {
    return new utils.Interface(_abi) as GooInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Goo {
    return new Contract(address, _abi, signerOrProvider) as Goo;
  }
}