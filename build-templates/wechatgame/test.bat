echo "��ʼ����..."

for /R %%i in (*.png) do (
  pngquant -f --ext .png --quality 50-50 "%%i"
)

pause