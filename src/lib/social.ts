// Configuración de redes sociales
export interface SocialLink {
  name: string;
  url: string;
  icon: string; // SVG path o nombre del icono
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/calu_music',
    icon: 'instagram',
    ariaLabel: 'Sígueme en Instagram'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@calu_music',
    icon: 'youtube',
    ariaLabel: 'Visita mi canal de YouTube'
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/intl-es/artist/7l8ZnvSgps3wMZWonJTgUk',
    icon: 'spotify',
    ariaLabel: 'Escucha mi música en Spotify'
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@calu_music1',
    icon: 'tiktok',
    ariaLabel: 'Sígueme en TikTok'
  }
];

// Función para obtener solo las redes sociales activas (con URL válida)
export function getActiveSocialLinks(): SocialLink[] {
  return socialLinks.filter(link => link.url !== '#');
}

