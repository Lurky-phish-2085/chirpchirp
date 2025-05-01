# Post


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [default to undefined]
**documentId** | **string** |  | [optional] [default to undefined]
**content** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**updatedAt** | **string** |  | [optional] [default to undefined]
**publishedAt** | **string** |  | [optional] [default to undefined]
**createdBy** | [**PostCreatedBy**](PostCreatedBy.md) |  | [optional] [default to undefined]
**updatedBy** | [**PostCreatedByRolesInnerUsersInner**](PostCreatedByRolesInnerUsersInner.md) |  | [optional] [default to undefined]
**locale** | **string** |  | [optional] [default to undefined]
**localizations** | [**Array&lt;PostLocalizationsInner&gt;**](PostLocalizationsInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Post } from './api';

const instance: Post = {
    id,
    documentId,
    content,
    createdAt,
    updatedAt,
    publishedAt,
    createdBy,
    updatedBy,
    locale,
    localizations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
