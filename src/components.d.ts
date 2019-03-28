/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/redux';
import {
  DisplayMode,
} from './enums/DisplayMode';
import {
  Orientation,
} from './enums/Orientation';
import {
  AlNodeSerial,
} from './interfaces';
import {
  DisplayMode as DisplayMode2,
} from './enums';


export namespace Components {

  interface AlControlPanel {
    'boundingBoxVisible': boolean;
    'displayMode': DisplayMode;
    'nodes': Map<string, AlNodeSerial>;
    'nodesEnabled': boolean;
    'nodesVisible': boolean;
    'optionsEnabled': boolean;
    'optionsVisible': boolean;
    'orientation': Orientation;
    'selectedNode': string | null;
    'slicesIndex': number;
    'slicesWindowCenter': number;
    'slicesWindowWidth': number;
    'stack': any;
    'stackHelper': AMI.StackHelper;
    'volumeSteps': number;
    'volumeWindowCenter': number;
    'volumeWindowWidth': number;
  }
  interface AlControlPanelAttributes extends StencilHTMLAttributes {
    'boundingBoxVisible'?: boolean;
    'displayMode'?: DisplayMode;
    'nodes'?: Map<string, AlNodeSerial>;
    'nodesEnabled'?: boolean;
    'nodesVisible'?: boolean;
    'onOnSetBoundingBoxVisible'?: (event: CustomEvent) => void;
    'onOnSetDisplayMode'?: (event: CustomEvent) => void;
    'onOnSetNodesEnabled'?: (event: CustomEvent) => void;
    'onOnSetOptionsEnabled'?: (event: CustomEvent) => void;
    'onOnSetOrientation'?: (event: CustomEvent) => void;
    'onOnSetSlicesIndex'?: (event: CustomEvent) => void;
    'onOnSetSlicesWindowCenter'?: (event: CustomEvent) => void;
    'onOnSetSlicesWindowWidth'?: (event: CustomEvent) => void;
    'onOnSetVolumeSteps'?: (event: CustomEvent) => void;
    'onOnSetVolumeWindowCenter'?: (event: CustomEvent) => void;
    'onOnSetVolumeWindowWidth'?: (event: CustomEvent) => void;
    'optionsEnabled'?: boolean;
    'optionsVisible'?: boolean;
    'orientation'?: Orientation;
    'selectedNode'?: string | null;
    'slicesIndex'?: number;
    'slicesWindowCenter'?: number;
    'slicesWindowWidth'?: number;
    'stack'?: any;
    'stackHelper'?: AMI.StackHelper;
    'volumeSteps'?: number;
    'volumeWindowCenter'?: number;
    'volumeWindowWidth'?: number;
  }

  interface AlNodeEditor {
    'node': AlNodeSerial;
  }
  interface AlNodeEditorAttributes extends StencilHTMLAttributes {
    'node'?: AlNodeSerial;
    'onOnDelete'?: (event: CustomEvent) => void;
    'onOnSave'?: (event: CustomEvent) => void;
  }

  interface AlNodeList {
    'nodes': Map<string, AlNodeSerial>;
    'selectedNode': string | null;
  }
  interface AlNodeListAttributes extends StencilHTMLAttributes {
    'nodes'?: Map<string, AlNodeSerial>;
    'onOnSelectedNodeChanged'?: (event: CustomEvent) => void;
    'selectedNode'?: string | null;
  }

  interface UvAleph {
    'clearNodes': () => Promise<void>;
    'debug': boolean;
    'deleteNode': (nodeId: string) => Promise<void>;
    'dracoDecoderPath': string | null;
    'height': string;
    'load': (src: string) => Promise<void>;
    'selectNode': (nodeId: string) => Promise<void>;
    'setBoundingBoxVisible': (visible: boolean) => Promise<void>;
    'setDisplayMode': (displayMode: DisplayMode) => Promise<void>;
    'setNode': (node: AlNodeSerial) => Promise<void>;
    'setNodes': (nodes: Map<string, AlNodeSerial>) => Promise<void>;
    'setNodesEnabled': (enabled: boolean) => Promise<void>;
    'spinnerColor': string;
    'width': string;
  }
  interface UvAlephAttributes extends StencilHTMLAttributes {
    'debug'?: boolean;
    'dracoDecoderPath'?: string | null;
    'height'?: string;
    'onOnChanged'?: (event: CustomEvent) => void;
    'spinnerColor'?: string;
    'width'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AlControlPanel': Components.AlControlPanel;
    'AlNodeEditor': Components.AlNodeEditor;
    'AlNodeList': Components.AlNodeList;
    'UvAleph': Components.UvAleph;
  }

  interface StencilIntrinsicElements {
    'al-control-panel': Components.AlControlPanelAttributes;
    'al-node-editor': Components.AlNodeEditorAttributes;
    'al-node-list': Components.AlNodeListAttributes;
    'uv-aleph': Components.UvAlephAttributes;
  }


  interface HTMLAlControlPanelElement extends Components.AlControlPanel, HTMLStencilElement {}
  var HTMLAlControlPanelElement: {
    prototype: HTMLAlControlPanelElement;
    new (): HTMLAlControlPanelElement;
  };

  interface HTMLAlNodeEditorElement extends Components.AlNodeEditor, HTMLStencilElement {}
  var HTMLAlNodeEditorElement: {
    prototype: HTMLAlNodeEditorElement;
    new (): HTMLAlNodeEditorElement;
  };

  interface HTMLAlNodeListElement extends Components.AlNodeList, HTMLStencilElement {}
  var HTMLAlNodeListElement: {
    prototype: HTMLAlNodeListElement;
    new (): HTMLAlNodeListElement;
  };

  interface HTMLUvAlephElement extends Components.UvAleph, HTMLStencilElement {}
  var HTMLUvAlephElement: {
    prototype: HTMLUvAlephElement;
    new (): HTMLUvAlephElement;
  };

  interface HTMLElementTagNameMap {
    'al-control-panel': HTMLAlControlPanelElement
    'al-node-editor': HTMLAlNodeEditorElement
    'al-node-list': HTMLAlNodeListElement
    'uv-aleph': HTMLUvAlephElement
  }

  interface ElementTagNameMap {
    'al-control-panel': HTMLAlControlPanelElement;
    'al-node-editor': HTMLAlNodeEditorElement;
    'al-node-list': HTMLAlNodeListElement;
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
