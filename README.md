[![Structure Textarea Preview for Kirby CMS](header.png)](https://kirby.hananils.de/plugins/structure-textarea-preview)

Structure Textarea Preview is a plugin for [Kirby](https://getkirby.com) offering Markdown [preview for textareas](https://getkirby.com/docs/reference/plugins/extensions/field-previews) in structure fields.

## Examples

Input with Markdown:

![](https://kirby.hananils.test/media/pages/plugins/structure-textarea-preview/21f2616568-1790000604/input.png)Preview:

![](https://kirby.hananils.test/media/pages/plugins/structure-textarea-preview/dff380b26e-1790000604/output.png)## Installation

By default, plugins in Kirby reside in a special folder located at `/site/plugins`. Each plugin is installed in its proprietary subfolder. This installation can be handled in four different ways: you can either install them manually or manage them using Kirby CLI, Git submodules or Composer. You can install Structure Textarea Preview either way and should choose the method suiting your project best.

Please note that all examples given here assume you are using the default plugin root. [If you changed your plugin root](https://getkirby.com/docs/reference/system/roots/plugins), e. g. with a custom folder setup, you’ll also have to adjust the paths given in this guide. For further information on how to manage plugins, please read the [official Kirby plugin introduction](https://getkirby.com/docs/guide/plugins/plugin-basics).

### Download

Download and copy this repository to `/site/plugins/structure-textarea-preview`.

### Kirby CLI

```shell
kirby plugin:install hananils/kirby-structure-textarea-preview
```

### Git submodule

```bash
git submodule add \
    https://github.com/hananils/kirby-structure-textarea-preview.git \
    site/plugins/structure-textarea-preview
```

### Composer

```shell
composer require hananils/kirby-structure-textarea-preview
```

## Documentation

[![Find all documentation at kirby.hananils.de](footer.png)](https://kirby.hananils.de/plugins/structure-textarea-preview)

Where possible, files contain inline annotations. For extended documentation, please visit our dedicated plugin site at [kirby.hananils.de/​plugins/​structure-textarea-preview](https://kirby.hananils.de/plugins/structure-textarea-preview).

### Reference

- [Routes](https://kirby.hananils.de/plugins/structure-textarea-preview/routes)

## License

This plugin is provided freely under the [MIT license](https://kirby.hananils.de/plugins/structure-textarea-preview/license) by [hana+nils · Büro für Gestaltung](https://kirby.hananils.de). We create visual designs for digital and analog media.