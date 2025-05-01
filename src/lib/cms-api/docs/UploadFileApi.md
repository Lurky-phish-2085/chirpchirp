# UploadFileApi

All URIs are relative to *http://localhost:1337/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**uploadFilesGet**](#uploadfilesget) | **GET** /upload/files | |
|[**uploadFilesIdDelete**](#uploadfilesiddelete) | **DELETE** /upload/files/{id} | |
|[**uploadFilesIdGet**](#uploadfilesidget) | **GET** /upload/files/{id} | |
|[**uploadPost**](#uploadpost) | **POST** /upload | |
|[**uploadididPost**](#uploadididpost) | **POST** /upload?id&#x3D;{id} | |

# **uploadFilesGet**
> Array<UploadFile> uploadFilesGet()


### Example

```typescript
import {
    UploadFileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UploadFileApi(configuration);

const { status, data } = await apiInstance.uploadFilesGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<UploadFile>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get a list of files |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFilesIdDelete**
> UploadFile uploadFilesIdDelete()


### Example

```typescript
import {
    UploadFileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UploadFileApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.uploadFilesIdDelete(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UploadFile**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Delete a file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadFilesIdGet**
> UploadFile uploadFilesIdGet()


### Example

```typescript
import {
    UploadFileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UploadFileApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.uploadFilesIdGet(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UploadFile**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get a specific file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadPost**
> Array<UploadFile> uploadPost()

Upload files

### Example

```typescript
import {
    UploadFileApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UploadFileApi(configuration);

let files: Array<File>; // (default to undefined)
let path: string; //The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). (optional) (default to undefined)
let refId: string; //The ID of the entry which the file(s) will be linked to (optional) (default to undefined)
let ref: string; //The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). (optional) (default to undefined)
let field: string; //The field of the entry which the file(s) will be precisely linked to. (optional) (default to undefined)

const { status, data } = await apiInstance.uploadPost(
    files,
    path,
    refId,
    ref,
    field
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **files** | **Array&lt;File&gt;** |  | defaults to undefined|
| **path** | [**string**] | The folder where the file(s) will be uploaded to (only supported on strapi-provider-upload-aws-s3). | (optional) defaults to undefined|
| **refId** | [**string**] | The ID of the entry which the file(s) will be linked to | (optional) defaults to undefined|
| **ref** | [**string**] | The unique ID (uid) of the model which the file(s) will be linked to (api::restaurant.restaurant). | (optional) defaults to undefined|
| **field** | [**string**] | The field of the entry which the file(s) will be precisely linked to. | (optional) defaults to undefined|


### Return type

**Array<UploadFile>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uploadididPost**
> Array<UploadFile> uploadididPost()

Upload file information

### Example

```typescript
import {
    UploadFileApi,
    Configuration,
    UploadIdIdPostRequestFileInfo
} from './api';

const configuration = new Configuration();
const apiInstance = new UploadFileApi(configuration);

let id: string; //File id (default to undefined)
let fileInfo: UploadIdIdPostRequestFileInfo; // (optional) (default to undefined)
let files: File; // (optional) (default to undefined)

const { status, data } = await apiInstance.uploadididPost(
    id,
    fileInfo,
    files
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | File id | defaults to undefined|
| **fileInfo** | **UploadIdIdPostRequestFileInfo** |  | (optional) defaults to undefined|
| **files** | [**File**] |  | (optional) defaults to undefined|


### Return type

**Array<UploadFile>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

