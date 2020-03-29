---
path: "/blog/force-rgb-on-monitor-with-macbook"
date: "6 March 2020"
title: "Force RGB mode on monitor with macbook."
author: "Kevin Laminto"
author_email: "kevin.laminto@gmail.com"
tags: ["utility", "photography"]
id: "0"
---

The problem arise when I just got a new monitor for my macbook.
As a photographer, I wanted my second monitor display to have 100% colour profile to match with my macbook's.

Since my Macbook's colour profile is RGB, it make sense to change my monitor to also follows the same profile. But, what i did not know is, it would turn its screen to magenta for some reason.

Hence this is what i do, to fix the solution. And, to also match the colour profile.

1. Download [this](https://gist.github.com/adaugherity/7435890 "patch") file and save it to your desktop.
2. Open terminal, type ``` ruby ``` and drag the file to your terminal, and press enter.
this will create a vendor file, in your root folder. Now before you do anything, make sure to **disable** SIP. You can enable it again once the procedure is completed. Link to do so, will be found [here](https://www.macworld.co.uk/how-to/mac/how-turn-off-mac-os-x-system-integrity-protection-rootless-3638975/).
3. Once it is disabled, head to this directory ``` SSD/System/Library/Displays/Contents/Resources/Overrides ``` and paste it there.
4. Reboot your system, and it should be fixed now!

Should there be any questions, feel free to email me (: