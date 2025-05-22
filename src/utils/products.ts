// Category keys as a union for strong typing
export type CategoryId =
  | "new-arrivals"
  | "smartphones"
  | "powerbank-and-charging"
  | "gear-and-devices"
  | "camera-and-visual"
  | "audio"
  | "lifestyle"
  | "deals";

// Categories
export interface Category {
  id: CategoryId;
  name: string;
}

// Loose specs map; refine per-category later if needed
export type Specs = Record<string, string | string[]>;

// 5) Core product shape
export interface ProductType {
  id: string; // unique SKU, slug, or GUID
  name: string;
  slug: string; // for URLs
  brand: string;
  category: CategoryId;
  images: string[];
  price: number;
  dateAdded: string;
  rating: number; // average user rating
  specs: Specs;
  keyFeatures?: {};
  generalFeatures?: string;
  displayImages?: string[];

  // optional:
  stock?: number;
  colors?: string[];
  warranty?: string;
  isFeatured?: boolean;
}

// 1) Categories list for menus & filters
export const categories: Category[] = [
  { id: "new-arrivals", name: "New Arrivals" },
  { id: "smartphones", name: "Smartphones" },
  { id: "powerbank-and-charging", name: "Power Bank & Charging" },
  { id: "gear-and-devices", name: "Gear & Devices" },
  { id: "camera-and-visual", name: "Camera & Visual" },
  { id: "audio", name: "Audio" },
  { id: "lifestyle", name: "Lifestyle" },
  { id: "deals", name: "Deals" },
];

// 2) Sample products
export const productsDescription: ProductType[] = [
  {
    id: "xiaomi-212w-powerbank-25000mah",
    name: "Xiaomi 212W HyperCharge Power Bank 25000mAh",
    slug: "xiaomi-212w-powerbank-25000mah",
    brand: "Xiaomi",
    category: "powerbank-and-charging",
    images: [
      "https://mistore.pk/cdn/shop/files/Xiaomi212WHyperChargePowerBank25000_300x.webp?v=1746786863",
      "/images/xiaomi-212w-powerbank-25000mah-back.jpg",
    ],
    price: 22499,
    dateAdded: "2025-05-14T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://mistore.pk/cdn/shop/files/Xiaomi212WHyperChargePowerBank25000_grande.webp?v=1746786863",
    ],
    keyFeatures: {
      display: "",
      resolution: "",
      processorModel: "P03MI",
      processorProcess: "",
      processorCores: "",
      cpuSpeed: "",
      refreshRate: "",
      fingerprintUnlock: false,
      faceUnlock: false,
      rearCamera: "",
      frontCamera: "",
      battery: "Lithium-ion, 90.8Wh, 25000mAh",
      charging: "212W Max, 140W fast charge, USB-A/USB-C ports",
      wetTouchTechnology: "",
      otherFeatures:
        "Compatible with smartphones, wearables, gadgets; Dimensions: 55.4 x 55.4 x 160mm",
      generalFeatures:
        "Offers fast and lightning charging. Input parameters: USB-C (C1) 5V=3A 9V=3A 12V=3A 15V=3A 20V=3.25A; USB-C (C2) 5V=3A 9V=3A 12V=3A 20V=2.25A. Output parameters: 212W Max. Single port output: USB-C (C1) 5V=3A 9V=3A 11V=6.1A 12V=3A 15V=3A 20V=2.25A 20V=3.25A. Multi-port power output: USB-C (1) + USB-A (A): 65W+120W (5PIN PD cable) 140W+22.5W (USB-A to USB-C cable); USB-C (2) + USB-A (A): 45W+120W (5PIN PD cable) 45W+22.5W (USB-A to USB-C cable); USB-C (1) + USB-C (2): 120W+45W (USB-A to USB-C cable).",
    },
    specs: {
      display: "",
      resolution: "",
      processor: "",
      refreshRate: "",
      battery: "25000mAh (90.8Wh), rated 24500mAh @ 3.63V",
      os: "",
    },
  },
  {
    id: "xiaomi-semi-automatic-espresso-machine",
    name: "Xiaomi Semi-Automatic Espresso Machine",
    slug: "xiaomi-semi-automatic-espresso-machine",
    brand: "Xiaomi",
    category: "new-arrivals",
    images: [
      "https://mistore.pk/cdn/shop/files/XiaomiSemi-automaticEspressoMachine_300x.webp?v=1746787091",
      "/images/xiaomi-semi-automatic-espresso-machine-back.jpg",
    ],
    price: 34999,
    dateAdded: "2025-05-14T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://mistore.pk/cdn/shop/files/XiaomiSemi-automaticEspressoMachine_grande.webp?v=1746787091",
    ],
    keyFeatures: {
      display: "",
      resolution: "",
      processorModel: "CME003",
      processorProcess: "",
      processorCores: "",
      cpuSpeed: "",
      refreshRate: "",
      fingerprintUnlock: false,
      faceUnlock: false,
      rearCamera: "",
      frontCamera: "",
      battery: "",
      charging: "",
      wetTouchTechnology: "",
      otherFeatures:
        "Default capacity small cup: 40ml; large cup: 80ml; Material: Stainless Steel; Dimensions: 27.5 × 13.7 × 28.4 cm; Net weight: 3.5 kg; Voltage: 220-240V; Frequency: 50-60 Hz; Water tank capacity: 0.9 L; Power: 1350 W",
      generalFeatures:
        "Low pressure professional pre-infusion; Stronger steam pressure; Compact and space-saving design ideal for countertops; NTC precise temperature control; Easy to clean and maintain.",
    },
    specs: {
      display: "",
      resolution: "",
      processor: "",
      refreshRate: "",
      battery: "",
      os: "",
    },
  },
  {
    id: "xiaomi-smart-scent-diffuser",
    name: "Xiaomi Smart Scent Diffuser",
    slug: "xiaomi-smart-scent-diffuser",
    brand: "Xiaomi",
    category: "new-arrivals",
    images: [
      "https://mistore.pk/cdn/shop/files/XiaomiSmartScentDiffuser_300x.webp?v=1746788309",
      "/images/xiaomi-smart-scent-diffuser-back.jpg",
    ],
    price: 5799,
    dateAdded: "2025-05-14T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://mistore.pk/cdn/shop/files/XiaomiSmartScentDiffuser_grande.webp?v=1746788309",
    ],
    keyFeatures: {
      display: "",
      resolution: "",
      processorModel: "MJXJFJ03XW",
      processorProcess: "",
      processorCores: "",
      cpuSpeed: "",
      refreshRate: "",
      fingerprintUnlock: false,
      faceUnlock: false,
      rearCamera: "",
      frontCamera: "",
      battery: "Lithium-ion rechargeable battery, 3.7V, approx. 50 days",
      charging: "5V Type-C, 0.5A",
      wetTouchTechnology: "",
      otherFeatures:
        "Dimensions: 74 × 74 × 75mm; Net weight: 154g; Material: Polypropylene (PP); Operating temp: 5°C–40°C; Rated current: 1A; Wireless: Bluetooth low energy; Battery life: ~50 days (no light), ~6 hours (light on)",
      generalFeatures:
        "Smart control of scent concentration; Low-decibel operation; Type-C charging; 50 days extra-long battery life; Increases intensity on detecting a person; Ambient lighting uses 16 million colors; Detection area: 120° in front of diffuser; Range: 2 meters.",
    },
    specs: {
      display: "",
      resolution: "",
      processor: "",
      refreshRate: "",
      battery: "3.7V Lithium-ion rechargeable, ~50 days",
      os: "",
    },
  },
  {
    id: "xiaomi-dust-mite-vacuum-cleaner-pro",
    name: "Xiaomi Dust Mite Vacuum Cleaner Pro",
    slug: "xiaomi-dust-mite-vacuum-cleaner-pro",
    brand: "Xiaomi",
    category: "lifestyle",
    images: [
      "https://mistore.pk/cdn/shop/files/XiaomiDustMiteVacuumCleanerPro_300x.webp?v=1746788085",
      "/images/xiaomi-dust-mite-vacuum-cleaner-pro-back.jpg",
    ],
    price: 22499,
    dateAdded: "2025-05-14T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://mistore.pk/cdn/shop/files/XiaomiDustMiteVacuumCleanerPro_grande.webp?v=1746788085",
    ],
    keyFeatures: {
      display: "",
      resolution: "",
      processorModel: "B402HW",
      processorProcess: "",
      processorCores: "",
      cpuSpeed: "",
      refreshRate: "",
      fingerprintUnlock: false,
      faceUnlock: false,
      rearCamera: "",
      frontCamera: "",
      battery: "",
      charging: "",
      wetTouchTechnology: "",
      otherFeatures:
        "Dimensions: 239 × 230 × 144mm; Noise Level: ≤78dB(A); Rated Frequency: 50–60Hz; Design: Compact | Lightweight; Rated Voltage: 220–240V~; Rated Power: 400W; Net Weight: 2.063kg",
      generalFeatures:
        "UV sterilisation; Intelligent suction adjustment; 48,000 beating actions per minute; 4-stage deep filtration; 14kPa* cyclone suction power",
    },
    specs: {
      display: "",
      resolution: "",
      processor: "",
      refreshRate: "",
      battery: "",
      os: "",
    },
  },
  {
    id: "xiaomi-67w-car-charger-usb-a-type-c",
    name: "Xiaomi 67W Car Charger (USB-A + Type C)",
    slug: "xiaomi-67w-car-charger-usb-a-type-c",
    brand: "Xiaomi",
    category: "lifestyle",
    images: [
      "https://mistore.pk/cdn/shop/products/mi67wcarcharger_300x.png?v=1671602475",
      "/images/xiaomi-67w-car-charger-back.jpg",
    ],
    price: 6599,
    dateAdded: "2025-05-22T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://mistore.pk/cdn/shop/products/mi67wcarcharger_grande.png?v=1671602475",
    ],
    keyFeatures: {
      display: "",
      resolution: "",
      processorModel: "CC07ZM",
      processorProcess: "",
      processorCores: "",
      cpuSpeed: "",
      refreshRate: "",
      fingerprintUnlock: false,
      faceUnlock: false,
      rearCamera: "",
      frontCamera: "",
      battery: "",
      charging: "67W max (single port up to 55W when used simultaneously)",
      wetTouchTechnology: "",
      otherFeatures:
        "Output Ports: USB-A & Type-C; Input: 12V; Single Port Output: (USB-A) 5V=2A Max, 9V=2A Max; (Type-C) 11V=6.1A Max, 20V=2.5A Max; Dual Port Output: 55W Max",
      generalFeatures:
        "Dimensions: 75.13 x 33.29 x 33.29mm; Includes USB Charging Cable & User Manual",
    },
    specs: {
      display: "",
      resolution: "",
      processor: "",
      refreshRate: "",
      battery: "",
      os: "",
    },
  },

  {
    id: "xiaomi-tv-box-s-3rd-gen",
    name: "Xiaomi TV Box S (3rd Gen)",
    slug: "xiaomi-tv-box-s-3rd-gen",
    brand: "Xiaomi",
    category: "gear-and-devices",
    images: [
      "https://mistore.pk/cdn/shop/files/Xiaomi_tv_box_s_3rd_gen__0000s_0000_Xiaomi_tv_box_s_3rd_gen_300x.jpg?v=1746733384",
      "/images/xiaomi-tv-box-s-3rd-gen-back.jpg",
    ],
    price: 19499,
    dateAdded: "2025-05-14T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://cdn.shopify.com/s/files/1/0231/3627/2464/files/specs_desk_36c3b201-d801-4533-b3bb-7ed4d10377ea.webp?v=1744809377",
    ],
    keyFeatures: {
      display: "",
      resolution: "4K (3840 x 2160)",
      processorModel: "Quad-Core CPU (up to 2.5GHz)",
      processorProcess: "",
      processorCores: "4",
      cpuSpeed: "Up to 2.5GHz",
      refreshRate: "",
      fingerprintUnlock: false,
      faceUnlock: false,
      rearCamera: "",
      frontCamera: "",
      battery: "",
      charging: "",
      wetTouchTechnology: "",
      otherFeatures:
        "GPU: ARM G310 V2; RAM: 2GB; ROM: 32GB; OS: Google TV™; Decoder: GVideo decoder; Up to 4K 60FPS; Dolby Audio®, DTS:X, Dolby Vision®, HDR10+ supported; Wi-Fi: 2.4GHz/5GHz; Bluetooth 5.2",
      generalFeatures:
        "Dimensions: 97mm x 97mm x 17mm; Weight: 91.2g; Color: Black; Ports: HDMI 2.1 × 1, USB 2.0 × 1, Power Interface × 1; Included: TV Box × 1, Remote control × 1, User manual × 1, Power adapter × 1, HDMI cable × 1",
    },
    specs: {
      display: "",
      resolution: "4K (3840 x 2160)",
      processor: "Quad-Core CPU, ARM G310 GPU",
      refreshRate: "",
      battery: "",
      os: "Google TV™",
    },
  },
  {
    id: "xiaomi-tv-a-pro-65-2025",
    name: 'Xiaomi TV A Pro 65" (2025)',
    slug: "xiaomi-tv-a-pro-65-2025",
    brand: "Xiaomi",
    category: "camera-and-visual",
    images: [
      "https://mistore.pk/cdn/shop/files/XiaomiTVAPro652025_300x.jpg?v=1738835427",
      "/images/xiaomi-tv-a-pro-65-2025-back.jpg",
    ],
    price: 204999,
    dateAdded: "2025-05-14T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://cdn.shopify.com/s/files/1/0231/3627/2464/files/specs_desk_5231c64e-20ed-47fc-92da-8dc47392f8df.jpg?v=1747052470",
    ],
    keyFeatures: {
      display: "QLED",
      resolution: "4K (3840 × 2160)",
      processorModel: "Quad A55",
      processorProcess: "",
      processorCores: "4",
      cpuSpeed: "",
      refreshRate: "60Hz",
      fingerprintUnlock: false,
      faceUnlock: false,
      rearCamera: "",
      frontCamera: "",
      battery: "",
      charging: "",
      wetTouchTechnology: "",
      otherFeatures:
        'DCI-P3 94% (typ) color gamut; Color depth: 1.07 billion; MEMC: up to UHD 60Hz; Viewing angle: 178°(H)/178°(V); Supports HDR10, HLG; Speaker output: 10W + 10W with Dolby Audio™, DTS:X, DTS® Virtual:X; GPU: Mali G52 MC1; RAM: 2GB; ROM: 8GB; OS: Google TV™; Chromecast, Google Assistant, Smart home control hub supported; Size: 65", Dark Gray, bezel-less frame; Wall mount: 400×300mm; Dimensions including base: 1446×390.5×901mm; Net weight: 15.1kg incl. base; Power: 175W, Voltage: 200–240V~ 50/60Hz',
      generalFeatures:
        "Bluetooth 5.0, Wi-Fi 2.4GHz/5GHz; Ports: HDMI ×3 (1 eARC), USB 2.0 ×1, Composite In (AV), Ethernet, Optical Out, CI+ Slot; Broadcasting: DVB-T2/C, DVB-S2 (may vary); Operating temp: 0℃–40℃; Included: Bluetooth remote, screws, stand, power cable, user manual, warranty card",
    },
    specs: {
      display: "QLED",
      resolution: "4K (3840 × 2160)",
      processor: "Quad A55 with Mali G52 MC1",
      refreshRate: "60Hz",
      battery: "",
      os: "Google TV™",
    },
  },
  {
    id: "redmi-a5-4gb-128gb",
    name: "Redmi A5 (4GB+128GB)",
    slug: "redmi-a5-4gb-128gb",
    brand: "Xiaomi",
    category: "smartphones",
    images: [
      "https://mistore.pk/cdn/shop/files/RedmiA5bLACK_fbfabfdd-ab04-4fbf-a92e-e7553b2e3532_300x.jpg?v=1744881784",
      "/images/redmi-a5-back.jpg",
    ],
    price: 26999,
    dateAdded: "2025-05-14T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://mistore.pk/cdn/shop/files/RedmiA5bLACK_fbfabfdd-ab04-4fbf-a92e-e7553b2e3532_grande.jpg?v=1744881784",
      "https://mistore.pk/cdn/shop/files/RedmiA5Green_d20bde26-892b-4df8-8130-d81078d4df1e_grande.jpg?v=1744881784",
      "https://mistore.pk/cdn/shop/files/RedmiA5Gold_a8fe7f18-5fcf-47d9-b65c-ad37c9f2eb43_grande.jpg?v=1744881784",
      "https://mistore.pk/cdn/shop/files/RedmiA5bLUE_17abe219-4bd8-4fef-b81d-829a45d70df9_grande.jpg?v=1744881784",
    ],
    keyFeatures: {
      display: '6.88" large screen display',
      resolution: "1640×720, 260 ppi",
      processorModel: "UNISOC T7250",
      processorProcess: "12nm",
      processorCores: "Octa-core",
      cpuSpeed: "Up to 1.8GHz",
      refreshRate: "Up to 120Hz",
      fingerprintUnlock: true,
      faceUnlock: true,
      rearCamera:
        "32MP main camera | filmCamera | HDR mode | Ultra HD | Night mode",
      frontCamera:
        "8MP front camera | HDR mode | Fill-light | Portrait mode | Time-lapse | Night mode",
      battery: "5200mAh battery (typ)",
      charging: "15W fast charging | USB Type-C",
      wetTouchTechnology: "Precise touch control even with wet hands",
      otherFeatures: "",
      generalFeatures:
        "Dual SIM + microSD; GPS | Glonass | Galileo | BDS (only B1C); 3.5mm headphone jack; Sensors: Virtual proximity, Ambient light sensor, Accelerometer, Electronic compass; Network: 4G/3G/2G; Dimensions: 171.7mm × 77.8mm × 8.26mm; Weight: 193g; OS: Android 15 (Go Edition)",
    },
    specs: {
      display: '6.88" HD+',
      resolution: "1640×720",
      processor: "UNISOC T7250 octa-core",
      refreshRate: "Up to 120 Hz",
      battery: "5200 mAh",
      os: "Android 15 (Go Edition)",
    },
  },
  {
    id: "redmi-a5-3gb-64gb",
    name: "Redmi A5 (3GB+64GB)",
    slug: "redmi-a5-3gb-64gb",
    brand: "Xiaomi",
    category: "smartphones",
    images: [
      "https://mistore.pk/cdn/shop/files/RedmiA5Gold_300x.jpg?v=1744882177",
      "/images/redmi-a5-3gb-back.jpg",
    ],
    price: 22999,
    dateAdded: "2025-05-14T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://cdn.shopify.com/s/files/1/0231/3627/2464/files/specs_desk_b70a1b95-74a1-440e-a622-23c502c7ec37.webp?v=1744353759",
    ],
    keyFeatures: {
      display: '6.88" large screen display',
      resolution: "1640×720, 260 ppi",
      processorModel: "UNISOC T7250",
      processorProcess: "12nm",
      processorCores: "Octa-core",
      cpuSpeed: "Up to 1.8GHz",
      refreshRate: "Up to 120Hz",
      fingerprintUnlock: true,
      faceUnlock: true,
      rearCamera:
        "32MP main camera | LEICA VARIO-SUMMILUX lens | HDR mode | Ultra HD | Night mode | 1080p/720p video",
      frontCamera:
        "8MP front camera | HDR | Fill-light | Portrait mode | Time-lapse | Night mode | 1080p/720p video",
      battery: "5200mAh (typ)",
      charging: "15W fast charging | USB Type-C",
      wetTouchTechnology: "Precise touch control even with wet hands",
      otherFeatures:
        "Contrast ratio: 1500:1 | 8-bit color | 70% NTSC | Brightness: 450 nits (typ) | DC dimming | TÜV Rheinland certifications | Touch sampling rate: up to 240Hz | 90% screen-to-body ratio | LPDDR4X + eMMC 5.1 | Memory extension: 3GB→6GB | Dimensions: 171.7 × 77.8 × 8.26mm | Weight: 193g",
      generalFeatures:
        "Side fingerprint sensor | AI face unlock | Dual SIM + microSD | Wi-Fi: 2.4GHz/5GHz | Bluetooth 5.2 | GPS, Glonass, Galileo, BDS (B1C) | 3.5mm headphone jack | Sensors: Proximity, Ambient light, Accelerometer, Compass | Audio formats: aac, mp4, amr, midi, mp3, ogg, flac, mkv, rtx, m4a, etc. | Video formats: ts, mp4, 3gp, mkv, webm, mpeg2, H.263/H.264/H.265, VP8/9, AV1 | OS: Android 15 (Go Edition) | Package: Phone, Adapter, USB-C Cable, SIM Tool, Case, Manuals",
    },
    specs: {
      display: '6.88" HD+',
      resolution: "1640×720",
      processor: "UNISOC T7250 octa-core",
      refreshRate: "Up to 120Hz",
      battery: "5200 mAh",
      os: "Android 15 (Go Edition)",
    },
  },
  {
    id: "poco-f7-pro-12gb-512gb",
    name: "POCO F7 Pro (12GB+512GB)",
    slug: "poco-f7-pro-12gb-512gb",
    brand: "POCO",
    category: "smartphones",
    images: [
      "https://mistore.pk/cdn/shop/files/Poco_F7_Pro_Product_Image_Silver_300x.jpg?v=1745845708",
      "/images/poco-f7-pro-back.jpg",
    ],
    price: 185999,
    dateAdded: "2025-05-14T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://mistore.pk/cdn/shop/files/Poco_F7_Pro_Product_Image_Silver_grande.jpg?v=1745845708",
      "https://mistore.pk/cdn/shop/files/PocoF7ProProductImages_0000s_0003_O11-Blue_grande.jpg?v=1745845708",
      "https://mistore.pk/cdn/shop/files/PocoF7ProProductImageBlack_grande.jpg?v=1745845708",
      "https://mistore.pk/cdn/shop/files/PocoF7ProProductImages_0000s_0000_O11_Black_Handheld_3_grande.jpg?v=1745845708",
    ],
    keyFeatures: {
      display: '6.67" 2K Flow AMOLED DotDisplay',
      resolution: "3200×1440, 526 ppi",
      processorModel: "Snapdragon 8 Gen 3 Mobile Platform",
      processorProcess: "4nm",
      processorCores: "Octa-core",
      cpuSpeed: "",
      refreshRate: "Up to 120Hz",
      fingerprintUnlock: true,
      faceUnlock: false,
      rearCamera: '50MP main camera | Light Fusion 800 sensor | 1/1.55"',
      frontCamera: "20MP front camera",
      battery: "6000mAh (typ)",
      charging: "90W HyperCharge",
      wetTouchTechnology: "",
      otherFeatures:
        "Contrast ratio: 5,000,000:1 | Brightness: 1800 nits (HBM), 3200 nits peak | GPU: Adreno | RAM: 12GB LPDDR5X | Storage: 512GB UFS 4.1 | LiquidCool Tech 4.0 | IceLoop System",
      generalFeatures:
        "Dimensions: 160.26 x 74.95 x 8.12mm | Weight: 206g | Dual SIM (nano + nano) | 5G/4G/3G/2G supported | Bluetooth 5.4, Dual-Bluetooth | NFC | IR blaster | Dual-frequency GPS | Ultrasonic in-display fingerprint | Stereo Dual Speaker | Powered by Xiaomi HyperOS",
    },
    specs: {
      display: '6.67" 2K AMOLED',
      resolution: "3200×1440",
      processor: "Snapdragon 8 Gen 3, Adreno GPU",
      refreshRate: "Up to 120Hz",
      battery: "6000mAh",
      os: "Xiaomi HyperOS",
    },
  },
  {
    id: "xiaomi-pad-7-8gb-256gb",
    name: "Xiaomi Pad 7 (8GB+256GB)",
    slug: "xiaomi-pad-7-8gb-256gb",
    brand: "Xiaomi",
    category: "gear-and-devices",
    images: [
      "https://mistore.pk/cdn/shop/files/xiaomi_pad_7_new_product_gree_300x.webp?v=1742196658",
      "/images/xiaomi-pad-7-back.jpg",
    ],
    price: 124999,
    dateAdded: "2025-05-14T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://mistore.pk/cdn/shop/files/xiaomi_pad_7_new_product_gree_grande.webp?v=1742196658",
      "https://mistore.pk/cdn/shop/files/xiaomi_pad_7_blue_new_product_grande.webp?v=1742196658",
      "https://mistore.pk/cdn/shop/files/Xiaomi_pad_7_new_product_Black_grande.webp?v=1742196658",
    ],
    keyFeatures: {
      display: '3.2K ultra-clear primary color screen, 11.2"',
      resolution: "345 PPI, 800nits max brightness",
      processorModel: "Snapdragon 7+ Gen 3",
      processorProcess: "",
      processorCores: "Octa-core",
      cpuSpeed: "",
      refreshRate: "144Hz seven-speed variable",
      fingerprintUnlock: false,
      faceUnlock: false,
      rearCamera: "",
      frontCamera: "",
      battery: "8850mAh large battery",
      charging: "45W wired charging",
      wetTouchTechnology: "",
      otherFeatures:
        "Software & hardware synergy for deep eye protection | 3:2 productivity ratio | Nano soft light screen AG+AR | Flagship Quad Speaker | Full-range mechanical touchpad | Xiaomi Surge OS 2",
      generalFeatures:
        "New floating keyboard | Ready to use | 0°–124° stepless adjustment | Adaptive backlight adjustment | AI text expansion, summarization, conferencing tools | Cross-end intelligent connection & multi-device collaboration",
    },
    specs: {
      display: '11.2" 3.2K',
      resolution: "345 PPI",
      processor: "Snapdragon 7+ Gen 3",
      refreshRate: "144Hz",
      battery: "8850mAh",
      os: "Xiaomi Surge OS 2",
    },
  },
  {
    id: "xiaomi-15-ultra-16gb-512gb",
    name: "Xiaomi 15 Ultra (16GB+512GB)",
    slug: "xiaomi-15-ultra-16gb-512gb",
    brand: "Xiaomi",
    category: "smartphones",
    images: [
      "https://mistore.pk/cdn/shop/files/xiaomi_15_ultra_black_300x.webp?v=1742195858",
      "/images/xiaomi-15-ultra-back.jpg",
    ],
    price: 399999,
    dateAdded: "2025-05-22T08:00:00Z",
    rating: 0,
    displayImages: [
      "https://mistore.pk/cdn/shop/files/xiaomi_15_ultra_black_grande.webp?v=1742195858",
      "https://mistore.pk/cdn/shop/files/xaiomi_15_ultra_white_color_grande.webp?v=1742195858",
      "https://mistore.pk/cdn/shop/files/xioami_15_ultra_silver_grande.webp?v=1742195816",
    ],
    keyFeatures: {
      display: '6.73" WQHD+ AMOLED, 120Hz refresh, 3200 nits brightness',
      resolution: "3200 x 1440, 522 ppi",
      processorModel: "Snapdragon 8 Gen 3",
      processorProcess: "3nm",
      processorCores: "2 x Prime, 6 x Performance",
      cpuSpeed: "Up to 3.53GHz",
      refreshRate: "120Hz",
      fingerprintUnlock: true,
      faceUnlock: true,
      rearCamera:
        "50MP (Main) + 200MP (Ultra Telephoto) + 50MP (Floating Telephoto) + 50MP (Ultra-Wide)",
      frontCamera: "32MP in-display selfie camera",
      battery: "5410mAh",
      charging: "90W wired, 80W wireless HyperCharge",
      wetTouchTechnology: "",
      otherFeatures:
        "Touch sampling rate: Up to 300Hz; IP68 rated; Dual SIM (nano + eSIM); Wi-Fi 7, Bluetooth 6.0, NFC, USB-C",
      generalFeatures:
        "Stereo speakers with Dolby Atmos; Hi-Res & Hi-Res Audio Wireless; Xiaomi 3D Dual-Channel IceLoop cooling; In-screen Ultrasonic Fingerprint Sensor; AI Face Unlock; Sensors: Proximity, Ambient Light, Accelerometer, Gyroscope, Compass, IR Blaster, Laser Autofocus, Barometer, Flicker Sensor, X-axis Linear Vibration Motor",
    },
    specs: {
      display: '6.73" WQHD+ AMOLED',
      resolution: "3200 x 1440",
      processor: "Snapdragon 8 Gen 3, 3nm",
      refreshRate: "120Hz",
      battery: "5410mAh",
      os: "Xiaomi HyperOS 2",
    },
  },
];
