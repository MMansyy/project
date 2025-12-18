let data = [];


let fetchData = () => {
    let connection = new XMLHttpRequest();
    connection.open("GET", "https://dummyjson.com/products");
    connection.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let { products } = JSON.parse(this.responseText);
            data = products;
            console.log(data);
            
        }
    };
    connection.send();
}


fetchData();