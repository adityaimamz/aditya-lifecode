import cv2
import numpy as np
from matplotlib import pyplot as plt

imggambar= cv2.imread("Daftar gambar eksperimen-20231205/ruin1.jpg",-1)

rows,cols = imggambar.shape[:2]
M = cv2.getRotationMatrix2D((cols/2,rows/2),90,1)
imgrotasi = cv2.warpAffine(imggambar,M,(cols,rows))
tampil_hor=np.concatenate((imggambar,imgrotasi),axis=1)
cv2.imshow('concatenated_Verti',tampil_hor)

cv2.waitKey(0)
cv2.destroyAllWindows