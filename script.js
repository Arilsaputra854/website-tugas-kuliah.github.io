

var array = [];
array = JSON.parse(localStorage.getItem("dataarray"));
console.log("array: " + array);
function operasiarray() {
    var input = document.getElementById("arrayInput").value;
    if (input == "") {
        return
    }
    if (array == null) {
        array = [];
    }


    array.push(input);
    console.log("data input:" + input);


    var removedDuplicatedValue = [...new Set(array)];
    console.log(removedDuplicatedValue);

    document.getElementById("arrayInput").value = ""
    document.getElementById("hasil").innerText = "Hasil: " + removedDuplicatedValue;

    localStorage.setItem("dataarray", JSON.stringify(removedDuplicatedValue));
}

function binarySearch() {
    if (array != null) {
        array = JSON.parse(localStorage.getItem("dataarray"));
        var inputCari = document.getElementById("inputCari").value;

        let low = 0;
        let high = array.length - 1;

        //Mengurutkan Data
        array.sort((a, b) => a - b)

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let guess = array[mid];

            if (guess === inputCari) {
                console.log(mid);
                console.log(array);
                document.getElementById("array").innerText = array;
                document.getElementById("hasil").innerText = "Ditemukan, indeks berada di:" + mid;
                return
            } else if (guess < inputCari) {
                low = mid + 1; // Pencarian dilanjutkan di setengah kanan
            } else {
                high = mid - 1; // Pencarian dilanjutkan di setengah kiri
            }

        }
        return document.getElementById("hasil").innerText = "Data tidak ketemu."
    } else {

        return document.getElementById("hasil").innerText = "array Kosong."
    }

}

function hapusArray() {
    document.getElementById("hasil").innerText = "Hasil:";
    return array = localStorage.removeItem("dataarray");
}

function selectionSort() {
    array = JSON.parse(localStorage.getItem("dataarray"));
    var arraySorted = [];
    if (array != null) {
        var len = array.length;

        for (var i = 0; i < len - 1; i++) {
            var minIndex = i;

            // Temukan indeks nilai terkecil di sisa array
            for (var j = i + 1; j < len; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }

            // Tukar nilai terkecil dengan elemen pertama atau elemen saat ini
            var temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;



        }

        arraySorted = array.slice();
        document.getElementById("before").innerText = "sebelum:" +
            JSON.parse(localStorage.getItem("dataarray"));
        document.getElementById("after").innerText = "setelah:" + arraySorted;

    }
}
function mergeSort(array) {

    array = JSON.parse(localStorage.getItem("dataarray"));
    var sorted = array.slice(),
        n = sorted.length,
        buffer = new Array(n);

    for (var size = 1; size < n; size *= 2) {
        for (var leftStart = 0; leftStart < n; leftStart += 2 * size) {
            var left = leftStart,
                right = Math.min(left + size, n),
                leftLimit = right,
                rightLimit = Math.min(right + size, n),
                i = left;
            while (left < leftLimit && right < rightLimit) {
                if (sorted[left] <= sorted[right]) {
                    buffer[i++] = sorted[left++];
                } else {
                    buffer[i++] = sorted[right++];
                }
            }
            while (left < leftLimit) {
                buffer[i++] = sorted[left++];
            }
            while (right < rightLimit) {
                buffer[i++] = sorted[right++];
            }
        }
        var temp = sorted,
            sorted = buffer,
            buffer = temp;
    }

    document.getElementById("before").innerText = "sebelum:" +
        JSON.parse(localStorage.getItem("dataarray"));
    document.getElementById("after").innerText = "setelah:" + sorted;
    return;
}

function tambah(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if(num1 != null && num1 != "" && num2 != null && num2 != ""){
        document.getElementById("output").innerText = "Hasil:"+(num1+num2);    }
}


function kurang(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if(num1 != null && num1 != "" && num2 != null && num2 != ""){
        document.getElementById("output").innerText = "Hasil:"+(num1-num2);    }
}

function kali(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if(num1 != null && num1 != "" && num2 != null && num2 != ""){
        document.getElementById("output").innerText = "Hasil:"+(num1*num2);    }
}

function bagi(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if(num1 != null && num1 != "" && num2 != null && num2 != ""){
        document.getElementById("output").innerText = "Hasil:"+(num1/num2);    }
}

function hitungLuas(){
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    if(num1 != null && num1 != "" && num2 != null && num2 != ""){
        document.getElementById("output").innerText = "Hasil:"+(num1*num2);    }
}