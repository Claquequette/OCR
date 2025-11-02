// config.js
// Tesseract.js OCR configuration file

import Tesseract from 'tesseract.js';

export const ocrConfig = {
  // Language(s) for text recognition ('eng', 'spa', 'eng+fra', etc.)
  lang: 'eng', // English by default

  // OCR engine mode (Page Segmentation Mode)
  // 0 = Orientation and script detection (OSD) only
  // 1 = Automatic page segmentation with OSD
  // 3 = Fully automatic page segmentation
  // 6 = Assume a single uniform block of text
  tessedit_pageseg_mode: 3,

  // Optional logging function (useful for progress tracking)
  logger: (m) =>
    console.log(`[Tesseract] ${m.status}: ${Math.round(m.progress * 100)}%`),

  // Path to language data files (optional)
  langPath: './tessdata', // local path to .traineddata files
};

// Utility function to run OCR on an image
export async function runOCR(imagePath) {
  try {
    console.log('Starting OCR on:', imagePath);

    const result = await Tesseract.recognize(
      imagePath,
      ocrConfig.lang,
      {
        logger: ocrConfig.logger,
        tessedit_pageseg_mode: ocrConfig.tessedit_pageseg_mode,
      }
    );

    console.log('OCR complete.');
    return result.data.text.trim();
  } catch (err) {
    console.error('OCR error:', err);
    throw err;
  }
}
