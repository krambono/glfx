import Texture from '../src/texture';

interface Texture {
  loadContentsOf(element: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement): void;
  destroy(): void;
}

interface GLFXDrawer {
  getCanvas(): HTMLCanvasElement;
  texture(element: HTMLImageElement | HTMLVideoElement | HTMLCanvasElement): Texture;
  draw(texture: Texture): GLFXDrawer;
  update(): void;
  replace();
  contents(): Texture;
  getPixelArray(): Uint8Array;

  brightnessContrast(brightness: number, contrast: number): GLFXDrawer;
  hexagonalPixelate(): GLFXDrawer;
  hueSaturation(hue: number, saturation: number): GLFXDrawer;
  colorHalftone(centerX: number, centerY: number, angle: number, size: number): GLFXDrawer;
  triangleBlur(radius: number): GLFXDrawer;
  unsharpMask(radius: number, strength: number): GLFXDrawer;
  perspective(): GLFXDrawer;
  matrixWarp(): GLFXDrawer;
  bulgePinch(centerX: number, centerY: number, radius: number, strength: number): GLFXDrawer;
  tiltShift(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    blurRadius: number,
    gradientRadius: number
  ): GLFXDrawer;
  dotScreen(centerX: number, centerY: number, angle: number, size: number): GLFXDrawer;
  edgeWork(radius: number): GLFXDrawer;
  lensBlur(radius: number, brightness: number, angle: number): GLFXDrawer;
  zoomBlur(centerX: number, centerY: number, strength: number): GLFXDrawer;
  noise(amount: number): GLFXDrawer;
  denoise(exponent: number): GLFXDrawer;
  curves(): GLFXDrawer;
  swirl(centerX: number, centerY: number, radius: number, angle: number): GLFXDrawer;
  ink(strength: number): GLFXDrawer;
  vignette(size: number, amount: number): GLFXDrawer;
  vibrance(amount: number): GLFXDrawer;
  sepia(amount: number): GLFXDrawer;
  negative(): GLFXDrawer;
}

export function createDrawer(): GLFXDrawer;
