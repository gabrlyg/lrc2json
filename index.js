const EOL = typeof window === 'undefined' ? require('os').EOL : '\n';

/**
 * 
 * @param data
 * @example '[ar: Linkin Park]\n[04:31.02]I bleed it out\n'
 * @returns result
 * 
 */
function lrc2json(data) {
  const lines = data.split(EOL);

  const tags = [];
  const lyrics = [];
  const result = {};

  const tagRegExp = /\[([a-z]+)\:(.*)\]/; // e.g. [ar: Linkin Park]
  const lyricsRegExp = /\[([0-9]{2}\:[0-9]{2}\.[0-9]{2})\](.*)/; // e.g. [04:31.02]I bleed it out

  for (let i = 0; i < lines.length; i++) {
    if (tagRegExp.test(lines[i])) {
      tags.push(lines[i]);
    } else {
      break;
    }
  }
  lines.splice(0, tags.length);

  for (let i = 0; i < tags.length; i++) {
    const matches = tagRegExp.exec(tags[i]);
    if (matches) {
      const [, key, value] = matches;
      result[key] = value.trim();
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const matches = lyricsRegExp.exec(lines[i]);
    if (matches) {
      const [, time, text] = matches;
      lyrics.push({
        time: time,
        text: text,
      });
    }
  }

  result['lyrics'] = lyrics;

  return result;
}

module.exports = lrc2json;
