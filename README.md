# mahotd.github.io

Bare-minimal personal website.

## Local development

From the repository root, run:

```sh
make dev
```

Then open <http://localhost:8000>.

## Resume

`resume.pdf` is built from `resume.tex` with [Tectonic](https://tectonic-typesetting.github.io/).
After a change to the source, run:

```sh
make resume
```

Then commit the new `resume.pdf`.

## Deployment

GitHub Pages is used to serve the root of the `main` branch.
