// Script para manejar traducciones en el cliente
export const translations = {
  es: {
    // Navbar
    biography: 'Biografía',
    music: 'Música',
    myMusic: 'Mi Música',
    galery: 'Galería',
    events: 'Eventos',
    press: 'Prensa',
    contact: 'Contacto',
    home: 'Inicio',
    
    // Home
    welcomeTitle: 'Bienvenido a mi mundo musical',
    welcomeSubtitle: 'Explorando nuevos sonidos, emociones y formas de expresión artística. Cada canción es un viaje, cada nota una historia. Te invito a ser parte de esta experiencia musical.',
    
    // Sections
    myArt: 'Mi Arte',
    discoverArt: 'Descubre lo que define mi carrera artística',
    versátilArtist: 'Artista Versátil',
    versátilDesc: 'Cantante y compositora con una voz única y presencia escénica cautivadora en cada presentación',
    originalMusic: 'Música Original',
    originalDesc: 'Más de 50 canciones propias que exploran emociones profundas y sonidos contemporáneos',
    liveShows: 'En Vivo',
    liveDesc: 'Presentaciones en escenarios nacionales e internacionales con conexión auténtica con el público',
    
    // Recent songs
    recentSongs: 'Últimas Canciones',
    recentSongsSubtitle: 'Escucha mis composiciones más recientes',
    viewAllSongs: 'Ver todas las canciones',
    
    // CTA
    wantMore: '¿Quieres saber más?',
    exploreMore: 'Explora mi biografía, galería de fotos y próximos eventos',
    myBiography: 'Mi Biografía',
    gallery: 'Galería',
    contactMe: 'Contactame',
    
    // Footer
    followMe: 'Sígueme',
    links: 'Enlaces',
    
    // Theme
    themeLabel: 'Tema',
    languageLabel: 'Idioma',
  },
  en: {
    // Navbar
    biography: 'Biography',
    music: 'Music',
    myMusic: 'My Music',
    galery: 'Gallery',
    events: 'Events',
    press: 'Press',
    contact: 'Contact',
    home: 'Home',
    
    // Home
    welcomeTitle: 'Welcome to my musical world',
    welcomeSubtitle: 'Exploring new sounds, emotions and forms of artistic expression. Every song is a journey, every note a story. I invite you to be part of this musical experience.',
    
    // Sections
    myArt: 'My Art',
    discoverArt: 'Discover what defines my artistic career',
    versátilArtist: 'Versatile Artist',
    versátilDesc: 'Singer and songwriter with a unique voice and captivating stage presence in every performance',
    originalMusic: 'Original Music',
    originalDesc: 'Over 50 original songs exploring deep emotions and contemporary sounds',
    liveShows: 'Live Shows',
    liveDesc: 'Performances on national and international stages with authentic connection with the audience',
    
    // Recent songs
    recentSongs: 'Recent Songs',
    recentSongsSubtitle: 'Listen to my most recent compositions',
    viewAllSongs: 'View all songs',
    
    // CTA
    wantMore: 'Want to know more?',
    exploreMore: 'Explore my biography, photo gallery and upcoming events',
    myBiography: 'My Biography',
    gallery: 'Gallery',
    contactMe: 'Contact me',
    
    // Footer
    followMe: 'Follow me',
    links: 'Links',
    
    // Theme
    themeLabel: 'Theme',
    languageLabel: 'Language',
  }
};

export function applyTranslations(lang: 'es' | 'en') {
  const t = translations[lang];
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-language', lang);
  
  // Actualizar elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && t[key as keyof typeof t]) {
      el.textContent = t[key as keyof typeof t];
    }
  });
}

export function getCurrentLanguage(): 'es' | 'en' {
  return (localStorage.getItem('language') || 'es') as 'es' | 'en';
}

