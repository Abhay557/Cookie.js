!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).cookie =
        t());
})(this, function () {
  'use strict';
  const e = (function () {
    const e =
        'with|FOREIGN|INDEX|TOP|OUTER|PRIMARY|KEY|GRANT|LIMIT|REFERENCE|IMMEDIATE|DESC|EXISTS|DISTINCT|THEN|ALTER|DROP|TRIGGER|BEFORE|EXCEPTION|declare|begin|end|is|cursor|exit|fetch|when|replace|as|body|PROCEDURE|loop|create|select|update|delete|table|where|set|CONSTRAINT|order|by|BETWEEN|and|or|from|right|left|join|on|inner|group|having|full|NOT|NULL|UNIQUE',
      t = {
        sc: {
          pattern: /^\/\/\s+.*|\s+\/\/\s+.*/g,
          color: 'comment',
          stripHtml: !0,
        },
        mc: {pattern: /(\/\*[\s\S]*?\*\/)/g, color: 'comment', stripHtml: !0},
        hc: {
          pattern: /(^#.*)|[^-'\(]#\s+[^\)'].*/g,
          color: 'comment',
          stripHtml: !0,
        },
        dc: {pattern: /(?:--[^\r\n]*)\n/g, color: 'comment', stripHtml: !0},
        qc: {pattern: /("""|''')[\s\S]*?\1/g, color: 'comment', stripHtml: !0},
        htmlc: {pattern: /(?:<!--.*-->)/g, color: 'comment', stripHtml: !0},
      },
      r = [
        {
          pattern:
            /(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/gm,
          color: 'string',
          stripHtml: !0,
        },
      ];
    return {
      sql: {reserved: e, rules: [...r, t.dc, t.sc, t.mc]},
      plsql: {
        reserved:
          'OVERRIDING|FORM|HIDDEN|OCICOLL|ELSIF|with|FOREIGN|INDEX|TOP|OUTER|PRIMARY|KEY|GRANT|LIMIT|REFERENCE|IMMEDIATE|DESC|EXISTS|DISTINCT|THEN|ALTER|DROP|TRIGGER|BEFORE|EXCEPTION|declare|begin|end|is|cursor|exit|fetch|when|replace|as|body|PROCEDURE|loop|create|select|update|delete|table|where|set|CONSTRAINT|order|by|BETWEEN|and|or|from|right|left|join|on|inner|group|having|full|NOT|NULL|UNIQUE',
        rules: [...r, t.dc],
      },
      python: {
        reserved: 'lambda|def|except|False|True|elif',
        rules: [...r, t.hc, t.qc],
      },
      php: {
        reserved:
          '#?(include|require)(_once)?|abstract|interface|insteadof|yield from|__CLASS__|__DIR__',
        rules: [
          {pattern: /\$\w+/g, color: 'variable'},
          {pattern: /(&lt;\?php|\?&gt;)/g, color: 'comment'},
          ...r,
          t.hc,
          t.sc,
          t.mc,
        ],
      },
      kotlin: {
        reserved: 'override|operator|val|by|dynamic|fun|data|when',
        rules: [...r, t.sc, t.mc],
      },
      javascript: {
        reserved: 'defer|type',
        rules: [
          {
            pattern:
              /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/g,
            color: 'string',
            stripHtml: !0,
            inside: {
              pattern: /(\$\{.*\})/g,
              color: 'fg',
              group: {1: 'variable'},
            },
          },
          ...r,
          t.sc,
          t.mc,
        ],
      },
      clike: {
        reserved:
          '#?(include|define|pragma)|fun|defer|signed|sizeof|volatile|typedef|delegate|interface',
        rules: [
          {
            pattern:
              /\b(uint(8|16|32|64)|char(8|16|32)_t|wchar_t|short)(?=[^\w])/gi,
            color: 'data-type',
          },
          ...r,
          t.sc,
          t.mc,
        ],
      },
      common: {
        reserved:
          '!?is|notvar|enum|export|UNION|GOTO|as|endl|final|struct|range|async|await|let|func|default|use|namespace|static|using|implements|case|import|from|try|catch|finally|throw|const|return|private|protected|new|public|if|else|do|function|while|switch|for|foreach|in|continue|break',
        rules: [
          {
            pattern:
              /\b(float|string|bool(ean)?|double|char|long|integer|int)(?=[^\w])/gi,
            color: 'data-type',
          },
          {
            pattern: /\b(class|package|instanceof|echo|void)(?=\s+\w+)/gi,
            color: 'method',
          },
          {pattern: /\w+(?=\()/g, color: 'method', stripHtml: !0},
          {pattern: /(this)(?=\.\w+)/g, color: 'method', italic: !0},
          {
            pattern:
              /[\*\+\:\-\/\|]?(&lt;|&gt;)?\={1,3}(&lt;|&gt;)?|(?<=\w)(\+\+|\-\-)|(\+\+|\-\-)(?=\w)|(?<=\s+)(&lt;)-|-(&gt;)/g,
            color: 'operator',
          },
          {
            pattern: /\b([0-9]+(?:\.[0-9]+)?|0x[0-9a-f]+)[jf]?\b/g,
            color: 'num',
          },
          {
            pattern: /\b(false|true|undefined|True|False|nil|null)\b/gi,
            color: 'num',
          },
          {
            pattern: /(?<=[\s\(])(\/.*\/[gim\)])(?=[.,\(\n\s])/g,
            color: 'num',
            stripHtml: !0,
          },
        ],
      },
    };
  })();
  return class {
    options = {};
    constructor({language: e, lineNum: t}) {
      (this.options.lineNum = t || !1), this.setLanguage(e);
    }
    setLanguage(e) {
      e && ['java', 'go', 'csharp', 'cpp', 'c'].includes(e)
        ? (this.options.language = 'clike')
        : (this.options.language = e || 'plaintext');
    }
    replaceSpan(e) {
      return e.replace(
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,
        ''
      );
    }
    replaceChar(e) {
      const t = {'&': '&amp;', '<': '&lt;', '>': '&gt;'};
      return e.replace(/[&<>]/g, (e) => t[e]);
    }
    addRegex(t) {
      e.common.rules.unshift(t);
    }
    addKeys(t) {
      e.common.reserved += '|' + t;
    }
    applyRules(t) {
      const r = (e, t) => {
        let r = e.color;
        return (
          e.italic && (r += ' italic'),
          e.bold && (r += ' bold'),
          `<span cookie~§${r}§>${t}</span>`
        );
      };
      t = this.replaceChar(t);
      let n = e.common.reserved,
        o = e[this.options.language].reserved;
      if (o) {
        n += '|' + o;
        const e = new RegExp(
          '\\b(?<![=$;.])(' + n + ')(?!(\\(|\\w+))\\b',
          'gi'
        );
        t = t.replace(e, '<span cookie~§keyword§>$1</span>');
      }
      const s = e.common.rules.concat(e[this.options.language].rules),
        a = (e, t) =>
          t.replace(e.pattern, (...t) => {
            if (e.group) {
              const n = Array.from(t);
              return 'object' == typeof e.group
                ? n
                    .slice(1, Object.keys(e.group).length + 1)
                    .map(
                      (t, n) => (
                        (t = this.replaceSpan(t)),
                        (e.color = e.group[n + 1]),
                        t.replace(t, (t) => r(e, t))
                      )
                    )
                    .join('')
                : n[0].replace(e.pattern, (t) => r(e, t));
            }
          });
      for (let e = 0; e < s.length; e++) {
        const n = s[e];
        t = t.replace(n.pattern, (...e) => {
          const t = Array.from(e);
          let o = t[0],
            s = t[n.group];
          return 'string' === n.color && o.slice(0, 1) !== o.slice(-1)
            ? o
            : (n.stripHtml && (o = this.replaceSpan(o)),
              n.inside && (o = a(n.inside, o)),
              s
                ? ((s = this.replaceSpan(s)),
                  o.replace(new RegExp(s, 'g'), (e) => r(n, e)))
                : r(n, o));
        });
      }
      return t;
    }
    codeToHtml(e) {
      if ('plaintext' === this.options.language)
        return `<code>${e.trim()}</code>`;
      {
        (e = e.replace(/\w+(\\['"])\w+/g, (e, t) => e.replace(t, ' '))),
          (e = (e = (e = this.applyRules(e)).replace(
            /<.* .*(=|§)".*">.*<\/.*>/g,
            (e) => this.replaceSpan(e)
          )).replace(
            /\<span cookie~\§(\w+\-?\w+(\s+\w+)?)\§\>/g,
            (e, t) => '<span class="cookie-' + t.replace(/\s+/g, ' cookie-') + '">'
          ));
        let t = '';
        return (
          this.options.lineNum &&
            ((t = '<span class="d-flex flex-column">'),
            e.split(/\n/g).forEach((e, r) => {
              t += `<span class="cookie-line-num">${r + 1}</span>`;
            }),
            (t += '</span>')),
          `${t}<code>${e.trim()}</code>`
        );
      }
    }
    highlightAll() {
      const e = document.querySelectorAll('pre');
      for (const t of e)
        t.dataset.language &&
          (this.setLanguage(t.dataset.language),
          (t.innerHTML = this.codeToHtml(t.textContent)));
    }
  };
});