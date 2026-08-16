# IKPBKiosk

Hello! This is IKPB Kiosk, A Library Kiosk that helps organize books!
<br />
**Note: No PCB in this design because everything automatically conncts without a PCB. Also Don't mind my wiring diagram. That was the best option I had at the time.**

## Why make this?
I have a ton of books at home, and I sometimes let people borrow them. However, sometimes I can't keep track of them, so I design and coded this so that I could keep track of them.

## CAD
<img width="844" height="622" alt="image" src="https://github.com/user-attachments/assets/c1b460c6-00c2-47b8-9a01-8e7ddf847bb9" />


Above is an image of my Casing on OnShape. If you want to inspect it closer, here is the link: https://cad.onshape.com/documents/945515c52102aeb44ca044f3/w/60ae706217bce83493eeb8b0/e/bd5497d9748fe9aab4e35a52?renderMode=0&uiState=6a71707db21ca79e95e4c34d

## Firmware
Now on to the bigger part. My firmware has many features. If you have looked at the BOM, you might notice that I am using a Raspberry Pi 5. Why is this relevant? It's relevant because my firmware is going to run on that without publishing my firmware as a website. It is going to auto-run itself. When I need to access admin, I can just hope on over to Visual Studio Code and just open my dev server there.

## Firmware Features
- Barcode scan and verification
- Student and Book Scan
- Admin Page accessed via a shortcut (SECRET!)
- List of books via admin
- list of books for each status via admin
- list of users via admin
- create user via admin
