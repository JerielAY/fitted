// // Grab elements, create settings, etc.
// var video = document.getElementById('video');
// const mediaSource = new MediaSource();
// const video = document.createElement('video');
// video.srcObject = mediaSource;
// // Get access to the camera!
// // Props to David Walsh 
// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     // Not adding `{ audio: true }` since we only want video now
//     console.log("The code is running")
//     navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
//         video.srcObject = stream;
//         video.src = window.URL.createObjectURL(stream);
//         video.play();
//     });
// }

// // Legacy code below: getUserMedia 
// else if(navigator.getUserMedia) { // Standard
//     navigator.getUserMedia({ video: true }, function(stream) {
//         video.src = stream;
//         video.play();
//     }, errBack);
// } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
//     navigator.webkitGetUserMedia({ video: true }, function(stream){
//         video.src = window.webkitURL.createObjectURL(stream);
//         video.play();
//     }, errBack);
// } else if(navigator.mozGetUserMedia) { // Mozilla-prefixed
//     navigator.mozGetUserMedia({ video: true }, function(stream){
//         video.srcObject = stream;
//         video.play();
//     }, errBack);
// }
// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');
// var video = document.getElementById('video');

// // Trigger photo take
// document.getElementById("snap").addEventListener("click", function() {
// 	context.drawImage(video, 0, 0, 640, 480);
// });
