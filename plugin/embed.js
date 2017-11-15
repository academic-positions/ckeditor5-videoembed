import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import videoIcon from './../assets/video-camera.svg';
import ModelElement from '@ckeditor/ckeditor5-engine/src/model/element';

class EmbedVideo extends Plugin {

    init() {

        const editor = this.editor;
        
        editor.ui.componentFactory.add('embedVideo', locale => {
            
            const view = new ButtonView(locale);
            
            view.set({
                label: 'Insert video',
                icon: videoIcon,
                tooltip: true
            });
            
            view.on('execute', () => {

                const videoUrl = prompt('Video URL');
                const youtubeRegex = new RegExp('youtube.com');

                if (youtubeRegex.test(videoUrl)) {

                    const youtubeCode = videoUrl.slice(videoUrl.indexOf('?v=') + 3);

                    if (youtubeCode) {

                        console.log('Attempting to embed video with ID: ' + youtubeCode);

                        editor.document.enqueueChanges(() => {

                            console.log('enqueueChanges method invoked...');
                            
                            const iframeElement = new ModelElement('iframe', {
                                width: 560,
                                height: 315,
                                src: 'https://www.youtube.com/embed/' + youtubeCode
                            });

                            editor.data.insertContent(iframeElement, editor.document.selection);
                        });
                    }
                }
            });

            return view;
        });
    }
}

export default EmbedVideo;