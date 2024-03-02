
window.addEventListener('load', function(){
    var newVideo = document.getElementById('background');
    var CTA = this.document.getElementsByClassName('access')
    
    //newVideo.play();

});
function access(){
    var newVideo = document.getElementById('background');
    var newAudio = document.getElementById('audioSound');
    newVideo.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    newVideo.play();
    newAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    newAudio.play();
    new snowflakeCursor({ element: document.querySelector("#snowflake") });
    var CTA = this.document.getElementById("access");
    CTA.remove();
}