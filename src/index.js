let pronoun = ['The', 'Our', 'His', 'They'];
let adj = ['grand', 'noisy', 'racoon', 'amazing', 'coolest'];
let noun = ['shoe', 'cat', 'door', 'backpac', 'Wall', 'window'];
let net = ['.com', '.es','.net', '.io'];

for(let i = 0; i < pronoun.length; i++) {
    for(let j = 0; j < adj.length; j++) {
        for(let k = 0; k < noun.length; k++) {
            for(let l = 0; l < net.length; l++) {
                console.log(pronoun[i] + adj[j] + noun[k] + net[l]);
            }
        }
    }
}