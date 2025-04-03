export function useApp() {
  const state = useState('AppState', () => ({
    showSidebar: true,
    showCustomizer: true
  }));

  return { state };
}
