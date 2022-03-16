# Random Gradient API

An API that generates random gradient color!


## BASE URL
#### Base URL for all endpoints - [https://random-gradient-api.herokuapp.com/](https://random-gradient-api.herokuapp.com/ "https://random-gradient-api.herokuapp.com/")
```
https://random-gradient-api.herokuapp.com/
```
*The response time will likely be a few seconds long on the first request, because this app is running on a free Heroku dyno. Subsequent requests will behave as normal.*

## EXAMPLE [JS]

```
fetch('https://random-gradient-api.herokuapp.com/direction/tr')  // fetching direction to right
    .then(response => response.json())
    .then(data =>{
    document.body.style.background= data.gradientColor;
    });
```

#### Demo Link : https://jsfiddle.net/x3qkcs7m/15/


## ENDPOINTS


- #### RANDOM
To get a Random Gradient in Random Direction

```
/random
```
- #### ALL GRADIENTS 
To get an Array that contains all the gradients to interate through [ Default Direction = "to Right"]

```
/all
```
- #### ALL TWO COLOR GRADIENTS 
To get an Array that contains all the two color gradients to interate through  [Default Direction = "to Right"]

```
/two
```
- #### ALL THREE COLOR GRADIENTS 
To get an Array that contains all the three color gradients to interate through  [Default Direction = "to Right"]

```
/three
```
- #### SPECIFIC ANGLE
To get a Random Gradient in Specific Angle use "0deg" to "360deg" 

```
/angle/180deg
```

- #### SPECIFIC DIRECTION
To get a Random Gradient in Specific Direction use the below given Shortcodes

```
/direction/tr
```
| Shortcode | Value |
| ------ | ------ |
| tt | "to top"|
| tb | "to bottom"|
| tl | "to left" |
| tr | "to right" |
| tlt | "to left top" |
| trt | "to right top" |
| trb | "to right bottom" |
| tlb | "to left bottom" |

* Use only the above mentioned values.



### ⚠ NOTES
> - These Gradients works better with the background **Individual Elements** than Body{}
> - If you get any artifacts in to Top or to Bottom gradients Try using **to Right** or **to Left** for better Results
> - Try to use White Content on these Gradient Backgrounds as most of the gradients are dark

------------





## GRADIENT SOURCE:
### 🌈 UIGRADIENTS -> [uigradients.com](https://uigradients.com/ "uigradients.com")

### 🛠 Built by [-> _ighosh](https://twitter.com/_ighosh "-> _ighosh")

