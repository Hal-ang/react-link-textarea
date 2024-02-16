import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useCallback, useMemo, forwardRef, useRef, useEffect } from 'react';
import linkifyStr from 'linkify-string';

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "a:link {\n  color: #0000ee !important;\n}\n\na:visited {\n  color: #551a8b !important;\n}\n\n.container__mirror a {\n  pointer-events: auto !important;\n  text-decoration: underline;\n}\n";
styleInject(css_248z);

var snakeToCamel = function snakeToCamel(string) {
  return string.split('-').map(function (word, index) {
    return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
};
var parsePxToNumber = function parsePxToNumber(value) {
  return value.endsWith('px') ? parseInt(value.slice(0, -2), 10) : 0;
};

var useMirrorTextarea = function useMirrorTextarea(textareaRef, mirroredRef) {
  var getValidContentWidth = useCallback(function (styles) {
    if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current)) {
      throw new Error('Textarea ref is not defined');
    }
    var padding = parsePxToNumber(styles.padding);
    var paddingLeft = parsePxToNumber(styles.paddingLeft);
    var paddingRight = parsePxToNumber(styles.paddingRight);
    return textareaRef.current.clientWidth - (padding ? padding * 2 : paddingLeft + paddingRight) + 'px';
  }, [textareaRef]);
  var getValidContentHeight = useCallback(function (styles) {
    if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current)) {
      throw new Error('Textarea ref is not defined');
    }
    var padding = parsePxToNumber(styles.padding);
    var paddingTop = parsePxToNumber(styles.paddingTop);
    var paddingBottom = parsePxToNumber(styles.paddingBottom);
    return textareaRef.current.clientHeight - (padding ? padding * 2 : paddingTop + paddingBottom) + 'px';
  }, [textareaRef]);
  var resizeObserver = useMemo(function () {
    return new ResizeObserver(function () {
      if (!mirroredRef.current || !textareaRef.current) return;
      var textareaStyles = getComputedStyle(textareaRef.current);
      mirroredRef.current.style.width = getValidContentWidth(textareaStyles);
      mirroredRef.current.style.height = getValidContentHeight(textareaStyles);
    });
  }, [textareaRef, mirroredRef, getValidContentWidth, getValidContentHeight]);
  var overwriteStyleToMirroredRef = useCallback(function (style) {
    if (!mirroredRef.current || !textareaRef.current) return;
    var textareaStyles = getComputedStyle(textareaRef.current);
    ['border', 'boxSizing', 'fontFamily', 'fontSize', 'fontWeight', 'letterSpacing', 'lineHeight', 'padding', 'textDecoration', 'textIndent', 'textTransform', 'whiteSpace', 'wordSpacing', 'wordWrap', 'textAlign'].forEach(function (p) {
      if (!mirroredRef.current) return;
      var property = snakeToCamel(p);
      // @ts-ignore
      mirroredRef.current.style[property] = textareaStyles[property];
    });
    mirroredRef.current.style.borderColor = 'transparent';
    if (style === null || style === void 0 ? void 0 : style.color) {
      mirroredRef.current.style.color = style.color;
    }
    if (style === null || style === void 0 ? void 0 : style.backgroundColor) {
      mirroredRef.current.style.backgroundColor = style.backgroundColor;
    }
  }, [mirroredRef, textareaRef]);
  var setLinkifyStr = useCallback(function (linkTarget) {
    if (!(mirroredRef === null || mirroredRef === void 0 ? void 0 : mirroredRef.current) || !textareaRef.current) return;
    mirroredRef.current.innerHTML = linkifyStr(textareaRef.current.value, {
      target: linkTarget || '_blank'
    });
  }, [linkifyStr, mirroredRef]);
  var overwireTextToMirroredRef = useCallback(function () {
    if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current) || !(mirroredRef === null || mirroredRef === void 0 ? void 0 : mirroredRef.current)) return;
    mirroredRef.current.textContent = textareaRef.current.value;
  }, [textareaRef, mirroredRef]);
  return {
    resizeObserver: resizeObserver,
    overwriteStyleToMirroredRef: overwriteStyleToMirroredRef,
    setLinkifyStr: setLinkifyStr,
    overwireTextToMirroredRef: overwireTextToMirroredRef
  };
};

var LinkingTextarea = /*#__PURE__*/forwardRef(function (_a, forwardedRef) {
  var style = _a.style,
    linkTarget = _a.linkTarget,
    _a$fontColor = _a.fontColor,
    fontColor = _a$fontColor === void 0 ? 'black' : _a$fontColor,
    _a$caretColor = _a.caretColor,
    caretColor = _a$caretColor === void 0 ? 'black' : _a$caretColor,
    rest = __rest(_a, ["style", "linkTarget", "fontColor", "caretColor"]);
  var textareaRef = useRef(null);
  var mirroredRef = useRef(null);
  var _useTextarea = useMirrorTextarea(textareaRef, mirroredRef),
    resizeObserver = _useTextarea.resizeObserver,
    overwriteStyleToMirroredRef = _useTextarea.overwriteStyleToMirroredRef,
    setLinkifyStr = _useTextarea.setLinkifyStr,
    overwireTextToMirroredRef = _useTextarea.overwireTextToMirroredRef;
  useEffect(function () {
    overwireTextToMirroredRef();
    overwriteStyleToMirroredRef(style);
  }, [overwireTextToMirroredRef, overwriteStyleToMirroredRef, style]);
  useEffect(function () {
    if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current)) return;
    resizeObserver.observe(textareaRef.current);
    return function () {
      resizeObserver.disconnect();
    };
  }, [textareaRef, resizeObserver]);
  useEffect(function () {
    if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current) || !(mirroredRef === null || mirroredRef === void 0 ? void 0 : mirroredRef.current)) return;
    var handleScrollTop = function handleScrollTop() {
      if (!textareaRef.current || !mirroredRef.current) return;
      mirroredRef.current.scrollTop = textareaRef.current.scrollTop;
    };
    textareaRef.current.addEventListener('scroll', handleScrollTop);
    var convertToLink = function convertToLink() {
      setLinkifyStr(linkTarget);
    };
    textareaRef.current.addEventListener('input', convertToLink);
    convertToLink();
    return function () {
      var _a, _b;
      (_a = textareaRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('scroll', handleScrollTop);
      (_b = textareaRef.current) === null || _b === void 0 ? void 0 : _b.removeEventListener('input', convertToLink);
    };
  }, [textareaRef, mirroredRef, linkTarget, setLinkifyStr]);
  return jsx(Fragment, {
    children: jsxs("div", {
      className: "container",
      style: {
        position: 'relative'
      },
      children: [jsx("textarea", Object.assign({
        ref: function ref(node) {
          textareaRef.current = node;
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        },
        className: "container__textarea ".concat(rest.className),
        style: Object.assign(Object.assign({
          caretColor: caretColor
        }, style), {
          color: 'transparent',
          position: 'relative'
        })
      }, rest)), jsx("div", {
        className: "container__mirror",
        ref: mirroredRef,
        style: {
          color: fontColor,
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          userSelect: 'none',
          overflow: 'hidden',
          pointerEvents: 'none'
        }
      })]
    })
  });
});

export { LinkingTextarea as default };
//# sourceMappingURL=bundle.js.map
