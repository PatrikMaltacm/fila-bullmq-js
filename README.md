# Mensageria API

Este é um projeto limpo em Node.js com TypeScript, Express e BullMQ, pronto para uso.

## Requisitos

- Node.js
- Redis (O BullMQ requer o Redis rodando para gerenciar as filas). Por padrão, o Redis deve rodar em `127.0.0.1:6379`.

## Instalação

As dependências já foram instaladas na geração deste projeto.
Caso precise reinstalar:
```bash
npm install
```

## Como Executar

O projeto possui dois processos principais: a API (Express) e o Worker (BullMQ). Você pode rodá-los em terminais separados durante o desenvolvimento:

1. **Iniciar a API (Express)**
   ```bash
   npm run dev
   ```
   A API rodará em `http://localhost:3000`.

2. **Iniciar o Worker (BullMQ)**
   ```bash
   npm run worker
   ```
   O worker escutará os jobs da fila `MessagesQueue`.

## Testando

Você pode testar a criação de mensagens chamando a rota da API.

Exemplo de requisição:
```bash
curl -X POST http://localhost:3000/send-message \
     -H "Content-Type: application/json" \
     -d '{"message": "Olá, BullMQ!"}'
```

O log da API mostrará que a mensagem foi recebida, e o terminal do Worker exibirá o processamento do Job.

## Build para Produção

Para compilar o código TypeScript em JavaScript:
```bash
npm run build
```

E para iniciar a versão compilada (produção):
```bash
npm start
```
