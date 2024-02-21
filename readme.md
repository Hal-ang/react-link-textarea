<h1 align="center">react-link-textarea</h1>
  
<p align="center">
<img src="https://github.com/Hal-ang/react-link-textarea/assets/68503014/c1a279f1-bb73-425d-a50e-718325c16657" />

<p align="center">
<img alt="Launched?" src="https://img.shields.io/badge/typescript-yes-green.svg" />
<img alt="react-^18.2.0" src="https://img.shields.io/badge/react-^18.2.0-3f72af" />
</p>

<p align="center">
<img alt="Version" src="https://img.shields.io/badge/version-v1.1.0-blue.svg?cacheSeconds=2592000" />

<br>
<p align="center">Helper component for a `textarea` tag that allows `a` tag link connection and interaction</p>

<br>

## What is it?

We all aim for a high UX.

Due to the structural limitation of the existing textarea tag, which only handles text values, it is difficult to develop to meet various requirements.

It makes the textarea tag work as if it supports the a tag.

You can use the existing **textarea attributes**, and **CSS control** such as `resize` is also possible.

<br>

## Installation

```
npm install react-textarea-link
```

## Usage

### First step

```JSX
...
import LinkingTextarea from 'react-link-textarea'; // needs importing

const Component = () => {
  ...
}
```

<br>

### Basic usage

<img src="https://github.com/codestates/soundWave_Server/assets/68503014/4739a9fc-e97e-4bbf-a0da-702509f7a33a"/>

<br>

```JSX
const Section = () => {
  return (
    <>
      <div>
        <LinkingTextarea/>
      </div>
    </>
  );
};

export default Section;
```

<br>

### With TailwindCSS

🔥 The className prop of JSX component is not provided.
Use `containerClassName` and `textareaClassName`.

```JSX
const Section = () => {
  return (
    <>
      <div className="w-full px-30 min-h-150">
        <LinkingTextarea
          containerClassName="w-full h-full"
          textareaClassName="pl-10 pr-10 rounded-md pt-10"
          fontColor="#5C5C5C"
          caretColor="#FEFEFE"
        />
      </div>
    </>
  );
};
```

<br>

### With inline style

```JSX
const Section = () => {
  return (
    <>
      <div
        style={{
          width: '100%',
          paddingLeft: 30,
          paddingRight: 30,
          minHeight: 150,
        }}>
        <LinkingTextarea
          containerStyle={{width: '100%', height: '100%'}}
          textareaStyle={{padding: 10, borderRadius: 12, resize: 'none'}}
          linkTarget="_self"
        />
      </div>
    </>
  );
};
```

<br>

---

## Props API

```
ref                             --> HTMLTextAreaElement Ref is here, You can handle the textarea value and interaction.


containerStyle?: CSSProperties; --> Inline style to be passed to the part surrounding the textarea


textareaStyle?: CSSProperties;  --> Inline style to be passed to textarea (Textarea control CSS such as resize property can be used)


containerClassName?: string;    --> className to pass to container


textareaClassName?: string;     --> className to pass to textarea


linkTarget?: '_blank' | '_self' | '_parent' | '_top' | string  --> pass to a tag target attribute, default '_blank'.
// (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target)


fontColor?: CSSProperties['color'];        --> 🚨 Required when changing font color, default 'black' (CSS color property is used as is)
caretColor?: CSSProperties['caretColor'];  --> 🚨 Required when changing caret color, default 'black' (CSS color property is used as is)


// textarea attributes can be used on props

readOnly
autoComplete
...

(https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes)
--> 🚨 Among the basic JSX textarea properties, only `style` and `className` are not accepted.

```

## Example

Handling is possible through ref in the same way as previously using textarea.

```JSX
const Section = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onClickSubmit = () => {
    if (textareaRef.current) {
      console.log(textareaRef.current.value);
    }
  };

  useEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.focus();
  }, []);

  return (
    <>
      <p>Textarea</p>
      <div>
        <LinkingTextarea ref={textareaRef} />
        <button onClick={onClickSubmit}></button>
      </div>
    </>
  );
};
```
