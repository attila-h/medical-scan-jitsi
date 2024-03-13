let api;
const actionContainer = document.querySelector('#jitsi-action-container')
const eventContainer = document.querySelector('#jitsi-event-container')

const initGenerateNameButton = () => {
  const button = document.createElement('button');
  button.innerHTML = 'Random név generátor';
  console.log(api)
  button.onclick = () => api.executeCommand('displayName', Math.random().toString(36).slice(2));
  actionContainer.appendChild(button);
}

const showEventInfo = (info) => {
  let div = document.createElement('div');
  div.innerHTML = info
  eventContainer.appendChild(div)
} 

const initEvents = () => {
  api.addListener('videoConferenceJoined', (event) => {
    console.log(event);
    showEventInfo(`${event.formattedDisplayName} joined to ${event.roomName}`)
  });
  
  api.addListener('audioMuteStatusChanged', (event) => {
    const isMuted = event.muted;
    showEventInfo(`Audio mute status changed to ${isMuted}`)
    console.log(`Audio mute status changed to ${isMuted}`);
  });
}

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

console.info("Init custom jitsi script")
initJitsyIframe();
initGenerateNameButton();
initEvents()

