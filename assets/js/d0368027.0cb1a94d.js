(self.webpackChunkmahotd=self.webpackChunkmahotd||[]).push([[918],{4916:(e,s,i)=>{e.exports={src:{srcSet:i.p+"assets/ideal-img/glass-block-lamp-1.4d38d93.640.jpg 640w,"+i.p+"assets/ideal-img/glass-block-lamp-1.8a57eae.1030.jpg 1030w",images:[{path:i.p+"assets/ideal-img/glass-block-lamp-1.4d38d93.640.jpg",width:640,height:853},{path:i.p+"assets/ideal-img/glass-block-lamp-1.8a57eae.1030.jpg",width:1030,height:1373}],src:i.p+"assets/ideal-img/glass-block-lamp-1.4d38d93.640.jpg",toString:function(){return i.p+"assets/ideal-img/glass-block-lamp-1.4d38d93.640.jpg"},placeholder:void 0,width:640,height:853},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQj/xAAgEAEAAQQCAgMAAAAAAAAAAAABAgADBBEFIRMxQWGR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABoRAAICAwAAAAAAAAAAAAAAAAECAAMRITH/2gAMAwEAAhEDEQA/AJxxOMt3cLzvlZ9dGg79NEMZC9FL4fJZcOMnjW70oWURjEBR+F1vVGaPv9pWsmgojAxyf//Z"}},3038:(e,s,i)=>{"use strict";i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var l=i(5893),t=i(1151),n=i(5944);const r={slug:"glass-block-lamp",title:"Making a glass block lamp \ud83c\udf08",authors:["mahotd"],tags:["electronics","3d printing","light","rgb","neopixel","wled"]},o=void 0,a={permalink:"/glass-block-lamp",editUrl:"https://github.com/mahotd/mahotd/edit/main/blog/blog/2023-07-19-making-glass-block-lamp/index.mdx",source:"@site/blog/2023-07-19-making-glass-block-lamp/index.mdx",title:"Making a glass block lamp \ud83c\udf08",description:"<Image",date:"2023-07-19T00:00:00.000Z",formattedDate:"July 19, 2023",tags:[{label:"electronics",permalink:"/tags/electronics"},{label:"3d printing",permalink:"/tags/3-d-printing"},{label:"light",permalink:"/tags/light"},{label:"rgb",permalink:"/tags/rgb"},{label:"neopixel",permalink:"/tags/neopixel"},{label:"wled",permalink:"/tags/wled"}],readingTime:1.64,hasTruncateMarker:!0,authors:[{name:"Mahot Descelliers",title:"Data Engineer @Withings",url:"http://mahotd.github.io/about",imageURL:"https://github.com/mahotd.png",key:"mahotd"}],frontMatter:{slug:"glass-block-lamp",title:"Making a glass block lamp \ud83c\udf08",authors:["mahotd"],tags:["electronics","3d printing","light","rgb","neopixel","wled"]},unlisted:!1},c={authorsImageUrls:[void 0]},d=[{value:"Tools",id:"tools",level:2},{value:"Materials",id:"materials",level:2},{value:"The case",id:"the-case",level:2},{value:"Electronics",id:"electronics",level:2},{value:"Assembly",id:"assembly",level:2},{value:"WLED",id:"wled",level:2},{value:"TODO",id:"todo",level:2}];function h(e){const s={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{img:i(4916),alt:"The finished glass block lamp",style:{width:350,display:"block",margin:"0 auto"},caption:"The finished glass block lamp"}),"\n",(0,l.jsx)("br",{}),"\n",(0,l.jsxs)(s.p,{children:["I have several decorative lamps in my home, but I've wanted to make one myself for a while.",(0,l.jsx)("br",{}),"\nI've had my eye on a glass block lamp for quite some time, and I thought it would be a\ngood opportunity to make it happen. To take the visual concept up a notch, I decided to\nincorporate some fancy RGB electronics \ud83c\udf08."]}),"\n","\n",(0,l.jsx)(s.h2,{id:"tools",children:"Tools"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"3D printer"}),": Prusa Mini+"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"soldering station"}),": Aixun T3B (",(0,l.jsx)(s.a,{href:"https://youtu.be/Ds2Xq3dwV30",children:"it's good"}),")"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"computer"})," (with Google Chrome, to configure the WLED software)"]}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"precision screwdrivers"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"UV glue"})}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"materials",children:"Materials"}),"\n",(0,l.jsx)(s.p,{children:"For this project, I used the following materials:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Glass block"}),": 19x19x8cm block one which I bought at my local hardware store, Leroy Merlin"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"ESP32"})," microcontroller: ",(0,l.jsx)(s.a,{href:"https://www.adafruit.com/product/5400",children:"Adafruit ESP32 Feather V2"})]}),"\n"]}),"\n",(0,l.jsx)(s.admonition,{title:"ESP32 microcontroller compatibility",type:"warning",children:(0,l.jsxs)(s.p,{children:["WLED is currently not fully compatible with ESP32-S2, ESP32-S3 or ESP32-C3 microcontrollers, see\n",(0,l.jsx)(s.a,{href:"https://github.com/Aircoookie/WLED/issues/966",children:"Aircoookie/WLED#966"}),",\n",(0,l.jsx)(s.a,{href:"https://github.com/Aircoookie/WLED/issues/2735",children:"Aircoookie/WLED#2735"}),",\n",(0,l.jsx)(s.a,{href:"https://github.com/Aircoookie/WLED/issues/1940",children:"Aircoookie/WLED#1940"}),".\nUse a regular ESP32 to be sure."]})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"3x RGBW NeoPixel sticks"})," from Adafruit: ",(0,l.jsx)(s.a,{href:"https://www.adafruit.com/product/2867",children:"RGBW NeoPixel Stick from Adafruit"}),".\nI'd recommend using ",(0,l.jsx)(s.a,{href:"https://www.adafruit.com/product/2847",children:"high density flexible strips instead"}),",\nwhich are cheaper while offering nearly the same pixel density."]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"TSOP38238"})," IR receiver"]}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://kno.wled.ge/interfaces/infrared/",children:(0,l.jsx)(s.strong,{children:"IR remote"})})}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"10k\u03a9 potentiometer"})," for brightness setting, as recommended by the ",(0,l.jsx)(s.a,{href:"https://kno.wled.ge/features/macros/#global-brightness",children:"WLED documentation"})]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"5V 3A USB-C power supply"}),": I used one made for the Raspberry Pi 4, with a built-in switch"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"Black PLA"})," (for the case assembly) and ",(0,l.jsx)(s.strong,{children:"white PLA"})," (for the diffuser)"]}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"Prototyping wire"})}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"M2 screws"})," and ",(0,l.jsx)(s.strong,{children:"heat-set inserts"})]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"the-case",children:"The case"}),"\n",(0,l.jsx)(s.p,{children:"TODO"}),"\n",(0,l.jsx)(s.h2,{id:"electronics",children:"Electronics"}),"\n",(0,l.jsx)(s.p,{children:"TODO"}),"\n",(0,l.jsx)(s.h2,{id:"assembly",children:"Assembly"}),"\n",(0,l.jsx)(s.p,{children:"TODO"}),"\n",(0,l.jsx)(s.h2,{id:"wled",children:"WLED"}),"\n",(0,l.jsx)(s.p,{children:"TODO"}),"\n",(0,l.jsx)(s.h2,{id:"todo",children:"TODO"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"keep writing this article"}),"\n",(0,l.jsx)(s.li,{children:"write a note about sourcing glass blocks"}),"\n",(0,l.jsx)(s.li,{children:"add project sources (stl, wled config, etc.). Maybe on GitHub ?"}),"\n",(0,l.jsx)(s.li,{children:"add related documentation links (remove them from the text ?)"}),"\n",(0,l.jsx)(s.li,{children:"add improvement ideas"}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);