export const media = {
  heroVideo: "https://res.cloudinary.com/xtd9beug/video/upload/v1789757700/hero1.mp4",
  section2Video: "https://res.cloudinary.com/xtd9beug/video/upload/v1789757680/Section2_Buds.mp4",
  section3Video: "https://res.cloudinary.com/xtd9beug/video/upload/v1789757658/section3.mp4",
  heroProduct: "/assets/dcc96ccf-fa35-4c71-a5a4-0c1e2ae2607c.jpg",
  heroBg: "/assets/096c8515-c4be-4524-a90d-678c13bfde2d.jpg",
  techCase: "/assets/ed05537a-9453-422b-9f08-258b3a2a19d6.jpg",
  finishObsidian: "/assets/dcc96ccf-fa35-4c71-a5a4-0c1e2ae2607c.jpg",
  lifestyle1: "/assets/35dd1095-6232-46ed-97ff-c4e80a85810f.jpg",
  lifestyle2: "/assets/158ab694-41c6-4334-bb1d-801f1d85fc82.jpg",
  lifestyle3: "/assets/ed05537a-9453-422b-9f08-258b3a2a19d6.jpg",
  lifestyle4: "/assets/096c8515-c4be-4524-a90d-678c13bfde2d.jpg",
};

export const PART_BOUNDS: Record<string, { w: number; h: number; x0: number; x1: number; y0: number; y1: number }> = {
  "part-01-master": { w: 1374, h: 1145, x0: 0.1182, x1: 0.8955, y0: 0.0773, y1: 0.9227 },
  "part-02-shell": { w: 1374, h: 1145, x0: 0.0909, x1: 0.9136, y0: 0.0591, y1: 0.9636 },
  "part-03-chamber": { w: 1374, h: 1145, x0: 0.1045, x1: 0.8955, y0: 0.0773, y1: 0.9091 },
  "part-04-driver": { w: 1374, h: 1145, x0: 0.1, x1: 0.9, y0: 0.1227, y1: 0.8773 },
  "part-05-mesh": { w: 1374, h: 1145, x0: 0.2, x1: 0.8136, y0: 0.05, y1: 0.8818 },
  "part-06-logic": { w: 1374, h: 1145, x0: 0.1091, x1: 0.9364, y0: 0.0864, y1: 0.8636 },
  "part-07-sensor": { w: 1374, h: 1145, x0: 0.1591, x1: 0.8773, y0: 0.0909, y1: 0.9182 },
  "part-08-base": { w: 1374, h: 1145, x0: 0.1136, x1: 0.9091, y0: 0.0727, y1: 0.9 },
  "part-09-tip": { w: 1374, h: 1145, x0: 0.1273, x1: 0.9091, y0: 0.1364, y1: 0.85 },
};

export const explodedParts = [
  { id: 0, bounds: "part-02-shell", src: "/assets/30784b6f-e07a-4b23-b16c-e8a0a78af3b9.png", title: "Outer ceramic shell", desc: "STRUCTURAL PROTECTION" },
  { id: 1, bounds: "part-03-chamber", src: "/assets/2ba25db9-2300-4935-938a-c394ff8c26b6.png", title: "Acoustic chamber", desc: "SEALED TITANIUM VOLUME" },
  { id: 2, bounds: "part-04-driver", src: "/assets/b2d8c861-59ed-4edd-9cfe-bb78be958792.png", title: "Adaptive driver", desc: "11 MM DUAL DIAPHRAGM" },
  { id: 3, bounds: "part-05-mesh", src: "/assets/2fa07885-37ee-466f-9559-d79f7e757374.png", title: "Acoustic mesh", desc: "PARTICULATE BARRIER" },
  { id: 4, bounds: "part-06-logic", src: "/assets/f0ba48ac-c459-4bb1-97da-7a098e8dcc38.png", title: "Logic core", desc: "SPATIAL DSP AND CELL" },
  { id: 5, bounds: "part-07-sensor", src: "/assets/05c2c7e8-beac-4659-970c-56641d0fbd55.png", title: "Sensor array", desc: "SIX-AXIS AND OPTICAL" },
  { id: 6, bounds: "part-08-base", src: "/assets/06ad4e13-5264-41f0-ae03-62ec81d67a3f.png", title: "Inner structural base", desc: "CHASSIS AND CONTACTS" },
  { id: 7, bounds: "part-09-tip", src: "/assets/f0d13287-de80-40ff-94de-1939ea787f08.png", title: "Inner acoustic assembly", desc: "NOZZLE AND EAR-TIP SEAL" },
];

export const masterPart = {
  bounds: "part-01-master",
  src: "/assets/e101e626-b052-4232-b3be-8c809b43b9cc.png",
  alt: "AERON ARC, fully assembled",
};

export const FINISHES = [
  { name: "Obsidian", filter: "none", note: "Matte ceramic with a brushed titanium seam. The original ARC." },
  { name: "Mist", filter: "brightness(1.45) contrast(.82) saturate(.25)", note: "Cool pale composite that reads almost white in daylight." },
  { name: "Titanium", filter: "sepia(.28) brightness(1.18) contrast(1.04) hue-rotate(-12deg)", note: "Bare alloy shell, hand-polished, warmer under low light." },
];

export const navLinks = [
  { href: "#product", label: "PRODUCT" },
  { href: "#technology", label: "TECHNOLOGY" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#support", label: "SUPPORT" },
];

export const gallerySlides = [
  { id: "01", tag: "MORNING", title: "Commute in absolute silence.", img: "/assets/35dd1095-6232-46ed-97ff-c4e80a85810f.jpg" },
  { id: "02", tag: "MOVEMENT", title: "Locked in place. Defying gravity.", img: "/assets/158ab694-41c6-4334-bb1d-801f1d85fc82.jpg" },
  { id: "03", tag: "FOCUS", title: "Zero distractions in deep studio flow.", img: "/assets/ed05537a-9453-422b-9f08-258b3a2a19d6.jpg" },
  { id: "04", tag: "NIGHT", title: "Warm timbre under ambient glow.", img: "/assets/096c8515-c4be-4524-a90d-678c13bfde2d.jpg" },
  { id: "05", tag: "IMMERSION", title: "Spatial cinema right in your ears.", img: "/assets/35dd1095-6232-46ed-97ff-c4e80a85810f.jpg" },
];
