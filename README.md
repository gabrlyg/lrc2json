# lrc2json

[![npm version](https://badge.fury.io/js/lrc2json.svg)](https://badge.fury.io/js/lrc2json)

A simple module that parses LRC format to JSON object.

## Install

### Using npm
```shell
npm install --save lrc2json
```

## Usage

```javascript
const lrc2json = require('lrc2json');
let lrcJSON = lrc2json(lrcString);
```
### Sample Input
```
[ti: Title]
[ar: Artist]
[au: Author]
[al: Album]
[by: Creator]
[length: 03:00]
[re: Editor]
[ve: Version]

[00:00.00]Begin
[03:00.00]End
```
### Sample Output
```JSON
{
  "ti": "Title",
  "ar": "Artist",
  "au": "Author",
  "al": "Album",
  "by": "Creator",
  "length": "03:00",
  "re": "Editor",
  "ve": "Version",
  "lyrics": [
    {
      "time": "00:00.00",
      "text": "Begin"
    },
    {
      "time": "03:00.00",
      "text": "End"
    }
  ]
}
```