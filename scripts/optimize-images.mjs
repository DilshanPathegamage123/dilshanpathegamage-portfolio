// One-off/re-runnable image optimization pipeline.
// Reads large source photos/screenshots from the untracked-by-build source
// folders and writes resized, compressed WebP copies into src/assets/images,
// which is what the app actually imports and ships to the browser.
//
// Re-run with `npm run optimize-images` any time source photos change.

import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const IMG = path.join(ROOT, "images");
const MY = path.join(ROOT, "my_images "); // NOTE: trailing space in folder name
const ML = path.join(ROOT, "ml_project_images");
const OUT = path.join(ROOT, "src/assets/images");

/** @type {{src: string, out: string, width: number, quality: number}[]} */
const manifest = [
  // Profile photos
  { src: path.join(MY, "img1.jpg"), out: "profile/hero.webp", width: 900, quality: 80 },
  { src: path.join(MY, "img3.jpg"), out: "profile/about.webp", width: 800, quality: 78 },

  // TicketMate
  { src: path.join(IMG, "44.png"), out: "projects/ticketmate/cover.webp", width: 900, quality: 74 },
  { src: path.join(IMG, "TicketMateHome2.jpg"), out: "projects/ticketmate/g1.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "TravelOptionsPage1.jpg"), out: "projects/ticketmate/g2.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "TravelOptionsPage2.jpg"), out: "projects/ticketmate/g3.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "Login.png"), out: "projects/ticketmate/g4.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "LoginPage.PNG"), out: "projects/ticketmate/g5.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "BusBookingPage1.PNG"), out: "projects/ticketmate/g6.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "TrainBookingPage1.PNG"), out: "projects/ticketmate/g7.webp", width: 1400, quality: 74 },

  // MozzaMelt
  { src: path.join(IMG, "MozzaMelt3.jpg"), out: "projects/mozzamelt/cover.webp", width: 900, quality: 74 },
  { src: path.join(IMG, "MozzaMelt1.jpg"), out: "projects/mozzamelt/g1.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "MozzaMelt2.jpg"), out: "projects/mozzamelt/g2.webp", width: 1400, quality: 74 },

  // CryptoX
  { src: path.join(IMG, "Mock1.png"), out: "projects/cryptox/cover.webp", width: 900, quality: 74 },
  { src: path.join(IMG, "Mock2.png"), out: "projects/cryptox/g1.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "CryLogin.png"), out: "projects/cryptox/g2.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "buy.png"), out: "projects/cryptox/g3.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "Tracking.png"), out: "projects/cryptox/g4.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "News.png"), out: "projects/cryptox/g5.webp", width: 1400, quality: 74 },

  // CoachMe
  { src: path.join(IMG, "Co-Mock1.png"), out: "projects/coachme/cover.webp", width: 900, quality: 74 },
  { src: path.join(IMG, "Co-Mock3.png"), out: "projects/coachme/g1.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "Co-Mock4.png"), out: "projects/coachme/g2.webp", width: 1400, quality: 74 },

  // Multi-Colour Wall Art Machine
  { src: path.join(IMG, "img4.jpg"), out: "projects/wall-art-machine/cover.webp", width: 900, quality: 74 },
  { src: path.join(IMG, "img5.jpg"), out: "projects/wall-art-machine/g1.webp", width: 1400, quality: 74 },

  // NeurA
  { src: path.join(IMG, "Neura_Mock2.png"), out: "projects/neura/cover.webp", width: 900, quality: 74 },
  { src: path.join(IMG, "Code.PNG"), out: "projects/neura/g1.webp", width: 1400, quality: 74 },

  // SimiliFy
  { src: path.join(IMG, "SimilifyMockImg1.png"), out: "projects/similify/cover.webp", width: 900, quality: 74 },
  { src: path.join(IMG, "SimilifyImg1.PNG"), out: "projects/similify/g1.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "SimilifyImg2.PNG"), out: "projects/similify/g2.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "SimilifyImg3.PNG"), out: "projects/similify/g3.webp", width: 1400, quality: 74 },
  { src: path.join(IMG, "SimilifyImg4.PNG"), out: "projects/similify/g4.webp", width: 1400, quality: 74 },

  // Tourist Arrivals ML
  { src: path.join(ML, "shap_summary_final.png"), out: "projects/tourist-arrivals-ml/cover.webp", width: 1200, quality: 82 },
  { src: path.join(ML, "rf_feature_importance.png"), out: "projects/tourist-arrivals-ml/g1.webp", width: 1400, quality: 82 },
  { src: path.join(ML, "shap_importance_final.png"), out: "projects/tourist-arrivals-ml/g2.webp", width: 1400, quality: 82 },
  { src: path.join(ML, "shap_waterfall_sample.png"), out: "projects/tourist-arrivals-ml/g3.webp", width: 1400, quality: 82 },
  { src: path.join(ML, "shap_dependence_Lag_1_Month.png"), out: "projects/tourist-arrivals-ml/g4.webp", width: 1400, quality: 82 },
  { src: path.join(ML, "shap_dependence_Growth_3M.png"), out: "projects/tourist-arrivals-ml/g5.webp", width: 1400, quality: 82 },
  { src: path.join(ML, "shap_dependence_Market_Share.png"), out: "projects/tourist-arrivals-ml/g6.webp", width: 1400, quality: 82 },
];

async function run() {
  let ok = 0;
  let failed = 0;
  for (const item of manifest) {
    const outPath = path.join(OUT, item.out);
    await mkdir(path.dirname(outPath), { recursive: true });
    try {
      await sharp(item.src)
        .resize({ width: item.width, withoutEnlargement: true })
        .webp({ quality: item.quality })
        .toFile(outPath);
      ok++;
    } catch (err) {
      failed++;
      console.error(`✗ ${item.src} -> ${item.out}:`, err.message);
    }
  }
  console.log(`\nOptimized ${ok} image(s), ${failed} failed.`);
}

run();
