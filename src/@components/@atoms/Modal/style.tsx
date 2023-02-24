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

export const variantStyle: Styles = {
  overlay: {
    zIndex: 'var(--layer-modal)',
    backgroundColor: 'var(--modal-backdrop)',
  },
  content: {
    padding: '0',
    backgroundColor: 'var(--modal-backdrop)',
    border: 'none',
    boxShadow: 'var(--modal-boxshadow)',
    inset: '0px',
    width: '100vw',
    height: '100vh',
  },
};

export const smallStyle: Styles = {
  content: {
    padding: '20px',
    backgroundColor: 'var(--black-background)',
    border: 'none',
    boxShadow: 'var(--modal-boxshadow)',
    margin: 'auto',
    inset: '0',
    width: 'min(100%, 800px)',
    height: 'min(95vh, 800px)',
  },
  overlay: {
    zIndex: 'var(--layer-modal)',
    backgroundColor: 'var(--modal-backdrop)',
    width: '100vw',
    height: '100vh',
  },
};
