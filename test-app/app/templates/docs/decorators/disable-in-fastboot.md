# Disable in fastboot

Disables a function when running in fastboot mode.

```ts
    @action
    @disableInFastboot
    setBackgroundColor() {
        window.alert('hello');
    }
```