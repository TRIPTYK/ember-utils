# @triptyk/ember-utils

Various utilities/helpers/service for ember in TRIPTYK projects.

## Helpers

### Truncate
Helpers that sanitize and truncate a text.

```hbs
{{truncate this.text this.sizeWords}}
```

### Includes
Helpers that check if a value is in array.

```hbs
{{includes this.array this.value}}
```

### Translate country
Helpers that translate a string or an array of code countries (i.e BE will be 'Belgique') in french by default (we can pass a second parameter with the language)

```hbs
{{translate-country this.arrayOfCode}}
{{translate-country this.code}}

{{translate-country this.code "en"}}
```

### Is Even
Really need explanation ??

```hbs
{{is-even this.number}}
```

### html-safe
Helpers that check if html doesn't contain any code or characters that could break HTML of the page.

```hbs
{{html-safe this.html}}
```


## Services

### Download file
Service that download file from browser. This service uses the package [https://github.com/AleeeKoi/js-file-downloader](js-file-downloader)

```ts
import type DownloadFileService from '@triptyk/ember-utils/services/download-file';

@service downloadFile: DownloadFileService;

this.downloadFile.downloadFile(
  { path: 'http://localhost:8080/api/v1/images/download/triptykpapa', filename: 'TriptykRangers.png' },
  {...optionsFromDoc}
)
```

### Extended store
Service that adds methods to manage the store

```ts
import type ExtendedStoreService from '@triptyk/ember-utils/services/extended-store';

@service extendedStore: ExtendedStoreService;

this.extendedStore.peekOrCreate('user', 1); // Will get user with id 1
this.extendedStore.peekOrCreate('user'); // Will create a new user

this.extendedStore.peekOrFail('user', 1); // Will get user with id 1. If user not exist, so return a new Error
```

### Fetch
Service that create a fetch request with adapters config from ember

```ts
import type FetchService from '@triptyk/ember-utils/services/fetch';

@service fetch: FetchService;

this.fetch.request('not-found', {...optionsForFetch});
```

### Current changeset
Service that check if the current changeset is dirty and abord transition to other route if dirty.

```ts
import type CurrentChangesetService from '@triptyk/ember-utils/services/current-changeset';

@service currentChangeset: CurrentChangesetService;

// We just need to set our current changeset on the service
this.currentChangeset.changeset = changeset;
```

## Utils

### Window history back
Util that check if we're not in mode test and window is available

```ts
import windowHistoryBack from '@triptyk/ember-utils/utils/window-history-back';

windowHistoryBack();
```

### Generic diff
Util that return which elements are deleted or created

```ts
import genericDiff from '@triptyk/ember-utils/utils/generic-diff';

genericDiff(users, newUsers);
```