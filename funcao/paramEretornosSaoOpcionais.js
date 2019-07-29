function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        return console.log(`Área acima do perimitido: ${area}m²`)
    }
    
}


console.log(area(12, 2))
