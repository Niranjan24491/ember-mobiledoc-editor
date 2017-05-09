import Ember from 'ember';

export default Ember.Controller.extend({
  changeCount: 0,

  actions: {
    onChange() {
      this.incrementProperty('changeCount');
    },

    didCreateEditor(editor) {
      debugger;
      editor.run(postEditor => {
        let tail = editor.post.tailPosition();
        postEditor.editor.insertText(tail, 'some random text');
      });
    }

  }
});
