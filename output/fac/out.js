function cbn(frame) {
document.getElementById("cbn_step").innerHTML = frame;
document.getElementById("cbn_graph").innerHTML = '<img src=\'output/fac/file' + frame.toString() + '.png\'>';
if(frame == 0) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">fac</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">n</span>&nbsp;-&gt;&nbsp;<span style=\"font-weight: bold;\">if</span>&nbsp;<span style=\"font-style: italic;\">n</span>&nbsp;&lt;=&nbsp;1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"font-weight: bold;\">then</span>&nbsp;1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"font-weight: bold;\">else</span>&nbsp;<span style=\"color: darkblue;\">fac</span>&nbsp;(<span style=\"font-style: italic;\">n</span>&nbsp;-&nbsp;1)&nbsp;*&nbsp;<span style=\"font-style: italic;\">n</span>";
document.getElementById("cbn_term").innerHTML = "<span style=\"color: darkblue;\">fac</span>&nbsp;1";
document.getElementById("cbn_status").innerHTML = "next step: apply&nbsp;<span style=\"color: darkblue;\">fac</span>";
}
if(frame == 1) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">fac</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">n</span>&nbsp;-&gt;&nbsp;<span style=\"font-weight: bold;\">if</span>&nbsp;<span style=\"font-style: italic;\">n</span>&nbsp;&lt;=&nbsp;1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"font-weight: bold;\">then</span>&nbsp;1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"font-weight: bold;\">else</span>&nbsp;<span style=\"color: darkblue;\">fac</span>&nbsp;(<span style=\"font-style: italic;\">n</span>&nbsp;-&nbsp;1)&nbsp;*&nbsp;<span style=\"font-style: italic;\">n</span>";
document.getElementById("cbn_term").innerHTML = "<span style=\"font-weight: bold;\">if</span>&nbsp;1&nbsp;&lt;=&nbsp;1<br>&nbsp;&nbsp;<span style=\"font-weight: bold;\">then</span>&nbsp;1<br>&nbsp;&nbsp;<span style=\"font-weight: bold;\">else</span>&nbsp;<span style=\"color: darkblue;\">fac</span>&nbsp;(1&nbsp;-&nbsp;1)&nbsp;*&nbsp;1";
document.getElementById("cbn_status").innerHTML = "next step: delta:&nbsp;1&nbsp;&lt;=&nbsp;1";
}
if(frame == 2) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">fac</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">n</span>&nbsp;-&gt;&nbsp;<span style=\"font-weight: bold;\">if</span>&nbsp;<span style=\"font-style: italic;\">n</span>&nbsp;&lt;=&nbsp;1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"font-weight: bold;\">then</span>&nbsp;1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"font-weight: bold;\">else</span>&nbsp;<span style=\"color: darkblue;\">fac</span>&nbsp;(<span style=\"font-style: italic;\">n</span>&nbsp;-&nbsp;1)&nbsp;*&nbsp;<span style=\"font-style: italic;\">n</span>";
document.getElementById("cbn_term").innerHTML = "<span style=\"font-weight: bold;\">if</span>&nbsp;<span style=\"color: darkred;\">True</span><br>&nbsp;&nbsp;<span style=\"font-weight: bold;\">then</span>&nbsp;1<br>&nbsp;&nbsp;<span style=\"font-weight: bold;\">else</span>&nbsp;<span style=\"color: darkblue;\">fac</span>&nbsp;(1&nbsp;-&nbsp;1)&nbsp;*&nbsp;1";
document.getElementById("cbn_status").innerHTML = "next step: if&nbsp;True";
}
if(frame == 3) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">fac</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">n</span>&nbsp;-&gt;&nbsp;<span style=\"font-weight: bold;\">if</span>&nbsp;<span style=\"font-style: italic;\">n</span>&nbsp;&lt;=&nbsp;1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"font-weight: bold;\">then</span>&nbsp;1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"font-weight: bold;\">else</span>&nbsp;<span style=\"color: darkblue;\">fac</span>&nbsp;(<span style=\"font-style: italic;\">n</span>&nbsp;-&nbsp;1)&nbsp;*&nbsp;<span style=\"font-style: italic;\">n</span>";
document.getElementById("cbn_term").innerHTML = "1";
document.getElementById("cbn_status").innerHTML = "whnf";
}
}
var cbn_frame = 0;
function cbnNext() {
cbn(++cbn_frame);
}
function cbnPrev() {
cbn(--cbn_frame);
}
cbn(cbn_frame);
