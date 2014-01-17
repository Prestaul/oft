oft
===

Oft is a simple cron-like library for triggering tasks are regular intervals.


Basic Usage
-----------

Use `oft.atEvery` to execute a function at a regular interval:
```js
var oft = require('oft');

oft.atEvery('5 seconds', function() { /* ... */ });
oft.atEvery('10 sec', function() { /* ... */ });
oft.atEvery('5 minutes', function() { /* ... */ });
oft.atEvery('15 mins', function() { /* ... */ });
oft.atEvery('1 hr', function() { /* ... */ });
oft.atEvery('12 hrs', function() { /* ... */ });
oft.atEvery('1 day', function() { /* ... */ });
oft.atEvery('1 day', function() { /* ... */ });
oft.atEvery('1 wk', function() { /* ... */ });
```

Similar to cron, `oft.atEvery('5 s', func);` does not trigger *in* 5 seconds, it will first trigger in less than 5 seconds and then it triggers at even 5 second intervals.

For example, if set at 12:15:32 it will trigger at 12:15:35, 12:15:40, 12:15:45, 12:15:50, etc.
