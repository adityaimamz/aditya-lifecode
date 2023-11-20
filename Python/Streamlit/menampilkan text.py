import streamlit as st  # Import library streamlit
 
st.write("Hello, *World!* :sunglasses:")  # Menampilkan tulisan "Hello, *World!* :sunglasses:" dengan menggunakan fungsi write()

st.header('This is header')  # Menampilkan header "This is header" dengan menggunakan fungsi header()

st.subheader('This is subheader')  # Menampilkan subheader "This is subheader" dengan menggunakan fungsi subheader()

st.text('This is text')  # Menampilkan teks "This is text" dengan menggunakan fungsi text()

st.markdown(""" # h1 tag
## h2 tag
### h3 tag
:moon:
**bold text**
_italic text_
 """)  # Menampilkan markdown dengan beberapa tag dan emoji dengan menggunakan fungsi markdown()

st.latex(r''' a + ar + a r^2 + a r^3 + \cdots + a r^{n-1} = \sum_{k=0}^{n-1} ar^k ''')  # Menampilkan latex dengan menggunakan fungsi latex()

st.write(st)  # Menampilkan objek st dengan menggunakan fungsi write()

d = {
    "name" : "edelyn",
    "languange" : "chinchong",
    "topic": "streamlit",
}  # Membuat dictionary d

st.write(d)  # Menampilkan dictionary d dengan menggunakan fungsi write()
