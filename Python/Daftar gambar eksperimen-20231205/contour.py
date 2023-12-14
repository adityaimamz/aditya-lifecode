import cv2
import matplotlib
import numpy as np
from matplotlib import pyplot as plt

imggambar = cv2.imread("Daftar gambar eksperimen-20231205/a_water_coins.jpg", 0)  # Membaca citra dengan mode grayscale

thresh = 220
img_binary = cv2.threshold(imggambar, thresh, 255, cv2.THRESH_BINARY)[1]
img_binary = ~img_binary

(cnt, hierarchy) = cv2.findContours((img_binary), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
print("JUMLAH OBJEK PADA CITRA : ", len(cnt))
cv2.putText(img_binary,str(len(cnt)),(500,30),cv2.FONT_HERSHEY_SIMPLEX,1,(255,255,0),2)

cv2.imshow('output',img_binary)

cv2.waitKey(0)
cv2.destroyAllWindows



