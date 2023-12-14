import cv2

# Baca citra
image = cv2.imread('Daftar gambar eksperimen-20231205/a_water_coins.jpg')

# Ubah citra ke grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Thresholding
_, thresh = cv2.threshold(gray, 180, 255, cv2.THRESH_BINARY)  # Mengubah nilai threshold ke 180

# Temukan kontur
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Gambar kontur pada citra
cv2.drawContours(image, contours, -1, (0, 255, 0), 2)

# Tampilkan citra dengan kontur
cv2.imshow('Contours', image)
cv2.waitKey(0)
cv2.destroyAllWindows()

# Hitung jumlah kontur
jumlah_objek = len(contours)
print(f'Jumlah objek yang terdeteksi: {jumlah_objek}')
if jumlah_objek < 23:
    print('Eksperimen belum berhasil, coba lagi')
elif jumlah_objek == 23 or jumlah_objek == 24:
    print('Eksperimen berhasil, jumlah objek terdeteksi sesuai dengan yang diinginkan')
else:
    print('Eksperimen berlebih, coba kurangi noise atau atur thresholding')