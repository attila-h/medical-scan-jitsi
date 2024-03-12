const domain = 'meet.jit.si';
const options = {
    roomName: 'MedicalScanJitsyRoom',
    width: 700,
    height: 700,
    parentNode: document.querySelector('#jitsi-container'),
    lang: 'hu'
};
const api = new JitsiMeetExternalAPI(domain, options);