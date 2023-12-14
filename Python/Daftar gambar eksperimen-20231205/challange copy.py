import cv2
import matplotlib
import numpy as np
from matplotlib import pyplot as plt

# membuka citra water coins
imggambar= cv2.imread("Daftar gambar eksperimen-20231205/a_water_coins.jpg",0)

# kita lakukan thresholding dulu supaya citra menjadi biner
thresh = 170
img_binary = cv2.threshold(imggambar, thresh, 255, cv2.THRESH_BINARY)[1]

# pada baris 44 , masukkan variabel img_binary untuk melihat hasilnya,run

# hasil dari binerisasi, objek yang akan dihitung berwarna hitam dan BG berwarna putih
# sedangkan, fungsi contour hanya bisa membaca objek berwarna putih
# maka kta perlu melakukan invers terlebih dahulu
img_binary_inv = ~img_binary
# pada baris 44 , masukkan variabel img_binary_inv untuk melihat hasilnya,run

# gunakan fungsi findContour untuk menghitung banyaknya objek pada citra
(cnt, hierarchy) = cv2.findContours((img_binary_inv), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)

# untuk menampilkan jml objek yang terbaca, gunakan fungsi print pada return cnt
print("JUMLAH OBJEK PADA CITRA : ", len(cnt))

# gunakan putText untuk memberikan labelling pada citra
cv2.putText(img_binary_inv,str(len(cnt)),(100,30),cv2.FONT_HERSHEY_SIMPLEX,1,(255,255,0),2)

# pada baris 44 , masukkan img_binary_inv yang telah dihitung objeknya dan diberi labelling,run

# jml objek yang terbaca adalah 2, pdhl jml koin adalah 24
# kita bisa memahami bahwa objek koin masih saling menempel
# maka kita gunakan fungsi EROSI untuk memisahkan objek yang saling menempel
kernel2 = np.ones((25,25),np.uint8)
imgErode = cv2.erode(img_binary_inv,kernel2,iterations=1)
# pada baris 44 , masukkan imgerode untuk melihat hasilnya,run

# gunakan kembali fungsi contour untuk menghitung banyaknya objek
(cnt, hierarchy) = cv2.findContours((imgErode), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
cv2.putText(imgErode,str(len(cnt)),(100,30),cv2.FONT_HERSHEY_SIMPLEX,1,(255,255,0),2)

# pada baris 44, masukkan imgerode untuk melihat hasilnya,run
cv2.imshow('output',imggambar)

# uncomment dua baris berikut untuk melihat hasil pada citra aslinya
# cv2.putText(imggambar,str(len(cnt)),(100,30),cv2.FONT_HERSHEY_SIMPLEX,1,(0,0,0),2)
# cv2.imshow('output',imggambar)

cv2.waitKey(0)
cv2.destroyAllWindows
