<p align="center">
	<a href="https://latamlink.io">
		<img src="https://github.com/LatamLink/es.latamlink.io/blob/master/static/images/latamlink_logo-h-full-color-overwhite.png?raw=true" width=50% >
	</a>
</p>

<p align="center">
	<a href="https://git.io/col">
		<img src="https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg" alt="Collaborative Etiquette">
	</a>
	<a href="#">
		<img src="https://img.shields.io/dub/l/vibe-d.svg" alt="MIT">
	</a>
</p>

## Description 
Technical documentation for the LatamLink testnet [latamlink.io](https://latamlink.io)

This website is created using [https://docusaurus.io/](Docusaurus), a tool for maintaining technical documentation of open source projects.

## Contributions

We use a Kanban style board to prioritize work. [Go to the project board](https://github.com/LatamLink/projects/1).

The main communication channels are [github issues](https://github.com/LatamLink/latamlink.io/issues) and the [Telegram channel](https://t.me/latamlink). Feel free to send any questions you may have.

Contributing Guidelines: [https://developers.eoscostarica.io/docs/open-source-guidelines](https://developers.eoscostarica.io/docs/open-source-guidelines).

Report any bugs big or small [by opening an issue](https://github.com/LatamLink/latamlink.io/issues).

### Edit Content
Documentation is generated from markdown format files located within the `/docs` sub-folder. See more information [here](https://github.com/LatamLink/latamlink.io/tree/master/website).

## Quick guide

### File structure

```sh
latamlink.io
├── .github
│ ├── workflows
│ | ├── nodejs.yml
│ └─└── services
├── docs
├── src
│ ├── css
│ | ├── custom.css
│ | └── homepage.css
│ └── pages
│ 	├── styles.module.css
│   └── index.js
├── static
│ ├── img
│ ├── imgages
│ ├── scripts
│ ├── js
│ ├── other
│ ├── favicon.ico
│ └── CNAME
├── .gitignore
├── babel.config
├── docusaurus.config.js
├── sidebars.js
├── package.json
├── yarn.lock
└── README.md
```

### Resumen de la estructura del proyecto

- `/docs/` - Contains the Markdown files for the documents. Customize the order of the document sidebar in  `sidebars.js`. More details can be found in the [ document guide](https://v2.docusaurus.io/docs/markdown-features).
- `/src/` - Non-documentation files such as custom React components or pages. You don't have to strictly put your non-documentation files here, but putting them in a centralized directory makes specifying easy in case you need to do some processing.
- `/src/pages` - Any file within this directory will become a website page. More details can be found in the [page guide ](https://v2.docusaurus.io/docs/creating-pages).
- `/static/` - Static directory. Any content within here will be copied to the root of the final build directory `build`.
- `/docusaurus.config.js` -The configuration file for the site. This is the equivalent of siteConfig.js in Docusaurus 1.
- `/package.json` - A Docusaurus website is a React application. You can install and use any npm package you want on them.
- `/sidebar.js` - Used by documentation to specify the order of documents in lateral navigation.


### Before to start

Somethings you need before getting started:
* git
* node.js


### Instructions to run the project locally on Windows 10

1. Clone this repo

```bash
$ git clone https://github.com/LatamLink/latamlink.io.git
```

2. Move to the appropriate directory

```bash
$ cd latamlink.io
```

3. Install all dependencies:
```bash
$ yarn install 
```

4. Build the project:
```bash		
$ yarn build 
```

5. Run local server:
```bash		
$ yarn serve 
```

### Publishing
[latamlink.io](https://latamlink.io) is hosted on GitHub and published using the following commands:

```bash		
$ yarn build 
```

```bash		
$ GIT_USER=LatamLink CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages
```

## License

MIT © [LatamLink Testnet](https://latamlink.io)  
