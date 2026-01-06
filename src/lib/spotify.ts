// Configuración y utilidades de Spotify
export const SPOTIFY_ARTIST_ID = '7l8ZnvSgps3wMZWonJTgUk';
export const SPOTIFY_ARTIST_URL = 'https://open.spotify.com/intl-es/artist/7l8ZnvSgps3wMZWonJTgUk';

export interface Album {
  id: string;
  name: string;
  image: string;
  releaseDate: string;
  spotifyUrl: string;
  type: 'album' | 'single' | 'ep';
  colors?: {
    primary: string;
    accent: string;
    secondary: string;
  };
}

// Función para extraer color predominante de una imagen
export async function extractDominantColor(imageUrl: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve('#EC4899'); // Color por defecto
        return;
      }
      
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      // Obtener datos de píxeles
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Calcular color promedio (método simple)
      let r = 0, g = 0, b = 0;
      let count = 0;
      
      // Muestrear algunos píxeles para mejor rendimiento
      const step = Math.max(1, Math.floor(data.length / 4 / 1000));
      
      for (let i = 0; i < data.length; i += 4 * step) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        count++;
      }
      
      r = Math.floor(r / count);
      g = Math.floor(g / count);
      b = Math.floor(b / count);
      
      // Convertir a hexadecimal
      const hex = `#${[r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('')}`;
      
      resolve(hex);
    };
    
    img.onerror = () => {
      resolve('#EC4899'); // Color por defecto en caso de error
    };
    
    img.src = imageUrl;
  });
}

// Función para generar colores del tema basados en un color base
export function generateThemeColors(baseColor: string): { primary: string; accent: string; secondary: string } {
  // Convertir hex a RGB
  const hex = baseColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Generar variaciones
  const primary = baseColor;
  
  // Accent: versión más clara (aumentar brillo)
  const accentR = Math.min(255, Math.floor(r * 1.3));
  const accentG = Math.min(255, Math.floor(g * 1.3));
  const accentB = Math.min(255, Math.floor(b * 1.3));
  const accent = `#${[accentR, accentG, accentB].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('')}`;
  
  // Secondary: versión más oscura (reducir brillo)
  const secondaryR = Math.max(0, Math.floor(r * 0.6));
  const secondaryG = Math.max(0, Math.floor(g * 0.6));
  const secondaryB = Math.max(0, Math.floor(b * 0.6));
  const secondary = `#${[secondaryR, secondaryG, secondaryB].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('')}`;
  
  return { primary, accent, secondary };
}

