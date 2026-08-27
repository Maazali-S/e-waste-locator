import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

let model = null;

export async function detectDevice(imageElement) {
  if (!model) {
    model = await cocoSsd.load();
  }

  const predictions = await model.detect(imageElement);

  return predictions;
}