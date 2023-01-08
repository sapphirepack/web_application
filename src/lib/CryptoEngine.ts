const _sodium = require('libsodium-wrappers-sumo');
// This avoids a possible race condition where we attempt to use the CryptoEngine before it's properly intialized. 

const OFFSET_KEY = 256;

export class CryptoEngine {
    readonly KEY_LENGTH:number = 512; // 512 bytes. 
    
    private rootEncKey:Uint8Array; // 256 bytes (the first half)
    private serverKey:Uint8Array; // 256 bytes (the second half)
    private encryptionReady:boolean;

    constructor() {
        this.rootEncKey = new Uint8Array(256);
        this.serverKey = new Uint8Array(256);
        this.encryptionReady = false;
    }

    async deriveServerPassphrase(passphrase:string, saltHex:string) : Promise<void> {
        await _sodium.ready

        let salt = _sodium.from_hex(saltHex) /*?*/
        if (salt.length != 16) throw Error("Salt incorrect length. Needs to be 16 bytes. Got "+ salt.length +" instead.")
        
        console.log("Got here")
        const hash = _sodium.crypto_pwhash(
            512,
            passphrase,
            salt,
            _sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
            _sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE,
            _sodium.crypto_pwhash_ALG_ARGON2ID13, // Protects against both kinds of attacks
        );
        this.splitKeys(hash);
     return Promise.resolve()
    }

    /**
     * Generates a salt which is used for the deriveServerPassphrase
     * @returns A hex encoded salt
     */
    async generateSalt() : Promise<String> {
        await _sodium.ready
        let salt = _sodium.randombytes_buf(16)

        return Promise.resolve(_sodium.to_hex(salt))
    }

    private splitKeys(hash:Uint8Array) {
        for(let ii = 0; ii < 256; ii++) {
            this.rootEncKey[ii] = hash[ii];
            this.serverKey[ii] = hash[ii + OFFSET_KEY]
        }
        this.encryptionReady = true;
    }

    public ejectServerKey() {
        if (!this.encryptionReady) throw new Error("Unable to eject uninitilized key")
        return _sodium.to_hex(this.serverKey)
    }
}
  


