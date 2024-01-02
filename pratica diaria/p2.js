function interp(f, l, u, n) {
    let result = [];
    let d = (u - l) / n;

    for (let i = 0; i < n; i++) {
        let x = l + i * d;
        result.push(Math.floor(f(x) * 100) / 100);
    }

    return result;
}

// Exemplos
console.log(interp(x => x, 0.0, 0.9, 3));  // Saída: [0, 0.3, 0.6]
console.log(interp(x => x, 0.0, 0.9, 4));  // Saída: [0, 0.22, 0.45, 0.67]
console.log(interp(x => x, 0.0, 1.0, 4));  // Saída: [0, 0.25, 0.5, 0.75]
console.log(interp(x => Math.sin(x), 0.0, 0.9, 3));  // Saída: [0, 0.29, 0.56]