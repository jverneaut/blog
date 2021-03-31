@ECHO OFF

:defineColor
CLS
COLOR 0f

ECHO What's your favorite color in this list?
ECHO:
ECHO - Black        - Gray
ECHO - Blue         - Light Blue
ECHO - Green        - Light Green
ECHO - Aqua         - Light Aqua
ECHO - Red          - Light Red
ECHO - Purple       - Light Purple
ECHO - Yellow       - Light Yellow
ECHO - White        - Bright White
ECHO:
SET /P color=^>

IF "%color%"=="" (
  GOTO defineColor
) ELSE (
  IF /I "%color%"=="black" SET colorCode=0f
  IF /I "%color%"=="blue" SET colorCode=1f
  IF /I "%color%"=="green" SET colorCode=2f
  IF /I "%color%"=="aqua" SET colorCode=3f
  IF /I "%color%"=="red" SET colorCode=4f
  IF /I "%color%"=="purple" SET colorCode=5f
  IF /I "%color%"=="yellow" SET colorCode=60
  IF /I "%color%"=="white" SET colorCode=70
  IF /I "%color%"=="gray" SET colorCode=80
  IF /I "%color%"=="light blue" SET colorCode=9f
  IF /I "%color%"=="light green" SET colorCode=a0
  IF /I "%color%"=="light aqua" SET colorCode=b0
  IF /I "%color%"=="light red" SET colorCode=cf
  IF /I "%color%"=="light purple" SET colorCode=d0
  IF /I "%color%"=="light yellow" SET colorCode=e0
  IF /I "%color%"=="bright white" SET colorCode=f0
)

IF "%colorCode%"=="" (
  ECHO I don't know about this color...
) ELSE (
  COLOR %colorCode%
  ECHO Here's a nice %color% for you!
)

ECHO:
ECHO Do you want to try another one? (y/N)
SET /P retry=^>
IF /I "%retry%"=="y" GOTO defineColor
IF /I "%retry%"=="yes" GOTO defineColor

EXIT /B %ERRORLEVEL%
