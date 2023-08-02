"use strict";(self.webpackChunkmahotd=self.webpackChunkmahotd||[]).push([[450],{6029:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"glass-block-lamp","metadata":{"permalink":"/glass-block-lamp","editUrl":"https://github.com/mahotd/mahotd/edit/main/blog/blog/2023-07-19-making-glass-block-lamp/index.mdx","source":"@site/blog/2023-07-19-making-glass-block-lamp/index.mdx","title":"Making a glass block lamp \ud83c\udf08","description":"<Image","date":"2023-07-19T00:00:00.000Z","formattedDate":"July 19, 2023","tags":[{"label":"electronics","permalink":"/tags/electronics"},{"label":"3d printing","permalink":"/tags/3-d-printing"},{"label":"light","permalink":"/tags/light"},{"label":"rgb","permalink":"/tags/rgb"},{"label":"neopixel","permalink":"/tags/neopixel"},{"label":"wled","permalink":"/tags/wled"}],"readingTime":1.815,"hasTruncateMarker":true,"authors":[{"name":"Mahot Descelliers","title":"Data Engineer @Withings","url":"http://mahotd.github.io/about","imageURL":"https://github.com/mahotd.png","key":"mahotd"}],"frontMatter":{"slug":"glass-block-lamp","title":"Making a glass block lamp \ud83c\udf08","authors":["mahotd"],"tags":["electronics","3d printing","light","rgb","neopixel","wled"]}},"content":"import Image from \\"@theme/IdealImage\\";\\n\\n<Image\\n  img={require(\\"./img/glass-block-lamp-1.jpg\\")}\\n  alt=\\"The finished glass block lamp\\"\\n  style={{ width: 350, display: \\"block\\", margin: \\"0 auto\\" }}\\n  caption=\\"The finished glass block lamp\\"\\n/>\\n<br />\\n\\nI love mood lighting, and my home is filled with various lava lamps, quirky bulbs, and other fun lights.<br/>\\nTo add a personal touch to my collection, I thought it would be a fantastic idea to create one myself!\\nI\'ve had my eye on a glass block lamp for quite some time, and now it\'s the perfect opportunity to make it happen.\\nTo take the visual concept up a notch, I decided to incorporate some fancy RGB electronics \ud83c\udf08.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Tools\\n\\n- **3D printer** : I used my Prusa Mini+\\n- **soldering station** : I used a Aixun T3B, [it\'s great](https://youtu.be/Ds2Xq3dwV30)\\n- **computer** with Google Chrome, to configure the WLED software\\n- **precision screwdrivers**\\n- **UV glue** : I used *Bostik Fix & Flash*\\n\\n## Materials\\n\\nFor this project, I used the following materials:\\n\\n- **Glass block** : I used a 19x19x8cm one which I bough at my local hardware store, Leroy Merlin\\n- **ESP32** microcontroller : I used an [Adafruit ESP32 Feather V2](https://www.adafruit.com/product/5400)\\n\\n:::caution ESP32 microcontroller compatibility\\n\\nWLED is currently not fully compatible with ESP32-S2, ESP32-S3 or ESP32-C3 microcontrollers, see [#966](https://github.com/Aircoookie/WLED/issues/966), [#2735](https://github.com/Aircoookie/WLED/issues/2735), [#1940](https://github.com/Aircoookie/WLED/issues/1940).\\nUse a regular ESP32 to be sure.\\n\\n:::\\n- **3x RGBW NeoPixel sticks** from Adafruit : I used [these ones from Adafruit](https://www.adafruit.com/product/2867). They\'re great but expensive... See the [WLED Documentation](https://kno.wled.ge/basics/compatible-hardware/#addressable-led-strips) for compatibility with other LED strips.\\n- **TSOP38238** IR receiver\\n- [**IR remote**](https://kno.wled.ge/interfaces/infrared/)\\n- **10k\u03a9 potentiometer** for brightness setting, as recommended by the [WLED documentation](https://kno.wled.ge/features/macros/#global-brightness)\\n- **5V 3A USB-C power supply** : I used one made for the Raspberry Pi 4\\n- **Black PLA** (for the case assembly) and **white PLA** (for the diffuser)\\n- **Prototyping wire**\\n- **M2 screws** and **heat-set inserts**\\n\\n## The case\\n\\nTODO\\n\\n## Electronics\\n\\nTODO\\n\\n## Assembly\\n\\nTODO\\n\\n## WLED\\n\\nTODO\\n\\n## TODO\\n- keep writing this article\\n- write a note about sourcing glass blocks\\n- add project sources (stl, wled config, etc.). Maybe on GitHub ?\\n- add related documentation links (remove them from the text ?)\\n- Add improvement ideas"}]}')}}]);