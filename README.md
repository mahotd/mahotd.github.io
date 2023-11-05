# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Stats

![Alt](https://repobeats.axiom.co/api/embed/4cf7cd62340857763a683968c5717d456520e238.svg "Repobeats analytics image")

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### TODO

- [ ] Add a search bar ?
- [ ] Use `fontaine` to reduce Cumulative Layout Shift (https://blog.logrocket.com/docusaurus-using-fontaine-reduce-cumulative-layout-shift/)
