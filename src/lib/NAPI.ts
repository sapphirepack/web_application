import needle from "needle";
import type { CryptoEngine } from "./CryptoEngine";


/**
 * Network API
 */
export class NAPI {
    private cryptoEngine: CryptoEngine;

    private basePath:string;

    private accessToken:string;
    private refreshToken:string;

    /**
     * 
     * @param cryptoEngine The cryptographic engine that supports the cryptographic primitives required by this application.
     * @param basePath The path where all other subpaths are derived from. For example `https://www.somesite.com/prefix`
     */
    constructor(cryptoEngine:CryptoEngine, basePath:string) {
        this.cryptoEngine = cryptoEngine;
        this.basePath = basePath;

        this.accessToken = "";
        this.refreshToken = "";
    }

    async connect(handle:string, passphrase:string) : Promise<boolean> {
        // We fetch the salt
        // We then use crypto engine and derive
        // We eject the server key
        // We submit the entire thing to remote
        let salt = await needle("post", `${this.basePath}/connect/salt`, {handle: handle}, {json: true})
        .then((response:any) => {
            if (response.statusCode !== 200) {
                return null;
            } else {
                return response.body.salt
            }
        })
        if (salt){
            let saltHex = Buffer.from(salt, 'base64').toString('hex');

            return this.cryptoEngine.deriveServerPassphrase(passphrase, saltHex).then(()=>{
                let ejectedServerKeyHex = this.cryptoEngine.ejectServerKey();
                let ejectedServerKeyBase64 = Buffer.from(ejectedServerKeyHex, 'hex').toString('base64')
                return needle("post", `${this.basePath}/connect`, {handle: handle, server_key: ejectedServerKeyBase64 },{ json: true })
                .then((response:any) => {
                    return response.statusCode == 200;
                })
            })
        } else {
            return Promise.resolve(false);
        }
        

        
    }

    async join(handle: string, passphrase:string) : Promise<boolean> {
        // We generate a salt
        // We then use crypto engine and derive
        // We eject the server key
        // We eject the salt
        // Convert to base64
        // We submit the handle, server_key and salt

        let salt = await this.cryptoEngine.generateSalt();
        let key = await this.cryptoEngine.deriveServerPassphrase(passphrase, salt)
        .then(() => {
            return this.cryptoEngine.ejectServerKey()
        })

        let base64Salt = Buffer.from(salt, 'hex').toString('base64')
        let base64ServerKey = Buffer.from(key, 'hex').toString('base64')

        return needle("post", `${this.basePath}/new`, {handle: handle, server_key: base64ServerKey, salt: base64Salt},{ json: true } )
        .then((response:any) => {
            let statusCode = response.statusCode;
            if (statusCode === 200){
                return true
            } else {
                return false;
            }
        })
    }

}

/**
 * let napi = new NAPI(new CryptoEngine(), "http://127.0.0.1:4000/api/20220720")
 */
