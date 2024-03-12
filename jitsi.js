let api;
const actionContainer = document.querySelector('#jitsi-action-container')
const eventContainer = document.querySelector('#jitsi-event-container')

const initJitsyIframe = () => {
  const domain = 'meet.jit.si';
  const options = {
      roomName: 'MedicalScanJitsyRoom',
      width: '100%',
      height: '100%',
      parentNode: document.querySelector('#jitsi-container'),
      lang: 'hu',
  };
  
  api = new JitsiMeetExternalAPI(domain, options);
}

initJitsyIframe();
