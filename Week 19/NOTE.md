# 学习笔记


## Oauth 1.0
1. 客户端到授权服务器请求一个授权令牌(requesttoken&secret)
2. 引导用户到授权服务器请求授权
3. 用访问令牌到授权服务器换取访问令牌(accesstoken&secret)
4. 用访问令牌去访问得到授权的资源

## Oauth 2.0

需要实现 Oauth 2.0 的元素有
1. Resource Owner: 资源的主人 
2. Client
3. Authorization Server
4. Resource Server
5. Scope
6. Consent


不同方式实现 2.0

## Authorization Code Grant

1. 客户按其中一个登录方式 （Sign in with google），然后客户端会跳到 Google 登录网站
2. 如果客户成功登录，就会去到 Consent UI，允许相关资源。
3. 然后就发authorization code请求到程序员设置好的callback URL
4. 然后服务端就可以用authorization code跟google要求得到access token

好处
1. 客户永远都不会得到access token，只需要处理的是服务端与客户之间的token

坏处
1. 必须要有服务端，如果是SPA的话则需要尝试 Authorization Code Flow with Proof Key for Code Exchange (PKCE)

## Implicit Grant

1. 客户登路方式。
2. 如果成功，得到ID token
3. 这ID token 就像

好处
1. 比较容易

坏处
1. 只能用在login 情况，不能call API

