<h1 align="center">Mobile ECG</h1>

<p align="left">
  <a href="https://en.wikipedia.org">
    <img src="https://user-images.githubusercontent.com/17098382/92084131-52061480-ed9d-11ea-9acd-ec209bbed243.png" align="left" height="170" />
    </a>
  <a href="https://http://www.ufc.br/">
    <img src="https://user-images.githubusercontent.com/17098382/92084392-b45f1500-ed9d-11ea-8ec9-09c7f1283b2c.png" align="right" height="170" />
  </a>
</p>



<h2 align="left">Api</h2>

`` GET http://mobileecgufc.web.app/name?year=2020 ``
> ``` http
> HTTP/1.1 200 OK
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
