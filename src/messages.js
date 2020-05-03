// pt-BR
import { logo_ptBR } from './components/Logo/intl.ptBR.js';
import { icon_ptBR } from './components/Icon/intl.ptBR.js';
import { frame_ptBR } from './components/Frame/intl.ptBR.js';
import { header_ptBR } from './components/Header/intl.ptBR.js';
import { footer_ptBR } from './components/Footer/intl.ptBR.js';
import { sidebar_ptBR } from './components/Sidebar/intl.ptBR.js';
import { home_ptBR } from './pages/Home/intl.ptBR.js';
import { about_ptBR } from './pages/About/intl.ptBR.js';
import { tech_ptBR } from './pages/Tech/intl.ptBR.js';
import { contact_ptBR } from './pages/Contact/intl.ptBR.js';

// en-US
import { logo_enUS } from './components/Logo/intl.enUS.js';
import { icon_enUS } from './components/Icon/intl.enUS.js';
import { frame_enUS } from './components/Frame/intl.enUS.js';
import { header_enUS } from './components/Header/intl.enUS';
import { footer_enUS } from './components/Footer/intl.enUS.js';
import { sidebar_enUS } from './components/Sidebar/intl.enUS.js';
import { home_enUS } from './pages/Home/intl.enUS.js';
import { about_enUS } from './pages/About/intl.enUS.js';
import { tech_enUS } from './pages/Tech/intl.enUS.js';
import { contact_enUS } from './pages/Contact/intl.enUS.js';

const messages = Object.freeze({
  'en-US': {
    logo: logo_enUS,
    icon: icon_enUS,
    frame: frame_enUS,
    header: header_enUS,
    footer: footer_enUS,
    sidebar: sidebar_enUS,
    home: home_enUS,
    about: about_enUS,
    tech: tech_enUS,
    contact: contact_enUS,
  },
  'pt-BR': {
    logo: logo_ptBR,
    icon: icon_ptBR,
    frame: frame_ptBR,
    header: header_ptBR,
    footer: footer_ptBR,
    sidebar: sidebar_ptBR,
    home: home_ptBR,
    about: about_ptBR,
    tech: tech_ptBR,
    contact: contact_ptBR,
  },
});

export { messages };
