# g-poller

## Prerequisites

You will need to genertate credentials & a token for the Gmail account you are trying to poll. 

The following [Guide](https://github.com/levz0r/gmail-tester/blob/master/README.md#how-to-get-credentialsjson) will help you create the `credentials.json` & `gmail_token.json` files

Once you have created the two files (Credentials + Gmail token) you will need to place them in the cypress plugins folder
```
    cypress 
        - plugins 
            - credentials.json 
            - gmail_token.json
```
