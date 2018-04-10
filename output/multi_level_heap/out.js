function cbn(frame) {
document.getElementById("cbn_step").innerHTML = frame;
document.getElementById("cbn_graph").innerHTML = '<img src=\'output/multi_level_heap/file' + frame.toString() + '.png\'>';
if(frame == 0) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">const</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;<span style=\"font-style: italic;\">x</span>";
document.getElementById("cbn_term").innerHTML = "(\\<span style=\"font-style: italic;\">x</span>&nbsp;-&gt;&nbsp;<span style=\"color: darkblue;\">const</span>&nbsp;<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">x</span>)&nbsp;((\\<span style=\"font-style: italic;\">x</span>&nbsp;-&gt;&nbsp;<span style=\"color: darkblue;\">const</span>&nbsp;<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">x</span>)&nbsp;(<span style=\"color: darkblue;\">const</span>&nbsp;1&nbsp;1))";
document.getElementById("cbn_status").innerHTML = "next step: beta&nbsp;reduction";
}
if(frame == 1) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">const</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;<span style=\"font-style: italic;\">x</span><br>x_0&nbsp;&nbsp;&nbsp;=&nbsp;(\\<span style=\"font-style: italic;\">x</span>&nbsp;-&gt;&nbsp;<span style=\"color: darkblue;\">const</span>&nbsp;<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">x</span>)&nbsp;(<span style=\"color: darkblue;\">const</span>&nbsp;1&nbsp;1)";
document.getElementById("cbn_term").innerHTML = "<span style=\"color: darkblue;\">const</span>&nbsp;x_0&nbsp;x_0";
document.getElementById("cbn_status").innerHTML = "next step: apply&nbsp;<span style=\"color: darkblue;\">const</span>";
}
if(frame == 2) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">const</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;<span style=\"font-style: italic;\">x</span><br>x_0&nbsp;&nbsp;&nbsp;=&nbsp;(\\<span style=\"font-style: italic;\">x</span>&nbsp;-&gt;&nbsp;<span style=\"color: darkblue;\">const</span>&nbsp;<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">x</span>)&nbsp;(<span style=\"color: darkblue;\">const</span>&nbsp;1&nbsp;1)";
document.getElementById("cbn_term").innerHTML = "(\\<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;x_0)&nbsp;x_0";
document.getElementById("cbn_status").innerHTML = "next step: beta&nbsp;reduction";
}
if(frame == 3) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">const</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;<span style=\"font-style: italic;\">x</span><br>x_0&nbsp;&nbsp;&nbsp;=&nbsp;(\\<span style=\"font-style: italic;\">x</span>&nbsp;-&gt;&nbsp;<span style=\"color: darkblue;\">const</span>&nbsp;<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">x</span>)&nbsp;(<span style=\"color: darkblue;\">const</span>&nbsp;1&nbsp;1)";
document.getElementById("cbn_term").innerHTML = "x_0";
document.getElementById("cbn_status").innerHTML = "next step: beta&nbsp;reduction&nbsp;in&nbsp;[x_0]";
}
if(frame == 4) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">const</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;<span style=\"font-style: italic;\">x</span><br>x_0&nbsp;&nbsp;&nbsp;=&nbsp;<span style=\"color: darkblue;\">const</span>&nbsp;x_1&nbsp;x_1<br>x_1&nbsp;&nbsp;&nbsp;=&nbsp;<span style=\"color: darkblue;\">const</span>&nbsp;1&nbsp;1";
document.getElementById("cbn_term").innerHTML = "x_0";
document.getElementById("cbn_status").innerHTML = "next step: apply&nbsp;<span style=\"color: darkblue;\">const</span>&nbsp;in&nbsp;[x_0]";
}
if(frame == 5) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">const</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;<span style=\"font-style: italic;\">x</span><br>x_0&nbsp;&nbsp;&nbsp;=&nbsp;(\\<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;x_1)&nbsp;x_1<br>x_1&nbsp;&nbsp;&nbsp;=&nbsp;<span style=\"color: darkblue;\">const</span>&nbsp;1&nbsp;1";
document.getElementById("cbn_term").innerHTML = "x_0";
document.getElementById("cbn_status").innerHTML = "next step: beta&nbsp;reduction&nbsp;in&nbsp;[x_0]";
}
if(frame == 6) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">const</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;<span style=\"font-style: italic;\">x</span><br>x_0&nbsp;&nbsp;&nbsp;=&nbsp;x_1<br>x_1&nbsp;&nbsp;&nbsp;=&nbsp;<span style=\"color: darkblue;\">const</span>&nbsp;1&nbsp;1";
document.getElementById("cbn_term").innerHTML = "x_0";
document.getElementById("cbn_status").innerHTML = "next step: apply&nbsp;<span style=\"color: darkblue;\">const</span>&nbsp;in&nbsp;[x_0,&nbsp;x_1]";
}
if(frame == 7) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">const</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;<span style=\"font-style: italic;\">x</span><br>x_0&nbsp;&nbsp;&nbsp;=&nbsp;x_1<br>x_1&nbsp;&nbsp;&nbsp;=&nbsp;(\\<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;1)&nbsp;1";
document.getElementById("cbn_term").innerHTML = "x_0";
document.getElementById("cbn_status").innerHTML = "next step: beta&nbsp;reduction&nbsp;in&nbsp;[x_0,&nbsp;x_1]";
}
if(frame == 8) {
document.getElementById("cbn_heap").innerHTML = "<span style=\"color: darkblue;\">const</span>&nbsp;=&nbsp;\\<span style=\"font-style: italic;\">x</span>&nbsp;<span style=\"font-style: italic;\">y</span>&nbsp;-&gt;&nbsp;<span style=\"font-style: italic;\">x</span><br>x_0&nbsp;&nbsp;&nbsp;=&nbsp;x_1<br>x_1&nbsp;&nbsp;&nbsp;=&nbsp;1";
document.getElementById("cbn_term").innerHTML = "x_0";
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
