# UsersPermissionsUsersRolesApi

All URIs are relative to *http://localhost:1337/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersCountGet**](#userscountget) | **GET** /users/count | Get user count|
|[**usersGet**](#usersget) | **GET** /users | Get list of users|
|[**usersIdDelete**](#usersiddelete) | **DELETE** /users/{id} | Delete a user|
|[**usersIdGet**](#usersidget) | **GET** /users/{id} | Get a user|
|[**usersIdPut**](#usersidput) | **PUT** /users/{id} | Update a user|
|[**usersMeGet**](#usersmeget) | **GET** /users/me | Get authenticated user info|
|[**usersPermissionsPermissionsGet**](#userspermissionspermissionsget) | **GET** /users-permissions/permissions | Get default generated permissions|
|[**usersPermissionsRolesGet**](#userspermissionsrolesget) | **GET** /users-permissions/roles | List roles|
|[**usersPermissionsRolesIdGet**](#userspermissionsrolesidget) | **GET** /users-permissions/roles/{id} | Get a role|
|[**usersPermissionsRolesPost**](#userspermissionsrolespost) | **POST** /users-permissions/roles | Create a role|
|[**usersPermissionsRolesRoleDelete**](#userspermissionsrolesroledelete) | **DELETE** /users-permissions/roles/{role} | Delete a role|
|[**usersPermissionsRolesRolePut**](#userspermissionsrolesroleput) | **PUT** /users-permissions/roles/{role} | Update a role|
|[**usersPost**](#userspost) | **POST** /users | Create a user|

# **usersCountGet**
> number usersCountGet()


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

const { status, data } = await apiInstance.usersCountGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**number**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a number |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersGet**
> Array<UsersPermissionsUser> usersGet()


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

const { status, data } = await apiInstance.usersGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<UsersPermissionsUser>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns an array of users |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersIdDelete**
> UsersPermissionsUser usersIdDelete()


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

let id: string; //user Id (default to undefined)

const { status, data } = await apiInstance.usersIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | user Id | defaults to undefined|


### Return type

**UsersPermissionsUser**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns deleted user info |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersIdGet**
> UsersPermissionsUser usersIdGet()


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

let id: string; //user Id (default to undefined)

const { status, data } = await apiInstance.usersIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | user Id | defaults to undefined|


### Return type

**UsersPermissionsUser**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a user |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersIdPut**
> UsersPost201Response usersIdPut(usersPostRequest)


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration,
    UsersPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

let id: string; //user Id (default to undefined)
let usersPostRequest: UsersPostRequest; //

const { status, data } = await apiInstance.usersIdPut(
    id,
    usersPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usersPostRequest** | **UsersPostRequest**|  | |
| **id** | [**string**] | user Id | defaults to undefined|


### Return type

**UsersPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns updated user info |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersMeGet**
> UsersPermissionsUser usersMeGet()


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

const { status, data } = await apiInstance.usersMeGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UsersPermissionsUser**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns user info |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersPermissionsPermissionsGet**
> UsersPermissionsPermissionsGet200Response usersPermissionsPermissionsGet()


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

const { status, data } = await apiInstance.usersPermissionsPermissionsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UsersPermissionsPermissionsGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns the permissions tree |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersPermissionsRolesGet**
> UsersPermissionsRolesGet200Response usersPermissionsRolesGet()


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

const { status, data } = await apiInstance.usersPermissionsRolesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UsersPermissionsRolesGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns list of roles |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersPermissionsRolesIdGet**
> UsersPermissionsRolesIdGet200Response usersPermissionsRolesIdGet()


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

let id: string; //role Id (default to undefined)

const { status, data } = await apiInstance.usersPermissionsRolesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | role Id | defaults to undefined|


### Return type

**UsersPermissionsRolesIdGet200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns the role |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersPermissionsRolesPost**
> AuthForgotPasswordPost200Response usersPermissionsRolesPost(usersPermissionsRolesPostRequest)


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration,
    UsersPermissionsRolesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

let usersPermissionsRolesPostRequest: UsersPermissionsRolesPostRequest; //

const { status, data } = await apiInstance.usersPermissionsRolesPost(
    usersPermissionsRolesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usersPermissionsRolesPostRequest** | **UsersPermissionsRolesPostRequest**|  | |


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
|**200** | Returns ok if the role was create |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersPermissionsRolesRoleDelete**
> AuthForgotPasswordPost200Response usersPermissionsRolesRoleDelete()


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

let role: string; //role Id (default to undefined)

const { status, data } = await apiInstance.usersPermissionsRolesRoleDelete(
    role
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **role** | [**string**] | role Id | defaults to undefined|


### Return type

**AuthForgotPasswordPost200Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns ok if the role was delete |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersPermissionsRolesRolePut**
> AuthForgotPasswordPost200Response usersPermissionsRolesRolePut(usersPermissionsRolesPostRequest)


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration,
    UsersPermissionsRolesPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

let role: string; //role Id (default to undefined)
let usersPermissionsRolesPostRequest: UsersPermissionsRolesPostRequest; //

const { status, data } = await apiInstance.usersPermissionsRolesRolePut(
    role,
    usersPermissionsRolesPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usersPermissionsRolesPostRequest** | **UsersPermissionsRolesPostRequest**|  | |
| **role** | [**string**] | role Id | defaults to undefined|


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
|**200** | Returns ok if the role was udpated |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersPost**
> UsersPost201Response usersPost(usersPostRequest)


### Example

```typescript
import {
    UsersPermissionsUsersRolesApi,
    Configuration,
    UsersPostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersPermissionsUsersRolesApi(configuration);

let usersPostRequest: UsersPostRequest; //

const { status, data } = await apiInstance.usersPost(
    usersPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **usersPostRequest** | **UsersPostRequest**|  | |


### Return type

**UsersPost201Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Returns created user info |  -  |
|**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

