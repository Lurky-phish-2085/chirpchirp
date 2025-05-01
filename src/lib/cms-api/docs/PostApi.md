# PostApi

All URIs are relative to *http://localhost:1337/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deletePostsId**](#deletepostsid) | **DELETE** /posts/{id} | |
|[**getPosts**](#getposts) | **GET** /posts | |
|[**getPostsId**](#getpostsid) | **GET** /posts/{id} | |
|[**postPosts**](#postposts) | **POST** /posts | |
|[**putPostsId**](#putpostsid) | **PUT** /posts/{id} | |

# **deletePostsId**
> number deletePostsId()


### Example

```typescript
import {
    PostApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PostApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.deletePostsId(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


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
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPosts**
> PostListResponse getPosts()


### Example

```typescript
import {
    PostApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PostApi(configuration);

let sort: string; //Sort by attributes ascending (asc) or descending (desc) (optional) (default to undefined)
let paginationWithCount: boolean; //Return page/pageSize (default: true) (optional) (default to undefined)
let paginationPage: number; //Page number (default: 0) (optional) (default to undefined)
let paginationPageSize: number; //Page size (default: 25) (optional) (default to undefined)
let paginationStart: number; //Offset value (default: 0) (optional) (default to undefined)
let paginationLimit: number; //Number of entities to return (default: 25) (optional) (default to undefined)
let fields: string; //Fields to return (ex: title,author) (optional) (default to undefined)
let populate: string; //Relations to return (optional) (default to undefined)
let filters: { [key: string]: any; }; //Filters to apply (optional) (default to undefined)
let locale: string; //Locale to apply (optional) (default to undefined)

const { status, data } = await apiInstance.getPosts(
    sort,
    paginationWithCount,
    paginationPage,
    paginationPageSize,
    paginationStart,
    paginationLimit,
    fields,
    populate,
    filters,
    locale
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sort** | [**string**] | Sort by attributes ascending (asc) or descending (desc) | (optional) defaults to undefined|
| **paginationWithCount** | [**boolean**] | Return page/pageSize (default: true) | (optional) defaults to undefined|
| **paginationPage** | [**number**] | Page number (default: 0) | (optional) defaults to undefined|
| **paginationPageSize** | [**number**] | Page size (default: 25) | (optional) defaults to undefined|
| **paginationStart** | [**number**] | Offset value (default: 0) | (optional) defaults to undefined|
| **paginationLimit** | [**number**] | Number of entities to return (default: 25) | (optional) defaults to undefined|
| **fields** | [**string**] | Fields to return (ex: title,author) | (optional) defaults to undefined|
| **populate** | [**string**] | Relations to return | (optional) defaults to undefined|
| **filters** | **{ [key: string]: any; }** | Filters to apply | (optional) defaults to undefined|
| **locale** | [**string**] | Locale to apply | (optional) defaults to undefined|


### Return type

**PostListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getPostsId**
> PostResponse getPostsId()


### Example

```typescript
import {
    PostApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PostApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.getPostsId(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**PostResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **postPosts**
> PostResponse postPosts(postRequest)


### Example

```typescript
import {
    PostApi,
    Configuration,
    PostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PostApi(configuration);

let postRequest: PostRequest; //

const { status, data } = await apiInstance.postPosts(
    postRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRequest** | **PostRequest**|  | |


### Return type

**PostResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **putPostsId**
> PostResponse putPostsId(postRequest)


### Example

```typescript
import {
    PostApi,
    Configuration,
    PostRequest
} from './api';

const configuration = new Configuration();
const apiInstance = new PostApi(configuration);

let id: number; // (default to undefined)
let postRequest: PostRequest; //

const { status, data } = await apiInstance.putPostsId(
    id,
    postRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **postRequest** | **PostRequest**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**PostResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |
|**403** | Forbidden |  -  |
|**404** | Not Found |  -  |
|**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

