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
    id: 'video-1',
    title: 'Video 1',
    description: 'Descripción del video',
    videoId: '', // Reemplazar con el ID del video
    publishedAt: '2025'
  },
  {
    id: 'video-2',
    title: 'Video 2',
    description: 'Descripción del video',
    videoId: '', // Reemplazar con el ID del video
    publishedAt: '2024'
  },
  {
    id: 'video-3',
    title: 'Video 3',
    description: 'Descripción del video',
    videoId: '', // Reemplazar con el ID del video
    publishedAt: '2024'
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

