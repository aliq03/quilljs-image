var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],

  [{ 'color': [] }],
  [{ 'align': [] }],
  
  ['image', 'video'],// remove formatting button
];
var quill = new Quill('#editor', {
    theme: 'snow',
     modules: {
        imageResize: {},
        toolbar: toolbarOptions
    }
});
