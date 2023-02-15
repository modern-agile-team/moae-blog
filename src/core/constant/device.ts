const DEVICE = {
  DESK_TOP: "desktop", // 1920
  LAP_TOP: "laptop", // 1440
  TABLET: "tablet", // 1024
  MOBILE: "mobile", // 768
} as const;

export default DEVICE;

// 1920: 5
// 1440: 4
// 1024: 3
// 768: 2
// 568: 1
