# APIGEE Helper

# Create project
- RectJS
- Material UI
```sh
mkdir web-app
cd web-app
npx create-next-app@latest
```
- Install material UI
```sh
yarn add @mui/material @emotion/react @emotion/styled
```




* [Policies Builder](#policies-builder)

# Policies Builder
* Traffic management policies
    * Caching policies
        * InvalidateCache policy
        * LookupCache policy
        * PopulateCache policy
        * ResponseCache policy
    * ConcurrentRateLimit policy
    * Quota policy
    * ResetQuota policy
    * SpikeArrest policy
* Mediation policies
    * AccessEntity policy
    * AssignMessage policy
    * ExtractVariables policy
    * JSONtoXML policy
    * KeyValueMapOperations policy
    * OASValidation policy
    * RaiseFault policy
    * SOAPMessageValidation policy
    * XMLtoJSON policy
    * XSLTransform policy
* Security policies
    * AccessControl policy
    * BasicAuthentication policy
    * HMAC policy
    * JSONThreatProtection policy
    * JWS policies
        * DecodeJWS policy
        * GenerateJWS policy
        * VerifyJWS policy
    * JWT policies
        * DecodeJWT policy
        * GenerateJWT policy
        * VerifyJWT policy
    * LDAP policy*†
    * OAuth v2 policies
        * DeleteOAuthv2Info policy
        * GetOAuthv2Info policy
        * OAuthv2 policy
        * RevokeOAuthV2 policy
        * SetOAuth v2 Info policy
    * RegularExpressionProtection policy
    * SAMLAssertion policy
    * VerifyAPIKey policy
    * XMLThreatProtection policy
* Extension policies
    * ExtensionCallout policy
    * FlowCallout policy
    * JavaCallout policy
    * JavaScript policy
    * MessageLogging policy
    * PythonScript policy
    * ServiceCallout policy
    * StatisticsCollector policy