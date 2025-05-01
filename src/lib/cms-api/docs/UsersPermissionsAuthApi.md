# UsersPermissionsAuthApi

All URIs are relative to *http://localhost:1337/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authChangePasswordPost**](#authchangepasswordpost) | **POST** /auth/change-password | Update user\&#39;s own password|
|[**authEmailConfirmationGet**](#authemailconfirmationget) | **GET** /auth/email-confirmation | Confirm user email|
|[**authForgotPasswordPost**](#authforgotpasswordpost) | **POST** /auth/forgot-password | Send rest password email|
|[**authLocalPost**](#authlocalpost) | **POST** /auth/local | Local login|
|[**authLocalRegisterPost**](#authlocalregisterpost) | **POST** /auth/local/register | Register a user|
|[**authProviderCallbackGet**](#authprovidercallbackget) | **GET** /auth/{provider}/callback | Default Callback from provider auth|
|[**authResetPasswordPost**](#authresetpasswordpost) | **POST** /auth/reset-password | Rest user password|
|[**authSendEmailConfirmationPost**](#authsendemailconfirmationpost) | **POST** /auth/send-email-confirmation | Send confirmation email|
|[**connectProviderGet**](#connectproviderget) | **GET** /connect/{provider} | Login with a provider|

# **authChangePasswordPost**
> UsersPermissionsUserRegistration authChangePasswordPost(authChangePasswordPostRequest)


### Example

```typescript
import {
    UsersPermissionsAuthApi,
    Configuration,
    AuthChangePasswordPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsAuthApi(configuration);

let authChangePasswordPostRequest: AuthChangePasswordPostRequest; //

const { status, data } = await apiInstance.authChangePasswordPost(
    authChangePasswordPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authChangePasswordPostRequest** | **AuthChangePasswordPostRequest**|  | |


### Return type

**UsersPermissionsUserRegistration**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a jwt token and user info |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authEmailConfirmationGet**
> Error authEmailConfirmationGet()


### Example

```typescript
import {
    UsersPermissionsAuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsAuthApi(configuration);

let confirmation: string; //confirmation token received by email (optional) (default to undefined)

const { status, data } = await apiInstance.authEmailConfirmationGet(
    confirmation
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmation** | [**string**] | confirmation token received by email | (optional) defaults to undefined|


### Return type

**Error**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**301** | Redirects to the configure email confirmation redirect url |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authForgotPasswordPost**
> AuthForgotPasswordPost200Response authForgotPasswordPost(authForgotPasswordPostRequest)


### Example

```typescript
import {
    UsersPermissionsAuthApi,
    Configuration,
    AuthForgotPasswordPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsAuthApi(configuration);

let authForgotPasswordPostRequest: AuthForgotPasswordPostRequest; //

const { status, data } = await apiInstance.authForgotPasswordPost(
    authForgotPasswordPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authForgotPasswordPostRequest** | **AuthForgotPasswordPostRequest**|  | |


### Return type

**AuthForgotPasswordPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns ok |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLocalPost**
> UsersPermissionsUserRegistration authLocalPost(authLocalPostRequest)

Returns a jwt token and user info

### Example

```typescript
import {
    UsersPermissionsAuthApi,
    Configuration,
    AuthLocalPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsAuthApi(configuration);

let authLocalPostRequest: AuthLocalPostRequest; //

const { status, data } = await apiInstance.authLocalPost(
    authLocalPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authLocalPostRequest** | **AuthLocalPostRequest**|  | |


### Return type

**UsersPermissionsUserRegistration**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Connection |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authLocalRegisterPost**
> UsersPermissionsUserRegistration authLocalRegisterPost(authLocalRegisterPostRequest)

Returns a jwt token and user info

### Example

```typescript
import {
    UsersPermissionsAuthApi,
    Configuration,
    AuthLocalRegisterPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsAuthApi(configuration);

let authLocalRegisterPostRequest: AuthLocalRegisterPostRequest; //

const { status, data } = await apiInstance.authLocalRegisterPost(
    authLocalRegisterPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authLocalRegisterPostRequest** | **AuthLocalRegisterPostRequest**|  | |


### Return type

**UsersPermissionsUserRegistration**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful registration |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authProviderCallbackGet**
> UsersPermissionsUserRegistration authProviderCallbackGet()


### Example

```typescript
import {
    UsersPermissionsAuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsAuthApi(configuration);

let provider: string; //Provider name (default to undefined)

const { status, data } = await apiInstance.authProviderCallbackGet(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] | Provider name | defaults to undefined|


### Return type

**UsersPermissionsUserRegistration**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a jwt token and user info |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authResetPasswordPost**
> UsersPermissionsUserRegistration authResetPasswordPost(authResetPasswordPostRequest)


### Example

```typescript
import {
    UsersPermissionsAuthApi,
    Configuration,
    AuthResetPasswordPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsAuthApi(configuration);

let authResetPasswordPostRequest: AuthResetPasswordPostRequest; //

const { status, data } = await apiInstance.authResetPasswordPost(
    authResetPasswordPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authResetPasswordPostRequest** | **AuthResetPasswordPostRequest**|  | |


### Return type

**UsersPermissionsUserRegistration**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a jwt token and user info |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authSendEmailConfirmationPost**
> AuthSendEmailConfirmationPost200Response authSendEmailConfirmationPost(authForgotPasswordPostRequest)


### Example

```typescript
import {
    UsersPermissionsAuthApi,
    Configuration,
    AuthForgotPasswordPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsAuthApi(configuration);

let authForgotPasswordPostRequest: AuthForgotPasswordPostRequest; //

const { status, data } = await apiInstance.authSendEmailConfirmationPost(
    authForgotPasswordPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authForgotPasswordPostRequest** | **AuthForgotPasswordPostRequest**|  | |


### Return type

**AuthSendEmailConfirmationPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns email and boolean to confirm email was sent |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connectProviderGet**
> Error connectProviderGet()

Redirects to provider login before being redirect to /auth/{provider}/callback

### Example

```typescript
import {
    UsersPermissionsAuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsAuthApi(configuration);

let provider: string; //Provider name (default to undefined)

const { status, data } = await apiInstance.connectProviderGet(
    provider
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **provider** | [**string**] | Provider name | defaults to undefined|


### Return type

**Error**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**301** | Redirect response |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

