<h1 align="center">Mobile ECG</h1>

<h2 align="left">Api</h2>

`` GET http://mobileecgufc.web.app/name?year=2020 ``
> ``` http
> HTTP/1.1 200 OK
> ```

> ``` http
> Content-Type: application/json 
> [
>   {
>     "value": 1,
>     "date": "1970/01/15 06:00:31.434000000",
>     "timestamp": 1231231434
>   },
>   {
>   "value": 2,
>   "timestamp": 1231231435,
>   "date": "1970/01/15 06:00:31.435000000"
>   },
> ]
> ```

`` POST  http://mobileecgufc.web.app/sensor?name=electromyografy ``
> ``` http
> Content-Type: application/json 
> {
>   "value":1,
>   "date":"17-09-2020 01:32:01:30",
>   "timestamp":1231231434
> }
> ```

`` DELETE http://mobileecgufc.web.app/name=electromyografy&timestamp=1231231434 ``
> ``` http
> Content-Type: application/json 
> {
>   "timestamp":1231231434
> }
> ```
