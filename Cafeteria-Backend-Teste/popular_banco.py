import requests

URL = "http://127.0.0.1:8000/api/products/"

products = [
    {
        "name": "Café Expresso",
        "category": "Bebidas",
        "price": "5.50",
        "stock": 50
    },
    {
        "name": "Cappuccino",
        "category": "Bebidas",
        "price": "8.00",
        "stock": 30
    },
    {
        "name": "Pão de queijo",
        "category": "Salgados",
        "price": "6.00",
        "stock": 40
    },
    {
        "name": "Brownie",
        "category": "Doces",
        "price": "7.50",
        "stock": 25
    },
    {
        "name": "Suco de laranja",
        "category": "Bebidas",
        "price": "9.00",
        "stock": 20
    }
]

for product in products:
    response = requests.post(URL, json=product)

    if response.status_code == 201:
        print(f"Produto cadastrado: {product['name']}")
    else:
        print(f"Erro ao cadastrar {product['name']}")
        print(response.status_code, response.text)

print("\nProcesso finalizado!")