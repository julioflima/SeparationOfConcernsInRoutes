<p align="center">
  <a href="https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6707897156927283200/">
    <img src="https://miro.medium.com/max/875/1*Ut3E2NWKrC69M3Zne3nrOA.jpeg" align="center" weight="400px"  margin="200px"/>
    </a>
</p>

<h1 align="center">Separation of Concerns in Routes, NodeJS</h1>
<p align="left">
Trying to use MVC methodology, b̶u̶t̶ ̶n̶o̶t̶ ̶m̶u̶c̶h̶, let’s talk about each letter in the acronym. Beyond that, I gonna show you my vision why should be more letter in there, even to simplest applications.

See the complete <a href="https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6707897156927283200/">article</a>.

</p>

<p align="left">
  <h2 align="left">
    <a href="https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6707897156927283200/">
      Article
    </a>
  </h2>
</p>

<p align="left">
   <h2 align="left">REST HTTP</h2>

  <h5 align="left">Get all data added in this sensor.</h5>

`GET https://localhost:3000/sensor?name=electromyografy`

> ```http
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

  <h5 align="left">Add a new data in this sensor.</h5>

`POST https://localhost:3000/sensor?name=electromyografy`

> ```http
> Content-Type: application/json
> {
>   "value":1,
>   "date":"17-09-2020 01:32:01:30",
>   "timestamp":1231231434
> }
> ```

  <h5 align="left">Delete a new data in this sensor, indexed by timestamp.</h5>

`DELETE https://localhost:3000/sensor?name=electromyografy`

> ```http
> Content-Type: application/json
> {
>   "timestamp":1231231434
> }
> ```
>
> ```http
> HTTP/1.1 200 OK
> Content-Type: application/json
> Timestamp "1231231434", of sensor "electromyografy"  deleted!
> ```

</p>
