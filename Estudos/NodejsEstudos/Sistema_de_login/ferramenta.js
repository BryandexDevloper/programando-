const net = require('net')
const readline = require('readline')

// Altere este IP para o IP do computador remoto que será controlado
const IP_SERVIDOR = '192.168.1.49' // ⬅️ Substitua esse IP pelo IP real do PC servidor

const client = new net.Socket()
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

client.connect(4000, IP_SERVIDOR, () => {
  console.log(`✅ Conectado ao servidor remoto (${IP_SERVIDOR}:4000)`)

  rl.setPrompt('Comando> ')
  rl.prompt()

  rl.on('line', line => {
    client.write(line)

    client.once('data', data => {
      console.log('🖥️  Resposta:\n' + data.toString())
      rl.prompt()
    })
  })
})

client.on('error', err => {
  console.error('❌ Erro na conexão:', err.message)
})

client.on('close', () => {
  console.log('🔌 Conexão encerrada pelo servidor.')
  process.exit()
})
