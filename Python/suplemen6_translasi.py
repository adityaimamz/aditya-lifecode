import cv2
import numpy as np
from matplotlib import pyplot as plt

imggambar= cv2.imread("Daftar gambar eksperimen-20231205/ruin1.jpg",-1)

height, width = imggambar.shape[:2]

quarter_height, quarter_width = -height/2, width/2
T = np.float32([[1, 0, quarter_width], [0, 1, quarter_height]])
img_translation = cv2.warpAffine(imggambar, T, (width, height))

tampil_hor=np.concatenate((imggambar,img_translation),axis=1)

cv2.imshow('concatenated_Verti',tampil_hor)


cv2.waitKey(0)
cv2.destroyAllWindows