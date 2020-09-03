<h1 align="center">Mobile ECG</h1>

<h1 align="left">Api</h2>
```
### Host: Cloud
GET http://mobileecgufc.web.app/name?year=2020
###
POST  http://mobileecgufc.web.app/sensor?name=electromyografy
Content-Type: application/json

{
  "value":1,
  "date":"17-09-2020 01:32:01:30",
  "timestamp":1231231434
}
###
DELETE http://mobileecgufc.web.app/name=electromyografy&timestamp=1231231434

```
