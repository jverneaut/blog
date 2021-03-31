@echo off
:debut
cls
set /p lol=Quel est ta couleur prefere ?
if "%lol%"=="noir" goto noir
if "%lol%"=="bleu" goto bleu
if "%lol%"=="vert" goto vert
if "%lol%"=="marron" goto marron
if "%lol%"=="pourpre" goto pourpre
if "%lol%"=="kaki" goto kaki
if "%lol%"=="gris" goto gris
if "%lol%"=="rouge" goto rouge
if "%lol%"=="rose" goto rose
if "%lol%"=="jaune" goto jaune
if "%lol%"=="blanc" goto blanc
:noir
color 0f
pause




goto fin
:bleu
set /p choi=Quel bleu ?(fonce,gris,clair ou cyan)
if "%choi%"=="fonce" goto fonce
if "%choi%"=="gris" goto gris2
if "%choi%"=="clair" goto clair
if "%choi%"=="cyan" goto cyan
:vert
set /p lki=Quel vert ?(vert ou clair)
if "%lki%"=="vert" goto vertvert
if "%lki%"=="clair" goto clair2
:marron
color 40
pause
goto fin
:pourpre
color 50
pause
goto fin
:kaki
color 60
pause
goto fin
:gris
set /p lkj=Quel gris ?(gris ou gris clair)
if "%lkj%"=="gris" goto gris3
if "%lkj%"=="clair" goto clair3
:rouge
color c0
pause
goto fin
:rose
color d0
pause
goto fin
:jaune
color e0
pause
goto fin
:blanc
color f0
pause
goto fin
:fonce
color 10
pause
goto fin
:gris2
color 30
pause
goto fin
:clair
color 90
pause
goto fin
:cyan
color b0
pause
goto fin
:vertvert
color 20
pause
goto fin
:clair2
color a0
pause
goto fin
:gris3
color 80
pause
goto fin
:clair3
color 70
pause
goto fin
:fin
cls
echo FIN !!!
pause
set /p encore=Une autre couleur ?(oui ou non)
if "%encore%"=="oui" goto debut
if "%encore%"=="non" goto dommage
:dommage
echo Dommage ! Une prochaine fois peut etre ...
pause
