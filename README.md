# Snackbars
Material Vanilla Snackbars _(Html, CSS and Javascript)_

## Show message:
``` js
snackbar.show("Hello");
```

## Hide message:
``` js
snackbar.hide();
```

## Message after a certain time:
``` js
snackbar.timer("Hello", 3000);
```

## Message with button:

``` js

// Function example callback
function test(){
  console.info("Cancel button touch!");
}

// Create new button
var button = {};
button.id = "btn_cancel";
button.title = "Cancel";

// Set function callback
snackbar.setCallback(test);

// Call
snackbar.timer("Hello World", 3000, button);
```

### Observations:
  - If your project already uses _reset.css_, remove the file
