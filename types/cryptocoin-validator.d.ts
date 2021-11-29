declare module "cryptocoin-validator" {
    interface ValidateOptions {
        networkType: string;
    }

    type CurrencySymbol =
        | "btc"
        | "bch"
        | "bsv"
        | "ltc"
        | "ppc"
        | "doge"
        | "bvc"
        | "frc"
        | "pts"
        | "mec"
        | "xpm"
        | "aur"
        | "nmc"
        | "bio"
        | "grlc"
        | "vtc"
        | "btg"
        | "kmd"
        | "btcz"
        | "btcp"
        | "hush"
        | "sng"
        | "zec"
        | "zcl"
        | "zen"
        | "vot"
        | "dcr"
        | "game"
        | "pivx"
        | "slr"
        | "mona"
        | "dgb"
        | "usdt"
        | "xrp"
        | "dash"
        | "neo"
        | "gas"
        | "qtum"
        | "waves"
        | "eth"
        | "etz"
        | "etc"
        | "clo"
        | "bkx"
        | "ada"
        | "xmr"
        | "ant"
        | "bat"
        | "bnt"
        | "cvc"
        | "dnt"
        | "gno"
        | "gnt"
        | "glm"
        | "gup"
        | "mln"
        | "nmr"
        | "omg"
        | "pay"
        | "rcn"
        | "rep"
        | "rlc"
        | "salt"
        | "snt"
        | "storj"
        | "swt"
        | "tusd"
        | "wings"
        | "zrx"
        | "exp"
        | "vib"
        | "ocn"
        | "poly"
        | "storm"
        | "nano"
        | "xrb"
        | "sc"
        | "xsc"
        | "loki"
        | "lbc"
        | "trx"
        | "xem"
        | "lsk"
        | "xlm"
        | "btu"
        | "cro"
        | "dai"
        | "enj"
        | "hedg"
        | "lba"
        | "link"
        | "loom"
        | "mkr"
        | "mtl"
        | "ocean"
        | "qnt"
        | "snx"
        | "solve"
        | "spnd"
        | "temco"
        | "eos"
        | "xtz"
        | "vet"
        | "stmx"
        | "repv2"
        | "fct"
        | "btt"
        | "qrl"
        | "serv"
        | "xtp"
        | "comp"
        | "pax"
        | "usdc"
        | "cusd"
        | "algo"
        | "dot"
        | "uni"
        | "aave"
        | "matic"
        | "mana"
        | "sol";

    type NetworkType = "prod" | "testnet" | "stagenet";
    interface CurrencyValidator {
        isValidAddress(
            address: string,
            currency: Currency,
            opts: ValidateOptions
        );
    }
    interface Currency {
        name: string;
        symbol: CurrencySymbol;
        validator: CurrencyValidator;
        addressTypes?: Record<NetworkType, string[] | number>;
        bech32Hrp?: Record<NetworkType, string[]>;
        reges?: RegExp;
        hashFunction?: string;
        expectedLength?: number;
    }

    export function validate(
        address: string,
        currencyNameOrSymbol: CurrencySymbol,
        opts?: string | ValidateOptions
    ): boolean;

    export function getCurrencies(): Currency[];

    export function findCurrency(symbol: string): Currency | null;
}
