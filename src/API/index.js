import fscreen from 'fscreen';

if (fscreen.fullscreenEnabled) {
    fscreen.addEventListener('fullscreenchange', handler, false);
    fscreen.requestFullscreen(element);
   }
   
   function handler() {
    if (fscreen.fullscreenElement !== null) {
      console.log('Entered fullscreen mode');
    } else {
      console.log('Exited fullscreen mode');
    }
}