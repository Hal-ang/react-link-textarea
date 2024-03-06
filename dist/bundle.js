'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var linkifyStr = require('linkify-string');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

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

const snakeToCamel = (string)=>string.split('-').map((word, index)=>index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
const parsePxToNumber = (value)=>value.endsWith('px') ? parseInt(value.slice(0, -2), 10) : 0;

const useMirrorTextarea = (textareaRef, mirroredRef)=>{
    const getContentAreaSize = (styles)=>{
        if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current)) {
            throw new Error("Textarea ref is not defined");
        }
        const xPadding = parsePxToNumber(styles.paddingLeft) + parsePxToNumber(styles.paddingRight);
        const yPadding = parsePxToNumber(styles.paddingTop) + parsePxToNumber(styles.paddingBottom);
        const { clientWidth, clientHeight } = textareaRef.current;
        return {
            width: clientWidth - xPadding + "px",
            height: clientHeight - yPadding + "px"
        };
    };
    const resizeObserver = react.useMemo(()=>new ResizeObserver(()=>{
            if (!mirroredRef.current || !textareaRef.current) return;
            const { width, height } = getContentAreaSize(getComputedStyle(textareaRef.current));
            mirroredRef.current.style.width = width;
            mirroredRef.current.style.height = height;
        }), [
        textareaRef,
        mirroredRef,
        getContentAreaSize
    ]);
    const applyStyleToMirroredRef = react.useCallback((style)=>{
        if (!(mirroredRef === null || mirroredRef === void 0 ? void 0 : mirroredRef.current) || !(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current)) return;
        const stylesToCopy = [
            "border",
            "borderLeft",
            "borderRight",
            "borderTop",
            "borderBottom",
            "boxSizing",
            "fontFamily",
            "fontSize",
            "fontWeight",
            "letterSpacing",
            "lineHeight",
            "padding",
            "paddingLeft",
            "paddingRight",
            "paddingTop",
            "margin",
            "marginLeft",
            "marginRight",
            "marginTop",
            "marginBottom",
            "paddingBottom",
            "textDecoration",
            "textIndent",
            "textTransform",
            "whiteSpace",
            "wordSpacing",
            "wordWrap",
            "textAlign",
            "borderRadius"
        ];
        const textareaStyles = getComputedStyle(textareaRef.current);
        stylesToCopy.forEach((p)=>{
            const property = snakeToCamel(p);
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
    }, [
        mirroredRef,
        textareaRef
    ]);
    const setLinkifyText = (linkTarget)=>{
        if (!(mirroredRef === null || mirroredRef === void 0 ? void 0 : mirroredRef.current) || !textareaRef.current) return;
        mirroredRef.current.innerHTML = linkifyStr(textareaRef.current.value, {
            target: linkTarget
        });
    };
    const copyTextToMirroredRef = ()=>{
        if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current) || !(mirroredRef === null || mirroredRef === void 0 ? void 0 : mirroredRef.current)) return;
        mirroredRef.current.textContent = textareaRef.current.value;
    };
    return {
        resizeObserver,
        applyStyleToMirroredRef,
        setLinkifyText,
        copyTextToMirroredRef
    };
};

const LinkingTextarea = react.forwardRef((_a, forwardedRef)=>{
    var { containerStyle = {}, textareaStyle = {}, containerClassName = "", textareaClassName = "", linkTarget = "_blank", fontColor = "black", caretColor = "black" } = _a, rest = __rest(_a, [
        "containerStyle",
        "textareaStyle",
        "containerClassName",
        "textareaClassName",
        "linkTarget",
        "fontColor",
        "caretColor"
    ]);
    const textareaRef = react.useRef(null);
    const mirroredRef = react.useRef(null);
    const { resizeObserver, applyStyleToMirroredRef, setLinkifyText, copyTextToMirroredRef } = useMirrorTextarea(textareaRef, mirroredRef);
    react.useEffect(()=>{
        copyTextToMirroredRef();
        applyStyleToMirroredRef(textareaStyle);
        setLinkifyText(linkTarget);
    }, [
        textareaStyle,
        copyTextToMirroredRef
    ]);
    react.useEffect(()=>{
        if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current)) return;
        resizeObserver.observe(textareaRef.current);
        return ()=>{
            resizeObserver.disconnect();
        };
    }, [
        textareaRef,
        resizeObserver
    ]);
    react.useEffect(()=>{
        if (!(textareaRef === null || textareaRef === void 0 ? void 0 : textareaRef.current) || !(mirroredRef === null || mirroredRef === void 0 ? void 0 : mirroredRef.current)) return;
        const handleScrollTop = ()=>{
            if (!textareaRef.current || !mirroredRef.current) return;
            mirroredRef.current.scrollTop = textareaRef.current.scrollTop;
        };
        const convertToLink = ()=>{
            setLinkifyText(linkTarget);
        };
        textareaRef.current.addEventListener("scroll", handleScrollTop);
        textareaRef.current.addEventListener("input", convertToLink);
        return ()=>{
            var _a, _b;
            (_a = textareaRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("scroll", handleScrollTop);
            (_b = textareaRef.current) === null || _b === void 0 ? void 0 : _b.removeEventListener("input", convertToLink);
        };
    }, [
        textareaRef,
        mirroredRef,
        linkTarget,
        setLinkifyText
    ]);
    return jsxRuntime.jsxs("div", {
        className: `link-textarea-container ${containerClassName}`,
        style: Object.assign(Object.assign({}, containerStyle), {
            position: "relative"
        }),
        children: [
            jsxRuntime.jsx("textarea", Object.assign({
                ref: (node)=>{
                    textareaRef.current = node;
                    if (typeof forwardedRef === "function") {
                        forwardedRef(node);
                    } else if (forwardedRef) {
                        forwardedRef.current = node;
                    }
                },
                className: `link-textarea-container__textarea ${textareaClassName}`,
                style: Object.assign(Object.assign({
                    width: "100%",
                    height: "100%",
                    caretColor
                }, textareaStyle), {
                    color: "transparent",
                    position: "relative"
                })
            }, rest)),
            jsxRuntime.jsx("div", {
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
            })
        ]
    });
});

module.exports = LinkingTextarea;
//# sourceMappingURL=bundle.js.map
