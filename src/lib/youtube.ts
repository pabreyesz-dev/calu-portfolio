// Configuración de videos de YouTube
export interface YouTubeVideo {
  id: string;
  title: string;
  description?: string;
  thumbnail?: string;
  publishedAt?: string;
  videoId: string; // ID del video de YouTube
}

// Videos de YouTube de Calú
// Para obtener el videoId: de la URL https://www.youtube.com/watch?v=VIDEO_ID, copia el VIDEO_ID
export const youtubeVideos: YouTubeVideo[] = [
  {
    id: 'pop-video',
    title: 'POP',
    description: 'VIDEOCLIP OFICIAL POP',
    videoId: 'm77YIiZbPMI',
    publishedAt: '2025'
  },
  {
    id: 'instagram',
    title: 'INSTAGRAM',
    description: 'VIDEOCLIP OFICIAL INSTAGRAM',
    videoId: '3yzUR4OBeS8',
    publishedAt: '2025'
  },
  {
    id: 'vas a ser mio',
    title: 'VAS A SER MÍO',
    description: 'VIDEOCLIP OFICIAL VAS A SER MÍO',
    videoId: 'euG63JvOaxs',
    publishedAt: '2024'
  },
  {
    id: 'violenta',
    title: 'VIOLENTA',
    description: 'VIDEOCLIP OFICIAL VIOLENTA',
    videoId: 'PGA1hJDP4pA',
    publishedAt: '2023'
  },
  {
    id: 'dependencia',
    title: 'DEPENDENCIA',
    description: 'VIDEOCLIP OFICIAL DEPENDENCIA',
    videoId: 'rlFMWKYDevM',
    publishedAt: '2023'
  },
  {
    id: 'no puedo obligarte',
    title: 'NO PUEDO OBLIGARTE',
    description: 'VIDEOCLIP OFICIAL NO PUEDO OBLIGARTE',
    videoId: 'vGXtNImQYtI',
    publishedAt: '2023'
  },
  {
    id: 'ritual',
    title: 'RITUAL',
    description: 'VIDEOCLIP OFICIAL RITUAL',
    videoId: 'cfyZZt7sfH0',
    publishedAt: '2022'
  },
  {
    id: 'irma',
    title: 'IRMA',
    description: 'VIDEOLYRIC OFICIAL IRMA',
    videoId: 'EeCKE9kkc3A',
    publishedAt: '2022'
  },
  {
    id: 'castillo',
    title: 'CASTILLO',
    description: 'VIDEOCLIP OFICIAL CASTILLO',
    videoId: 'TQ0029Z9gno',
    publishedAt: '2022'
  }
];

// Función para extraer videoId de una URL de YouTube
export function extractVideoId(url: string): string {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : '';
}

// Función para obtener thumbnail de YouTube
export function getYouTubeThumbnail(videoId: string, quality: 'default' | 'medium' | 'high' | 'maxres' = 'maxres'): string {
  const qualities = {
    default: 'default.jpg',
    medium: 'mqdefault.jpg',
    high: 'hqdefault.jpg',
    maxres: 'maxresdefault.jpg'
  };
  return `https://img.youtube.com/vi/${videoId}/${qualities[quality]}`;
}

