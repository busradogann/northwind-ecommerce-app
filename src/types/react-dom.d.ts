declare module 'react-dom' {
  import * as React from 'react';
  
  export function render(
    element: React.ReactElement,
    container: Element | null,
    callback?: () => void
  ): void;
  
  export function hydrate(
    element: React.ReactElement,
    container: Element,
    callback?: () => void
  ): void;
  
  export function unmountComponentAtNode(container: Element): boolean;
  
  export function findDOMNode(instance: React.Component | Element | null): Element | null;
  
  export function createPortal(
    children: React.ReactNode,
    container: Element,
    key?: string | null
  ): React.ReactPortal;
  
  export const version: string;
  
  export default {
    render,
    hydrate,
    unmountComponentAtNode,
    findDOMNode,
    createPortal,
    version
  };
}
