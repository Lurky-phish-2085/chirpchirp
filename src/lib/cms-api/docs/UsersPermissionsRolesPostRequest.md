# UsersPermissionsRolesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**permissions** | [**{ [key: string]: UsersPermissionsPermissionsTreeValue; }**](UsersPermissionsPermissionsTreeValue.md) |  | [optional] [default to undefined]

## Example

```typescript
import { UsersPermissionsRolesPostRequest } from './api';

const instance: UsersPermissionsRolesPostRequest = {
    name,
    description,
    type,
    permissions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
