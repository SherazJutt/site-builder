### Icons

###### The project has the following icon collections installed:

- **[`Quill`](https://icones.js.org/collection/quill)**
- **[`Heroicons`](https://icones.js.org/collection/heroicons)**

---

### Page Rendering

To render the page, we loop over the page JSON to render the components in `pages -> index.vue`.

---

### Component

###### The component has the following properties:

#### Meta

###### An object with a single property, `tag`, which specifies the HTML element that should be used to render the component. The `name` property is used to show the component to render on page.

#### Content

###### Add custom properties in the content object and reference them in the customizer ref object. The `key` is the main key of the object from where the value should be extracted and the `value` is the name of the property .

#### Styles

###### we are using TailwindCSS classes to style the components.

```
Available options -> [size, weight, style]

- size -> [text-base, text-xl, text-3xl, ...]
- weight -> [font-thin, font-extralight, font-light]
- style -> [font-style-none, font-style-italic, font-style-oblique]
```

#### Customizer

An array of objects that specify the customizations that can be made to the component. Each object in the array should have the following properties:

- ##### Category

    ```
    The category of the customization.

    Available options -> [content, customizations]
    ```

- ##### component

    ```
    A string that specifies the type of component that should be used to render the customization.

    Available options -> [input, select].
    ```

- ##### type

    ```
     A string that specifies the type of the customization.

    Available options -> [text, heading, size, weight, style].
    ```

- ##### label
    ```
     A string that specifies the label for the customization.
    ```
- ##### default (optional)

    ```
    A value that specifies the default value for the customization when we reset the value.

    provide default value or default: ''
    ```

- ##### ref

    ```
    An object with two properties: `key` and `value`.

    - key -> The `key` is the main key of the object from where the value should be extracted.
    - value -> is the name of the property.
    ```

> Example of heading component

```javascript
{
	// this will add heading
	"meta": { "tag": "h", "level": 1, "name": "heading" },
	// content of the component
	"content": { "text": "Enter heading text" },
	// styles of the component
	"styles": { "size": "text-2xl", "weight": "font-semibold", "style": "font-style-none" },
	// customizations
	"customizer": [
		// this will add text input
		{ "category": "content", "component": "input", "type": "text", "label": "Text", "ref": { "key": "content", "value": "text" } },
		// this will add heading select
		{ "category": "customizations", "component": "select", "type": "heading", "label": "Level", "default": 1, "ref": { "key": "meta", "value": "level" } },
		// this will add size select
		{ "category": "customizations", "component": "select", "type": "size", "label": "Size", "ref": { "key": "styles", "value": "size" } },
		// this will add weight select
		{ "category": "customizations", "component": "select", "type": "weight", "label": "Weight", "ref": { "key": "styles", "value": "weight" } },
		// this will add style select
		{ "category": "customizations", "component": "select", "type": "style", "label": "Style", "ref": { "key": "styles", "value": "style" } }
	]
}
```
