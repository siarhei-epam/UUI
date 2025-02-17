module.exports = {
    "extends": "stylelint-config-sass-guidelines",
    "rules": {
        "indentation": 4,
        "declaration-empty-line-before": "never",
        "order/properties-alphabetical-order": null,
        "max-nesting-depth": null,
        "selector-list-comma-newline-after": null,
        "no-missing-end-of-source-newline": null,
        "color-named": null,
        "selector-max-compound-selectors": null,
        "shorthand-property-no-redundant-values":null,
        "color-hex-case": null,
        "color-hex-length": null,
        "scss/at-mixin-pattern": null,
        "property-no-vendor-prefix": null,
        "property-no-unknown": [
            true,
            {
                "ignoreProperties": ["composes"]
            }
        ],
        "selector-class-pattern": null,
        "selector-no-vendor-prefix": null,
        "value-no-vendor-prefix": null,
        "scss/at-import-partial-extension-blacklist": null,
        "scss/selector-no-redundant-nesting-selector": null,
        "scss/dollar-variable-pattern": null
    }
}
