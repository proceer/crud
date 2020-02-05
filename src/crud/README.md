## Possible improvements
* Maybe use this TS-style Builder pattern?
  https://github.com/Vincent-Pang/builder-pattern

* Add an authentication adapter

* Add CRUD method selection (only update & view, not delete e.g.)

* Custom Views / Fields

* Show loading indicator or not

* Maybe an export function?

* Maybe bulk edit?

* Use validation from vuetify?
  -> No. Vuetify should not be mandatory

## Important improvements
* In interfaces that provide data, also allow callbacks.
  For example in the additional-info module, all the interfaces should not declare the type but also allow the callback
  ```typescript
  export interface Example {
    apiKey?: string | ((name: string) => string);
  }
  ```
  See an example in the openapi-gen generated class `ConfigurationParameters`
