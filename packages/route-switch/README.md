route-switch
==============================================================================

Mark a route as protected and handle if user can leave route under certain conditions

Ex : Prompting if you want to save your changes before leaving a route


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install @triptyk/ember-route-switch
```


Usage
------------------------------------------------------------------------------

Use the 

```ts
import Route from '@ember/routing/route';
import { RouteSwitchProtected } from '@triptyk/ember-route-switch/decorators/route-switch-protection';

@RouteSwitchProtected
export default class Articles extends Route {}
```


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
