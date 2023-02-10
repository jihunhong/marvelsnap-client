import { Styles } from 'react-modal';

export const style: Styles = {
  overlay: {
    zIndex: 'var(--layer-modal)',
    backgroundColor: 'var(--modal-backdrop)',
  },
  content: {
    padding: '0',
    backgroundColor: 'var(--modal-background)',
    border: 'none',
    boxShadow: 'var(--modal-boxshadow)',
    inset: '0px',
    width: '100vw',
    height: '100vh',
  },
};
