# Ping Pong
A web page that accepts a number from a user and returns a range of number from 1 to the chosen number with the followign exceptions:

  * Numbers divisible by 3 are replaced with "ping"
  * Numbers divisible by 5 are replaced with "pong"
  * Numbers divisible by 3 are replaced with "ping-pong"

## Specifications
|Behavior - Plain English|Input|Output|
|---|---|---|
|It can count up to provided number.|2|[1,2]|
|It can count up to provided number, replacing three with ping|6|[1,2,"ping"]|
|It can count up to provided number, replacing five with pong|5|[1,2,"ping",4,"pong"]|
|It can count up to provided number, replacing 15 with "ping-pong"|15|[1,2,"ping",4,"pong",6,7,8,9,10,11,12,13,14,"ping-pong"]|
|It can count up to provided number, replacing MULTIPLES of three with ping, except when multiple of 15|15|[1,2,"ping",4,"pong","ping",7,8,"ping",10,11,"ping",13,14,"ping-pong"]|
|It can count up to provided number, replacing MULTIPLES of five with pong, except when multiple of 15|15|[1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"ping-pong"]|

## What's included
Within the repository you'll find the following directories and files:

```
pig_latin/
├── css/
│    ├── bootstrap.css
│    └── styles.css
├── js/
│    ├── jquery-3.2.1.js
│    └── script.js
├── index.html
└── README.md
```


## Technologies Used
* JavaScript
* jQuery
* Bootstrap

### License
Copyright 2017 Michael Dunlap

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
