# inaturalistjs
[![Build Status](https://travis-ci.org/inaturalist/inaturalistjs.svg?branch=master)](https://travis-ci.org/inaturalist/inaturalistjs)
[![Coverage Status](https://coveralls.io/repos/github/inaturalist/inaturalistjs/badge.svg?branch=master)](https://coveralls.io/github/inaturalist/inaturalistjs?branch=master)

JavaScript package for iNaturalist.org. Supports CRUD for iNat data. This
is an isomorphic library that can be used in the browser and within
node.js code. Each method returns a JavaScript Promise.

#### Simple Example
```js
import inatjs from "inaturalistjs";
inatjs.observations.search({ taxon_id: 4 }).then( rsp => { });
```

#### Creating Records

Create and update methods accept a JSON object with the new instance properties
nested under the instance class name.

```js
var params = {
  comment: {
    body: "... comment body ...",
    parent_type: "Observation",
    parent_id: 12345,
    user_id: 67890
  }
};
inatjs.comments.create( params ).then( c => { } );
```

#### Updating Records

Updates also need the ID of the record being updated.

```js
var params = {
  id: 1,
  comment: { ... }
};
inatjs.comments.update( params ).then( c => { } );
```

#### Deleting Records

Deletes only need the ID.

```js
inatjs.comments.delete({ id: 1 }).then( () => { } );
```

#### Errors

Any non-200 response code is considered an error, and the promise will fail. Be
sure to catch these errors:

```js
inatjs.comments.delete({ id: 0 }).then( () => { }).catch( e => {
  console.log( "Delete failed:", e );
});
```

#### Uploads

Some methods need to upload files, and they use FormData (which is already defined in a browser context, otherwise uses the [FormData package](https://www.npmjs.com/package/form-data)) for creating `multiplart/form-data` requests. There are various ways to upload files, for example setting the value of a parameter to a Blob, or a file read stream. ReactNative expands [FormData](https://github.com/facebook/react-native/blob/master/Libraries/Network/FormData.js) to also accept uploads as an object with a uri, name, and type.

When given objects or arrays as parameter values, inatjs upload requests will flatten the parameters into a format expected by FormData:

```js
{ attr: { nestedValue: [1] } } =>
["attr[nestedValue][0]"] = 1
```

In order to get the ReactNative uri approach to work, the file object that contains the URI must be wrapped in some class other than a basic JS Object. This will prevent it from being flattened, and ensure it is passed on to ReactNative's FormData extension as an object. You can use inatjs.FileUpload for this:

```js
import inatjs, { FileUpload } from "inaturalistjs";
const params = {
  image: new FileUpload({
    uri: ...,
    name: ...,
    type: ...
  })
};
inatjs.uploadMethod( params ).then( () => { } );
```

#### API Token

In order to use methods requiring authentication, you'll need an OAuth token and a JSON Web Token (JWT):

1. [Create an iNaturalist application](https://www.inaturalist.org/oauth/applications/new)
1. Retrieve an Oauth access token using one of the two methods described at https://www.inaturalist.org/pages/api+reference#auth
1. Use the Oauth token to retrieve a JSON Web Token, e.g
  ```bash
  curl -H "Authorization: Bearer YOUR_OAUTH_ACCESS_TOKEN" https://www.inaturalist.org/users/api_token
  ```
If running in the browser,
iNaturalistJS will look for the JWT in an `inaturalist-api-token` meta tag and use that for
authenticating requests:

```html
<meta name="inaturalist-api-token" content="... api token ...">
```

Alternatively, the token can be passed as an option:

```js
var options = { api_token: "... iNaturalist API token ..." };
inatjs.comments.create( params, options ).then( c => { } );
```

#### CSRF Token (intrasite only)

If you happen to be running the iNaturalist Rails codebase, CSRF tokens can
be used for authenticating requests made from the browser. If a CSRF token is
available, all requests will be made to the same origin from which the call
was made. iNaturalistJS will look for the following meta tags:

```html
<meta name="csrf-param" content="... param ...">
<meta name="csrf-token" content="... token ...">
```

Alternatively, the token can be passed as a parameter (use the actual
name of the paramater and not csrf_param).

```js
var params = {
  csrf_param: "... csrf token ..."
  comment: { ... }
};
inatjs.comments.create( params ).then( c => { } );
```

#### Configuring API Host

It might be necessary to change the API host to which this library sends queries
(for example if you're a developer). Do not include the protocol in the host
(for example set API_HOST=api.example.com). These values can be set in the
browser with meta tags:

```html
<meta name="config:inaturalist_api_host" content="... host ...">
<meta name="config:inaturalist_write_api_host" content="... host ...">
```

This can be done on the node.js end with environment variables:

```bash
API_HOST=a WRITE_API_HOST=b node app.js
```

And finally, in any environment there is a setConfig method for setting these
values:

```js
import inatjs from "inaturalistjs";
inatjs.setConfig({ apiHost: "...", writeApiHost: "..." });
```

#### Available Methods

##### Public

```js
inatjs.observations.fetch( params, opts ).then( rsp => { ... } );
inatjs.observations.search( params, opts ).then( rsp => { ... } );
inatjs.observations.identifiers( params, opts ).then( rsp => { ... } );
inatjs.observations.observers( params, opts ).then( rsp => { ... } );
inatjs.observations.speciesCounts( params, opts ).then( rsp => { ... } );

inatjs.places.fetch( params, opts ).then( rsp => { ... } );

inatjs.taxa.fetch( params, opts ).then( rsp => { ... } );
inatjs.taxa.autocomplete( params, opts ).then( rsp => { ... } );
```

##### Authenticated

```js
inatjs.comments.create( params, opts ).then( c => { ... } );
inatjs.comments.update( params, opts ).then( c => { ... } );
inatjs.comments.delete( params, opts ).then( () => { ... } );

inatjs.identifications.create( params, opts ).then( i => { ... } );
inatjs.identifications.update( params, opts ).then( i => { ... } );
inatjs.identifications.delete( params, opts ).then( () => { ... } );

inatjs.observations.create( params, opts ).then( o => { ... } );
inatjs.observations.update( params, opts ).then( o => { ... } );
inatjs.observations.delete( params, opts ).then( () => { ... } );
inatjs.observations.fave( params, opts ).then( o => { ... } );
inatjs.observations.unfave( params, opts ).then( o => { ... } );
inatjs.observations.review( params, opts ).then( () => { ... } );
inatjs.observations.unreview( params, opts ).then( () => { ... } );
inatjs.observations.setQualityMetric( params, opts ).then( () => { ... } );
inatjs.observations.deleteQualityMetric( params, opts ).then( () => { ... } );

inatjs.observationFieldValues.create( params, opts ).then( v => { ... } );
inatjs.observationFieldValues.update( params, opts ).then( v => { ... } );
inatjs.observationFieldValues.delete( params, opts ).then( () => { ... } );

inatjs.projects.join( params, opts ).then( () => { ... } );
inatjs.projects.leave( params, opts ).then( () => { ... } );
```
