import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    
    {
      type: 'category',
      label: 'Primeros Pasos',
      collapsed: false,
      items: [
        'getting-started/primeros-pasos',
      ],
    },
    
    {
      type: 'category',
      label: 'Características',
      collapsed: true,
      items: [
        'features/README',
        'features/constructor-visual',
        'features/configuracion-pagos',
        'features/reportes',
        'features/inventario',
        'features/usuarios-equipo',
        'features/tablerokanban',
        'features/metodos-pago',
      ],
    },

    {
      type: 'category',
      label: 'Soporte',
      collapsed: true,
      items: [
        'faq',
        'calculo-costos',
        'contacto',
      ],
    },
  ],
};

export default sidebars;
