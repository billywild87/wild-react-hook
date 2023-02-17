import React, { ElementType, ComponentProps } from 'react';

/**
 * Hooks instancy Factory
 * @param components
 * @param type
 * @returns
 */

export function useCreateFactory(components: { [key: string]: ElementType }, type: string) {
  return (props: ComponentProps<ElementType> = {}) => {
    const Component = components[type];
    if (Component !== undefined) return <Component {...props} />
    return null;
  };
}
