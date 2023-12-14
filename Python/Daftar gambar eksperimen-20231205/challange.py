import cv2  # Mengimport library OpenCV
import matplotlib  # Mengimport library matplotlib
import numpy as np  # Mengimport library numpy
from matplotlib import pyplot as plt  # Mengimport pyplot dari matplotlib

imggambar = cv2.imread("Daftar gambar eksperimen-20231205/a_water_coins.jpg", 0)  # Membaca citra dengan mode grayscale

thresh = 220  # Menentukan nilai threshold
img_binary = cv2.threshold(imggambar, thresh, 255, cv2.THRESH_BINARY)[1]  # Melakukan thresholding pada citra

contours, _ = cv2.findContours(img_binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)  # Mencari kontur pada citra
jumlah_objek = len(contours)  # Menghitung jumlah objek yang terdeteksi
print(f'Jumlah objek yang terdeteksi: {jumlah_objek}')  # Menampilkan jumlah objek yang terdeteksi

img_binary = ~img_binary  # invers citra biner

# cv2.drawContours(img_binary, contours, -1, (255, 255, 255), 2)  # Menggambar kontur pada citra dengan warna putih
cv2.putText(img_binary, f'Jumlah objek: {jumlah_objek}', (10, img_binary.shape[0] - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1)  # Menambahkan label jumlah objek dengan ukuran yang lebih kecil
cv2.putText(img_binary, 'Nama: Aditya Imam Zuhdi', (10, img_binary.shape[0] - 30), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1)  # Menambahkan label Nama dan Nim
cv2.putText(img_binary, 'Nim: 20102217', (10, img_binary.shape[0] - 50), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 0, 0), 1)  # Menambahkan label Nama dan Nim

cv2.imshow('output', img_binary)  # Menampilkan citra dengan kontur
cv2.waitKey(0)  # Menunggu input dari pengguna
cv2.destroyAllWindows()  # Menutup semua jendela