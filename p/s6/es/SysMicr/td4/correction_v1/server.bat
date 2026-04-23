@echo off

FOR /F "tokens=*" %%i in ('ipconfig ^| find "IPv4"') do SET result=%%i
echo ip address
echo %result:IPv4 Address. . . . . . . . . . . : =%

python -m http.server --directory "%cd%"

pause