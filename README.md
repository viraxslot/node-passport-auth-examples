## Node authentication method examples

### Host
Server will be started on `host=localhost:5555`
### Methods list
| API method | Description | Example |
|---|---|---|
| host/no-auth | No authentication | - |
| host/basic | Basic authentication | test/test |
| host/api-key | API key authentication | 194cee17-4da9-4e76-ab18-64a47cae9a6c |
| host/cookie/signup | create new user | body { username: "test", password: "test" } |
| host/cookie/login | get cookie "session" | body { username: "test", password: "test" } |
| host/cookie/profile | method under cookie auth | - |
| host/jwt/signup | create new user | body { email: "test", password: "test" } |
| host/jwt/login | get bearer token | - |
| host/jwt/profile?secret_token=<token> | get information under the jwt auth | - |