let scoops = 5;
while (scoops > 0) {
    document.writeln("Another one!<br>");
    if (scoops >= 5) {
        document.writeln("Eat faster! The ice cream is going to melt.<br>")
    }
    else if (scoops < 3) {
        document.writeln("Ice cream is running low!<br>")
    }
    scoops = scoops - 1;
}
document.writeln("Life without ice cream is not the same<br>")