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