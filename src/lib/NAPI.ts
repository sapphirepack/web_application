export class NAPI {
    private cryptoEngine:CryptoEngine;

    private basePath:string;

    private accessToken:string;
    private refreshToken:string;

    constructor(cryptoEngine:CryptoEngine, basePath:string) {
        this.cryptoEngine = cryptoEngine;

        this.basePath = basePath;

        this.accessToken = "";
        this.refreshToken = "";
    }

    login(handle:string, passphrase:string) : Promise<boolean> {
        let server_key = this.cryptoEngine.deriveServerKey(passphrase);

        let json = {

            "handle": handle,
            "server_key": server_key
        }

        // Submit to server
        // if 200 we copy access and refresh token and return true
        // otherwise we return false
    }

    signup(handle:string, passphrase:string) : Promise<boolean> {
        let server_key = this.cryptoEngine.deriveServerKey(passphrase);

        let json = {
            
            "handle": handle,
            "server_key": server_key
        }

        // Submit to server
        // if 200 we return true
        // Otherwise we return false
    }

    refresh() {
        if (this.refreshToken == null) {
            throw new Error("Invalid state: refreshToken is null");
        }

        let refresh = {
            "refresh_token": this.refreshToken
        }

        // submit refresh token
        // if we get 200 update both refresh and access token
        // Otherwise we set both to null
    }

    profile(): Promise<JSON|null> {
        let response = null;
        if (this.accessToken && this.refreshToken) {
            let authJSON = 
            {
                "access_token": this.accessToken
            }

            response = // submit answer and wait for response in the body

            if (response.code != 200) {
                this.refresh();
                let authJSON =
                {
                    "access_token": this.accessToken
                }

                response = // submit answer and wait for response
            }
        }

        return response;
    }
}

