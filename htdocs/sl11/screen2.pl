#!/usr/bin/perl
use Time::HiRes qw/usleep/;

sub cls{
	for(1..25){print "\n";}
	sleep 1;
}

cls;

sleep 1;
print "\n" x 5;
sleep 1;

for(<DATA>){
	      print ' ' x 20, $_;
	      usleep 900000;
}

sleep 10;

cls;

exit

__END__
Sound Leaves 11

Media Art Loop-Line
http://loop-line.jp

2011.3.13

19:00 Open
19:30 Start

part one
KORG MS-system, Waldorf, EMX-1

part two
with assorted MIDI syncs

part three
with voices, guitars, oscillators
samplers, looper, 12bit delay and laptop

part four
SFH tunes improvised

with improvised videos
Quartz Composer, video stuffs
