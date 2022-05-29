# json-reader-action

> GitHub Action to read the contents of a json

![build-test](https://github.com/MegaPiggy/json-reader-action/workflows/build/badge.svg)

This is a GitHub Action to read the contents of a json. Give it a path to a json and it provides you with the json's contents, accessible through an output variable.

## Usage

The following example [workflow step](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) will read the contents of the `package.json` file.

```yml
- name: "Read json contents"
  uses: MegaPiggy/json-reader-action@v1.0.0
  with:
    path: "package.json"
```

## Options ⚙️

The following input variables options can/must be configured:

|Input variable|Necessity|Description|Default|
|----|----|----|----|
|`path`|Required|the path of the json to read.||
|`property`|Required|the property of the json to read.||
|`encoding`|Optional|the encoding of the file to read.|`utf8`|

## Outputs
- `contents`: The contents of the file.
- `value`: The property value.

## Example

```yml
name: "Read json contents"

on: [push, pull_request]

jobs:
  file_contents:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v1

      - name: Read json
        id: read_json
        uses: MegaPiggy/json-reader-action@v1.0.0
        with:
          path: "package.json"
          property: "version"

      - name: File contents
        run: echo "${ steps.read_json.outputs.contents }"

      - name: Property value
        run: echo "${ steps.read_json.outputs.value }"
```

## License

Copyright © 2022 [Noah Pilarski](https://github.com/MegaPiggy)

json-reader-action is licensed under the [MIT License](https://github.com/MegaPiggy/json-reader-action/blob/master/LICENSE).
