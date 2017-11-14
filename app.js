
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import EmbedVideo from './plugin/embed.js';

ClassicEditor
    .create(document.querySelector( '#editor' ), {
        plugins: [Essentials, Paragraph, Bold, Italic, EmbedVideo],
        toolbar: ['bold', 'italic', 'embedVideo']
    })
    .then(editor => {
        console.log('Editor was initialized', editor);
    })
    .catch(error => {
        console.error(error.stack);
    });