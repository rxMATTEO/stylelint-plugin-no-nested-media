# Introduction

This is plugin for `stylelint` avoid you from writing `@media` rules into selectors (class, ids and other). It's allowed you writing `@media` queries only at the top level of your file

For example, this case will throw an error:

```css
.button {
  width: 200px
  
  @media (max-width: 200px) {
    height: 200px;
  }
}
```

This case will not throw any errors

```css
.button {
  width: 200px
}
@media (max-width: 200px) {
  .button {
    height: 200px;
  }
}
```

# How to use

## If stylelint not installed
1. Run `npm install --save-dev stylelint stylelint-config-standard-scss`
2. Create file `.stylelintrc.json` in root of your working directory
3. Add this simple configuration to file you created
```
{
  "plugins": ["stylelint-plugin-no-nested-media"],
  "rules": {
    "rxMATTEO/no-nested-media": true
  }
}
```
4. Enjoy

## If stylelint installed

1. Add plugin `stylelint-plugin-no-nested-media to plugins array`
2. Add property `"rxMATTEO/no-nested-media": true`
