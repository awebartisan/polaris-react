const Breakpoints = {
  typographyCondensed: '640px',
  navigationBarCollapsed: '768px',
  stackedContent: '1043px',
};

const noWindowMatches: MediaQueryList = {
  media: '',
  addListener: noop,
  removeListener: noop,
  matches: false,
  onchange: noop,
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: (_: Event) => true,
};

function noop() {}

export function typographyCondensed() {
  return typeof window === 'undefined'
    ? noWindowMatches
    : window.matchMedia(`(min-width: ${Breakpoints.typographyCondensed})`);
}

export function navigationBarCollapsed() {
  return typeof window === 'undefined'
    ? noWindowMatches
    : window.matchMedia(`(max-width: ${Breakpoints.navigationBarCollapsed})`);
}

export function stackedContent() {
  return typeof window === 'undefined'
    ? noWindowMatches
    : window.matchMedia(`(max-width: ${Breakpoints.stackedContent})`);
}
