'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var linkifyStr = require('linkify-string');

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

var css_248z = ".link-textarea-container__mirror a:link {\n  color: #0000ee !important;\n}\n\n.link-textarea-container__mirror a:visited {\n  color: #551a8b !important;\n}\n\n.link-textarea-container__mirror a {\n  pointer-events: auto !important;\n  text-decoration: underline;\n}\n";
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
  var getContentAreaSize = function getContentAreaSize(styles) {
    if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current)) {
      throw new Error("Textarea ref is not defined");
    }
    var borderWidths = parsePxToNumber(styles.borderWidth) * 2;
    var _textareaRef$current = textareaRef.current,
      clientWidth = _textareaRef$current.clientWidth,
      clientHeight = _textareaRef$current.clientHeight;
    return {
      width: clientWidth + borderWidths + "px",
      height: clientHeight + borderWidths + "px"
    };
  };
  var resizeObserver = react.useMemo(function () {
    return new ResizeObserver(function () {
      if (!mirroredRef.current || !textareaRef.current) return;
      var _getContentAreaSize = getContentAreaSize(getComputedStyle(textareaRef.current)),
        width = _getContentAreaSize.width,
        height = _getContentAreaSize.height;
      mirroredRef.current.style.width = width;
      mirroredRef.current.style.height = height;
    });
  }, [textareaRef, mirroredRef, getContentAreaSize]);
  var applyStyleToMirroredRef = react.useCallback(function (style) {
    if (!(mirroredRef === null || mirroredRef === void 0 ? void 0 : mirroredRef.current) || !(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current)) return;
    var stylesToCopy = ["border", "boxSizing", "fontFamily", "fontSize", "fontWeight", "letterSpacing", "lineHeight", "padding", "textDecoration", "textIndent", "textTransform", "whiteSpace", "wordSpacing", "wordWrap", "textAlign", "borderRadius"];
    var textareaStyles = getComputedStyle(textareaRef.current);
    stylesToCopy.forEach(function (p) {
      var property = snakeToCamel(p);
      // @ts-ignore
      mirroredRef.current.style[property] = textareaStyles[property];
    });
    mirroredRef.current.style.borderColor = "transparent";
    if (style === null || style === void 0 ? void 0 : style.color) {
      mirroredRef.current.style.color = style.color;
    }
    if (style === null || style === void 0 ? void 0 : style.backgroundColor) {
      mirroredRef.current.style.backgroundColor = style.backgroundColor;
    }
  }, [mirroredRef, textareaRef]);
  var setLinkifyText = function setLinkifyText(linkTarget) {
    if (!(mirroredRef === null || mirroredRef === void 0 ? void 0 : mirroredRef.current) || !textareaRef.current) return;
    mirroredRef.current.innerHTML = linkifyStr(textareaRef.current.value, {
      target: linkTarget
    });
  };
  var copyTextToMirroredRef = function copyTextToMirroredRef() {
    if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current) || !(mirroredRef === null || mirroredRef === void 0 ? void 0 : mirroredRef.current)) return;
    mirroredRef.current.textContent = textareaRef.current.value;
  };
  return {
    resizeObserver: resizeObserver,
    applyStyleToMirroredRef: applyStyleToMirroredRef,
    setLinkifyText: setLinkifyText,
    copyTextToMirroredRef: copyTextToMirroredRef
  };
};

var LinkingTextarea = /*#__PURE__*/react.forwardRef(function (_a, forwardedRef) {
  var _a$containerStyle = _a.containerStyle,
    containerStyle = _a$containerStyle === void 0 ? {} : _a$containerStyle,
    _a$textareaStyle = _a.textareaStyle,
    textareaStyle = _a$textareaStyle === void 0 ? {} : _a$textareaStyle,
    _a$containerClassName = _a.containerClassName,
    containerClassName = _a$containerClassName === void 0 ? "" : _a$containerClassName,
    _a$textareaClassName = _a.textareaClassName,
    textareaClassName = _a$textareaClassName === void 0 ? "" : _a$textareaClassName,
    _a$linkTarget = _a.linkTarget,
    linkTarget = _a$linkTarget === void 0 ? "_blank" : _a$linkTarget,
    _a$fontColor = _a.fontColor,
    fontColor = _a$fontColor === void 0 ? "black" : _a$fontColor,
    _a$caretColor = _a.caretColor,
    caretColor = _a$caretColor === void 0 ? "black" : _a$caretColor,
    rest = __rest(_a, ["containerStyle", "textareaStyle", "containerClassName", "textareaClassName", "linkTarget", "fontColor", "caretColor"]);
  var textareaRef = react.useRef(null);
  var mirroredRef = react.useRef(null);
  var _useMirrorTextarea = useMirrorTextarea(textareaRef, mirroredRef),
    resizeObserver = _useMirrorTextarea.resizeObserver,
    applyStyleToMirroredRef = _useMirrorTextarea.applyStyleToMirroredRef,
    setLinkifyText = _useMirrorTextarea.setLinkifyText,
    copyTextToMirroredRef = _useMirrorTextarea.copyTextToMirroredRef;
  react.useEffect(function () {
    copyTextToMirroredRef();
    applyStyleToMirroredRef(textareaStyle);
  }, [textareaStyle, copyTextToMirroredRef]);
  react.useEffect(function () {
    if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current)) return;
    resizeObserver.observe(textareaRef.current);
    return function () {
      resizeObserver.disconnect();
    };
  }, [textareaRef, resizeObserver]);
  react.useEffect(function () {
    if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current) || !(mirroredRef === null || mirroredRef === void 0 ? void 0 : mirroredRef.current)) return;
    var handleScrollTop = function handleScrollTop() {
      if (!textareaRef.current || !mirroredRef.current) return;
      mirroredRef.current.scrollTop = textareaRef.current.scrollTop;
    };
    var convertToLink = function convertToLink() {
      setLinkifyText(linkTarget);
    };
    textareaRef.current.addEventListener("scroll", handleScrollTop);
    textareaRef.current.addEventListener("input", convertToLink);
    return function () {
      var _a, _b;
      (_a = textareaRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("scroll", handleScrollTop);
      (_b = textareaRef.current) === null || _b === void 0 ? void 0 : _b.removeEventListener("input", convertToLink);
    };
  }, [textareaRef, mirroredRef, linkTarget, setLinkifyText]);
  return jsxRuntime.jsxs("div", {
    className: "link-textarea-container ".concat(containerClassName),
    style: Object.assign(Object.assign({}, containerStyle), {
      position: "relative"
    }),
    children: [jsxRuntime.jsx("textarea", Object.assign({
      ref: function ref(node) {
        textareaRef.current = node;
        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      className: "link-textarea-container__textarea ".concat(textareaClassName),
      style: Object.assign(Object.assign({
        width: "100%",
        height: "100%",
        caretColor: caretColor
      }, textareaStyle), {
        color: "transparent",
        position: "relative"
      })
    }, rest)), jsxRuntime.jsx("div", {
      ref: mirroredRef,
      className: "link-textarea-container__mirror",
      style: {
        color: fontColor,
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        userSelect: "none",
        overflow: "hidden",
        pointerEvents: "none"
      }
    })]
  });
});

module.exports = LinkingTextarea;
//# sourceMappingURL=bundle.js.map
