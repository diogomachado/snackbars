# Snackbars
Material Snackbars (Html, CSS and Javascript)

Show message:
``` js
snackbar.show("Hello");
```

Hide message:
``` js
snackbar.hide();
```

Message after a certain time:
``` js
snackbar.timer("Hello", 3000);
```

Message with button:
``` js
// Create new button
var button = {};
button.id = "btn_cancel";
button.title = "Cancel";

// Set function callback
snackbar.setCallback(test);

// Call
snackbar.timer("Hello World", 3000, button);
```
