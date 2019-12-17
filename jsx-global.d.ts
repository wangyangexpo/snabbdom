import {VNode} from './src/vnode';
import {JsxVNodeProps} from './src/jsx';

declare global {
  /**
   * opt-in jsx intrinsic global interfaces
   * see: https://www.typescriptlang.org/docs/handbook/jsx.html#type-checking
   */
  namespace JSX {
    type Element = VNode;
    interface IntrinsicElements {
      [elemName: string]: JsxVNodeProps;
    }
  }
}
