import streamlit as st  # Import library streamlit

st.title("WIDGETS")  # Menampilkan judul "WIDGETS"

if st.button("Klik tombol ini"):  # Jika tombol "Klik tombol ini" ditekan
    st.write("Selamat Ulang Tahun")  # Menampilkan teks "Selamat Ulang Tahun"

name = st.text_input("Name")  # Membuat input teks dengan label "Name" dan menyimpan hasilnya dalam variabel name
st.write(name)  # Menampilkan nilai dari variabel name

address = st.text_area("Enter your address")  # Membuat input teks dengan label "Enter your address" dan menyimpan hasilnya dalam variabel address
st.write(address)  # Menampilkan nilai dari variabel address

st.date_input("enter a date")  # Membuat input tanggal dengan label "enter a date"

st.time_input("enter a time")  # Membuat input waktu dengan label "enter a time"

if st.checkbox("you accept the T&C", value=True):  # Jika checkbox "you accept the T&C" dicentang
    st.write("Thank you")  # Menampilkan teks "Thank you"

v1 = st.radio("Colours", ["r", "g", "b"], index=1)  # Membuat radio button dengan label "Colours" dan opsi ["r", "g", "b"], dan menyimpan hasilnya dalam variabel v1
v2 = st.selectbox("Colours", ["r", "g", "b"], index=0)  # Membuat dropdown dengan label "Colours" dan opsi ["r", "g", "b"], dan menyimpan hasilnya dalam variabel v2

st.write(v1, v2)  # Menampilkan nilai dari variabel v1 dan v2

v3 = st.multiselect("Colours", ["r", "g", "b"])  # Membuat multiselect dengan label "Colours" dan opsi ["r", "g", "b"], dan menyimpan hasilnya dalam variabel v3
st.write(v3)  # Menampilkan nilai dari variabel v3

st.slider("age", min_value=18, max_value=60, value=30, step=2)  # Membuat slider dengan label "age", nilai minimum 18, nilai maksimum 60, nilai awal 30, dan langkah 2

st.number_input("numbers", min_value=18, max_value=60, value=30, step=2)  # Membuat input angka dengan label "numbers", nilai minimum 18, nilai maksimum 60, nilai awal 30, dan langkah 2

img = st.file_uploader("Upload a file")  # Membuat file uploader dengan label "Upload a file" dan menyimpan hasilnya dalam variabel img
st.image(img)  # Menampilkan gambar dari variabel img
