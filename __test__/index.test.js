const lrc2json = require('../');

let fs = require('fs');
let lrc = fs.readFileSync('./__test__/test.lrc').toString('utf8');

test('Parse LRC format into JSON format', () => {
  let lrcJSON = lrc2json(lrc);
  expect(lrcJSON.ti).toEqual('Title');
  expect(lrcJSON.ar).toEqual('Artist');
  expect(lrcJSON.au).toEqual('Author');
  expect(lrcJSON.al).toEqual('Album');
  expect(lrcJSON.by).toEqual('Creator');
  expect(lrcJSON.length).toEqual('03:00');
  expect(lrcJSON.re).toEqual('Editor');
  expect(lrcJSON.ve).toEqual('Version');
  expect(lrcJSON.lyrics).toEqual([{ time: '00:00.00', text: 'Begin' }, { time: '03:00.00', text: 'End' }]);
});