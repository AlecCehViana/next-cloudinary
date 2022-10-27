<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/62209650/196528621-b68e9e10-7e55-4c7d-9177-904cadbb4296.png" align="center" height=50>
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/62209650/196528761-a815025a-271a-4d8e-ac7e-cea833728bf9.png" align="center" height=50>
  <img alt="Cloudinary" src="https://user-images.githubusercontent.com/62209650/196528761-a815025a-271a-4d8e-ac7e-cea833728bf9.png" align="center" height=30>
</picture>
&ensp;&ensp;
<picture style="padding: 30px">
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/62209650/196529551-917766a7-6d73-4a0b-9f80-db31ac62358f.png" align="center" height=30>
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/62209650/196529695-8c260b0b-b5e6-44ae-bf71-db3c28534b20.png" align="center" height=30>
  <img alt="Nextjs" src="https://user-images.githubusercontent.com/62209650/196529695-8c260b0b-b5e6-44ae-bf71-db3c28534b20.png" align="center" height=30>
</picture>

######

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Next Cloudinary

High-performance image delivery and uploading at scale in Next.js powered by Cloudinary.

* Automatically optimize images and deliver in modern formats
* Remove backgrounds from images
* Dynamically add image and text overlays to images
* AI-based cropping and resizing
* Transform images using color and effects
* Generate Open Graph Social Media cards on the fly
* Drop-in Upload Widget
* ...all at scale with Cloudinary

> 🚨 EXPERIMENTAL: while this should be working pretty well, it's consider experimental, so use at your own risk!

**This plugin is not officially supported by Cloudinary.**

## ⚡️ Getting Started

### Installation

* Install `next-cloudinary` with:
```
yarn add next-cloudinary
# or
npm install next-cloudinary
```

* Add an environment variable with your Cloud Name:
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

### Adding an Image

```
import { CldImage } from 'next-cloudinary';

<CldImage width="600" height="600" src="<Public ID or Cloudinary URL>" />
```

[Learn more about CldImage on the Next Cloudinary Docs](https://next-cloudinary.spacejelly.dev/components/cldimage/basic-usage)

### Generating an Social Media Card (Open Graph)

```
<CldOgImage src="<Public ID or Cloudinary URL>" text="Next Cloudinary" />
```

> Note: The width and height is not required (or recommended) to comply with standardized social media card sizing of a 2:1 aspect ratio.

[Learn more about CldOgImage on the Next Cloudinary Docs](https://next-cloudinary.spacejelly.dev/components/cldogimage/basic-usage)

### Other Use Cases

* [Background Removal](https://next-cloudinary.spacejelly.dev/use-cases/background-removal)
* [Image Overlays](https://next-cloudinary.spacejelly.dev/use-cases/image-underlays)
* [Image Underlays](https://next-cloudinary.spacejelly.dev/use-cases/image-overlays)
* [Social Media Card](https://next-cloudinary.spacejelly.dev/use-cases/social-media-card)
* [Text Overlays](https://next-cloudinary.spacejelly.dev/use-cases/text-overlays)

## ✨ Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://colbyfayock.com/newsletter"><img src="https://avatars.githubusercontent.com/u/1045274?v=4?s=100" width="100px;" alt="Colby Fayock"/><br /><sub><b>Colby Fayock</b></sub></a><br /><a href="https://github.com/colbyfayock/next-cloudinary/commits?author=colbyfayock" title="Code">💻</a> <a href="https://github.com/colbyfayock/next-cloudinary/commits?author=colbyfayock" title="Documentation">📖</a> <a href="#example-colbyfayock" title="Examples">💡</a></td>
      <td align="center"><a href="https://github.com/danielolaviobr"><img src="https://avatars.githubusercontent.com/u/64712584?v=4?s=100" width="100px;" alt="Daniel Olavio"/><br /><sub><b>Daniel Olavio</b></sub></a><br /><a href="https://github.com/colbyfayock/next-cloudinary/commits?author=danielolaviobr" title="Code">💻</a></td>
      <td align="center"><a href="http://www.ramadevsign.com"><img src="https://avatars.githubusercontent.com/u/50571688?v=4?s=100" width="100px;" alt="ramadevsign"/><br /><sub><b>ramadevsign</b></sub></a><br /><a href="#tool-orama254" title="Tools">🔧</a></td>
      <td align="center"><a href="https://kbravh.dev"><img src="https://avatars.githubusercontent.com/u/30562119?v=4?s=100" width="100px;" alt="Karey Higuera"/><br /><sub><b>Karey Higuera</b></sub></a><br /><a href="https://github.com/colbyfayock/next-cloudinary/commits?author=kbravh" title="Tests">⚠️</a> <a href="https://github.com/colbyfayock/next-cloudinary/commits?author=kbravh" title="Code">💻</a></td>
      <td align="center"><a href="https://github.com/Azanul"><img src="https://avatars.githubusercontent.com/u/42029519?v=4?s=100" width="100px;" alt="Azanul Haque"/><br /><sub><b>Azanul Haque</b></sub></a><br /><a href="#tool-Azanul" title="Tools">🔧</a></td>
      <td align="center"><a href="https://github.com/3t8"><img src="https://avatars.githubusercontent.com/u/62209650?v=4?s=100" width="100px;" alt="3t8"/><br /><sub><b>3t8</b></sub></a><br /><a href="https://github.com/colbyfayock/next-cloudinary/commits?author=3t8" title="Documentation">📖</a></td>
      <td align="center"><a href="https://github.com/agbanusi"><img src="https://avatars.githubusercontent.com/u/53221092?v=4?s=100" width="100px;" alt="John Agbanusi"/><br /><sub><b>John Agbanusi</b></sub></a><br /><a href="https://github.com/colbyfayock/next-cloudinary/commits?author=agbanusi" title="Code">💻</a> <a href="https://github.com/colbyfayock/next-cloudinary/commits?author=agbanusi" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center"><a href="http://joanleon.dev"><img src="https://avatars.githubusercontent.com/u/1307927?v=4?s=100" width="100px;" alt="Joan León"/><br /><sub><b>Joan León</b></sub></a><br /><a href="https://github.com/colbyfayock/next-cloudinary/commits?author=nucliweb" title="Documentation">📖</a></td>
      <td align="center"><a href="http://www.timbenniks.dev"><img src="https://avatars.githubusercontent.com/u/121096?v=4?s=100" width="100px;" alt="Tim Benniks"/><br /><sub><b>Tim Benniks</b></sub></a><br /><a href="https://github.com/colbyfayock/next-cloudinary/commits?author=timbenniks" title="Code">💻</a> <a href="https://github.com/colbyfayock/next-cloudinary/commits?author=timbenniks" title="Documentation">📖</a></td>
      <td align="center"><a href="https://github.com/csgochan"><img src="https://avatars.githubusercontent.com/u/116420257?v=4?s=100" width="100px;" alt="csgochan"/><br /><sub><b>csgochan</b></sub></a><br /><a href="https://github.com/colbyfayock/next-cloudinary/commits?author=csgochan" title="Documentation">📖</a></td>
      <td align="center"><a href="https://github.com/codingis4noobs2"><img src="https://avatars.githubusercontent.com/u/87560178?v=4?s=100" width="100px;" alt="codingis4noobs2"/><br /><sub><b>codingis4noobs2</b></sub></a><br /><a href="https://github.com/colbyfayock/next-cloudinary/commits?author=codingis4noobs2" title="Code">💻</a> <a href="https://github.com/colbyfayock/next-cloudinary/commits?author=codingis4noobs2" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
