import EditorProperty from './editor-property';

class HighlightProperty extends EditorProperty {
  constructor({attributes = { 'data-editor-highlight': true}})  {
    super({attributes});
  }
  permittedContent(richNode) {
    const length = richNode.end - richNode.start;
    if (length > 0 && (richNode.domNode.textContent.trim().length > 0))
      return [richNode];
    else
      return [];
  }
}
const highlightProperty = new HighlightProperty({});
export default highlightProperty;
