function validasi(){
    document.body.style.backgroundColor = "red";
    var nama        = document.getElementById("nama").value
    var usia        = document.getElementById("usia").value
    var jk          = document.getElementById("jk").value
    var ttl         = document.getElementById("ttl").value
    var bulanLahir  = document.getElementById("bulanLahir").value
    if(nama == "" || usia == "" || jk == "" || bulanLahir == ""){
        alert(" Ada input yang tidak boleh kosong " )
        return false
    }
}