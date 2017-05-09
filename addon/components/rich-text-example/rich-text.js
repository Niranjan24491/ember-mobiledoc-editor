import Ember from 'ember';
import layout from './rich-text';

export default Component.extend({
  layout,

  init() {
    this._super(...arguments);
  },

  actions: {
    didCreateEditor(editor) {
      editor.run(postEditor => {
        let tail = editor.post.tailPosition();
        postEditor.insertText(tail, 'some random text');
      });
    }
  }

});
