# Snackbars
Material Snackbars (Html, CSS and Javascript)

!["Features"](https://lh3.googleusercontent.com/k73zCptWXUkJR028TDfjb3afv8_vHzm_2bRSr2k_kim1z4Y04gzec9SCYkiqWT9VAcF3HM2YX96Us1gR-sXQ6oeqH_cHBk95GcWHGm0_yDQSwc0DXSmjYPOucfLt_mY4pqSZZIrD4hqkmwcbGUpf91_Bpk0mfeOWNTEBVquGkDg93L3ugE1WFNYbS0Oy-PAVtlan-3cjAEzVbHxtT_MavnPwQFjoB85ZDlrGTfzeGKAaVCHDEwC5r4c-NvveQw07W58nD1UBRszpPmw2n8dnrFlKSJWyPAnMl4GMSDCYzywYXspevnS5781T9PPZVb4NVRtkLxmmoKtCvjHOjeSiZrl8YVwHbxPf6ef4V1w0lj52ETm5KcIUbU57Hdt98tet5FobGfOfSjPGp57fUZK4YOTs8U7eVDXMnmN2ClnioqnR23zdOMbPyVzbdUawMe6MEktYB8QXkGoAon6ZL_8PqTopi3bYOZ86ysouihMo15_NiSxttN49YZ6q5cGsvuU0iClfCtFTtSFTNVHg5H7GMPMss4vGKkoEVFvefTRtRU7y8qLieD9LEeKz365v8c0CUvhPjYrG=w1547-h810)

## Show message:
![](https://lh3.googleusercontent.com/4_tyXIlobrIUrEgWkStV681-wHcDH7edY__oXjPSBOO7ouRbytQRaHzQ8HA3uBcv0h61NzWwiBJbX1x-KAttNYivvI6pjdPYySPt2Jith-1gz8bZtW3pGJzgY0hi1U77ujetVklElCdK87ti8wyqxFOuN78rKDOfSnjeWDGDLIM0E35JoH6EtqLss4NfjmGm41nrNV0cYyYMU0Oo8FVn5qaIBcaa_l3alPvNhcO3XWPJnXsG-GuR2jC2mB3wgI2G8CvTo4iC0znLT5jiSBbHTm0jaYPNj3MkdfyfFjgIdT1v_fueQR3TEwHLLb_YX6gvEF9v7EQ_PcYHRypaYVOuWwqx2izjX7G92yrB62HjckvctKYS7ZrtFkR7ScfdXZbwrZwlExq-Ct23WzAFdRYTrqy8iWg_tCPi79GXLDqzTZn5VDMKH75FoZtJXq-HTZjEFPuBBnVn8hDiB0FSi5CPMGIniDCu1zFL79K7lCX3GlQqML2g8Hhxa3J1eI5Y1A4j8Q5nk39yPRk1dcO0JxaqEI5YcF53BmNGLY8Uv8Bvf400L0UKuyYatajxEEgMYtH0jgFLwev5=w1543-h810-k?v=1475242329240)

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
