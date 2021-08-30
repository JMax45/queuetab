[![Contributors][contributors-shield]][contributors-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT HEADER -->
<br />
<p align="center">
  <h3 align="center">QueueTab</h3>
</p>

<!-- ABOUT THE PROJECT -->

## About QueueTab

QueueTab is a small JavaScript module to execute tasks in a queue.

### Installation

Install the package with npm

```sh
npm install queuetab
```

<!-- USAGE EXAMPLES -->

### Usage

```js
const QueueTab = require('queuetab').default;
const queuetab = new QueueTab();

// asyncFunc is an example function, use your actual function instead
queuetab.add(asyncFunc, (err, res) => console.log('finished task 1', err, res));
queuetab.add(asyncFunc, (err, res) => console.log('finished task 2', err, res));
```

<!-- CONTRIBUTING -->

## Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/MyFeature`)
3. Commit your Changes (`git commit -m 'Add MyFeature'`)
4. Push to the Branch (`git push origin feature/MyFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/JMax45/queuetab?style=for-the-badge
[contributors-url]: https://github.com/JMax45/queuetab/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/JMax45/queuetab?style=for-the-badge
[issues-url]: https://github.com/JMax45/queuetab/issues
[license-shield]: https://img.shields.io/github/license/JMax45/queuetab?style=for-the-badge
[license-url]: https://github.com/JMax45/queuetab/blob/master/LICENSE.txt
