/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/redux';
import {
  Tool,
} from './interfaces/interfaces';


export namespace Components {

  interface AlephControlPanel {
    'addTool': (tool: Tool) => void;
    'removeTool': (id: number) => void;
    'saveTools': () => void;
    'selectTool': (id: number) => void;
    'selectedTool': number;
    'tools': Tool[];
  }
  interface AlephControlPanelAttributes extends StencilHTMLAttributes {
    'addTool'?: (tool: Tool) => void;
    'removeTool'?: (id: number) => void;
    'saveTools'?: () => void;
    'selectTool'?: (id: number) => void;
    'selectedTool'?: number;
    'tools'?: Tool[];
  }

  interface UvAleph {
    'dracoDecoderPath': string | null;
    'setSrc': (src: string) => Promise<void>;
  }
  interface UvAlephAttributes extends StencilHTMLAttributes {
    'dracoDecoderPath'?: string | null;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AlephControlPanel': Components.AlephControlPanel;
    'UvAleph': Components.UvAleph;
  }

  interface StencilIntrinsicElements {
    'aleph-control-panel': Components.AlephControlPanelAttributes;
    'uv-aleph': Components.UvAlephAttributes;
  }


  interface HTMLAlephControlPanelElement extends Components.AlephControlPanel, HTMLStencilElement {}
  var HTMLAlephControlPanelElement: {
    prototype: HTMLAlephControlPanelElement;
    new (): HTMLAlephControlPanelElement;
  };

  interface HTMLUvAlephElement extends Components.UvAleph, HTMLStencilElement {}
  var HTMLUvAlephElement: {
    prototype: HTMLUvAlephElement;
    new (): HTMLUvAlephElement;
  };

  interface HTMLElementTagNameMap {
    'aleph-control-panel': HTMLAlephControlPanelElement
    'uv-aleph': HTMLUvAlephElement
  }

  interface ElementTagNameMap {
    'aleph-control-panel': HTMLAlephControlPanelElement;
    'uv-aleph': HTMLUvAlephElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
