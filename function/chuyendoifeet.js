function convert() {
    n1 = document.getElementById("foot").value
    n2 = document.getElementById("meeters").value
    footSangmeeters = 3.279 * n2
    meetersSangfoot = 0.305 * n1
    document.write(n1 + " Foot " + " = " +meetersSangfoot+ " Meeters" + "<br>")
    document.write(n2 + " Meeters" + " = " + footSangmeeters + " Foot")
}